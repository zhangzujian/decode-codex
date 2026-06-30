// Restored from ref/webview/assets/graphlib-DGNlaJmK.js
// Also matches current ref assets graphlib-BnZ9Pn5Q.js, graphlib-C7jSnfgR.js, and graphlib-CqExjonE.js.
// Vendored Graphlib runtime restored from the Codex webview bundle.

type GraphOptions = {
  directed?: boolean;
  multigraph?: boolean;
  compound?: boolean;
};

type NodeId = string | number;
type NodeLabel = unknown;
type EdgeLabel = unknown;
type EdgeName = string | undefined;
type DefaultNodeLabelFn = (nodeId: NodeId) => NodeLabel;
type DefaultEdgeLabelFn = (
  sourceId: string,
  targetId: string,
  edgeName?: string,
) => EdgeLabel;

export type GraphlibEdge = {
  v: string;
  w: string;
  name?: string;
};

type CountByNode = Record<string, number>;
type NodeLabels = Record<string, NodeLabel>;
type ChildrenByParent = Record<string, Record<string, true>>;
type EdgeObjects = Record<string, GraphlibEdge>;
type EdgeLabels = Record<string, EdgeLabel>;
type IncidenceByNode = Record<string, EdgeObjects>;

const ROOT_NODE = "\0";
const DEFAULT_EDGE_NAME = "\0";
const EDGE_KEY_DELIMITER = "\x01";

const hasOwn = Object.prototype.hasOwnProperty;

function hasOwnKey(record: object, key: PropertyKey): boolean {
  return hasOwn.call(record, key);
}

function isNil(value: unknown): value is null | undefined {
  return value == null;
}

function isFunction(value: unknown): value is (...args: never[]) => unknown {
  return typeof value === "function";
}

function constant<T>(value: T): () => T {
  return () => value;
}

function objectKeys(record: object): string[] {
  return Object.keys(record);
}

function objectValues<T>(record: Record<string, T>): T[] {
  return Object.keys(record).map((key) => record[key]);
}

function isEmptyObject(record: object): boolean {
  return Object.keys(record).length === 0;
}

function forEachCollection<T>(
  collection: readonly T[] | Record<string, T>,
  iteratee: (value: T, key: string | number) => void,
): void {
  if (Array.isArray(collection)) {
    collection.forEach((value, index) => iteratee(value, index));
    return;
  }

  Object.keys(collection).forEach((key) => iteratee(collection[key], key));
}

function unionNodes(
  firstNodes: readonly string[],
  secondNodes: readonly string[] | undefined,
): string[] {
  const seenNodes = new Set<string>();
  const result: string[] = [];

  for (const nodeId of firstNodes) {
    if (!seenNodes.has(nodeId)) {
      seenNodes.add(nodeId);
      result.push(nodeId);
    }
  }

  for (const nodeId of secondNodes ?? []) {
    if (!seenNodes.has(nodeId)) {
      seenNodes.add(nodeId);
      result.push(nodeId);
    }
  }

  return result;
}

function incrementCount(counts: CountByNode, nodeId: string): void {
  counts[nodeId] ? counts[nodeId]++ : (counts[nodeId] = 1);
}

function decrementCount(counts: CountByNode, nodeId: string): void {
  --counts[nodeId] || delete counts[nodeId];
}

function edgeArgsToKey(
  isDirected: boolean,
  sourceId: NodeId,
  targetId: NodeId,
  edgeName: EdgeName,
): string {
  let normalizedSource = String(sourceId);
  let normalizedTarget = String(targetId);

  if (!isDirected && normalizedSource > normalizedTarget) {
    const previousSource = normalizedSource;
    normalizedSource = normalizedTarget;
    normalizedTarget = previousSource;
  }

  return (
    normalizedSource +
    EDGE_KEY_DELIMITER +
    normalizedTarget +
    EDGE_KEY_DELIMITER +
    (isNil(edgeName) ? DEFAULT_EDGE_NAME : edgeName)
  );
}

function edgeArgsToObject(
  isDirected: boolean,
  sourceId: NodeId,
  targetId: NodeId,
  edgeName: EdgeName,
): GraphlibEdge {
  let normalizedSource = String(sourceId);
  let normalizedTarget = String(targetId);

  if (!isDirected && normalizedSource > normalizedTarget) {
    const previousSource = normalizedSource;
    normalizedSource = normalizedTarget;
    normalizedTarget = previousSource;
  }

  const edgeObject: GraphlibEdge = {
    v: normalizedSource,
    w: normalizedTarget,
  };

  if (edgeName) {
    edgeObject.name = edgeName;
  }

  return edgeObject;
}

function edgeObjectToKey(
  isDirected: boolean,
  edgeObject: GraphlibEdge,
): string {
  return edgeArgsToKey(isDirected, edgeObject.v, edgeObject.w, edgeObject.name);
}

export class Graphlib {
  private _isDirected: boolean;
  private _isMultigraph: boolean;
  private _isCompound: boolean;
  private _label: unknown;
  private _defaultNodeLabelFn: DefaultNodeLabelFn;
  private _defaultEdgeLabelFn: DefaultEdgeLabelFn;
  private _nodes: NodeLabels;
  private _parent: Record<string, string>;
  private _children: ChildrenByParent;
  private _in: IncidenceByNode;
  private _preds: Record<string, CountByNode>;
  private _out: IncidenceByNode;
  private _sucs: Record<string, CountByNode>;
  private _edgeObjs: EdgeObjects;
  private _edgeLabels: EdgeLabels;
  private _nodeCount: number;
  private _edgeCount: number;

  constructor(options: GraphOptions = {}) {
    this._isDirected = hasOwnKey(options, "directed")
      ? Boolean(options.directed)
      : true;
    this._isMultigraph = hasOwnKey(options, "multigraph")
      ? Boolean(options.multigraph)
      : false;
    this._isCompound = hasOwnKey(options, "compound")
      ? Boolean(options.compound)
      : false;
    this._label = undefined;
    this._defaultNodeLabelFn = constant(undefined);
    this._defaultEdgeLabelFn = constant(undefined);
    this._nodes = {};
    this._parent = {};
    this._children = {};
    this._in = {};
    this._preds = {};
    this._out = {};
    this._sucs = {};
    this._edgeObjs = {};
    this._edgeLabels = {};
    this._nodeCount = 0;
    this._edgeCount = 0;

    if (this._isCompound) {
      this._children[ROOT_NODE] = {};
    }
  }

  isDirected(): boolean {
    return this._isDirected;
  }

  isMultigraph(): boolean {
    return this._isMultigraph;
  }

  isCompound(): boolean {
    return this._isCompound;
  }

  setGraph(label: unknown): this {
    this._label = label;
    return this;
  }

  graph(): unknown {
    return this._label;
  }

  setDefaultNodeLabel(labelOrFactory: NodeLabel | DefaultNodeLabelFn): this {
    this._defaultNodeLabelFn = isFunction(labelOrFactory)
      ? (labelOrFactory as DefaultNodeLabelFn)
      : constant(labelOrFactory);
    return this;
  }

  nodeCount(): number {
    return this._nodeCount;
  }

  nodes(): string[] {
    return objectKeys(this._nodes);
  }

  sources(): string[] {
    return this.nodes().filter((nodeId) => isEmptyObject(this._in[nodeId]));
  }

  sinks(): string[] {
    return this.nodes().filter((nodeId) => isEmptyObject(this._out[nodeId]));
  }

  setNodes(
    nodes: readonly NodeId[] | Record<string, NodeId>,
    label?: NodeLabel,
  ): this {
    const hasLabel = arguments.length > 1;

    forEachCollection(nodes, (nodeId) => {
      if (hasLabel) {
        this.setNode(nodeId, label);
      } else {
        this.setNode(nodeId);
      }
    });

    return this;
  }

  setNode(nodeId: NodeId, label?: NodeLabel): this {
    const nodeKey = String(nodeId);

    if (hasOwnKey(this._nodes, nodeKey)) {
      if (arguments.length > 1) {
        this._nodes[nodeKey] = label;
      }
      return this;
    }

    this._nodes[nodeKey] =
      arguments.length > 1 ? label : this._defaultNodeLabelFn(nodeId);

    if (this._isCompound) {
      this._parent[nodeKey] = ROOT_NODE;
      this._children[nodeKey] = {};
      this._children[ROOT_NODE][nodeKey] = true;
    }

    this._in[nodeKey] = {};
    this._preds[nodeKey] = {};
    this._out[nodeKey] = {};
    this._sucs[nodeKey] = {};
    this._nodeCount++;
    return this;
  }

  node(nodeId: NodeId): NodeLabel {
    return this._nodes[String(nodeId)];
  }

  hasNode(nodeId: NodeId): boolean {
    return hasOwnKey(this._nodes, String(nodeId));
  }

  removeNode(nodeId: NodeId): this {
    const nodeKey = String(nodeId);

    if (!hasOwnKey(this._nodes, nodeKey)) {
      return this;
    }

    const removeIncidentEdge = (edgeKey: string) => {
      this.removeEdge(this._edgeObjs[edgeKey]);
    };

    delete this._nodes[nodeKey];

    if (this._isCompound) {
      this._removeFromParentsChildList(nodeKey);
      delete this._parent[nodeKey];
      forEachCollection(this.children(nodeKey) ?? [], (childId) => {
        this.setParent(childId);
      });
      delete this._children[nodeKey];
    }

    objectKeys(this._in[nodeKey]).forEach(removeIncidentEdge);
    delete this._in[nodeKey];
    delete this._preds[nodeKey];
    objectKeys(this._out[nodeKey]).forEach(removeIncidentEdge);
    delete this._out[nodeKey];
    delete this._sucs[nodeKey];
    this._nodeCount--;
    return this;
  }

  setParent(nodeId: NodeId, parentId?: NodeId | null): this {
    if (!this._isCompound) {
      throw Error("Cannot set parent in a non-compound graph");
    }

    const nodeKey = String(nodeId);
    let parentKey: string;

    if (isNil(parentId)) {
      parentKey = ROOT_NODE;
    } else {
      parentKey = String(parentId);

      for (
        let ancestor: string | undefined = parentKey;
        !isNil(ancestor);
        ancestor = this.parent(ancestor)
      ) {
        if (ancestor === nodeKey) {
          throw Error(
            "Setting " +
              parentKey +
              " as parent of " +
              nodeKey +
              " would create a cycle",
          );
        }
      }

      this.setNode(parentKey);
    }

    this.setNode(nodeKey);
    this._removeFromParentsChildList(nodeKey);
    this._parent[nodeKey] = parentKey;
    this._children[parentKey][nodeKey] = true;
    return this;
  }

  private _removeFromParentsChildList(nodeId: string): void {
    delete this._children[this._parent[nodeId]][nodeId];
  }

  parent(nodeId: NodeId): string | undefined {
    if (!this._isCompound) {
      return undefined;
    }

    const parentId = this._parent[String(nodeId)];
    return parentId !== ROOT_NODE ? parentId : undefined;
  }

  children(nodeId?: NodeId | null): string[] | undefined {
    const nodeKey = isNil(nodeId) ? ROOT_NODE : String(nodeId);

    if (this._isCompound) {
      const children = this._children[nodeKey];
      return children ? objectKeys(children) : undefined;
    }

    if (nodeKey === ROOT_NODE) {
      return this.nodes();
    }

    if (this.hasNode(nodeKey)) {
      return [];
    }

    return undefined;
  }

  predecessors(nodeId: NodeId): string[] | undefined {
    const predecessors = this._preds[String(nodeId)];
    return predecessors ? objectKeys(predecessors) : undefined;
  }

  successors(nodeId: NodeId): string[] | undefined {
    const successors = this._sucs[String(nodeId)];
    return successors ? objectKeys(successors) : undefined;
  }

  neighbors(nodeId: NodeId): string[] | undefined {
    const predecessors = this.predecessors(nodeId);
    if (predecessors) {
      return unionNodes(predecessors, this.successors(nodeId));
    }

    return undefined;
  }

  isLeaf(nodeId: NodeId): boolean {
    const adjacentNodes = this.isDirected()
      ? this.successors(nodeId)
      : this.neighbors(nodeId);
    return (adjacentNodes ?? []).length === 0;
  }

  filterNodes(predicate: (nodeId: string) => boolean): Graphlib {
    const FilteredGraph = this.constructor as new (
      options: GraphOptions,
    ) => Graphlib;
    const filteredGraph = new FilteredGraph({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound,
    });

    filteredGraph.setGraph(this.graph());

    forEachCollection(this._nodes, (nodeLabel, nodeId) => {
      const nodeKey = String(nodeId);
      if (predicate(nodeKey)) {
        filteredGraph.setNode(nodeKey, nodeLabel);
      }
    });

    forEachCollection(this._edgeObjs, (edgeObject) => {
      if (
        filteredGraph.hasNode(edgeObject.v) &&
        filteredGraph.hasNode(edgeObject.w)
      ) {
        filteredGraph.setEdge(edgeObject, this.edge(edgeObject));
      }
    });

    const filteredParentCache: Record<string, string | undefined> = {};
    const findFilteredParent = (nodeId: string): string | undefined => {
      const parentId = this.parent(nodeId);

      if (parentId === undefined || filteredGraph.hasNode(parentId)) {
        filteredParentCache[nodeId] = parentId;
        return parentId;
      }

      if (hasOwnKey(filteredParentCache, parentId)) {
        return filteredParentCache[parentId];
      }

      return findFilteredParent(parentId);
    };

    if (this._isCompound) {
      filteredGraph.nodes().forEach((nodeId) => {
        filteredGraph.setParent(nodeId, findFilteredParent(nodeId));
      });
    }

    return filteredGraph;
  }

  setDefaultEdgeLabel(labelOrFactory: EdgeLabel | DefaultEdgeLabelFn): this {
    this._defaultEdgeLabelFn = isFunction(labelOrFactory)
      ? (labelOrFactory as DefaultEdgeLabelFn)
      : constant(labelOrFactory);
    return this;
  }

  edgeCount(): number {
    return this._edgeCount;
  }

  edges(): GraphlibEdge[] {
    return objectValues(this._edgeObjs);
  }

  setPath(path: readonly NodeId[], label?: EdgeLabel): this {
    const hasLabel = arguments.length > 1;

    for (let index = 1; index < path.length; index++) {
      if (hasLabel) {
        this.setEdge(path[index - 1], path[index], label);
      } else {
        this.setEdge(path[index - 1], path[index]);
      }
    }

    return this;
  }

  setEdge(edgeObject: GraphlibEdge, label?: EdgeLabel): this;
  setEdge(
    sourceId: NodeId,
    targetId: NodeId,
    label?: EdgeLabel,
    name?: EdgeName,
  ): this;
  setEdge(
    edgeOrSourceId: GraphlibEdge | NodeId,
    targetOrLabel?: NodeId | EdgeLabel,
    label?: EdgeLabel,
    name?: EdgeName,
  ): this {
    let sourceId: NodeId;
    let targetId: NodeId;
    let edgeName: EdgeName;
    let edgeLabel: EdgeLabel;
    let hasLabel = false;

    if (
      typeof edgeOrSourceId === "object" &&
      edgeOrSourceId !== null &&
      "v" in edgeOrSourceId
    ) {
      sourceId = edgeOrSourceId.v;
      targetId = edgeOrSourceId.w;
      edgeName = edgeOrSourceId.name;

      if (arguments.length === 2) {
        edgeLabel = targetOrLabel;
        hasLabel = true;
      }
    } else {
      sourceId = edgeOrSourceId;
      targetId = targetOrLabel as NodeId;
      edgeName = name;

      if (arguments.length > 2) {
        edgeLabel = label;
        hasLabel = true;
      }
    }

    const sourceKey = String(sourceId);
    const targetKey = String(targetId);
    const normalizedName = isNil(edgeName) ? undefined : String(edgeName);
    const edgeKey = edgeArgsToKey(
      this._isDirected,
      sourceKey,
      targetKey,
      normalizedName,
    );

    if (hasOwnKey(this._edgeLabels, edgeKey)) {
      if (hasLabel) {
        this._edgeLabels[edgeKey] = edgeLabel;
      }
      return this;
    }

    if (!isNil(normalizedName) && !this._isMultigraph) {
      throw Error("Cannot set a named edge when isMultigraph = false");
    }

    this.setNode(sourceKey);
    this.setNode(targetKey);
    this._edgeLabels[edgeKey] = hasLabel
      ? edgeLabel
      : this._defaultEdgeLabelFn(sourceKey, targetKey, normalizedName);

    const normalizedEdgeObject = edgeArgsToObject(
      this._isDirected,
      sourceKey,
      targetKey,
      normalizedName,
    );
    Object.freeze(normalizedEdgeObject);

    this._edgeObjs[edgeKey] = normalizedEdgeObject;
    incrementCount(this._preds[normalizedEdgeObject.w], normalizedEdgeObject.v);
    incrementCount(this._sucs[normalizedEdgeObject.v], normalizedEdgeObject.w);
    this._in[normalizedEdgeObject.w][edgeKey] = normalizedEdgeObject;
    this._out[normalizedEdgeObject.v][edgeKey] = normalizedEdgeObject;
    this._edgeCount++;
    return this;
  }

  edge(edgeObject: GraphlibEdge): EdgeLabel;
  edge(sourceId: NodeId, targetId: NodeId, name?: EdgeName): EdgeLabel;
  edge(
    edgeOrSourceId: GraphlibEdge | NodeId,
    targetId?: NodeId,
    edgeName?: EdgeName,
  ): EdgeLabel {
    const edgeKey =
      arguments.length === 1
        ? edgeObjectToKey(this._isDirected, edgeOrSourceId as GraphlibEdge)
        : edgeArgsToKey(
            this._isDirected,
            edgeOrSourceId as NodeId,
            targetId!,
            edgeName,
          );

    return this._edgeLabels[edgeKey];
  }

  hasEdge(edgeObject: GraphlibEdge): boolean;
  hasEdge(sourceId: NodeId, targetId: NodeId, name?: EdgeName): boolean;
  hasEdge(
    edgeOrSourceId: GraphlibEdge | NodeId,
    targetId?: NodeId,
    edgeName?: EdgeName,
  ): boolean {
    const edgeKey =
      arguments.length === 1
        ? edgeObjectToKey(this._isDirected, edgeOrSourceId as GraphlibEdge)
        : edgeArgsToKey(
            this._isDirected,
            edgeOrSourceId as NodeId,
            targetId!,
            edgeName,
          );

    return hasOwnKey(this._edgeLabels, edgeKey);
  }

  removeEdge(edgeObject: GraphlibEdge): this;
  removeEdge(sourceId: NodeId, targetId: NodeId, name?: EdgeName): this;
  removeEdge(
    edgeOrSourceId: GraphlibEdge | NodeId,
    targetId?: NodeId,
    edgeName?: EdgeName,
  ): this {
    const edgeKey =
      arguments.length === 1
        ? edgeObjectToKey(this._isDirected, edgeOrSourceId as GraphlibEdge)
        : edgeArgsToKey(
            this._isDirected,
            edgeOrSourceId as NodeId,
            targetId!,
            edgeName,
          );
    const edgeObject = this._edgeObjs[edgeKey];

    if (!edgeObject) {
      return this;
    }

    delete this._edgeLabels[edgeKey];
    delete this._edgeObjs[edgeKey];
    decrementCount(this._preds[edgeObject.w], edgeObject.v);
    decrementCount(this._sucs[edgeObject.v], edgeObject.w);
    delete this._in[edgeObject.w][edgeKey];
    delete this._out[edgeObject.v][edgeKey];
    this._edgeCount--;
    return this;
  }

  inEdges(nodeId: NodeId, sourceId?: NodeId): GraphlibEdge[] | undefined {
    const incomingEdges = this._in[String(nodeId)];

    if (!incomingEdges) {
      return undefined;
    }

    const edges = objectValues(incomingEdges);
    return sourceId
      ? edges.filter((edgeObject) => edgeObject.v === String(sourceId))
      : edges;
  }

  outEdges(nodeId: NodeId, targetId?: NodeId): GraphlibEdge[] | undefined {
    const outgoingEdges = this._out[String(nodeId)];

    if (!outgoingEdges) {
      return undefined;
    }

    const edges = objectValues(outgoingEdges);
    return targetId
      ? edges.filter((edgeObject) => edgeObject.w === String(targetId))
      : edges;
  }

  nodeEdges(nodeId: NodeId, otherNodeId?: NodeId): GraphlibEdge[] | undefined {
    const incomingEdges = this.inEdges(nodeId, otherNodeId);

    if (incomingEdges) {
      return incomingEdges.concat(this.outEdges(nodeId, otherNodeId) ?? []);
    }

    return undefined;
  }
}
