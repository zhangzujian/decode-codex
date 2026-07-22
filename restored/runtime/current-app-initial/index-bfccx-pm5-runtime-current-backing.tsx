// Restored from ref/webview/assets/index-BFCcxPM5-CITRo3Ac.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// IndexBFCcxPM5 chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  registerBqqwIolcRuntimeVariant2Member0001 as RegisterBqqwIOLcA,
  registerBqqwIolcRuntimeVariant2Member0002 as RegisterBqqwIOLcC,
  registerBqqwIolcRuntimeVariant2Member0006 as registerBqqwIOLcO,
  registerBqqwIolcRuntimeVariant2Member0007 as registerBqqwIOLcR,
  registerBqqwIolcRuntimeVariant2Member0008 as RegisterBqqwIOLcS,
  registerBqqwIolcRuntimeVariant2Member0009 as registerBqqwIOLcT,
} from "../current-ref-aliases/register-bqqw-iolc-runtime-variant-2/index";
function indexBFCcxPM5Helper1(indexBFCcxPM5Param803, indexBFCcxPM5Param804) {
  return (
    indexBFCcxPM5Helper2(indexBFCcxPM5Param803, {}) || {
      type: "root",
      children: [],
    }
  );
}
function indexBFCcxPM5Helper2(indexBFCcxPM5Param722, indexBFCcxPM5Param723) {
  let indexBFCcxPM5Value1448 = indexBFCcxPM5Helper3(
    indexBFCcxPM5Param722,
    indexBFCcxPM5Param723,
  );
  return (
    indexBFCcxPM5Value1448 &&
      indexBFCcxPM5Param723.afterTransform &&
      indexBFCcxPM5Param723.afterTransform(
        indexBFCcxPM5Param722,
        indexBFCcxPM5Value1448,
      ),
    indexBFCcxPM5Value1448
  );
}
function indexBFCcxPM5Helper3(indexBFCcxPM5Param444, indexBFCcxPM5Param445) {
  switch (indexBFCcxPM5Param444.nodeType) {
    case 1:
      return indexBFCcxPM5Helper8(indexBFCcxPM5Param444, indexBFCcxPM5Param445);
    case 3:
      return indexBFCcxPM5Helper6(indexBFCcxPM5Param444);
    case 8:
      return indexBFCcxPM5Helper7(indexBFCcxPM5Param444);
    case 9:
      return indexBFCcxPM5Helper4(indexBFCcxPM5Param444, indexBFCcxPM5Param445);
    case 10:
      return indexBFCcxPM5Helper5();
    case 11:
      return indexBFCcxPM5Helper4(indexBFCcxPM5Param444, indexBFCcxPM5Param445);
    default:
      return;
  }
}
function indexBFCcxPM5Helper4(indexBFCcxPM5Param831, indexBFCcxPM5Param832) {
  return {
    type: "root",
    children: indexBFCcxPM5Helper9(
      indexBFCcxPM5Param831,
      indexBFCcxPM5Param832,
    ),
  };
}
function indexBFCcxPM5Helper5() {
  return {
    type: "doctype",
  };
}
function indexBFCcxPM5Helper6(indexBFCcxPM5Param812) {
  return {
    type: "text",
    value: indexBFCcxPM5Param812.nodeValue || "",
  };
}
function indexBFCcxPM5Helper7(indexBFCcxPM5Param805) {
  return {
    type: "comment",
    value: indexBFCcxPM5Param805.nodeValue || "",
  };
}
function indexBFCcxPM5Helper8(indexBFCcxPM5Param371, indexBFCcxPM5Param372) {
  let indexBFCcxPM5Value1224 = indexBFCcxPM5Param371.namespaceURI,
    indexBFCcxPM5Value1225 =
      indexBFCcxPM5Value1224 === indexBFCcxPM5Value1.svg
        ? RegisterBqqwIOLcS
        : registerBqqwIOLcO,
    indexBFCcxPM5Value1226 =
      indexBFCcxPM5Value1224 === indexBFCcxPM5Value1.html
        ? indexBFCcxPM5Param371.tagName.toLowerCase()
        : indexBFCcxPM5Param371.tagName,
    indexBFCcxPM5Value1227 =
      indexBFCcxPM5Value1224 === indexBFCcxPM5Value1.html &&
      indexBFCcxPM5Value1226 === "template"
        ? indexBFCcxPM5Param371.content
        : indexBFCcxPM5Param371,
    indexBFCcxPM5Value1228 = indexBFCcxPM5Param371.getAttributeNames(),
    indexBFCcxPM5Value1229 = {},
    indexBFCcxPM5Value1230 = -1;
  for (; ++indexBFCcxPM5Value1230 < indexBFCcxPM5Value1228.length;)
    indexBFCcxPM5Value1229[indexBFCcxPM5Value1228[indexBFCcxPM5Value1230]] =
      indexBFCcxPM5Param371.getAttribute(
        indexBFCcxPM5Value1228[indexBFCcxPM5Value1230],
      ) || "";
  return indexBFCcxPM5Value1225(
    indexBFCcxPM5Value1226,
    indexBFCcxPM5Value1229,
    indexBFCcxPM5Helper9(indexBFCcxPM5Value1227, indexBFCcxPM5Param372),
  );
}
function indexBFCcxPM5Helper9(indexBFCcxPM5Param613, indexBFCcxPM5Param614) {
  let indexBFCcxPM5Value1402 = indexBFCcxPM5Param613.childNodes,
    indexBFCcxPM5Value1403 = [],
    indexBFCcxPM5Value1404 = -1;
  for (; ++indexBFCcxPM5Value1404 < indexBFCcxPM5Value1402.length;) {
    let indexBFCcxPM5Value1468 = indexBFCcxPM5Helper2(
      indexBFCcxPM5Value1402[indexBFCcxPM5Value1404],
      indexBFCcxPM5Param614,
    );
    indexBFCcxPM5Value1468 !== undefined &&
      indexBFCcxPM5Value1403.push(indexBFCcxPM5Value1468);
  }
  return indexBFCcxPM5Value1403;
}
function indexBFCcxPM5Helper10(indexBFCcxPM5Param870, indexBFCcxPM5Param871) {
  return indexBFCcxPM5Helper1(indexBFCcxPM5Helper11(indexBFCcxPM5Param870));
}
function indexBFCcxPM5Helper11(indexBFCcxPM5Param721) {
  let indexBFCcxPM5Value1446 = document.createElement("template");
  return (
    (indexBFCcxPM5Value1446.innerHTML = indexBFCcxPM5Param721),
    indexBFCcxPM5Value1446.content
  );
}
function indexBFCcxPM5Helper12(indexBFCcxPM5Param542) {
  let indexBFCcxPM5Value1348 = [],
    indexBFCcxPM5Value1349 = -1;
  for (; ++indexBFCcxPM5Value1349 < indexBFCcxPM5Param542.length;)
    indexBFCcxPM5Value1348[indexBFCcxPM5Value1349] = indexBFCcxPM5Value3(
      indexBFCcxPM5Param542[indexBFCcxPM5Value1349],
    );
  return indexBFCcxPM5Helper14(indexBFCcxPM5Helper65);
  function indexBFCcxPM5Helper65(...indexBFCcxPM5Param706) {
    let indexBFCcxPM5Value1440 = -1;
    for (; ++indexBFCcxPM5Value1440 < indexBFCcxPM5Value1348.length;)
      if (
        indexBFCcxPM5Value1348[indexBFCcxPM5Value1440].apply(
          this,
          indexBFCcxPM5Param706,
        )
      )
        return true;
    return false;
  }
}
function indexBFCcxPM5Helper13(indexBFCcxPM5Param788) {
  return indexBFCcxPM5Helper14(indexBFCcxPM5Helper67);
  function indexBFCcxPM5Helper67(indexBFCcxPM5Param865) {
    return indexBFCcxPM5Param865.tagName === indexBFCcxPM5Param788;
  }
}
function indexBFCcxPM5Helper14(indexBFCcxPM5Param624) {
  return indexBFCcxPM5Helper66;
  function indexBFCcxPM5Helper66(
    indexBFCcxPM5Param687,
    indexBFCcxPM5Param688,
    indexBFCcxPM5Param689,
  ) {
    return !!(
      indexBFCcxPM5Helper16(indexBFCcxPM5Param687) &&
      indexBFCcxPM5Param624.call(
        this,
        indexBFCcxPM5Param687,
        typeof indexBFCcxPM5Param688 == "number"
          ? indexBFCcxPM5Param688
          : undefined,
        indexBFCcxPM5Param689 || undefined,
      )
    );
  }
}
function indexBFCcxPM5Helper15(indexBFCcxPM5Param608) {
  return !!(
    indexBFCcxPM5Param608 &&
    typeof indexBFCcxPM5Param608 == "object" &&
    "type" in indexBFCcxPM5Param608 &&
    indexBFCcxPM5Param608.type === "element" &&
    "tagName" in indexBFCcxPM5Param608 &&
    typeof indexBFCcxPM5Param608.tagName == "string"
  );
}
function indexBFCcxPM5Helper16(indexBFCcxPM5Param766) {
  return (
    typeof indexBFCcxPM5Param766 == "object" &&
    !!indexBFCcxPM5Param766 &&
    "type" in indexBFCcxPM5Param766 &&
    "tagName" in indexBFCcxPM5Param766
  );
}
function indexBFCcxPM5Helper17(indexBFCcxPM5Param141, indexBFCcxPM5Param142) {
  let indexBFCcxPM5Value893 = indexBFCcxPM5Param142 || {},
    indexBFCcxPM5Value894 =
      "children" in indexBFCcxPM5Param141 ? indexBFCcxPM5Param141.children : [],
    indexBFCcxPM5Value895 = indexBFCcxPM5Value11(indexBFCcxPM5Param141),
    indexBFCcxPM5Value896 = indexBFCcxPM5Helper23(indexBFCcxPM5Param141, {
      whitespace: indexBFCcxPM5Value893.whitespace || "normal",
    }),
    indexBFCcxPM5Value897 = [];
  (indexBFCcxPM5Param141.type === "text" ||
    indexBFCcxPM5Param141.type === "comment") &&
    indexBFCcxPM5Value897.push(
      ...indexBFCcxPM5Helper20(indexBFCcxPM5Param141, {
        breakBefore: true,
        breakAfter: true,
      }),
    );
  let indexBFCcxPM5Value898 = -1;
  for (; ++indexBFCcxPM5Value898 < indexBFCcxPM5Value894.length;)
    indexBFCcxPM5Value897.push(
      ...indexBFCcxPM5Helper18(
        indexBFCcxPM5Value894[indexBFCcxPM5Value898],
        indexBFCcxPM5Param141,
        {
          whitespace: indexBFCcxPM5Value896,
          breakBefore: indexBFCcxPM5Value898
            ? undefined
            : indexBFCcxPM5Value895,
          breakAfter:
            indexBFCcxPM5Value898 < indexBFCcxPM5Value894.length - 1
              ? indexBFCcxPM5Value6(
                  indexBFCcxPM5Value894[indexBFCcxPM5Value898 + 1],
                )
              : indexBFCcxPM5Value895,
        },
      ),
    );
  let indexBFCcxPM5Value899 = [],
    indexBFCcxPM5Value900;
  for (
    indexBFCcxPM5Value898 = -1;
    ++indexBFCcxPM5Value898 < indexBFCcxPM5Value897.length;
  ) {
    let indexBFCcxPM5Value1325 = indexBFCcxPM5Value897[indexBFCcxPM5Value898];
    typeof indexBFCcxPM5Value1325 == "number"
      ? indexBFCcxPM5Value900 !== undefined &&
        indexBFCcxPM5Value1325 > indexBFCcxPM5Value900 &&
        (indexBFCcxPM5Value900 = indexBFCcxPM5Value1325)
      : indexBFCcxPM5Value1325 &&
        (indexBFCcxPM5Value900 !== undefined &&
          indexBFCcxPM5Value900 > -1 &&
          indexBFCcxPM5Value899.push("\n".repeat(indexBFCcxPM5Value900) || " "),
        (indexBFCcxPM5Value900 = -1),
        indexBFCcxPM5Value899.push(indexBFCcxPM5Value1325));
  }
  return indexBFCcxPM5Value899.join("");
}
function indexBFCcxPM5Helper18(
  indexBFCcxPM5Param603,
  indexBFCcxPM5Param604,
  indexBFCcxPM5Param605,
) {
  return indexBFCcxPM5Param603.type === "element"
    ? indexBFCcxPM5Helper19(
        indexBFCcxPM5Param603,
        indexBFCcxPM5Param604,
        indexBFCcxPM5Param605,
      )
    : indexBFCcxPM5Param603.type === "text"
      ? indexBFCcxPM5Param605.whitespace === "normal"
        ? indexBFCcxPM5Helper20(indexBFCcxPM5Param603, indexBFCcxPM5Param605)
        : indexBFCcxPM5Helper21(indexBFCcxPM5Param603)
      : [];
}
function indexBFCcxPM5Helper19(
  indexBFCcxPM5Param220,
  indexBFCcxPM5Param221,
  indexBFCcxPM5Param222,
) {
  let indexBFCcxPM5Value1038 = indexBFCcxPM5Helper23(
      indexBFCcxPM5Param220,
      indexBFCcxPM5Param222,
    ),
    indexBFCcxPM5Value1039 = indexBFCcxPM5Param220.children || [],
    indexBFCcxPM5Value1040 = -1,
    indexBFCcxPM5Value1041 = [];
  if (indexBFCcxPM5Value10(indexBFCcxPM5Param220))
    return indexBFCcxPM5Value1041;
  let indexBFCcxPM5Value1042, indexBFCcxPM5Value1043;
  for (
    indexBFCcxPM5Value6(indexBFCcxPM5Param220) ||
    (indexBFCcxPM5Value9(indexBFCcxPM5Param220) &&
      indexBFCcxPM5Value2(
        indexBFCcxPM5Param221,
        indexBFCcxPM5Param220,
        indexBFCcxPM5Value9,
      ))
      ? (indexBFCcxPM5Value1043 = "\n")
      : indexBFCcxPM5Value8(indexBFCcxPM5Param220)
        ? ((indexBFCcxPM5Value1042 = 2), (indexBFCcxPM5Value1043 = 2))
        : indexBFCcxPM5Value11(indexBFCcxPM5Param220) &&
          ((indexBFCcxPM5Value1042 = 1), (indexBFCcxPM5Value1043 = 1));
    ++indexBFCcxPM5Value1040 < indexBFCcxPM5Value1039.length;
  )
    indexBFCcxPM5Value1041 = indexBFCcxPM5Value1041.concat(
      indexBFCcxPM5Helper18(
        indexBFCcxPM5Value1039[indexBFCcxPM5Value1040],
        indexBFCcxPM5Param220,
        {
          whitespace: indexBFCcxPM5Value1038,
          breakBefore: indexBFCcxPM5Value1040
            ? undefined
            : indexBFCcxPM5Value1042,
          breakAfter:
            indexBFCcxPM5Value1040 < indexBFCcxPM5Value1039.length - 1
              ? indexBFCcxPM5Value6(
                  indexBFCcxPM5Value1039[indexBFCcxPM5Value1040 + 1],
                )
              : indexBFCcxPM5Value1043,
        },
      ),
    );
  return (
    indexBFCcxPM5Value7(indexBFCcxPM5Param220) &&
      indexBFCcxPM5Value2(
        indexBFCcxPM5Param221,
        indexBFCcxPM5Param220,
        indexBFCcxPM5Value7,
      ) &&
      indexBFCcxPM5Value1041.push("\t"),
    indexBFCcxPM5Value1042 &&
      indexBFCcxPM5Value1041.unshift(indexBFCcxPM5Value1042),
    indexBFCcxPM5Value1043 &&
      indexBFCcxPM5Value1041.push(indexBFCcxPM5Value1043),
    indexBFCcxPM5Value1041
  );
}
function indexBFCcxPM5Helper20(indexBFCcxPM5Param145, indexBFCcxPM5Param146) {
  let indexBFCcxPM5Value901 = String(indexBFCcxPM5Param145.value),
    indexBFCcxPM5Value902 = [],
    indexBFCcxPM5Value903 = [],
    indexBFCcxPM5Value904 = 0;
  for (; indexBFCcxPM5Value904 <= indexBFCcxPM5Value901.length;) {
    indexBFCcxPM5Value4.lastIndex = indexBFCcxPM5Value904;
    let indexBFCcxPM5Value1216 = indexBFCcxPM5Value4.exec(
        indexBFCcxPM5Value901,
      ),
      indexBFCcxPM5Value1217 =
        indexBFCcxPM5Value1216 && "index" in indexBFCcxPM5Value1216
          ? indexBFCcxPM5Value1216.index
          : indexBFCcxPM5Value901.length;
    indexBFCcxPM5Value902.push(
      indexBFCcxPM5Helper22(
        indexBFCcxPM5Value901
          .slice(indexBFCcxPM5Value904, indexBFCcxPM5Value1217)
          .replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        indexBFCcxPM5Value904 === 0 ? indexBFCcxPM5Param146.breakBefore : true,
        indexBFCcxPM5Value1217 === indexBFCcxPM5Value901.length
          ? indexBFCcxPM5Param146.breakAfter
          : true,
      ),
    );
    indexBFCcxPM5Value904 = indexBFCcxPM5Value1217 + 1;
  }
  let indexBFCcxPM5Value905 = -1,
    indexBFCcxPM5Value906;
  for (; ++indexBFCcxPM5Value905 < indexBFCcxPM5Value902.length;)
    indexBFCcxPM5Value902[indexBFCcxPM5Value905].charCodeAt(
      indexBFCcxPM5Value902[indexBFCcxPM5Value905].length - 1,
    ) === 8203 ||
    (indexBFCcxPM5Value905 < indexBFCcxPM5Value902.length - 1 &&
      indexBFCcxPM5Value902[indexBFCcxPM5Value905 + 1].charCodeAt(0) === 8203)
      ? (indexBFCcxPM5Value903.push(
          indexBFCcxPM5Value902[indexBFCcxPM5Value905],
        ),
        (indexBFCcxPM5Value906 = undefined))
      : indexBFCcxPM5Value902[indexBFCcxPM5Value905]
        ? (typeof indexBFCcxPM5Value906 == "number" &&
            indexBFCcxPM5Value903.push(indexBFCcxPM5Value906),
          indexBFCcxPM5Value903.push(
            indexBFCcxPM5Value902[indexBFCcxPM5Value905],
          ),
          (indexBFCcxPM5Value906 = 0))
        : (indexBFCcxPM5Value905 === 0 ||
            indexBFCcxPM5Value905 === indexBFCcxPM5Value902.length - 1) &&
          indexBFCcxPM5Value903.push(0);
  return indexBFCcxPM5Value903;
}
function indexBFCcxPM5Helper21(indexBFCcxPM5Param867) {
  return [String(indexBFCcxPM5Param867.value)];
}
function indexBFCcxPM5Helper22(
  indexBFCcxPM5Param375,
  indexBFCcxPM5Param376,
  indexBFCcxPM5Param377,
) {
  let indexBFCcxPM5Value1232 = [],
    indexBFCcxPM5Value1233 = 0,
    indexBFCcxPM5Value1234;
  for (; indexBFCcxPM5Value1233 < indexBFCcxPM5Param375.length;) {
    indexBFCcxPM5Value5.lastIndex = indexBFCcxPM5Value1233;
    let indexBFCcxPM5Value1365 = indexBFCcxPM5Value5.exec(
      indexBFCcxPM5Param375,
    );
    indexBFCcxPM5Value1234 = indexBFCcxPM5Value1365
      ? indexBFCcxPM5Value1365.index
      : indexBFCcxPM5Param375.length;
    !indexBFCcxPM5Value1233 &&
      !indexBFCcxPM5Value1234 &&
      indexBFCcxPM5Value1365 &&
      !indexBFCcxPM5Param376 &&
      indexBFCcxPM5Value1232.push("");
    indexBFCcxPM5Value1233 !== indexBFCcxPM5Value1234 &&
      indexBFCcxPM5Value1232.push(
        indexBFCcxPM5Param375.slice(
          indexBFCcxPM5Value1233,
          indexBFCcxPM5Value1234,
        ),
      );
    indexBFCcxPM5Value1233 = indexBFCcxPM5Value1365
      ? indexBFCcxPM5Value1234 + indexBFCcxPM5Value1365[0].length
      : indexBFCcxPM5Value1234;
  }
  return (
    indexBFCcxPM5Value1233 !== indexBFCcxPM5Value1234 &&
      !indexBFCcxPM5Param377 &&
      indexBFCcxPM5Value1232.push(""),
    indexBFCcxPM5Value1232.join(" ")
  );
}
function indexBFCcxPM5Helper23(indexBFCcxPM5Param271, indexBFCcxPM5Param272) {
  if (indexBFCcxPM5Param271.type === "element") {
    let indexBFCcxPM5Value1180 = indexBFCcxPM5Param271.properties || {};
    switch (indexBFCcxPM5Param271.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return indexBFCcxPM5Value1180.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return indexBFCcxPM5Value1180.noWrap
          ? "nowrap"
          : indexBFCcxPM5Param272.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return indexBFCcxPM5Param272.whitespace;
}
function indexBFCcxPM5Helper24(indexBFCcxPM5Param851) {
  return !!(indexBFCcxPM5Param851.properties || {}).hidden;
}
function indexBFCcxPM5Helper25(indexBFCcxPM5Param820) {
  return (
    indexBFCcxPM5Param820.tagName === "td" ||
    indexBFCcxPM5Param820.tagName === "th"
  );
}
function indexBFCcxPM5Helper26(indexBFCcxPM5Param789) {
  return (
    indexBFCcxPM5Param789.tagName === "dialog" &&
    !(indexBFCcxPM5Param789.properties || {}).open
  );
}
function indexBFCcxPM5Helper27(indexBFCcxPM5Param834) {
  return String(indexBFCcxPM5Param834).replace(
    indexBFCcxPM5Value19,
    (indexBFCcxPM5Param896) => indexBFCcxPM5Value18[indexBFCcxPM5Param896],
  );
}
function indexBFCcxPM5Helper28(indexBFCcxPM5Param395) {
  if (indexBFCcxPM5Param395.default) return indexBFCcxPM5Param395.default;
  var indexBFCcxPM5Value1254 = indexBFCcxPM5Param395.type,
    indexBFCcxPM5Value1255 = Array.isArray(indexBFCcxPM5Value1254)
      ? indexBFCcxPM5Value1254[0]
      : indexBFCcxPM5Value1254;
  if (typeof indexBFCcxPM5Value1255 != "string")
    return indexBFCcxPM5Value1255.enum[0];
  switch (indexBFCcxPM5Value1255) {
    case "boolean":
      return false;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
function indexBFCcxPM5Helper29(indexBFCcxPM5Param555) {
  for (
    var indexBFCcxPM5Value1359 = 0;
    indexBFCcxPM5Value1359 < indexBFCcxPM5Value42.length;
    indexBFCcxPM5Value1359++
  )
    for (
      var indexBFCcxPM5Value1360 = indexBFCcxPM5Value42[indexBFCcxPM5Value1359],
        indexBFCcxPM5Value1361 = 0;
      indexBFCcxPM5Value1361 < indexBFCcxPM5Value1360.blocks.length;
      indexBFCcxPM5Value1361++
    ) {
      var indexBFCcxPM5Value1362 =
        indexBFCcxPM5Value1360.blocks[indexBFCcxPM5Value1361];
      if (
        indexBFCcxPM5Param555 >= indexBFCcxPM5Value1362[0] &&
        indexBFCcxPM5Param555 <= indexBFCcxPM5Value1362[1]
      )
        return indexBFCcxPM5Value1360.name;
    }
  return null;
}
function indexBFCcxPM5Helper30(indexBFCcxPM5Param694) {
  for (
    var indexBFCcxPM5Value1438 = 0;
    indexBFCcxPM5Value1438 < indexBFCcxPM5Value43.length;
    indexBFCcxPM5Value1438 += 2
  )
    if (
      indexBFCcxPM5Param694 >= indexBFCcxPM5Value43[indexBFCcxPM5Value1438] &&
      indexBFCcxPM5Param694 <= indexBFCcxPM5Value43[indexBFCcxPM5Value1438 + 1]
    )
      return true;
  return false;
}
function indexBFCcxPM5Helper31(indexBFCcxPM5Param873, indexBFCcxPM5Param874) {
  indexBFCcxPM5Value57[indexBFCcxPM5Param873] = indexBFCcxPM5Param874;
}
function indexBFCcxPM5Helper32(
  indexBFCcxPM5Param354,
  indexBFCcxPM5Param355,
  indexBFCcxPM5Param356,
) {
  if (!indexBFCcxPM5Value57[indexBFCcxPM5Param355])
    throw Error(
      "Font metrics not found for font: " + indexBFCcxPM5Param355 + ".",
    );
  var indexBFCcxPM5Value1200 = indexBFCcxPM5Param354.charCodeAt(0),
    indexBFCcxPM5Value1201 =
      indexBFCcxPM5Value57[indexBFCcxPM5Param355][indexBFCcxPM5Value1200];
  if (
    (!indexBFCcxPM5Value1201 &&
      indexBFCcxPM5Param354[0] in indexBFCcxPM5Value59 &&
      ((indexBFCcxPM5Value1200 =
        indexBFCcxPM5Value59[indexBFCcxPM5Param354[0]].charCodeAt(0)),
      (indexBFCcxPM5Value1201 =
        indexBFCcxPM5Value57[indexBFCcxPM5Param355][indexBFCcxPM5Value1200])),
    !indexBFCcxPM5Value1201 &&
      indexBFCcxPM5Param356 === "text" &&
      indexBFCcxPM5Helper30(indexBFCcxPM5Value1200) &&
      (indexBFCcxPM5Value1201 =
        indexBFCcxPM5Value57[indexBFCcxPM5Param355][77]),
    indexBFCcxPM5Value1201)
  )
    return {
      depth: indexBFCcxPM5Value1201[0],
      height: indexBFCcxPM5Value1201[1],
      italic: indexBFCcxPM5Value1201[2],
      skew: indexBFCcxPM5Value1201[3],
      width: indexBFCcxPM5Value1201[4],
    };
}
function indexBFCcxPM5Helper33(indexBFCcxPM5Param545) {
  var indexBFCcxPM5Value1351;
  if (
    ((indexBFCcxPM5Value1351 =
      indexBFCcxPM5Param545 >= 5 ? 0 : indexBFCcxPM5Param545 >= 3 ? 1 : 2),
    !indexBFCcxPM5Value60[indexBFCcxPM5Value1351])
  ) {
    var indexBFCcxPM5Value1352 = (indexBFCcxPM5Value60[indexBFCcxPM5Value1351] =
      {
        cssEmPerMu: indexBFCcxPM5Value58.quad[indexBFCcxPM5Value1351] / 18,
      });
    for (var indexBFCcxPM5Value1353 in indexBFCcxPM5Value58)
      indexBFCcxPM5Value58.hasOwnProperty(indexBFCcxPM5Value1353) &&
        (indexBFCcxPM5Value1352[indexBFCcxPM5Value1353] =
          indexBFCcxPM5Value58[indexBFCcxPM5Value1353][indexBFCcxPM5Value1351]);
  }
  return indexBFCcxPM5Value60[indexBFCcxPM5Value1351];
}
function indexBFCcxPM5Helper34(indexBFCcxPM5Param707) {
  if (indexBFCcxPM5Param707 instanceof indexBFCcxPM5Value77)
    return indexBFCcxPM5Param707;
  throw Error(
    "Expected symbolNode but got " + String(indexBFCcxPM5Param707) + ".",
  );
}
function indexBFCcxPM5Helper35(indexBFCcxPM5Param691) {
  if (indexBFCcxPM5Param691 instanceof indexBFCcxPM5Value74)
    return indexBFCcxPM5Param691;
  throw Error(
    "Expected span<HtmlDomNode> but got " + String(indexBFCcxPM5Param691) + ".",
  );
}
function indexBFCcxPM5Helper36(
  indexBFCcxPM5Param697,
  indexBFCcxPM5Param698,
  indexBFCcxPM5Param699,
  indexBFCcxPM5Param700,
  indexBFCcxPM5Param701,
  indexBFCcxPM5Param702,
) {
  indexBFCcxPM5Value83[indexBFCcxPM5Param697][indexBFCcxPM5Param701] = {
    font: indexBFCcxPM5Param698,
    group: indexBFCcxPM5Param699,
    replace: indexBFCcxPM5Param700,
  };
  indexBFCcxPM5Param702 &&
    indexBFCcxPM5Param700 &&
    (indexBFCcxPM5Value83[indexBFCcxPM5Param697][indexBFCcxPM5Param700] =
      indexBFCcxPM5Value83[indexBFCcxPM5Param697][indexBFCcxPM5Param701]);
}
function indexBFCcxPM5Helper37(indexBFCcxPM5Param175) {
  for (
    var { type, names, props, handler, htmlBuilder, mathmlBuilder } =
        indexBFCcxPM5Param175,
      indexBFCcxPM5Value961 = {
        type,
        numArgs: props.numArgs,
        argTypes: props.argTypes,
        allowedInArgument: !!props.allowedInArgument,
        allowedInText: !!props.allowedInText,
        allowedInMath:
          props.allowedInMath === undefined ? true : props.allowedInMath,
        numOptionalArgs: props.numOptionalArgs || 0,
        infix: !!props.infix,
        primitive: !!props.primitive,
        handler,
      },
      indexBFCcxPM5Value962 = 0;
    indexBFCcxPM5Value962 < names.length;
    ++indexBFCcxPM5Value962
  )
    indexBFCcxPM5Value144[names[indexBFCcxPM5Value962]] = indexBFCcxPM5Value961;
  type &&
    (htmlBuilder && (indexBFCcxPM5Value145[type] = htmlBuilder),
    mathmlBuilder && (indexBFCcxPM5Value146[type] = mathmlBuilder));
}
function _e(indexBFCcxPM5Param480) {
  var { type, htmlBuilder, mathmlBuilder } = indexBFCcxPM5Param480;
  indexBFCcxPM5Helper37({
    type,
    names: [],
    props: {
      numArgs: 0,
    },
    handler() {
      throw Error("Should never be called.");
    },
    htmlBuilder,
    mathmlBuilder,
  });
}
function indexBFCcxPM5Helper38(indexBFCcxPM5Param531, indexBFCcxPM5Param532) {
  var indexBFCcxPM5Value1345 = indexBFCcxPM5Value149(
      ["base"],
      indexBFCcxPM5Param531,
      indexBFCcxPM5Param532,
    ),
    indexBFCcxPM5Value1346 = indexBFCcxPM5Value149(["strut"]);
  return (
    (indexBFCcxPM5Value1346.style.height = indexBFCcxPM5Value69(
      indexBFCcxPM5Value1345.height + indexBFCcxPM5Value1345.depth,
    )),
    indexBFCcxPM5Value1345.depth &&
      (indexBFCcxPM5Value1346.style.verticalAlign = indexBFCcxPM5Value69(
        -indexBFCcxPM5Value1345.depth,
      )),
    indexBFCcxPM5Value1345.children.unshift(indexBFCcxPM5Value1346),
    indexBFCcxPM5Value1345
  );
}
function indexBFCcxPM5Helper39(indexBFCcxPM5Param87, indexBFCcxPM5Param88) {
  var indexBFCcxPM5Value757 = null;
  indexBFCcxPM5Param87.length === 1 &&
    indexBFCcxPM5Param87[0].type === "tag" &&
    ((indexBFCcxPM5Value757 = indexBFCcxPM5Param87[0].tag),
    (indexBFCcxPM5Param87 = indexBFCcxPM5Param87[0].body));
  var indexBFCcxPM5Value758 = indexBFCcxPM5Value154(
      indexBFCcxPM5Param87,
      indexBFCcxPM5Param88,
      "root",
    ),
    indexBFCcxPM5Value759;
  indexBFCcxPM5Value758.length === 2 &&
    indexBFCcxPM5Value758[1].hasClass("tag") &&
    (indexBFCcxPM5Value759 = indexBFCcxPM5Value758.pop());
  for (
    var indexBFCcxPM5Value760 = [],
      indexBFCcxPM5Value761 = [],
      indexBFCcxPM5Value762 = 0;
    indexBFCcxPM5Value762 < indexBFCcxPM5Value758.length;
    indexBFCcxPM5Value762++
  )
    if (
      (indexBFCcxPM5Value761.push(indexBFCcxPM5Value758[indexBFCcxPM5Value762]),
      indexBFCcxPM5Value758[indexBFCcxPM5Value762].hasClass("mbin") ||
        indexBFCcxPM5Value758[indexBFCcxPM5Value762].hasClass("mrel") ||
        indexBFCcxPM5Value758[indexBFCcxPM5Value762].hasClass("allowbreak"))
    ) {
      for (
        var indexBFCcxPM5Value763 = false;
        indexBFCcxPM5Value762 < indexBFCcxPM5Value758.length - 1 &&
        indexBFCcxPM5Value758[indexBFCcxPM5Value762 + 1].hasClass("mspace") &&
        !indexBFCcxPM5Value758[indexBFCcxPM5Value762 + 1].hasClass("newline");
      ) {
        indexBFCcxPM5Value762++;
        indexBFCcxPM5Value761.push(
          indexBFCcxPM5Value758[indexBFCcxPM5Value762],
        );
        indexBFCcxPM5Value758[indexBFCcxPM5Value762].hasClass("nobreak") &&
          (indexBFCcxPM5Value763 = true);
      }
      indexBFCcxPM5Value763 ||
        (indexBFCcxPM5Value760.push(
          indexBFCcxPM5Helper38(indexBFCcxPM5Value761, indexBFCcxPM5Param88),
        ),
        (indexBFCcxPM5Value761 = []));
    } else
      indexBFCcxPM5Value758[indexBFCcxPM5Value762].hasClass("newline") &&
        (indexBFCcxPM5Value761.pop(),
        indexBFCcxPM5Value761.length > 0 &&
          (indexBFCcxPM5Value760.push(
            indexBFCcxPM5Helper38(indexBFCcxPM5Value761, indexBFCcxPM5Param88),
          ),
          (indexBFCcxPM5Value761 = [])),
        indexBFCcxPM5Value760.push(
          indexBFCcxPM5Value758[indexBFCcxPM5Value762],
        ));
  indexBFCcxPM5Value761.length > 0 &&
    indexBFCcxPM5Value760.push(
      indexBFCcxPM5Helper38(indexBFCcxPM5Value761, indexBFCcxPM5Param88),
    );
  var indexBFCcxPM5Value764;
  indexBFCcxPM5Value757
    ? ((indexBFCcxPM5Value764 = indexBFCcxPM5Helper38(
        indexBFCcxPM5Value154(
          indexBFCcxPM5Value757,
          indexBFCcxPM5Param88,
          true,
        ),
      )),
      (indexBFCcxPM5Value764.classes = ["tag"]),
      indexBFCcxPM5Value760.push(indexBFCcxPM5Value764))
    : indexBFCcxPM5Value759 &&
      indexBFCcxPM5Value760.push(indexBFCcxPM5Value759);
  var indexBFCcxPM5Value765 = indexBFCcxPM5Value149(
    ["katex-html"],
    indexBFCcxPM5Value760,
  );
  if (
    (indexBFCcxPM5Value765.setAttribute("aria-hidden", "true"),
    indexBFCcxPM5Value764)
  ) {
    var indexBFCcxPM5Value766 = indexBFCcxPM5Value764.children[0];
    indexBFCcxPM5Value766.style.height = indexBFCcxPM5Value69(
      indexBFCcxPM5Value765.height + indexBFCcxPM5Value765.depth,
    );
    indexBFCcxPM5Value765.depth &&
      (indexBFCcxPM5Value766.style.verticalAlign = indexBFCcxPM5Value69(
        -indexBFCcxPM5Value765.depth,
      ));
  }
  return indexBFCcxPM5Value765;
}
function be(indexBFCcxPM5Param872) {
  return new indexBFCcxPM5Value56(indexBFCcxPM5Param872);
}
function indexBFCcxPM5Helper40(indexBFCcxPM5Param273) {
  if (!indexBFCcxPM5Param273) return false;
  if (
    indexBFCcxPM5Param273.type === "mi" &&
    indexBFCcxPM5Param273.children.length === 1
  ) {
    var indexBFCcxPM5Value1114 = indexBFCcxPM5Param273.children[0];
    return (
      indexBFCcxPM5Value1114 instanceof indexBFCcxPM5Value161 &&
      indexBFCcxPM5Value1114.text === "."
    );
  } else if (
    indexBFCcxPM5Param273.type === "mo" &&
    indexBFCcxPM5Param273.children.length === 1 &&
    indexBFCcxPM5Param273.getAttribute("separator") === "true" &&
    indexBFCcxPM5Param273.getAttribute("lspace") === "0em" &&
    indexBFCcxPM5Param273.getAttribute("rspace") === "0em"
  ) {
    var indexBFCcxPM5Value1115 = indexBFCcxPM5Param273.children[0];
    return (
      indexBFCcxPM5Value1115 instanceof indexBFCcxPM5Value161 &&
      indexBFCcxPM5Value1115.text === ","
    );
  } else return false;
}
function indexBFCcxPM5Helper41(
  indexBFCcxPM5Param213,
  indexBFCcxPM5Param214,
  indexBFCcxPM5Param215,
  indexBFCcxPM5Param216,
  indexBFCcxPM5Param217,
) {
  var indexBFCcxPM5Value1028 = indexBFCcxPM5Value167(
      indexBFCcxPM5Param213,
      indexBFCcxPM5Param215,
    ),
    indexBFCcxPM5Value1029 =
      indexBFCcxPM5Value1028.length === 1 &&
      indexBFCcxPM5Value1028[0] instanceof indexBFCcxPM5Value160 &&
      indexBFCcxPM5Value23.contains(
        ["mrow", "mtable"],
        indexBFCcxPM5Value1028[0].type,
      )
        ? indexBFCcxPM5Value1028[0]
        : new indexBFCcxPM5Value163.MathNode("mrow", indexBFCcxPM5Value1028),
    indexBFCcxPM5Value1030 = new indexBFCcxPM5Value163.MathNode("annotation", [
      new indexBFCcxPM5Value163.TextNode(indexBFCcxPM5Param214),
    ]);
  indexBFCcxPM5Value1030.setAttribute("encoding", "application/x-tex");
  var indexBFCcxPM5Value1031 = new indexBFCcxPM5Value163.MathNode("semantics", [
      indexBFCcxPM5Value1029,
      indexBFCcxPM5Value1030,
    ]),
    indexBFCcxPM5Value1032 = new indexBFCcxPM5Value163.MathNode("math", [
      indexBFCcxPM5Value1031,
    ]);
  indexBFCcxPM5Value1032.setAttribute(
    "xmlns",
    "http://www.w3.org/1998/Math/MathML",
  );
  indexBFCcxPM5Param216 &&
    indexBFCcxPM5Value1032.setAttribute("display", "block");
  var indexBFCcxPM5Value1033 = indexBFCcxPM5Param217 ? "katex" : "katex-mathml";
  return indexBFCcxPM5Value139.makeSpan(
    [indexBFCcxPM5Value1033],
    [indexBFCcxPM5Value1032],
  );
}
function indexBFCcxPM5Helper42(indexBFCcxPM5Param560, indexBFCcxPM5Param561) {
  if (
    !indexBFCcxPM5Param560 ||
    indexBFCcxPM5Param560.type !== indexBFCcxPM5Param561
  )
    throw Error(
      "Expected node of type " +
        indexBFCcxPM5Param561 +
        ", but got " +
        (indexBFCcxPM5Param560
          ? "node of type " + indexBFCcxPM5Param560.type
          : String(indexBFCcxPM5Param560)),
    );
  return indexBFCcxPM5Param560;
}
function indexBFCcxPM5Helper43(indexBFCcxPM5Param576) {
  var indexBFCcxPM5Value1382 = indexBFCcxPM5Helper44(indexBFCcxPM5Param576);
  if (!indexBFCcxPM5Value1382)
    throw Error(
      "Expected node of symbol group type, but got " +
        (indexBFCcxPM5Param576
          ? "node of type " + indexBFCcxPM5Param576.type
          : String(indexBFCcxPM5Param576)),
    );
  return indexBFCcxPM5Value1382;
}
function indexBFCcxPM5Helper44(indexBFCcxPM5Param750) {
  return indexBFCcxPM5Param750 &&
    (indexBFCcxPM5Param750.type === "atom" ||
      indexBFCcxPM5Value82.hasOwnProperty(indexBFCcxPM5Param750.type))
    ? indexBFCcxPM5Param750
    : null;
}
function indexBFCcxPM5Helper45(indexBFCcxPM5Param790, indexBFCcxPM5Param791) {
  var indexBFCcxPM5Value1466 = indexBFCcxPM5Value154(
    indexBFCcxPM5Param790.body,
    indexBFCcxPM5Param791,
    true,
  );
  return indexBFCcxPM5Value184(
    [indexBFCcxPM5Param790.mclass],
    indexBFCcxPM5Value1466,
    indexBFCcxPM5Param791,
  );
}
function indexBFCcxPM5Helper46(indexBFCcxPM5Param115, indexBFCcxPM5Param116) {
  var indexBFCcxPM5Value860,
    indexBFCcxPM5Value861 = indexBFCcxPM5Value167(
      indexBFCcxPM5Param115.body,
      indexBFCcxPM5Param116,
    );
  return (
    indexBFCcxPM5Param115.mclass === "minner"
      ? (indexBFCcxPM5Value860 = new indexBFCcxPM5Value163.MathNode(
          "mpadded",
          indexBFCcxPM5Value861,
        ))
      : indexBFCcxPM5Param115.mclass === "mord"
        ? indexBFCcxPM5Param115.isCharacterBox
          ? ((indexBFCcxPM5Value860 = indexBFCcxPM5Value861[0]),
            (indexBFCcxPM5Value860.type = "mi"))
          : (indexBFCcxPM5Value860 = new indexBFCcxPM5Value163.MathNode(
              "mi",
              indexBFCcxPM5Value861,
            ))
        : (indexBFCcxPM5Param115.isCharacterBox
            ? ((indexBFCcxPM5Value860 = indexBFCcxPM5Value861[0]),
              (indexBFCcxPM5Value860.type = "mo"))
            : (indexBFCcxPM5Value860 = new indexBFCcxPM5Value163.MathNode(
                "mo",
                indexBFCcxPM5Value861,
              )),
          indexBFCcxPM5Param115.mclass === "mbin"
            ? ((indexBFCcxPM5Value860.attributes.lspace = "0.22em"),
              (indexBFCcxPM5Value860.attributes.rspace = "0.22em"))
            : indexBFCcxPM5Param115.mclass === "mpunct"
              ? ((indexBFCcxPM5Value860.attributes.lspace = "0em"),
                (indexBFCcxPM5Value860.attributes.rspace = "0.17em"))
              : indexBFCcxPM5Param115.mclass === "mopen" ||
                  indexBFCcxPM5Param115.mclass === "mclose"
                ? ((indexBFCcxPM5Value860.attributes.lspace = "0em"),
                  (indexBFCcxPM5Value860.attributes.rspace = "0em"))
                : indexBFCcxPM5Param115.mclass === "minner" &&
                  ((indexBFCcxPM5Value860.attributes.lspace = "0.0556em"),
                  (indexBFCcxPM5Value860.attributes.width = "+0.1111em"))),
    indexBFCcxPM5Value860
  );
}
function indexBFCcxPM5Helper47(
  indexBFCcxPM5Param121,
  indexBFCcxPM5Param122,
  indexBFCcxPM5Param123,
) {
  var indexBFCcxPM5Value873 = indexBFCcxPM5Value186[indexBFCcxPM5Param121];
  switch (indexBFCcxPM5Value873) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return indexBFCcxPM5Param123.callFunction(
        indexBFCcxPM5Value873,
        [indexBFCcxPM5Param122[0]],
        [indexBFCcxPM5Param122[1]],
      );
    case "\\uparrow":
    case "\\downarrow":
      var indexBFCcxPM5Value874 = indexBFCcxPM5Param123.callFunction(
          "\\\\cdleft",
          [indexBFCcxPM5Param122[0]],
          [],
        ),
        indexBFCcxPM5Value875 = {
          type: "atom",
          text: indexBFCcxPM5Value873,
          mode: "math",
          family: "rel",
        },
        indexBFCcxPM5Value876 = {
          type: "ordgroup",
          mode: "math",
          body: [
            indexBFCcxPM5Value874,
            indexBFCcxPM5Param123.callFunction(
              "\\Big",
              [indexBFCcxPM5Value875],
              [],
            ),
            indexBFCcxPM5Param123.callFunction(
              "\\\\cdright",
              [indexBFCcxPM5Param122[1]],
              [],
            ),
          ],
        };
      return indexBFCcxPM5Param123.callFunction(
        "\\\\cdparent",
        [indexBFCcxPM5Value876],
        [],
      );
    case "\\\\cdlongequal":
      return indexBFCcxPM5Param123.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert":
      return indexBFCcxPM5Param123.callFunction(
        "\\Big",
        [
          {
            type: "textord",
            text: "\\Vert",
            mode: "math",
          },
        ],
        [],
      );
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math",
      };
  }
}
function indexBFCcxPM5Helper48(indexBFCcxPM5Param33) {
  var indexBFCcxPM5Value531 = [];
  for (
    indexBFCcxPM5Param33.gullet.beginGroup(),
      indexBFCcxPM5Param33.gullet.macros.set("\\cr", "\\\\\\relax"),
      indexBFCcxPM5Param33.gullet.beginGroup();
    ;
  ) {
    indexBFCcxPM5Value531.push(
      indexBFCcxPM5Param33.parseExpression(false, "\\\\"),
    );
    indexBFCcxPM5Param33.gullet.endGroup();
    indexBFCcxPM5Param33.gullet.beginGroup();
    var indexBFCcxPM5Value532 = indexBFCcxPM5Param33.fetch().text;
    if (indexBFCcxPM5Value532 === "&" || indexBFCcxPM5Value532 === "\\\\")
      indexBFCcxPM5Param33.consume();
    else if (indexBFCcxPM5Value532 === "\\end") {
      indexBFCcxPM5Value531[indexBFCcxPM5Value531.length - 1].length === 0 &&
        indexBFCcxPM5Value531.pop();
      break;
    } else
      throw new indexBFCcxPM5Value14(
        "Expected \\\\ or \\cr or \\end",
        indexBFCcxPM5Param33.nextToken,
      );
  }
  for (
    var indexBFCcxPM5Value533 = [],
      indexBFCcxPM5Value534 = [indexBFCcxPM5Value533],
      indexBFCcxPM5Value535 = 0;
    indexBFCcxPM5Value535 < indexBFCcxPM5Value531.length;
    indexBFCcxPM5Value535++
  ) {
    for (
      var indexBFCcxPM5Value536 = indexBFCcxPM5Value531[indexBFCcxPM5Value535],
        indexBFCcxPM5Value537 = indexBFCcxPM5Value187(),
        indexBFCcxPM5Value538 = 0;
      indexBFCcxPM5Value538 < indexBFCcxPM5Value536.length;
      indexBFCcxPM5Value538++
    )
      if (!indexBFCcxPM5Value188(indexBFCcxPM5Value536[indexBFCcxPM5Value538]))
        indexBFCcxPM5Value537.body.push(
          indexBFCcxPM5Value536[indexBFCcxPM5Value538],
        );
      else {
        indexBFCcxPM5Value533.push(indexBFCcxPM5Value537);
        indexBFCcxPM5Value538 += 1;
        var indexBFCcxPM5Value539 = indexBFCcxPM5Helper43(
            indexBFCcxPM5Value536[indexBFCcxPM5Value538],
          ).text,
          indexBFCcxPM5Value540 = [, ,];
        if (
          ((indexBFCcxPM5Value540[0] = {
            type: "ordgroup",
            mode: "math",
            body: [],
          }),
          (indexBFCcxPM5Value540[1] = {
            type: "ordgroup",
            mode: "math",
            body: [],
          }),
          !("=|.".indexOf(indexBFCcxPM5Value539) > -1))
        )
          if ("<>AV".indexOf(indexBFCcxPM5Value539) > -1)
            for (
              var indexBFCcxPM5Value541 = 0;
              indexBFCcxPM5Value541 < 2;
              indexBFCcxPM5Value541++
            ) {
              for (
                var indexBFCcxPM5Value542 = true,
                  indexBFCcxPM5Value543 = indexBFCcxPM5Value538 + 1;
                indexBFCcxPM5Value543 < indexBFCcxPM5Value536.length;
                indexBFCcxPM5Value543++
              ) {
                if (
                  indexBFCcxPM5Value189(
                    indexBFCcxPM5Value536[indexBFCcxPM5Value543],
                    indexBFCcxPM5Value539,
                  )
                ) {
                  indexBFCcxPM5Value542 = false;
                  indexBFCcxPM5Value538 = indexBFCcxPM5Value543;
                  break;
                }
                if (
                  indexBFCcxPM5Value188(
                    indexBFCcxPM5Value536[indexBFCcxPM5Value543],
                  )
                )
                  throw new indexBFCcxPM5Value14(
                    "Missing a " +
                      indexBFCcxPM5Value539 +
                      " character to complete a CD arrow.",
                    indexBFCcxPM5Value536[indexBFCcxPM5Value543],
                  );
                indexBFCcxPM5Value540[indexBFCcxPM5Value541].body.push(
                  indexBFCcxPM5Value536[indexBFCcxPM5Value543],
                );
              }
              if (indexBFCcxPM5Value542)
                throw new indexBFCcxPM5Value14(
                  "Missing a " +
                    indexBFCcxPM5Value539 +
                    " character to complete a CD arrow.",
                  indexBFCcxPM5Value536[indexBFCcxPM5Value538],
                );
            }
          else
            throw new indexBFCcxPM5Value14(
              'Expected one of "<>AV=|." after @',
              indexBFCcxPM5Value536[indexBFCcxPM5Value538],
            );
        var indexBFCcxPM5Value544 = {
          type: "styling",
          body: [
            indexBFCcxPM5Helper47(
              indexBFCcxPM5Value539,
              indexBFCcxPM5Value540,
              indexBFCcxPM5Param33,
            ),
          ],
          mode: "math",
          style: "display",
        };
        indexBFCcxPM5Value533.push(indexBFCcxPM5Value544);
        indexBFCcxPM5Value537 = indexBFCcxPM5Value187();
      }
    indexBFCcxPM5Value535 % 2 == 0
      ? indexBFCcxPM5Value533.push(indexBFCcxPM5Value537)
      : indexBFCcxPM5Value533.shift();
    indexBFCcxPM5Value533 = [];
    indexBFCcxPM5Value534.push(indexBFCcxPM5Value533);
  }
  return (
    indexBFCcxPM5Param33.gullet.endGroup(),
    indexBFCcxPM5Param33.gullet.endGroup(),
    {
      type: "array",
      mode: "math",
      body: indexBFCcxPM5Value534,
      arraystretch: 1,
      addJot: true,
      rowGaps: [null],
      cols: Array(indexBFCcxPM5Value534[0].length).fill({
        type: "align",
        align: "c",
        pregap: 0.25,
        postgap: 0.25,
      }),
      colSeparationType: "CD",
      hLinesBeforeRow: Array(indexBFCcxPM5Value534.length + 1).fill([]),
    }
  );
}
function indexBFCcxPM5Helper49(indexBFCcxPM5Param519, indexBFCcxPM5Param520) {
  var indexBFCcxPM5Value1344 = indexBFCcxPM5Helper44(indexBFCcxPM5Param519);
  if (
    indexBFCcxPM5Value1344 &&
    indexBFCcxPM5Value23.contains(
      indexBFCcxPM5Value224,
      indexBFCcxPM5Value1344.text,
    )
  )
    return indexBFCcxPM5Value1344;
  throw indexBFCcxPM5Value1344
    ? new indexBFCcxPM5Value14(
        "Invalid delimiter '" +
          indexBFCcxPM5Value1344.text +
          "' after '" +
          indexBFCcxPM5Param520.funcName +
          "'",
        indexBFCcxPM5Param519,
      )
    : new indexBFCcxPM5Value14(
        "Invalid delimiter type '" + indexBFCcxPM5Param519.type + "'",
        indexBFCcxPM5Param519,
      );
}
function indexBFCcxPM5Helper50(indexBFCcxPM5Param737) {
  if (!indexBFCcxPM5Param737.body)
    throw Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
function indexBFCcxPM5Helper51(indexBFCcxPM5Param308) {
  for (
    var { type, names, props, handler, htmlBuilder, mathmlBuilder } =
        indexBFCcxPM5Param308,
      indexBFCcxPM5Value1162 = {
        type,
        numArgs: props.numArgs || 0,
        allowedInText: false,
        numOptionalArgs: 0,
        handler,
      },
      indexBFCcxPM5Value1163 = 0;
    indexBFCcxPM5Value1163 < names.length;
    ++indexBFCcxPM5Value1163
  )
    indexBFCcxPM5Value227[names[indexBFCcxPM5Value1163]] =
      indexBFCcxPM5Value1162;
  htmlBuilder && (indexBFCcxPM5Value145[type] = htmlBuilder);
  mathmlBuilder && (indexBFCcxPM5Value146[type] = mathmlBuilder);
}
function indexBFCcxPM5Helper52(indexBFCcxPM5Param879, indexBFCcxPM5Param880) {
  indexBFCcxPM5Value228[indexBFCcxPM5Param879] = indexBFCcxPM5Param880;
}
function indexBFCcxPM5Helper53(indexBFCcxPM5Param378) {
  var indexBFCcxPM5Value1235 = [];
  indexBFCcxPM5Param378.consumeSpaces();
  var indexBFCcxPM5Value1236 = indexBFCcxPM5Param378.fetch().text;
  for (
    indexBFCcxPM5Value1236 === "\\relax" &&
    (indexBFCcxPM5Param378.consume(),
    indexBFCcxPM5Param378.consumeSpaces(),
    (indexBFCcxPM5Value1236 = indexBFCcxPM5Param378.fetch().text));
    indexBFCcxPM5Value1236 === "\\hline" ||
    indexBFCcxPM5Value1236 === "\\hdashline";
  ) {
    indexBFCcxPM5Param378.consume();
    indexBFCcxPM5Value1235.push(indexBFCcxPM5Value1236 === "\\hdashline");
    indexBFCcxPM5Param378.consumeSpaces();
    indexBFCcxPM5Value1236 = indexBFCcxPM5Param378.fetch().text;
  }
  return indexBFCcxPM5Value1235;
}
function indexBFCcxPM5Helper54(indexBFCcxPM5Param794) {
  if (indexBFCcxPM5Param794.indexOf("ed") === -1)
    return indexBFCcxPM5Param794.indexOf("*") === -1;
}
function indexBFCcxPM5Helper55(
  indexBFCcxPM5Param28,
  indexBFCcxPM5Param29,
  indexBFCcxPM5Param30,
) {
  var {
    hskipBeforeAndAfter,
    addJot,
    cols,
    arraystretch,
    colSeparationType,
    autoTag,
    singleRow,
    emptySingleRow,
    maxNumCols,
    leqno,
  } = indexBFCcxPM5Param29;
  if (
    (indexBFCcxPM5Param28.gullet.beginGroup(),
    singleRow || indexBFCcxPM5Param28.gullet.macros.set("\\cr", "\\\\\\relax"),
    !arraystretch)
  ) {
    var indexBFCcxPM5Value508 =
      indexBFCcxPM5Param28.gullet.expandMacroAsText("\\arraystretch");
    if (indexBFCcxPM5Value508 == null) arraystretch = 1;
    else if (
      ((arraystretch = parseFloat(indexBFCcxPM5Value508)),
      !arraystretch || arraystretch < 0)
    )
      throw new indexBFCcxPM5Value14(
        "Invalid \\arraystretch: " + indexBFCcxPM5Value508,
      );
  }
  indexBFCcxPM5Param28.gullet.beginGroup();
  var indexBFCcxPM5Value509 = [],
    indexBFCcxPM5Value510 = [indexBFCcxPM5Value509],
    indexBFCcxPM5Value511 = [],
    indexBFCcxPM5Value512 = [],
    indexBFCcxPM5Value513 = autoTag == null ? undefined : [];
  function indexBFCcxPM5Helper60() {
    autoTag && indexBFCcxPM5Param28.gullet.macros.set("\\@eqnsw", "1", true);
  }
  function indexBFCcxPM5Helper61() {
    indexBFCcxPM5Value513 &&
      (indexBFCcxPM5Param28.gullet.macros.get("\\df@tag")
        ? (indexBFCcxPM5Value513.push(
            indexBFCcxPM5Param28.subparse([
              new indexBFCcxPM5Value13("\\df@tag"),
            ]),
          ),
          indexBFCcxPM5Param28.gullet.macros.set("\\df@tag", undefined, true))
        : indexBFCcxPM5Value513.push(
            !!autoTag &&
              indexBFCcxPM5Param28.gullet.macros.get("\\@eqnsw") === "1",
          ));
  }
  for (
    indexBFCcxPM5Helper60(),
      indexBFCcxPM5Value512.push(indexBFCcxPM5Helper53(indexBFCcxPM5Param28));
    ;
  ) {
    var indexBFCcxPM5Value514 = indexBFCcxPM5Param28.parseExpression(
      false,
      singleRow ? "\\end" : "\\\\",
    );
    indexBFCcxPM5Param28.gullet.endGroup();
    indexBFCcxPM5Param28.gullet.beginGroup();
    indexBFCcxPM5Value514 = {
      type: "ordgroup",
      mode: indexBFCcxPM5Param28.mode,
      body: indexBFCcxPM5Value514,
    };
    indexBFCcxPM5Param30 &&
      (indexBFCcxPM5Value514 = {
        type: "styling",
        mode: indexBFCcxPM5Param28.mode,
        style: indexBFCcxPM5Param30,
        body: [indexBFCcxPM5Value514],
      });
    indexBFCcxPM5Value509.push(indexBFCcxPM5Value514);
    var indexBFCcxPM5Value515 = indexBFCcxPM5Param28.fetch().text;
    if (indexBFCcxPM5Value515 === "&") {
      if (maxNumCols && indexBFCcxPM5Value509.length === maxNumCols) {
        if (singleRow || colSeparationType)
          throw new indexBFCcxPM5Value14(
            "Too many tab characters: &",
            indexBFCcxPM5Param28.nextToken,
          );
        indexBFCcxPM5Param28.settings.reportNonstrict(
          "textEnv",
          "Too few columns specified in the {array} column argument.",
        );
      }
      indexBFCcxPM5Param28.consume();
    } else if (indexBFCcxPM5Value515 === "\\end") {
      indexBFCcxPM5Helper61();
      indexBFCcxPM5Value509.length === 1 &&
        indexBFCcxPM5Value514.type === "styling" &&
        indexBFCcxPM5Value514.body[0].body.length === 0 &&
        (indexBFCcxPM5Value510.length > 1 || !emptySingleRow) &&
        indexBFCcxPM5Value510.pop();
      indexBFCcxPM5Value512.length < indexBFCcxPM5Value510.length + 1 &&
        indexBFCcxPM5Value512.push([]);
      break;
    } else if (indexBFCcxPM5Value515 === "\\\\") {
      indexBFCcxPM5Param28.consume();
      var indexBFCcxPM5Value516 = undefined;
      indexBFCcxPM5Param28.gullet.future().text !== " " &&
        (indexBFCcxPM5Value516 = indexBFCcxPM5Param28.parseSizeGroup(true));
      indexBFCcxPM5Value511.push(
        indexBFCcxPM5Value516 ? indexBFCcxPM5Value516.value : null,
      );
      indexBFCcxPM5Helper61();
      indexBFCcxPM5Value512.push(indexBFCcxPM5Helper53(indexBFCcxPM5Param28));
      indexBFCcxPM5Value509 = [];
      indexBFCcxPM5Value510.push(indexBFCcxPM5Value509);
      indexBFCcxPM5Helper60();
    } else
      throw new indexBFCcxPM5Value14(
        "Expected & or \\\\ or \\cr or \\end",
        indexBFCcxPM5Param28.nextToken,
      );
  }
  return (
    indexBFCcxPM5Param28.gullet.endGroup(),
    indexBFCcxPM5Param28.gullet.endGroup(),
    {
      type: "array",
      mode: indexBFCcxPM5Param28.mode,
      addJot,
      arraystretch,
      body: indexBFCcxPM5Value510,
      cols,
      rowGaps: indexBFCcxPM5Value511,
      hskipBeforeAndAfter,
      hLinesBeforeRow: indexBFCcxPM5Value512,
      colSeparationType,
      tags: indexBFCcxPM5Value513,
      leqno,
    }
  );
}
function indexBFCcxPM5Helper56(indexBFCcxPM5Param810) {
  return indexBFCcxPM5Param810.slice(0, 1) === "d" ? "display" : "text";
}
function indexBFCcxPM5Helper57(
  indexBFCcxPM5Param274,
  indexBFCcxPM5Param275,
  indexBFCcxPM5Param276,
) {
  for (
    var indexBFCcxPM5Value1116 = indexBFCcxPM5Value154(
        indexBFCcxPM5Param274,
        indexBFCcxPM5Param275,
        false,
      ),
      indexBFCcxPM5Value1117 =
        indexBFCcxPM5Param275.sizeMultiplier /
        indexBFCcxPM5Param276.sizeMultiplier,
      indexBFCcxPM5Value1118 = 0;
    indexBFCcxPM5Value1118 < indexBFCcxPM5Value1116.length;
    indexBFCcxPM5Value1118++
  ) {
    var indexBFCcxPM5Value1119 =
      indexBFCcxPM5Value1116[indexBFCcxPM5Value1118].classes.indexOf("sizing");
    indexBFCcxPM5Value1119 < 0
      ? Array.prototype.push.apply(
          indexBFCcxPM5Value1116[indexBFCcxPM5Value1118].classes,
          indexBFCcxPM5Param275.sizingClasses(indexBFCcxPM5Param276),
        )
      : indexBFCcxPM5Value1116[indexBFCcxPM5Value1118].classes[
          indexBFCcxPM5Value1119 + 1
        ] ===
          "reset-size" + indexBFCcxPM5Param275.size &&
        (indexBFCcxPM5Value1116[indexBFCcxPM5Value1118].classes[
          indexBFCcxPM5Value1119 + 1
        ] = "reset-size" + indexBFCcxPM5Param276.size);
    indexBFCcxPM5Value1116[indexBFCcxPM5Value1118].height *=
      indexBFCcxPM5Value1117;
    indexBFCcxPM5Value1116[indexBFCcxPM5Value1118].depth *=
      indexBFCcxPM5Value1117;
  }
  return indexBFCcxPM5Value139.makeFragment(indexBFCcxPM5Value1116);
}
export function IndexBFCcxPM5Icon(indexBFCcxPM5Param42) {
  let indexBFCcxPM5Value586 = indexBFCcxPM5Param42 || indexBFCcxPM5Value296;
  return function (indexBFCcxPM5Param45, indexBFCcxPM5Param46) {
    registerBqqwIOLcR(
      indexBFCcxPM5Param45,
      "element",
      function (indexBFCcxPM5Param50, indexBFCcxPM5Param51) {
        let indexBFCcxPM5Value609 = Array.isArray(
            indexBFCcxPM5Param50.properties.className,
          )
            ? indexBFCcxPM5Param50.properties.className
            : indexBFCcxPM5Value297,
          indexBFCcxPM5Value610 =
            indexBFCcxPM5Value609.includes("language-math"),
          indexBFCcxPM5Value611 =
            indexBFCcxPM5Value609.includes("math-display"),
          indexBFCcxPM5Value612 = indexBFCcxPM5Value609.includes("math-inline"),
          indexBFCcxPM5Value613 = indexBFCcxPM5Value611;
        if (
          !indexBFCcxPM5Value610 &&
          !indexBFCcxPM5Value611 &&
          !indexBFCcxPM5Value612
        )
          return;
        let indexBFCcxPM5Value614 =
            indexBFCcxPM5Param51[indexBFCcxPM5Param51.length - 1],
          indexBFCcxPM5Value615 = indexBFCcxPM5Param50;
        if (
          (indexBFCcxPM5Param50.tagName === "code" &&
            indexBFCcxPM5Value610 &&
            indexBFCcxPM5Value614 &&
            indexBFCcxPM5Value614.type === "element" &&
            indexBFCcxPM5Value614.tagName === "pre" &&
            ((indexBFCcxPM5Value615 = indexBFCcxPM5Value614),
            (indexBFCcxPM5Value614 =
              indexBFCcxPM5Param51[indexBFCcxPM5Param51.length - 2]),
            (indexBFCcxPM5Value613 = true)),
          !indexBFCcxPM5Value614)
        )
          return;
        let indexBFCcxPM5Value616 = indexBFCcxPM5Helper17(
            indexBFCcxPM5Value615,
            {
              whitespace: "pre",
            },
          ),
          indexBFCcxPM5Value617;
        try {
          indexBFCcxPM5Value617 = no.renderToString(indexBFCcxPM5Value616, {
            ...indexBFCcxPM5Value586,
            displayMode: indexBFCcxPM5Value613,
            throwOnError: true,
          });
        } catch (indexBFCcxPM5Value886) {
          let indexBFCcxPM5Value887 = indexBFCcxPM5Value886,
            indexBFCcxPM5Value888 = indexBFCcxPM5Value887.name.toLowerCase();
          indexBFCcxPM5Param46.message("Could not render math with KaTeX", {
            ancestors: [...indexBFCcxPM5Param51, indexBFCcxPM5Param50],
            cause: indexBFCcxPM5Value887,
            place: indexBFCcxPM5Param50.position,
            ruleId: indexBFCcxPM5Value888,
            source: "rehype-katex",
          });
          try {
            indexBFCcxPM5Value617 = no.renderToString(indexBFCcxPM5Value616, {
              ...indexBFCcxPM5Value586,
              displayMode: indexBFCcxPM5Value613,
              strict: "ignore",
              throwOnError: false,
            });
          } catch {
            indexBFCcxPM5Value617 = [
              {
                type: "element",
                tagName: "span",
                properties: {
                  className: ["katex-error"],
                  style:
                    "color:" + (indexBFCcxPM5Value586.errorColor || "#cc0000"),
                  title: String(indexBFCcxPM5Value886),
                },
                children: [
                  {
                    type: "text",
                    value: indexBFCcxPM5Value616,
                  },
                ],
              },
            ];
          }
        }
        typeof indexBFCcxPM5Value617 == "string" &&
          (indexBFCcxPM5Value617 = indexBFCcxPM5Helper10(
            indexBFCcxPM5Value617,
          ).children);
        let indexBFCcxPM5Value618 = indexBFCcxPM5Value614.children.indexOf(
          indexBFCcxPM5Value615,
        );
        return (
          indexBFCcxPM5Value614.children.splice(
            indexBFCcxPM5Value618,
            1,
            ...indexBFCcxPM5Value617,
          ),
          RegisterBqqwIOLcC
        );
      },
    );
  };
}
var indexBFCcxPM5Value1,
  indexBFCcxPM5Value2,
  indexBFCcxPM5Value3,
  indexBFCcxPM5Value4,
  indexBFCcxPM5Value5,
  indexBFCcxPM5Value6,
  indexBFCcxPM5Value7,
  indexBFCcxPM5Value8,
  indexBFCcxPM5Value9,
  indexBFCcxPM5Value10,
  indexBFCcxPM5Value11,
  indexBFCcxPM5Value12,
  indexBFCcxPM5Value13,
  indexBFCcxPM5Value14,
  indexBFCcxPM5Value15,
  indexBFCcxPM5Value16,
  $e,
  indexBFCcxPM5Value17,
  indexBFCcxPM5Value18,
  indexBFCcxPM5Value19,
  indexBFCcxPM5Value20,
  indexBFCcxPM5Value21,
  at,
  indexBFCcxPM5Value22,
  indexBFCcxPM5Value23,
  indexBFCcxPM5Value24,
  indexBFCcxPM5Value25,
  indexBFCcxPM5Value26,
  indexBFCcxPM5Value27,
  indexBFCcxPM5Value28,
  indexBFCcxPM5Value29,
  indexBFCcxPM5Value30,
  indexBFCcxPM5Value31,
  indexBFCcxPM5Value32,
  indexBFCcxPM5Value33,
  _t,
  indexBFCcxPM5Value34,
  indexBFCcxPM5Value35,
  indexBFCcxPM5Value36,
  indexBFCcxPM5Value37,
  indexBFCcxPM5Value38,
  indexBFCcxPM5Value39,
  indexBFCcxPM5Value40,
  indexBFCcxPM5Value41,
  indexBFCcxPM5Value42,
  indexBFCcxPM5Value43,
  indexBFCcxPM5Value44,
  indexBFCcxPM5Value45,
  indexBFCcxPM5Value46,
  indexBFCcxPM5Value47,
  indexBFCcxPM5Value48,
  indexBFCcxPM5Value49,
  indexBFCcxPM5Value50,
  indexBFCcxPM5Value51,
  indexBFCcxPM5Value52,
  indexBFCcxPM5Value53,
  indexBFCcxPM5Value54,
  indexBFCcxPM5Value55,
  indexBFCcxPM5Value56,
  indexBFCcxPM5Value57,
  indexBFCcxPM5Value58,
  indexBFCcxPM5Value59,
  indexBFCcxPM5Value60,
  indexBFCcxPM5Value61,
  indexBFCcxPM5Value62,
  indexBFCcxPM5Value63,
  indexBFCcxPM5Value64,
  indexBFCcxPM5Value65,
  indexBFCcxPM5Value66,
  indexBFCcxPM5Value67,
  indexBFCcxPM5Value68,
  indexBFCcxPM5Value69,
  indexBFCcxPM5Value70,
  indexBFCcxPM5Value71,
  $t,
  indexBFCcxPM5Value72,
  indexBFCcxPM5Value73,
  indexBFCcxPM5Value74,
  indexBFCcxPM5Value75,
  indexBFCcxPM5Value76,
  on,
  indexBFCcxPM5Value77,
  indexBFCcxPM5Value78,
  indexBFCcxPM5Value79,
  indexBFCcxPM5Value80,
  indexBFCcxPM5Value81,
  indexBFCcxPM5Value82,
  indexBFCcxPM5Value83,
  indexBFCcxPM5Value84,
  indexBFCcxPM5Value85,
  indexBFCcxPM5Value86,
  indexBFCcxPM5Value87,
  indexBFCcxPM5Value88,
  indexBFCcxPM5Value89,
  indexBFCcxPM5Value90,
  indexBFCcxPM5Value91,
  indexBFCcxPM5Value92,
  indexBFCcxPM5Value93,
  indexBFCcxPM5Value94,
  indexBFCcxPM5Value95,
  indexBFCcxPM5Value96,
  _n,
  indexBFCcxPM5Value97,
  indexBFCcxPM5Value98,
  indexBFCcxPM5Value99,
  indexBFCcxPM5Value100,
  indexBFCcxPM5Value101,
  indexBFCcxPM5Value102,
  indexBFCcxPM5Value103,
  indexBFCcxPM5Value104,
  indexBFCcxPM5Value105,
  indexBFCcxPM5Value106,
  indexBFCcxPM5Value107,
  indexBFCcxPM5Value108,
  indexBFCcxPM5Value109,
  indexBFCcxPM5Value110,
  indexBFCcxPM5Value111,
  indexBFCcxPM5Value112,
  indexBFCcxPM5Value113,
  indexBFCcxPM5Value114,
  indexBFCcxPM5Value115,
  indexBFCcxPM5Value116,
  indexBFCcxPM5Value117,
  indexBFCcxPM5Value118,
  indexBFCcxPM5Value119,
  indexBFCcxPM5Value120,
  indexBFCcxPM5Value121,
  indexBFCcxPM5Value122,
  indexBFCcxPM5Value123,
  indexBFCcxPM5Value124,
  indexBFCcxPM5Value125,
  indexBFCcxPM5Value126,
  indexBFCcxPM5Value127,
  indexBFCcxPM5Value128,
  indexBFCcxPM5Value129,
  indexBFCcxPM5Value130,
  indexBFCcxPM5Value131,
  indexBFCcxPM5Value132,
  indexBFCcxPM5Value133,
  indexBFCcxPM5Value134,
  $n,
  indexBFCcxPM5Value135,
  indexBFCcxPM5Value136,
  indexBFCcxPM5Value137,
  indexBFCcxPM5Value138,
  indexBFCcxPM5Value139,
  indexBFCcxPM5Value140,
  indexBFCcxPM5Value141,
  indexBFCcxPM5Value142,
  or,
  indexBFCcxPM5Value143,
  indexBFCcxPM5Value144,
  indexBFCcxPM5Value145,
  indexBFCcxPM5Value146,
  indexBFCcxPM5Value147,
  indexBFCcxPM5Value148,
  indexBFCcxPM5Value149,
  indexBFCcxPM5Value150,
  indexBFCcxPM5Value151,
  indexBFCcxPM5Value152,
  indexBFCcxPM5Value153,
  indexBFCcxPM5Value154,
  _r,
  indexBFCcxPM5Value155,
  indexBFCcxPM5Value156,
  indexBFCcxPM5Value157,
  indexBFCcxPM5Value158,
  indexBFCcxPM5Value159,
  indexBFCcxPM5Value160,
  indexBFCcxPM5Value161,
  indexBFCcxPM5Value162,
  indexBFCcxPM5Value163,
  indexBFCcxPM5Value164,
  indexBFCcxPM5Value165,
  indexBFCcxPM5Value166,
  indexBFCcxPM5Value167,
  indexBFCcxPM5Value168,
  $,
  indexBFCcxPM5Value169,
  indexBFCcxPM5Value170,
  indexBFCcxPM5Value171,
  indexBFCcxPM5Value172,
  indexBFCcxPM5Value173,
  indexBFCcxPM5Value174,
  indexBFCcxPM5Value175,
  indexBFCcxPM5Value176,
  indexBFCcxPM5Value177,
  indexBFCcxPM5Value178,
  indexBFCcxPM5Value179,
  indexBFCcxPM5Value180,
  indexBFCcxPM5Value181,
  indexBFCcxPM5Value182,
  indexBFCcxPM5Value183,
  indexBFCcxPM5Value184,
  indexBFCcxPM5Value185,
  indexBFCcxPM5Value186,
  indexBFCcxPM5Value187,
  indexBFCcxPM5Value188,
  indexBFCcxPM5Value189,
  indexBFCcxPM5Value190,
  indexBFCcxPM5Value191,
  $r,
  indexBFCcxPM5Value192,
  indexBFCcxPM5Value193,
  indexBFCcxPM5Value194,
  indexBFCcxPM5Value195,
  indexBFCcxPM5Value196,
  indexBFCcxPM5Value197,
  indexBFCcxPM5Value198,
  indexBFCcxPM5Value199,
  indexBFCcxPM5Value200,
  indexBFCcxPM5Value201,
  ui,
  indexBFCcxPM5Value202,
  indexBFCcxPM5Value203,
  indexBFCcxPM5Value204,
  indexBFCcxPM5Value205,
  indexBFCcxPM5Value206,
  indexBFCcxPM5Value207,
  _i,
  indexBFCcxPM5Value208,
  indexBFCcxPM5Value209,
  indexBFCcxPM5Value210,
  indexBFCcxPM5Value211,
  indexBFCcxPM5Value212,
  indexBFCcxPM5Value213,
  indexBFCcxPM5Value214,
  indexBFCcxPM5Value215,
  indexBFCcxPM5Value216,
  indexBFCcxPM5Value217,
  indexBFCcxPM5Value218,
  indexBFCcxPM5Value219,
  indexBFCcxPM5Value220,
  indexBFCcxPM5Value221,
  indexBFCcxPM5Value222,
  indexBFCcxPM5Value223,
  indexBFCcxPM5Value224,
  indexBFCcxPM5Value225,
  indexBFCcxPM5Value226,
  indexBFCcxPM5Value227,
  indexBFCcxPM5Value228,
  indexBFCcxPM5Value229,
  indexBFCcxPM5Value230,
  indexBFCcxPM5Value231,
  indexBFCcxPM5Value232,
  indexBFCcxPM5Value233,
  indexBFCcxPM5Value234,
  indexBFCcxPM5Value235,
  indexBFCcxPM5Value236,
  indexBFCcxPM5Value237,
  indexBFCcxPM5Value238,
  indexBFCcxPM5Value239,
  indexBFCcxPM5Value240,
  indexBFCcxPM5Value241,
  indexBFCcxPM5Value242,
  $i,
  indexBFCcxPM5Value243,
  indexBFCcxPM5Value244,
  indexBFCcxPM5Value245,
  indexBFCcxPM5Value246,
  indexBFCcxPM5Value247,
  indexBFCcxPM5Value248,
  indexBFCcxPM5Value249,
  indexBFCcxPM5Value250,
  indexBFCcxPM5Value251,
  indexBFCcxPM5Value252,
  indexBFCcxPM5Value253,
  indexBFCcxPM5Value254,
  indexBFCcxPM5Value255,
  indexBFCcxPM5Value256,
  indexBFCcxPM5Value257,
  indexBFCcxPM5Value258,
  indexBFCcxPM5Value259,
  _a,
  indexBFCcxPM5Value260,
  indexBFCcxPM5Value261,
  indexBFCcxPM5Value262,
  indexBFCcxPM5Value263,
  indexBFCcxPM5Value264,
  indexBFCcxPM5Value265,
  indexBFCcxPM5Value266,
  indexBFCcxPM5Value267,
  indexBFCcxPM5Value268,
  indexBFCcxPM5Value269,
  indexBFCcxPM5Value270,
  indexBFCcxPM5Value271,
  indexBFCcxPM5Value272,
  indexBFCcxPM5Value273,
  indexBFCcxPM5Value274,
  indexBFCcxPM5Value275,
  indexBFCcxPM5Value276,
  indexBFCcxPM5Value277,
  indexBFCcxPM5Value278,
  indexBFCcxPM5Value279,
  indexBFCcxPM5Value280,
  indexBFCcxPM5Value281,
  indexBFCcxPM5Value282,
  indexBFCcxPM5Value283,
  indexBFCcxPM5Value284,
  indexBFCcxPM5Value285,
  indexBFCcxPM5Value286,
  indexBFCcxPM5Value287,
  indexBFCcxPM5Value288,
  indexBFCcxPM5Value289,
  indexBFCcxPM5Value290,
  indexBFCcxPM5Value291,
  indexBFCcxPM5Value292,
  indexBFCcxPM5Value293,
  indexBFCcxPM5Value294,
  $a,
  indexBFCcxPM5Value295,
  to,
  no,
  indexBFCcxPM5Value296,
  indexBFCcxPM5Value297;
rolldownRuntimeN(() => {
  for (
    RegisterBqqwIOLcA(),
      indexBFCcxPM5Value1 = {
        html: "http://www.w3.org/1999/xhtml",
        svg: "http://www.w3.org/2000/svg",
      },
      new DOMParser(),
      indexBFCcxPM5Value2 = function (
        indexBFCcxPM5Param263,
        indexBFCcxPM5Param264,
        indexBFCcxPM5Param265,
      ) {
        let indexBFCcxPM5Value1103 = registerBqqwIOLcT(indexBFCcxPM5Param265);
        if (
          !indexBFCcxPM5Param263 ||
          !indexBFCcxPM5Param263.type ||
          !indexBFCcxPM5Param263.children
        )
          throw Error("Expected parent node");
        if (typeof indexBFCcxPM5Param264 == "number") {
          if (indexBFCcxPM5Param264 < 0 || indexBFCcxPM5Param264 === 1 / 0)
            throw Error("Expected positive finite number as index");
        } else if (
          ((indexBFCcxPM5Param264 = indexBFCcxPM5Param263.children.indexOf(
            indexBFCcxPM5Param264,
          )),
          indexBFCcxPM5Param264 < 0)
        )
          throw Error("Expected child node or index");
        for (; ++indexBFCcxPM5Param264 < indexBFCcxPM5Param263.children.length;)
          if (
            indexBFCcxPM5Value1103(
              indexBFCcxPM5Param263.children[indexBFCcxPM5Param264],
              indexBFCcxPM5Param264,
              indexBFCcxPM5Param263,
            )
          )
            return indexBFCcxPM5Param263.children[indexBFCcxPM5Param264];
      },
      indexBFCcxPM5Value3 = function (indexBFCcxPM5Param457) {
        if (indexBFCcxPM5Param457 == null) return indexBFCcxPM5Helper15;
        if (typeof indexBFCcxPM5Param457 == "string")
          return indexBFCcxPM5Helper13(indexBFCcxPM5Param457);
        if (typeof indexBFCcxPM5Param457 == "object")
          return indexBFCcxPM5Helper12(indexBFCcxPM5Param457);
        if (typeof indexBFCcxPM5Param457 == "function")
          return indexBFCcxPM5Helper14(indexBFCcxPM5Param457);
        throw Error("Expected function, string, or array as `test`");
      },
      indexBFCcxPM5Value4 = /\n/g,
      indexBFCcxPM5Value5 = /[\t ]+/g,
      indexBFCcxPM5Value6 = indexBFCcxPM5Value3("br"),
      indexBFCcxPM5Value7 = indexBFCcxPM5Value3(indexBFCcxPM5Helper25),
      indexBFCcxPM5Value8 = indexBFCcxPM5Value3("p"),
      indexBFCcxPM5Value9 = indexBFCcxPM5Value3("tr"),
      indexBFCcxPM5Value10 = indexBFCcxPM5Value3([
        "datalist",
        "head",
        "noembed",
        "noframes",
        "noscript",
        "rp",
        "script",
        "style",
        "template",
        "title",
        indexBFCcxPM5Helper24,
        indexBFCcxPM5Helper26,
      ]),
      indexBFCcxPM5Value11 = indexBFCcxPM5Value3(
        "address.article.aside.blockquote.body.caption.center.dd.dialog.dir.dl.dt.div.figure.figcaption.footer.form,.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.legend.li.listing.main.menu.nav.ol.p.plaintext.pre.section.ul.xmp".split(
          ".",
        ),
      ),
      indexBFCcxPM5Value12 = class IndexBFCcxPM5Class4 {
        constructor(
          indexBFCcxPM5Param533,
          indexBFCcxPM5Param534,
          indexBFCcxPM5Param535,
        ) {
          this.lexer = undefined;
          this.start = undefined;
          this.end = undefined;
          this.lexer = indexBFCcxPM5Param533;
          this.start = indexBFCcxPM5Param534;
          this.end = indexBFCcxPM5Param535;
        }
        static range(indexBFCcxPM5Param536, indexBFCcxPM5Param537) {
          return indexBFCcxPM5Param537
            ? !indexBFCcxPM5Param536 ||
              !indexBFCcxPM5Param536.loc ||
              !indexBFCcxPM5Param537.loc ||
              indexBFCcxPM5Param536.loc.lexer !==
                indexBFCcxPM5Param537.loc.lexer
              ? null
              : new IndexBFCcxPM5Class4(
                  indexBFCcxPM5Param536.loc.lexer,
                  indexBFCcxPM5Param536.loc.start,
                  indexBFCcxPM5Param537.loc.end,
                )
            : indexBFCcxPM5Param536 && indexBFCcxPM5Param536.loc;
        }
      },
      indexBFCcxPM5Value13 = class IndexBFCcxPM5Class5 {
        constructor(indexBFCcxPM5Param517, indexBFCcxPM5Param518) {
          this.text = undefined;
          this.loc = undefined;
          this.noexpand = undefined;
          this.treatAsRelax = undefined;
          this.text = indexBFCcxPM5Param517;
          this.loc = indexBFCcxPM5Param518;
        }
        range(indexBFCcxPM5Param821, indexBFCcxPM5Param822) {
          return new IndexBFCcxPM5Class5(
            indexBFCcxPM5Param822,
            indexBFCcxPM5Value12.range(this, indexBFCcxPM5Param821),
          );
        }
      },
      indexBFCcxPM5Value14 = class IndexBFCcxPM5Class3 {
        constructor(indexBFCcxPM5Param99, indexBFCcxPM5Param100) {
          this.name = undefined;
          this.position = undefined;
          this.length = undefined;
          this.rawMessage = undefined;
          var indexBFCcxPM5Value796 =
              "KaTeX parse error: " + indexBFCcxPM5Param99,
            indexBFCcxPM5Value797,
            indexBFCcxPM5Value798,
            indexBFCcxPM5Value799 =
              indexBFCcxPM5Param100 && indexBFCcxPM5Param100.loc;
          if (
            indexBFCcxPM5Value799 &&
            indexBFCcxPM5Value799.start <= indexBFCcxPM5Value799.end
          ) {
            var indexBFCcxPM5Value800 = indexBFCcxPM5Value799.lexer.input;
            indexBFCcxPM5Value797 = indexBFCcxPM5Value799.start;
            indexBFCcxPM5Value798 = indexBFCcxPM5Value799.end;
            indexBFCcxPM5Value797 === indexBFCcxPM5Value800.length
              ? (indexBFCcxPM5Value796 += " at end of input: ")
              : (indexBFCcxPM5Value796 +=
                  " at position " + (indexBFCcxPM5Value797 + 1) + ": ");
            var indexBFCcxPM5Value801 = indexBFCcxPM5Value800
                .slice(indexBFCcxPM5Value797, indexBFCcxPM5Value798)
                .replace(/[^]/g, "$&̲"),
              indexBFCcxPM5Value802 =
                indexBFCcxPM5Value797 > 15
                  ? "…" +
                    indexBFCcxPM5Value800.slice(
                      indexBFCcxPM5Value797 - 15,
                      indexBFCcxPM5Value797,
                    )
                  : indexBFCcxPM5Value800.slice(0, indexBFCcxPM5Value797),
              indexBFCcxPM5Value803 =
                indexBFCcxPM5Value798 + 15 < indexBFCcxPM5Value800.length
                  ? indexBFCcxPM5Value800.slice(
                      indexBFCcxPM5Value798,
                      indexBFCcxPM5Value798 + 15,
                    ) + "…"
                  : indexBFCcxPM5Value800.slice(indexBFCcxPM5Value798);
            indexBFCcxPM5Value796 +=
              indexBFCcxPM5Value802 +
              indexBFCcxPM5Value801 +
              indexBFCcxPM5Value803;
          }
          var indexBFCcxPM5Value804 = Error(indexBFCcxPM5Value796);
          return (
            (indexBFCcxPM5Value804.name = "ParseError"),
            (indexBFCcxPM5Value804.__proto__ = IndexBFCcxPM5Class3.prototype),
            (indexBFCcxPM5Value804.position = indexBFCcxPM5Value797),
            indexBFCcxPM5Value797 != null &&
              indexBFCcxPM5Value798 != null &&
              (indexBFCcxPM5Value804.length =
                indexBFCcxPM5Value798 - indexBFCcxPM5Value797),
            (indexBFCcxPM5Value804.rawMessage = indexBFCcxPM5Param99),
            indexBFCcxPM5Value804
          );
        }
      },
      indexBFCcxPM5Value14.prototype.__proto__ = Error.prototype,
      indexBFCcxPM5Value15 = function (
        indexBFCcxPM5Param845,
        indexBFCcxPM5Param846,
      ) {
        return indexBFCcxPM5Param845.indexOf(indexBFCcxPM5Param846) !== -1;
      },
      indexBFCcxPM5Value16 = function (
        indexBFCcxPM5Param842,
        indexBFCcxPM5Param843,
      ) {
        return indexBFCcxPM5Param842 === undefined
          ? indexBFCcxPM5Param843
          : indexBFCcxPM5Param842;
      },
      $e = /([A-Z])/g,
      indexBFCcxPM5Value17 = function (indexBFCcxPM5Param806) {
        return indexBFCcxPM5Param806.replace($e, "-$1").toLowerCase();
      },
      indexBFCcxPM5Value18 = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;",
      },
      indexBFCcxPM5Value19 = /[&><"']/g,
      indexBFCcxPM5Value20 = function indexBFCcxPM5Helper64(
        indexBFCcxPM5Param523,
      ) {
        return indexBFCcxPM5Param523.type === "ordgroup" ||
          indexBFCcxPM5Param523.type === "color"
          ? indexBFCcxPM5Param523.body.length === 1
            ? indexBFCcxPM5Helper64(indexBFCcxPM5Param523.body[0])
            : indexBFCcxPM5Param523
          : indexBFCcxPM5Param523.type === "font"
            ? indexBFCcxPM5Helper64(indexBFCcxPM5Param523.body)
            : indexBFCcxPM5Param523;
      },
      indexBFCcxPM5Value21 = function (indexBFCcxPM5Param643) {
        var indexBFCcxPM5Value1420 = indexBFCcxPM5Value20(
          indexBFCcxPM5Param643,
        );
        return (
          indexBFCcxPM5Value1420.type === "mathord" ||
          indexBFCcxPM5Value1420.type === "textord" ||
          indexBFCcxPM5Value1420.type === "atom"
        );
      },
      at = function (indexBFCcxPM5Param716) {
        if (!indexBFCcxPM5Param716)
          throw Error(
            "Expected non-null, but got " + String(indexBFCcxPM5Param716),
          );
        return indexBFCcxPM5Param716;
      },
      indexBFCcxPM5Value22 = function (indexBFCcxPM5Param463) {
        var indexBFCcxPM5Value1305 =
          /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(
            indexBFCcxPM5Param463,
          );
        return indexBFCcxPM5Value1305
          ? indexBFCcxPM5Value1305[2] !== ":" ||
            !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(indexBFCcxPM5Value1305[1])
            ? null
            : indexBFCcxPM5Value1305[1].toLowerCase()
          : "_relative";
      },
      indexBFCcxPM5Value23 = {
        contains: indexBFCcxPM5Value15,
        deflt: indexBFCcxPM5Value16,
        escape: indexBFCcxPM5Helper27,
        hyphenate: indexBFCcxPM5Value17,
        getBaseElem: indexBFCcxPM5Value20,
        isCharacterBox: indexBFCcxPM5Value21,
        protocolFromUrl: indexBFCcxPM5Value22,
      },
      indexBFCcxPM5Value24 = {
        displayMode: {
          type: "boolean",
          description:
            "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
          cli: "-d, --display-mode",
        },
        output: {
          type: {
            enum: ["htmlAndMathml", "html", "mathml"],
          },
          description: "Determines the markup language of the output.",
          cli: "-F, --format <type>",
        },
        leqno: {
          type: "boolean",
          description:
            "Render display math in leqno style (left-justified tags).",
        },
        fleqn: {
          type: "boolean",
          description: "Render display math flush left.",
        },
        throwOnError: {
          type: "boolean",
          default: true,
          cli: "-t, --no-throw-on-error",
          cliDescription:
            "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.",
        },
        errorColor: {
          type: "string",
          default: "#cc0000",
          cli: "-c, --error-color <color>",
          cliDescription:
            "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
          cliProcessor: (indexBFCcxPM5Param895) => "#" + indexBFCcxPM5Param895,
        },
        macros: {
          type: "object",
          cli: "-m, --macro <def>",
          cliDescription:
            "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
          cliDefault: [],
          cliProcessor: (indexBFCcxPM5Param885, indexBFCcxPM5Param886) => (
            indexBFCcxPM5Param886.push(indexBFCcxPM5Param885),
            indexBFCcxPM5Param886
          ),
        },
        minRuleThickness: {
          type: "number",
          description:
            "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
          processor: (indexBFCcxPM5Param892) =>
            Math.max(0, indexBFCcxPM5Param892),
          cli: "--min-rule-thickness <size>",
          cliProcessor: parseFloat,
        },
        colorIsTextColor: {
          type: "boolean",
          description:
            "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
          cli: "-b, --color-is-text-color",
        },
        strict: {
          type: [
            {
              enum: ["warn", "ignore", "error"],
            },
            "boolean",
            "function",
          ],
          description:
            "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
          cli: "-S, --strict",
          cliDefault: false,
        },
        trust: {
          type: ["boolean", "function"],
          description:
            "Trust the input, enabling all HTML features such as \\url.",
          cli: "-T, --trust",
        },
        maxSize: {
          type: "number",
          default: 1 / 0,
          description:
            "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
          processor: (indexBFCcxPM5Param893) =>
            Math.max(0, indexBFCcxPM5Param893),
          cli: "-s, --max-size <n>",
          cliProcessor: parseInt,
        },
        maxExpand: {
          type: "number",
          default: 1e3,
          description:
            "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
          processor: (indexBFCcxPM5Param894) =>
            Math.max(0, indexBFCcxPM5Param894),
          cli: "-e, --max-expand <n>",
          cliProcessor: (indexBFCcxPM5Param866) =>
            indexBFCcxPM5Param866 === "Infinity"
              ? 1 / 0
              : parseInt(indexBFCcxPM5Param866),
        },
        globalGroup: {
          type: "boolean",
          cli: false,
        },
      },
      indexBFCcxPM5Value25 = class {
        constructor(indexBFCcxPM5Param131) {
          for (var indexBFCcxPM5Value883 in ((this.displayMode = undefined),
          (this.output = undefined),
          (this.leqno = undefined),
          (this.fleqn = undefined),
          (this.throwOnError = undefined),
          (this.errorColor = undefined),
          (this.macros = undefined),
          (this.minRuleThickness = undefined),
          (this.colorIsTextColor = undefined),
          (this.strict = undefined),
          (this.trust = undefined),
          (this.maxSize = undefined),
          (this.maxExpand = undefined),
          (this.globalGroup = undefined),
          (indexBFCcxPM5Param131 ||= {}),
          indexBFCcxPM5Value24))
            if (indexBFCcxPM5Value24.hasOwnProperty(indexBFCcxPM5Value883)) {
              var indexBFCcxPM5Value884 =
                indexBFCcxPM5Value24[indexBFCcxPM5Value883];
              this[indexBFCcxPM5Value883] =
                indexBFCcxPM5Param131[indexBFCcxPM5Value883] === undefined
                  ? indexBFCcxPM5Helper28(indexBFCcxPM5Value884)
                  : indexBFCcxPM5Value884.processor
                    ? indexBFCcxPM5Value884.processor(
                        indexBFCcxPM5Param131[indexBFCcxPM5Value883],
                      )
                    : indexBFCcxPM5Param131[indexBFCcxPM5Value883];
            }
        }
        reportNonstrict(
          indexBFCcxPM5Param125,
          indexBFCcxPM5Param126,
          indexBFCcxPM5Param127,
        ) {
          var indexBFCcxPM5Value877 = this.strict;
          if (
            (typeof indexBFCcxPM5Value877 == "function" &&
              (indexBFCcxPM5Value877 = indexBFCcxPM5Value877(
                indexBFCcxPM5Param125,
                indexBFCcxPM5Param126,
                indexBFCcxPM5Param127,
              )),
            !(!indexBFCcxPM5Value877 || indexBFCcxPM5Value877 === "ignore"))
          ) {
            if (
              indexBFCcxPM5Value877 === true ||
              indexBFCcxPM5Value877 === "error"
            )
              throw new indexBFCcxPM5Value14(
                "LaTeX-incompatible input and strict mode is set to 'error': " +
                  (indexBFCcxPM5Param126 + " [" + indexBFCcxPM5Param125 + "]"),
                indexBFCcxPM5Param127,
              );
            indexBFCcxPM5Value877 === "warn"
              ? typeof console < "u" &&
                console.warn(
                  "LaTeX-incompatible input and strict mode is set to 'warn': " +
                    (indexBFCcxPM5Param126 +
                      " [" +
                      indexBFCcxPM5Param125 +
                      "]"),
                )
              : typeof console < "u" &&
                console.warn(
                  "LaTeX-incompatible input and strict mode is set to " +
                    ("unrecognized '" +
                      indexBFCcxPM5Value877 +
                      "': " +
                      indexBFCcxPM5Param126 +
                      " [" +
                      indexBFCcxPM5Param125 +
                      "]"),
                );
          }
        }
        useStrictBehavior(
          indexBFCcxPM5Param128,
          indexBFCcxPM5Param129,
          indexBFCcxPM5Param130,
        ) {
          var indexBFCcxPM5Value878 = this.strict;
          if (typeof indexBFCcxPM5Value878 == "function")
            try {
              indexBFCcxPM5Value878 = indexBFCcxPM5Value878(
                indexBFCcxPM5Param128,
                indexBFCcxPM5Param129,
                indexBFCcxPM5Param130,
              );
            } catch {
              indexBFCcxPM5Value878 = "error";
            }
          return !indexBFCcxPM5Value878 || indexBFCcxPM5Value878 === "ignore"
            ? false
            : indexBFCcxPM5Value878 === true ||
                indexBFCcxPM5Value878 === "error"
              ? true
              : indexBFCcxPM5Value878 === "warn"
                ? (typeof console < "u" &&
                    console.warn(
                      "LaTeX-incompatible input and strict mode is set to 'warn': " +
                        (indexBFCcxPM5Param129 +
                          " [" +
                          indexBFCcxPM5Param128 +
                          "]"),
                    ),
                  false)
                : (typeof console < "u" &&
                    console.warn(
                      "LaTeX-incompatible input and strict mode is set to " +
                        ("unrecognized '" +
                          indexBFCcxPM5Value878 +
                          "': " +
                          indexBFCcxPM5Param129 +
                          " [" +
                          indexBFCcxPM5Param128 +
                          "]"),
                    ),
                  false);
        }
        isTrusted(indexBFCcxPM5Param424) {
          if (indexBFCcxPM5Param424.url && !indexBFCcxPM5Param424.protocol) {
            var indexBFCcxPM5Value1278 = indexBFCcxPM5Value23.protocolFromUrl(
              indexBFCcxPM5Param424.url,
            );
            if (indexBFCcxPM5Value1278 == null) return false;
            indexBFCcxPM5Param424.protocol = indexBFCcxPM5Value1278;
          }
          return !!(typeof this.trust == "function"
            ? this.trust(indexBFCcxPM5Param424)
            : this.trust);
        }
      },
      indexBFCcxPM5Value26 = class {
        constructor(
          indexBFCcxPM5Param538,
          indexBFCcxPM5Param539,
          indexBFCcxPM5Param540,
        ) {
          this.id = undefined;
          this.size = undefined;
          this.cramped = undefined;
          this.id = indexBFCcxPM5Param538;
          this.size = indexBFCcxPM5Param539;
          this.cramped = indexBFCcxPM5Param540;
        }
        sup() {
          return indexBFCcxPM5Value34[indexBFCcxPM5Value35[this.id]];
        }
        sub() {
          return indexBFCcxPM5Value34[indexBFCcxPM5Value36[this.id]];
        }
        fracNum() {
          return indexBFCcxPM5Value34[indexBFCcxPM5Value37[this.id]];
        }
        fracDen() {
          return indexBFCcxPM5Value34[indexBFCcxPM5Value38[this.id]];
        }
        cramp() {
          return indexBFCcxPM5Value34[indexBFCcxPM5Value39[this.id]];
        }
        text() {
          return indexBFCcxPM5Value34[indexBFCcxPM5Value40[this.id]];
        }
        isTight() {
          return this.size >= 2;
        }
      },
      indexBFCcxPM5Value27 = 0,
      indexBFCcxPM5Value28 = 1,
      indexBFCcxPM5Value29 = 2,
      indexBFCcxPM5Value30 = 3,
      indexBFCcxPM5Value31 = 4,
      indexBFCcxPM5Value32 = 5,
      indexBFCcxPM5Value33 = 6,
      _t = 7,
      indexBFCcxPM5Value34 = [
        new indexBFCcxPM5Value26(indexBFCcxPM5Value27, 0, false),
        new indexBFCcxPM5Value26(indexBFCcxPM5Value28, 0, true),
        new indexBFCcxPM5Value26(indexBFCcxPM5Value29, 1, false),
        new indexBFCcxPM5Value26(indexBFCcxPM5Value30, 1, true),
        new indexBFCcxPM5Value26(indexBFCcxPM5Value31, 2, false),
        new indexBFCcxPM5Value26(indexBFCcxPM5Value32, 2, true),
        new indexBFCcxPM5Value26(indexBFCcxPM5Value33, 3, false),
        new indexBFCcxPM5Value26(_t, 3, true),
      ],
      indexBFCcxPM5Value35 = [
        indexBFCcxPM5Value31,
        indexBFCcxPM5Value32,
        indexBFCcxPM5Value31,
        indexBFCcxPM5Value32,
        indexBFCcxPM5Value33,
        _t,
        indexBFCcxPM5Value33,
        _t,
      ],
      indexBFCcxPM5Value36 = [
        indexBFCcxPM5Value32,
        indexBFCcxPM5Value32,
        indexBFCcxPM5Value32,
        indexBFCcxPM5Value32,
        _t,
        _t,
        _t,
        _t,
      ],
      indexBFCcxPM5Value37 = [
        indexBFCcxPM5Value29,
        indexBFCcxPM5Value30,
        indexBFCcxPM5Value31,
        indexBFCcxPM5Value32,
        indexBFCcxPM5Value33,
        _t,
        indexBFCcxPM5Value33,
        _t,
      ],
      indexBFCcxPM5Value38 = [
        indexBFCcxPM5Value30,
        indexBFCcxPM5Value30,
        indexBFCcxPM5Value32,
        indexBFCcxPM5Value32,
        _t,
        _t,
        _t,
        _t,
      ],
      indexBFCcxPM5Value39 = [
        indexBFCcxPM5Value28,
        indexBFCcxPM5Value28,
        indexBFCcxPM5Value30,
        indexBFCcxPM5Value30,
        indexBFCcxPM5Value32,
        indexBFCcxPM5Value32,
        _t,
        _t,
      ],
      indexBFCcxPM5Value40 = [
        indexBFCcxPM5Value27,
        indexBFCcxPM5Value28,
        indexBFCcxPM5Value29,
        indexBFCcxPM5Value30,
        indexBFCcxPM5Value29,
        indexBFCcxPM5Value30,
        indexBFCcxPM5Value29,
        indexBFCcxPM5Value30,
      ],
      indexBFCcxPM5Value41 = {
        DISPLAY: indexBFCcxPM5Value34[indexBFCcxPM5Value27],
        TEXT: indexBFCcxPM5Value34[indexBFCcxPM5Value29],
        SCRIPT: indexBFCcxPM5Value34[indexBFCcxPM5Value31],
        SCRIPTSCRIPT: indexBFCcxPM5Value34[indexBFCcxPM5Value33],
      },
      indexBFCcxPM5Value42 = [
        {
          name: "latin",
          blocks: [
            [256, 591],
            [768, 879],
          ],
        },
        {
          name: "cyrillic",
          blocks: [[1024, 1279]],
        },
        {
          name: "armenian",
          blocks: [[1328, 1423]],
        },
        {
          name: "brahmic",
          blocks: [[2304, 4255]],
        },
        {
          name: "georgian",
          blocks: [[4256, 4351]],
        },
        {
          name: "cjk",
          blocks: [
            [12288, 12543],
            [19968, 40879],
            [65280, 65376],
          ],
        },
        {
          name: "hangul",
          blocks: [[44032, 55215]],
        },
      ],
      indexBFCcxPM5Value43 = [],
      indexBFCcxPM5Value42.forEach((item) =>
        item.blocks.forEach((_item) => indexBFCcxPM5Value43.push(..._item)),
      ),
      indexBFCcxPM5Value44 = 80,
      indexBFCcxPM5Value45 = function (
        indexBFCcxPM5Param151,
        indexBFCcxPM5Param152,
      ) {
        return (
          "M95," +
          (622 + indexBFCcxPM5Param151 + indexBFCcxPM5Param152) +
          "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" +
          indexBFCcxPM5Param151 / 2.075 +
          " -" +
          indexBFCcxPM5Param151 +
          "\nc5.3,-9.3,12,-14,20,-14\nH400000v" +
          (40 + indexBFCcxPM5Param151) +
          "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" +
          (834 + indexBFCcxPM5Param151) +
          " " +
          indexBFCcxPM5Param152 +
          "h400000v" +
          (40 + indexBFCcxPM5Param151) +
          "h-400000z"
        );
      },
      indexBFCcxPM5Value46 = function (
        indexBFCcxPM5Param143,
        indexBFCcxPM5Param144,
      ) {
        return (
          "M263," +
          (601 + indexBFCcxPM5Param143 + indexBFCcxPM5Param144) +
          "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" +
          indexBFCcxPM5Param143 / 2.084 +
          " -" +
          indexBFCcxPM5Param143 +
          "\nc4.7,-7.3,11,-11,19,-11\nH40000v" +
          (40 + indexBFCcxPM5Param143) +
          "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" +
          (1001 + indexBFCcxPM5Param143) +
          " " +
          indexBFCcxPM5Param144 +
          "h400000v" +
          (40 + indexBFCcxPM5Param143) +
          "h-400000z"
        );
      },
      indexBFCcxPM5Value47 = function (
        indexBFCcxPM5Param154,
        indexBFCcxPM5Param155,
      ) {
        return (
          "M983 " +
          (10 + indexBFCcxPM5Param154 + indexBFCcxPM5Param155) +
          "\nl" +
          indexBFCcxPM5Param154 / 3.13 +
          " -" +
          indexBFCcxPM5Param154 +
          "\nc4,-6.7,10,-10,18,-10 H400000v" +
          (40 + indexBFCcxPM5Param154) +
          "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" +
          (1001 + indexBFCcxPM5Param154) +
          " " +
          indexBFCcxPM5Param155 +
          "h400000v" +
          (40 + indexBFCcxPM5Param154) +
          "h-400000z"
        );
      },
      indexBFCcxPM5Value48 = function (
        indexBFCcxPM5Param147,
        indexBFCcxPM5Param148,
      ) {
        return (
          "M424," +
          (2398 + indexBFCcxPM5Param147 + indexBFCcxPM5Param148) +
          "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" +
          indexBFCcxPM5Param147 / 4.223 +
          " -" +
          indexBFCcxPM5Param147 +
          "c4,-6.7,10,-10,18,-10 H400000\nv" +
          (40 + indexBFCcxPM5Param147) +
          "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" +
          (1001 + indexBFCcxPM5Param147) +
          " " +
          indexBFCcxPM5Param148 +
          "\nh400000v" +
          (40 + indexBFCcxPM5Param147) +
          "h-400000z"
        );
      },
      indexBFCcxPM5Value49 = function (
        indexBFCcxPM5Param160,
        indexBFCcxPM5Param161,
      ) {
        return (
          "M473," +
          (2713 + indexBFCcxPM5Param160 + indexBFCcxPM5Param161) +
          "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" +
          indexBFCcxPM5Param160 / 5.298 +
          " -" +
          indexBFCcxPM5Param160 +
          "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" +
          (40 + indexBFCcxPM5Param160) +
          "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" +
          (1001 + indexBFCcxPM5Param160) +
          " " +
          indexBFCcxPM5Param161 +
          "h400000v" +
          (40 + indexBFCcxPM5Param160) +
          "H1017.7z"
        );
      },
      indexBFCcxPM5Value50 = function (indexBFCcxPM5Param549) {
        var indexBFCcxPM5Value1356 = indexBFCcxPM5Param549 / 2;
        return (
          "M400000 " +
          indexBFCcxPM5Param549 +
          " H0 L" +
          indexBFCcxPM5Value1356 +
          " 0 l65 45 L145 " +
          (indexBFCcxPM5Param549 - 80) +
          " H400000z"
        );
      },
      indexBFCcxPM5Value51 = function (
        indexBFCcxPM5Param244,
        indexBFCcxPM5Param245,
        indexBFCcxPM5Param246,
      ) {
        var indexBFCcxPM5Value1083 =
          indexBFCcxPM5Param246 -
          54 -
          indexBFCcxPM5Param245 -
          indexBFCcxPM5Param244;
        return (
          "M702 " +
          (indexBFCcxPM5Param244 + indexBFCcxPM5Param245) +
          "H400000" +
          (40 + indexBFCcxPM5Param244) +
          "\nH742v" +
          indexBFCcxPM5Value1083 +
          "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " +
          indexBFCcxPM5Param245 +
          "H400000v" +
          (40 + indexBFCcxPM5Param244) +
          "H742z"
        );
      },
      indexBFCcxPM5Value52 = function (
        indexBFCcxPM5Param229,
        indexBFCcxPM5Param230,
        indexBFCcxPM5Param231,
      ) {
        indexBFCcxPM5Param230 = 1e3 * indexBFCcxPM5Param230;
        var indexBFCcxPM5Value1059 = "";
        switch (indexBFCcxPM5Param229) {
          case "sqrtMain":
            indexBFCcxPM5Value1059 = indexBFCcxPM5Value45(
              indexBFCcxPM5Param230,
              indexBFCcxPM5Value44,
            );
            break;
          case "sqrtSize1":
            indexBFCcxPM5Value1059 = indexBFCcxPM5Value46(
              indexBFCcxPM5Param230,
              indexBFCcxPM5Value44,
            );
            break;
          case "sqrtSize2":
            indexBFCcxPM5Value1059 = indexBFCcxPM5Value47(
              indexBFCcxPM5Param230,
              indexBFCcxPM5Value44,
            );
            break;
          case "sqrtSize3":
            indexBFCcxPM5Value1059 = indexBFCcxPM5Value48(
              indexBFCcxPM5Param230,
              indexBFCcxPM5Value44,
            );
            break;
          case "sqrtSize4":
            indexBFCcxPM5Value1059 = indexBFCcxPM5Value49(
              indexBFCcxPM5Param230,
              indexBFCcxPM5Value44,
            );
            break;
          case "sqrtTall":
            indexBFCcxPM5Value1059 = indexBFCcxPM5Value51(
              indexBFCcxPM5Param230,
              indexBFCcxPM5Value44,
              indexBFCcxPM5Param231,
            );
        }
        return indexBFCcxPM5Value1059;
      },
      indexBFCcxPM5Value53 = function (
        indexBFCcxPM5Param74,
        indexBFCcxPM5Param75,
      ) {
        switch (indexBFCcxPM5Param74) {
          case "⎜":
            return (
              "M291 0 H417 V" +
              indexBFCcxPM5Param75 +
              " H291z M291 0 H417 V" +
              indexBFCcxPM5Param75 +
              " H291z"
            );
          case "∣":
            return (
              "M145 0 H188 V" +
              indexBFCcxPM5Param75 +
              " H145z M145 0 H188 V" +
              indexBFCcxPM5Param75 +
              " H145z"
            );
          case "∥":
            return (
              "M145 0 H188 V" +
              indexBFCcxPM5Param75 +
              " H145z M145 0 H188 V" +
              indexBFCcxPM5Param75 +
              " H145z" +
              ("M367 0 H410 V" +
                indexBFCcxPM5Param75 +
                " H367z M367 0 H410 V" +
                indexBFCcxPM5Param75 +
                " H367z")
            );
          case "⎟":
            return (
              "M457 0 H583 V" +
              indexBFCcxPM5Param75 +
              " H457z M457 0 H583 V" +
              indexBFCcxPM5Param75 +
              " H457z"
            );
          case "⎢":
            return (
              "M319 0 H403 V" +
              indexBFCcxPM5Param75 +
              " H319z M319 0 H403 V" +
              indexBFCcxPM5Param75 +
              " H319z"
            );
          case "⎥":
            return (
              "M263 0 H347 V" +
              indexBFCcxPM5Param75 +
              " H263z M263 0 H347 V" +
              indexBFCcxPM5Param75 +
              " H263z"
            );
          case "⎪":
            return (
              "M384 0 H504 V" +
              indexBFCcxPM5Param75 +
              " H384z M384 0 H504 V" +
              indexBFCcxPM5Param75 +
              " H384z"
            );
          case "⏐":
            return (
              "M312 0 H355 V" +
              indexBFCcxPM5Param75 +
              " H312z M312 0 H355 V" +
              indexBFCcxPM5Param75 +
              " H312z"
            );
          case "‖":
            return (
              "M257 0 H300 V" +
              indexBFCcxPM5Param75 +
              " H257z M257 0 H300 V" +
              indexBFCcxPM5Param75 +
              " H257z" +
              ("M478 0 H521 V" +
                indexBFCcxPM5Param75 +
                " H478z M478 0 H521 V" +
                indexBFCcxPM5Param75 +
                " H478z")
            );
          default:
            return "";
        }
      },
      indexBFCcxPM5Value54 = {
        doubleleftarrow:
          "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
        doublerightarrow:
          "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
        leftarrow:
          "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
        leftbrace:
          "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
        leftbraceunder:
          "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
        leftgroup:
          "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
        leftgroupunder:
          "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
        leftharpoon:
          "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
        leftharpoonplus:
          "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
        leftharpoondown:
          "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
        leftharpoondownplus:
          "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
        lefthook:
          "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
        leftlinesegment:
          "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
        leftmapsto:
          "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
        leftToFrom:
          "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
        longequal:
          "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
        midbrace:
          "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
        midbraceunder:
          "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
        oiintSize1:
          "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
        oiintSize2:
          "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
        oiiintSize1:
          "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
        oiiintSize2:
          "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
        rightarrow:
          "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
        rightbrace:
          "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
        rightbraceunder:
          "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
        rightgroup:
          "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
        rightgroupunder:
          "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
        rightharpoon:
          "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
        rightharpoonplus:
          "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
        rightharpoondown:
          "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
        rightharpoondownplus:
          "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
        righthook:
          "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
        rightlinesegment:
          "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
        rightToFrom:
          "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
        twoheadleftarrow:
          "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
        twoheadrightarrow:
          "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
        tilde1:
          "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
        tilde2:
          "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
        tilde3:
          "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
        tilde4:
          "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
        vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
        widehat1:
          "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
        widehat2:
          "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widehat3:
          "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widehat4:
          "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widecheck1:
          "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
        widecheck2:
          "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        widecheck3:
          "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        widecheck4:
          "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        baraboveleftarrow:
          "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
        rightarrowabovebar:
          "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
        baraboveshortleftharpoon:
          "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
        rightharpoonaboveshortbar:
          "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
        shortbaraboveleftharpoon:
          "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
        shortrightharpoonabovebar:
          "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z",
      },
      indexBFCcxPM5Value55 = function (
        indexBFCcxPM5Param9,
        indexBFCcxPM5Param10,
      ) {
        switch (indexBFCcxPM5Param9) {
          case "lbrack":
            return (
              "M403 1759 V84 H666 V0 H319 V1759 v" +
              indexBFCcxPM5Param10 +
              " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" +
              indexBFCcxPM5Param10 +
              " v1759 h84z"
            );
          case "rbrack":
            return (
              "M347 1759 V0 H0 V84 H263 V1759 v" +
              indexBFCcxPM5Param10 +
              " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" +
              indexBFCcxPM5Param10 +
              " v1759 h84z"
            );
          case "vert":
            return (
              "M145 15 v585 v" +
              indexBFCcxPM5Param10 +
              " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
              -indexBFCcxPM5Param10 +
              " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" +
              indexBFCcxPM5Param10 +
              " v585 h43z"
            );
          case "doublevert":
            return (
              "M145 15 v585 v" +
              indexBFCcxPM5Param10 +
              " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
              -indexBFCcxPM5Param10 +
              " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" +
              indexBFCcxPM5Param10 +
              " v585 h43z\nM367 15 v585 v" +
              indexBFCcxPM5Param10 +
              " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" +
              -indexBFCcxPM5Param10 +
              " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" +
              indexBFCcxPM5Param10 +
              " v585 h43z"
            );
          case "lfloor":
            return (
              "M319 602 V0 H403 V602 v" +
              indexBFCcxPM5Param10 +
              " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" +
              indexBFCcxPM5Param10 +
              " v1715 H319z"
            );
          case "rfloor":
            return (
              "M319 602 V0 H403 V602 v" +
              indexBFCcxPM5Param10 +
              " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" +
              indexBFCcxPM5Param10 +
              " v1715 H319z"
            );
          case "lceil":
            return (
              "M403 1759 V84 H666 V0 H319 V1759 v" +
              indexBFCcxPM5Param10 +
              " v602 h84z\nM403 1759 V0 H319 V1759 v" +
              indexBFCcxPM5Param10 +
              " v602 h84z"
            );
          case "rceil":
            return (
              "M347 1759 V0 H0 V84 H263 V1759 v" +
              indexBFCcxPM5Param10 +
              " v602 h84z\nM347 1759 V0 h-84 V1759 v" +
              indexBFCcxPM5Param10 +
              " v602 h84z"
            );
          case "lparen":
            return (
              "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," +
              (indexBFCcxPM5Param10 + 84) +
              "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" +
              (indexBFCcxPM5Param10 + 92) +
              "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z"
            );
          case "rparen":
            return (
              "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," +
              (indexBFCcxPM5Param10 + 9) +
              "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" +
              (indexBFCcxPM5Param10 + 144) +
              "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z"
            );
          default:
            throw Error("Unknown stretchy delimiter.");
        }
      },
      indexBFCcxPM5Value56 = class {
        constructor(indexBFCcxPM5Param287) {
          this.children = undefined;
          this.classes = undefined;
          this.height = undefined;
          this.depth = undefined;
          this.maxFontSize = undefined;
          this.style = undefined;
          this.children = indexBFCcxPM5Param287;
          this.classes = [];
          this.height = 0;
          this.depth = 0;
          this.maxFontSize = 0;
          this.style = {};
        }
        hasClass(indexBFCcxPM5Param823) {
          return indexBFCcxPM5Value23.contains(
            this.classes,
            indexBFCcxPM5Param823,
          );
        }
        toNode() {
          for (
            var indexBFCcxPM5Value1337 = document.createDocumentFragment(),
              indexBFCcxPM5Value1338 = 0;
            indexBFCcxPM5Value1338 < this.children.length;
            indexBFCcxPM5Value1338++
          )
            indexBFCcxPM5Value1337.appendChild(
              this.children[indexBFCcxPM5Value1338].toNode(),
            );
          return indexBFCcxPM5Value1337;
        }
        toMarkup() {
          for (
            var indexBFCcxPM5Value1415 = "", indexBFCcxPM5Value1416 = 0;
            indexBFCcxPM5Value1416 < this.children.length;
            indexBFCcxPM5Value1416++
          )
            indexBFCcxPM5Value1415 +=
              this.children[indexBFCcxPM5Value1416].toMarkup();
          return indexBFCcxPM5Value1415;
        }
        toText() {
          return this.children.map((item) => item.toText()).join("");
        }
      },
      indexBFCcxPM5Value57 = {
        "AMS-Regular": {
          32: [0, 0, 0, 0, 0.25],
          65: [0, 0.68889, 0, 0, 0.72222],
          66: [0, 0.68889, 0, 0, 0.66667],
          67: [0, 0.68889, 0, 0, 0.72222],
          68: [0, 0.68889, 0, 0, 0.72222],
          69: [0, 0.68889, 0, 0, 0.66667],
          70: [0, 0.68889, 0, 0, 0.61111],
          71: [0, 0.68889, 0, 0, 0.77778],
          72: [0, 0.68889, 0, 0, 0.77778],
          73: [0, 0.68889, 0, 0, 0.38889],
          74: [0.16667, 0.68889, 0, 0, 0.5],
          75: [0, 0.68889, 0, 0, 0.77778],
          76: [0, 0.68889, 0, 0, 0.66667],
          77: [0, 0.68889, 0, 0, 0.94445],
          78: [0, 0.68889, 0, 0, 0.72222],
          79: [0.16667, 0.68889, 0, 0, 0.77778],
          80: [0, 0.68889, 0, 0, 0.61111],
          81: [0.16667, 0.68889, 0, 0, 0.77778],
          82: [0, 0.68889, 0, 0, 0.72222],
          83: [0, 0.68889, 0, 0, 0.55556],
          84: [0, 0.68889, 0, 0, 0.66667],
          85: [0, 0.68889, 0, 0, 0.72222],
          86: [0, 0.68889, 0, 0, 0.72222],
          87: [0, 0.68889, 0, 0, 1],
          88: [0, 0.68889, 0, 0, 0.72222],
          89: [0, 0.68889, 0, 0, 0.72222],
          90: [0, 0.68889, 0, 0, 0.66667],
          107: [0, 0.68889, 0, 0, 0.55556],
          160: [0, 0, 0, 0, 0.25],
          165: [0, 0.675, 0.025, 0, 0.75],
          174: [0.15559, 0.69224, 0, 0, 0.94666],
          240: [0, 0.68889, 0, 0, 0.55556],
          295: [0, 0.68889, 0, 0, 0.54028],
          710: [0, 0.825, 0, 0, 2.33334],
          732: [0, 0.9, 0, 0, 2.33334],
          770: [0, 0.825, 0, 0, 2.33334],
          771: [0, 0.9, 0, 0, 2.33334],
          989: [0.08167, 0.58167, 0, 0, 0.77778],
          1008: [0, 0.43056, 0.04028, 0, 0.66667],
          8245: [0, 0.54986, 0, 0, 0.275],
          8463: [0, 0.68889, 0, 0, 0.54028],
          8487: [0, 0.68889, 0, 0, 0.72222],
          8498: [0, 0.68889, 0, 0, 0.55556],
          8502: [0, 0.68889, 0, 0, 0.66667],
          8503: [0, 0.68889, 0, 0, 0.44445],
          8504: [0, 0.68889, 0, 0, 0.66667],
          8513: [0, 0.68889, 0, 0, 0.63889],
          8592: [-0.03598, 0.46402, 0, 0, 0.5],
          8594: [-0.03598, 0.46402, 0, 0, 0.5],
          8602: [-0.13313, 0.36687, 0, 0, 1],
          8603: [-0.13313, 0.36687, 0, 0, 1],
          8606: [0.01354, 0.52239, 0, 0, 1],
          8608: [0.01354, 0.52239, 0, 0, 1],
          8610: [0.01354, 0.52239, 0, 0, 1.11111],
          8611: [0.01354, 0.52239, 0, 0, 1.11111],
          8619: [0, 0.54986, 0, 0, 1],
          8620: [0, 0.54986, 0, 0, 1],
          8621: [-0.13313, 0.37788, 0, 0, 1.38889],
          8622: [-0.13313, 0.36687, 0, 0, 1],
          8624: [0, 0.69224, 0, 0, 0.5],
          8625: [0, 0.69224, 0, 0, 0.5],
          8630: [0, 0.43056, 0, 0, 1],
          8631: [0, 0.43056, 0, 0, 1],
          8634: [0.08198, 0.58198, 0, 0, 0.77778],
          8635: [0.08198, 0.58198, 0, 0, 0.77778],
          8638: [0.19444, 0.69224, 0, 0, 0.41667],
          8639: [0.19444, 0.69224, 0, 0, 0.41667],
          8642: [0.19444, 0.69224, 0, 0, 0.41667],
          8643: [0.19444, 0.69224, 0, 0, 0.41667],
          8644: [0.1808, 0.675, 0, 0, 1],
          8646: [0.1808, 0.675, 0, 0, 1],
          8647: [0.1808, 0.675, 0, 0, 1],
          8648: [0.19444, 0.69224, 0, 0, 0.83334],
          8649: [0.1808, 0.675, 0, 0, 1],
          8650: [0.19444, 0.69224, 0, 0, 0.83334],
          8651: [0.01354, 0.52239, 0, 0, 1],
          8652: [0.01354, 0.52239, 0, 0, 1],
          8653: [-0.13313, 0.36687, 0, 0, 1],
          8654: [-0.13313, 0.36687, 0, 0, 1],
          8655: [-0.13313, 0.36687, 0, 0, 1],
          8666: [0.13667, 0.63667, 0, 0, 1],
          8667: [0.13667, 0.63667, 0, 0, 1],
          8669: [-0.13313, 0.37788, 0, 0, 1],
          8672: [-0.064, 0.437, 0, 0, 1.334],
          8674: [-0.064, 0.437, 0, 0, 1.334],
          8705: [0, 0.825, 0, 0, 0.5],
          8708: [0, 0.68889, 0, 0, 0.55556],
          8709: [0.08167, 0.58167, 0, 0, 0.77778],
          8717: [0, 0.43056, 0, 0, 0.42917],
          8722: [-0.03598, 0.46402, 0, 0, 0.5],
          8724: [0.08198, 0.69224, 0, 0, 0.77778],
          8726: [0.08167, 0.58167, 0, 0, 0.77778],
          8733: [0, 0.69224, 0, 0, 0.77778],
          8736: [0, 0.69224, 0, 0, 0.72222],
          8737: [0, 0.69224, 0, 0, 0.72222],
          8738: [0.03517, 0.52239, 0, 0, 0.72222],
          8739: [0.08167, 0.58167, 0, 0, 0.22222],
          8740: [0.25142, 0.74111, 0, 0, 0.27778],
          8741: [0.08167, 0.58167, 0, 0, 0.38889],
          8742: [0.25142, 0.74111, 0, 0, 0.5],
          8756: [0, 0.69224, 0, 0, 0.66667],
          8757: [0, 0.69224, 0, 0, 0.66667],
          8764: [-0.13313, 0.36687, 0, 0, 0.77778],
          8765: [-0.13313, 0.37788, 0, 0, 0.77778],
          8769: [-0.13313, 0.36687, 0, 0, 0.77778],
          8770: [-0.03625, 0.46375, 0, 0, 0.77778],
          8774: [0.30274, 0.79383, 0, 0, 0.77778],
          8776: [-0.01688, 0.48312, 0, 0, 0.77778],
          8778: [0.08167, 0.58167, 0, 0, 0.77778],
          8782: [0.06062, 0.54986, 0, 0, 0.77778],
          8783: [0.06062, 0.54986, 0, 0, 0.77778],
          8785: [0.08198, 0.58198, 0, 0, 0.77778],
          8786: [0.08198, 0.58198, 0, 0, 0.77778],
          8787: [0.08198, 0.58198, 0, 0, 0.77778],
          8790: [0, 0.69224, 0, 0, 0.77778],
          8791: [0.22958, 0.72958, 0, 0, 0.77778],
          8796: [0.08198, 0.91667, 0, 0, 0.77778],
          8806: [0.25583, 0.75583, 0, 0, 0.77778],
          8807: [0.25583, 0.75583, 0, 0, 0.77778],
          8808: [0.25142, 0.75726, 0, 0, 0.77778],
          8809: [0.25142, 0.75726, 0, 0, 0.77778],
          8812: [0.25583, 0.75583, 0, 0, 0.5],
          8814: [0.20576, 0.70576, 0, 0, 0.77778],
          8815: [0.20576, 0.70576, 0, 0, 0.77778],
          8816: [0.30274, 0.79383, 0, 0, 0.77778],
          8817: [0.30274, 0.79383, 0, 0, 0.77778],
          8818: [0.22958, 0.72958, 0, 0, 0.77778],
          8819: [0.22958, 0.72958, 0, 0, 0.77778],
          8822: [0.1808, 0.675, 0, 0, 0.77778],
          8823: [0.1808, 0.675, 0, 0, 0.77778],
          8828: [0.13667, 0.63667, 0, 0, 0.77778],
          8829: [0.13667, 0.63667, 0, 0, 0.77778],
          8830: [0.22958, 0.72958, 0, 0, 0.77778],
          8831: [0.22958, 0.72958, 0, 0, 0.77778],
          8832: [0.20576, 0.70576, 0, 0, 0.77778],
          8833: [0.20576, 0.70576, 0, 0, 0.77778],
          8840: [0.30274, 0.79383, 0, 0, 0.77778],
          8841: [0.30274, 0.79383, 0, 0, 0.77778],
          8842: [0.13597, 0.63597, 0, 0, 0.77778],
          8843: [0.13597, 0.63597, 0, 0, 0.77778],
          8847: [0.03517, 0.54986, 0, 0, 0.77778],
          8848: [0.03517, 0.54986, 0, 0, 0.77778],
          8858: [0.08198, 0.58198, 0, 0, 0.77778],
          8859: [0.08198, 0.58198, 0, 0, 0.77778],
          8861: [0.08198, 0.58198, 0, 0, 0.77778],
          8862: [0, 0.675, 0, 0, 0.77778],
          8863: [0, 0.675, 0, 0, 0.77778],
          8864: [0, 0.675, 0, 0, 0.77778],
          8865: [0, 0.675, 0, 0, 0.77778],
          8872: [0, 0.69224, 0, 0, 0.61111],
          8873: [0, 0.69224, 0, 0, 0.72222],
          8874: [0, 0.69224, 0, 0, 0.88889],
          8876: [0, 0.68889, 0, 0, 0.61111],
          8877: [0, 0.68889, 0, 0, 0.61111],
          8878: [0, 0.68889, 0, 0, 0.72222],
          8879: [0, 0.68889, 0, 0, 0.72222],
          8882: [0.03517, 0.54986, 0, 0, 0.77778],
          8883: [0.03517, 0.54986, 0, 0, 0.77778],
          8884: [0.13667, 0.63667, 0, 0, 0.77778],
          8885: [0.13667, 0.63667, 0, 0, 0.77778],
          8888: [0, 0.54986, 0, 0, 1.11111],
          8890: [0.19444, 0.43056, 0, 0, 0.55556],
          8891: [0.19444, 0.69224, 0, 0, 0.61111],
          8892: [0.19444, 0.69224, 0, 0, 0.61111],
          8901: [0, 0.54986, 0, 0, 0.27778],
          8903: [0.08167, 0.58167, 0, 0, 0.77778],
          8905: [0.08167, 0.58167, 0, 0, 0.77778],
          8906: [0.08167, 0.58167, 0, 0, 0.77778],
          8907: [0, 0.69224, 0, 0, 0.77778],
          8908: [0, 0.69224, 0, 0, 0.77778],
          8909: [-0.03598, 0.46402, 0, 0, 0.77778],
          8910: [0, 0.54986, 0, 0, 0.76042],
          8911: [0, 0.54986, 0, 0, 0.76042],
          8912: [0.03517, 0.54986, 0, 0, 0.77778],
          8913: [0.03517, 0.54986, 0, 0, 0.77778],
          8914: [0, 0.54986, 0, 0, 0.66667],
          8915: [0, 0.54986, 0, 0, 0.66667],
          8916: [0, 0.69224, 0, 0, 0.66667],
          8918: [0.0391, 0.5391, 0, 0, 0.77778],
          8919: [0.0391, 0.5391, 0, 0, 0.77778],
          8920: [0.03517, 0.54986, 0, 0, 1.33334],
          8921: [0.03517, 0.54986, 0, 0, 1.33334],
          8922: [0.38569, 0.88569, 0, 0, 0.77778],
          8923: [0.38569, 0.88569, 0, 0, 0.77778],
          8926: [0.13667, 0.63667, 0, 0, 0.77778],
          8927: [0.13667, 0.63667, 0, 0, 0.77778],
          8928: [0.30274, 0.79383, 0, 0, 0.77778],
          8929: [0.30274, 0.79383, 0, 0, 0.77778],
          8934: [0.23222, 0.74111, 0, 0, 0.77778],
          8935: [0.23222, 0.74111, 0, 0, 0.77778],
          8936: [0.23222, 0.74111, 0, 0, 0.77778],
          8937: [0.23222, 0.74111, 0, 0, 0.77778],
          8938: [0.20576, 0.70576, 0, 0, 0.77778],
          8939: [0.20576, 0.70576, 0, 0, 0.77778],
          8940: [0.30274, 0.79383, 0, 0, 0.77778],
          8941: [0.30274, 0.79383, 0, 0, 0.77778],
          8994: [0.19444, 0.69224, 0, 0, 0.77778],
          8995: [0.19444, 0.69224, 0, 0, 0.77778],
          9416: [0.15559, 0.69224, 0, 0, 0.90222],
          9484: [0, 0.69224, 0, 0, 0.5],
          9488: [0, 0.69224, 0, 0, 0.5],
          9492: [0, 0.37788, 0, 0, 0.5],
          9496: [0, 0.37788, 0, 0, 0.5],
          9585: [0.19444, 0.68889, 0, 0, 0.88889],
          9586: [0.19444, 0.74111, 0, 0, 0.88889],
          9632: [0, 0.675, 0, 0, 0.77778],
          9633: [0, 0.675, 0, 0, 0.77778],
          9650: [0, 0.54986, 0, 0, 0.72222],
          9651: [0, 0.54986, 0, 0, 0.72222],
          9654: [0.03517, 0.54986, 0, 0, 0.77778],
          9660: [0, 0.54986, 0, 0, 0.72222],
          9661: [0, 0.54986, 0, 0, 0.72222],
          9664: [0.03517, 0.54986, 0, 0, 0.77778],
          9674: [0.11111, 0.69224, 0, 0, 0.66667],
          9733: [0.19444, 0.69224, 0, 0, 0.94445],
          10003: [0, 0.69224, 0, 0, 0.83334],
          10016: [0, 0.69224, 0, 0, 0.83334],
          10731: [0.11111, 0.69224, 0, 0, 0.66667],
          10846: [0.19444, 0.75583, 0, 0, 0.61111],
          10877: [0.13667, 0.63667, 0, 0, 0.77778],
          10878: [0.13667, 0.63667, 0, 0, 0.77778],
          10885: [0.25583, 0.75583, 0, 0, 0.77778],
          10886: [0.25583, 0.75583, 0, 0, 0.77778],
          10887: [0.13597, 0.63597, 0, 0, 0.77778],
          10888: [0.13597, 0.63597, 0, 0, 0.77778],
          10889: [0.26167, 0.75726, 0, 0, 0.77778],
          10890: [0.26167, 0.75726, 0, 0, 0.77778],
          10891: [0.48256, 0.98256, 0, 0, 0.77778],
          10892: [0.48256, 0.98256, 0, 0, 0.77778],
          10901: [0.13667, 0.63667, 0, 0, 0.77778],
          10902: [0.13667, 0.63667, 0, 0, 0.77778],
          10933: [0.25142, 0.75726, 0, 0, 0.77778],
          10934: [0.25142, 0.75726, 0, 0, 0.77778],
          10935: [0.26167, 0.75726, 0, 0, 0.77778],
          10936: [0.26167, 0.75726, 0, 0, 0.77778],
          10937: [0.26167, 0.75726, 0, 0, 0.77778],
          10938: [0.26167, 0.75726, 0, 0, 0.77778],
          10949: [0.25583, 0.75583, 0, 0, 0.77778],
          10950: [0.25583, 0.75583, 0, 0, 0.77778],
          10955: [0.28481, 0.79383, 0, 0, 0.77778],
          10956: [0.28481, 0.79383, 0, 0, 0.77778],
          57350: [0.08167, 0.58167, 0, 0, 0.22222],
          57351: [0.08167, 0.58167, 0, 0, 0.38889],
          57352: [0.08167, 0.58167, 0, 0, 0.77778],
          57353: [0, 0.43056, 0.04028, 0, 0.66667],
          57356: [0.25142, 0.75726, 0, 0, 0.77778],
          57357: [0.25142, 0.75726, 0, 0, 0.77778],
          57358: [0.41951, 0.91951, 0, 0, 0.77778],
          57359: [0.30274, 0.79383, 0, 0, 0.77778],
          57360: [0.30274, 0.79383, 0, 0, 0.77778],
          57361: [0.41951, 0.91951, 0, 0, 0.77778],
          57366: [0.25142, 0.75726, 0, 0, 0.77778],
          57367: [0.25142, 0.75726, 0, 0, 0.77778],
          57368: [0.25142, 0.75726, 0, 0, 0.77778],
          57369: [0.25142, 0.75726, 0, 0, 0.77778],
          57370: [0.13597, 0.63597, 0, 0, 0.77778],
          57371: [0.13597, 0.63597, 0, 0, 0.77778],
        },
        "Caligraphic-Regular": {
          32: [0, 0, 0, 0, 0.25],
          65: [0, 0.68333, 0, 0.19445, 0.79847],
          66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
          67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
          68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
          69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
          70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
          71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
          72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
          73: [0, 0.68333, 0.07382, 0, 0.54452],
          74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
          75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
          76: [0, 0.68333, 0, 0.13889, 0.68972],
          77: [0, 0.68333, 0, 0.13889, 1.2009],
          78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
          79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
          80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
          81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
          82: [0, 0.68333, 0, 0.08334, 0.8475],
          83: [0, 0.68333, 0.075, 0.13889, 0.60556],
          84: [0, 0.68333, 0.25417, 0, 0.54464],
          85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
          86: [0, 0.68333, 0.08222, 0, 0.61278],
          87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
          88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
          89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
          90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
          160: [0, 0, 0, 0, 0.25],
        },
        "Fraktur-Regular": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69141, 0, 0, 0.29574],
          34: [0, 0.69141, 0, 0, 0.21471],
          38: [0, 0.69141, 0, 0, 0.73786],
          39: [0, 0.69141, 0, 0, 0.21201],
          40: [0.24982, 0.74947, 0, 0, 0.38865],
          41: [0.24982, 0.74947, 0, 0, 0.38865],
          42: [0, 0.62119, 0, 0, 0.27764],
          43: [0.08319, 0.58283, 0, 0, 0.75623],
          44: [0, 0.10803, 0, 0, 0.27764],
          45: [0.08319, 0.58283, 0, 0, 0.75623],
          46: [0, 0.10803, 0, 0, 0.27764],
          47: [0.24982, 0.74947, 0, 0, 0.50181],
          48: [0, 0.47534, 0, 0, 0.50181],
          49: [0, 0.47534, 0, 0, 0.50181],
          50: [0, 0.47534, 0, 0, 0.50181],
          51: [0.18906, 0.47534, 0, 0, 0.50181],
          52: [0.18906, 0.47534, 0, 0, 0.50181],
          53: [0.18906, 0.47534, 0, 0, 0.50181],
          54: [0, 0.69141, 0, 0, 0.50181],
          55: [0.18906, 0.47534, 0, 0, 0.50181],
          56: [0, 0.69141, 0, 0, 0.50181],
          57: [0.18906, 0.47534, 0, 0, 0.50181],
          58: [0, 0.47534, 0, 0, 0.21606],
          59: [0.12604, 0.47534, 0, 0, 0.21606],
          61: [-0.13099, 0.36866, 0, 0, 0.75623],
          63: [0, 0.69141, 0, 0, 0.36245],
          65: [0, 0.69141, 0, 0, 0.7176],
          66: [0, 0.69141, 0, 0, 0.88397],
          67: [0, 0.69141, 0, 0, 0.61254],
          68: [0, 0.69141, 0, 0, 0.83158],
          69: [0, 0.69141, 0, 0, 0.66278],
          70: [0.12604, 0.69141, 0, 0, 0.61119],
          71: [0, 0.69141, 0, 0, 0.78539],
          72: [0.06302, 0.69141, 0, 0, 0.7203],
          73: [0, 0.69141, 0, 0, 0.55448],
          74: [0.12604, 0.69141, 0, 0, 0.55231],
          75: [0, 0.69141, 0, 0, 0.66845],
          76: [0, 0.69141, 0, 0, 0.66602],
          77: [0, 0.69141, 0, 0, 1.04953],
          78: [0, 0.69141, 0, 0, 0.83212],
          79: [0, 0.69141, 0, 0, 0.82699],
          80: [0.18906, 0.69141, 0, 0, 0.82753],
          81: [0.03781, 0.69141, 0, 0, 0.82699],
          82: [0, 0.69141, 0, 0, 0.82807],
          83: [0, 0.69141, 0, 0, 0.82861],
          84: [0, 0.69141, 0, 0, 0.66899],
          85: [0, 0.69141, 0, 0, 0.64576],
          86: [0, 0.69141, 0, 0, 0.83131],
          87: [0, 0.69141, 0, 0, 1.04602],
          88: [0, 0.69141, 0, 0, 0.71922],
          89: [0.18906, 0.69141, 0, 0, 0.83293],
          90: [0.12604, 0.69141, 0, 0, 0.60201],
          91: [0.24982, 0.74947, 0, 0, 0.27764],
          93: [0.24982, 0.74947, 0, 0, 0.27764],
          94: [0, 0.69141, 0, 0, 0.49965],
          97: [0, 0.47534, 0, 0, 0.50046],
          98: [0, 0.69141, 0, 0, 0.51315],
          99: [0, 0.47534, 0, 0, 0.38946],
          100: [0, 0.62119, 0, 0, 0.49857],
          101: [0, 0.47534, 0, 0, 0.40053],
          102: [0.18906, 0.69141, 0, 0, 0.32626],
          103: [0.18906, 0.47534, 0, 0, 0.5037],
          104: [0.18906, 0.69141, 0, 0, 0.52126],
          105: [0, 0.69141, 0, 0, 0.27899],
          106: [0, 0.69141, 0, 0, 0.28088],
          107: [0, 0.69141, 0, 0, 0.38946],
          108: [0, 0.69141, 0, 0, 0.27953],
          109: [0, 0.47534, 0, 0, 0.76676],
          110: [0, 0.47534, 0, 0, 0.52666],
          111: [0, 0.47534, 0, 0, 0.48885],
          112: [0.18906, 0.52396, 0, 0, 0.50046],
          113: [0.18906, 0.47534, 0, 0, 0.48912],
          114: [0, 0.47534, 0, 0, 0.38919],
          115: [0, 0.47534, 0, 0, 0.44266],
          116: [0, 0.62119, 0, 0, 0.33301],
          117: [0, 0.47534, 0, 0, 0.5172],
          118: [0, 0.52396, 0, 0, 0.5118],
          119: [0, 0.52396, 0, 0, 0.77351],
          120: [0.18906, 0.47534, 0, 0, 0.38865],
          121: [0.18906, 0.47534, 0, 0, 0.49884],
          122: [0.18906, 0.47534, 0, 0, 0.39054],
          160: [0, 0, 0, 0, 0.25],
          8216: [0, 0.69141, 0, 0, 0.21471],
          8217: [0, 0.69141, 0, 0, 0.21471],
          58112: [0, 0.62119, 0, 0, 0.49749],
          58113: [0, 0.62119, 0, 0, 0.4983],
          58114: [0.18906, 0.69141, 0, 0, 0.33328],
          58115: [0.18906, 0.69141, 0, 0, 0.32923],
          58116: [0.18906, 0.47534, 0, 0, 0.50343],
          58117: [0, 0.69141, 0, 0, 0.33301],
          58118: [0, 0.62119, 0, 0, 0.33409],
          58119: [0, 0.47534, 0, 0, 0.50073],
        },
        "Main-Bold": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0, 0, 0.35],
          34: [0, 0.69444, 0, 0, 0.60278],
          35: [0.19444, 0.69444, 0, 0, 0.95833],
          36: [0.05556, 0.75, 0, 0, 0.575],
          37: [0.05556, 0.75, 0, 0, 0.95833],
          38: [0, 0.69444, 0, 0, 0.89444],
          39: [0, 0.69444, 0, 0, 0.31944],
          40: [0.25, 0.75, 0, 0, 0.44722],
          41: [0.25, 0.75, 0, 0, 0.44722],
          42: [0, 0.75, 0, 0, 0.575],
          43: [0.13333, 0.63333, 0, 0, 0.89444],
          44: [0.19444, 0.15556, 0, 0, 0.31944],
          45: [0, 0.44444, 0, 0, 0.38333],
          46: [0, 0.15556, 0, 0, 0.31944],
          47: [0.25, 0.75, 0, 0, 0.575],
          48: [0, 0.64444, 0, 0, 0.575],
          49: [0, 0.64444, 0, 0, 0.575],
          50: [0, 0.64444, 0, 0, 0.575],
          51: [0, 0.64444, 0, 0, 0.575],
          52: [0, 0.64444, 0, 0, 0.575],
          53: [0, 0.64444, 0, 0, 0.575],
          54: [0, 0.64444, 0, 0, 0.575],
          55: [0, 0.64444, 0, 0, 0.575],
          56: [0, 0.64444, 0, 0, 0.575],
          57: [0, 0.64444, 0, 0, 0.575],
          58: [0, 0.44444, 0, 0, 0.31944],
          59: [0.19444, 0.44444, 0, 0, 0.31944],
          60: [0.08556, 0.58556, 0, 0, 0.89444],
          61: [-0.10889, 0.39111, 0, 0, 0.89444],
          62: [0.08556, 0.58556, 0, 0, 0.89444],
          63: [0, 0.69444, 0, 0, 0.54305],
          64: [0, 0.69444, 0, 0, 0.89444],
          65: [0, 0.68611, 0, 0, 0.86944],
          66: [0, 0.68611, 0, 0, 0.81805],
          67: [0, 0.68611, 0, 0, 0.83055],
          68: [0, 0.68611, 0, 0, 0.88194],
          69: [0, 0.68611, 0, 0, 0.75555],
          70: [0, 0.68611, 0, 0, 0.72361],
          71: [0, 0.68611, 0, 0, 0.90416],
          72: [0, 0.68611, 0, 0, 0.9],
          73: [0, 0.68611, 0, 0, 0.43611],
          74: [0, 0.68611, 0, 0, 0.59444],
          75: [0, 0.68611, 0, 0, 0.90138],
          76: [0, 0.68611, 0, 0, 0.69166],
          77: [0, 0.68611, 0, 0, 1.09166],
          78: [0, 0.68611, 0, 0, 0.9],
          79: [0, 0.68611, 0, 0, 0.86388],
          80: [0, 0.68611, 0, 0, 0.78611],
          81: [0.19444, 0.68611, 0, 0, 0.86388],
          82: [0, 0.68611, 0, 0, 0.8625],
          83: [0, 0.68611, 0, 0, 0.63889],
          84: [0, 0.68611, 0, 0, 0.8],
          85: [0, 0.68611, 0, 0, 0.88472],
          86: [0, 0.68611, 0.01597, 0, 0.86944],
          87: [0, 0.68611, 0.01597, 0, 1.18888],
          88: [0, 0.68611, 0, 0, 0.86944],
          89: [0, 0.68611, 0.02875, 0, 0.86944],
          90: [0, 0.68611, 0, 0, 0.70277],
          91: [0.25, 0.75, 0, 0, 0.31944],
          92: [0.25, 0.75, 0, 0, 0.575],
          93: [0.25, 0.75, 0, 0, 0.31944],
          94: [0, 0.69444, 0, 0, 0.575],
          95: [0.31, 0.13444, 0.03194, 0, 0.575],
          97: [0, 0.44444, 0, 0, 0.55902],
          98: [0, 0.69444, 0, 0, 0.63889],
          99: [0, 0.44444, 0, 0, 0.51111],
          100: [0, 0.69444, 0, 0, 0.63889],
          101: [0, 0.44444, 0, 0, 0.52708],
          102: [0, 0.69444, 0.10903, 0, 0.35139],
          103: [0.19444, 0.44444, 0.01597, 0, 0.575],
          104: [0, 0.69444, 0, 0, 0.63889],
          105: [0, 0.69444, 0, 0, 0.31944],
          106: [0.19444, 0.69444, 0, 0, 0.35139],
          107: [0, 0.69444, 0, 0, 0.60694],
          108: [0, 0.69444, 0, 0, 0.31944],
          109: [0, 0.44444, 0, 0, 0.95833],
          110: [0, 0.44444, 0, 0, 0.63889],
          111: [0, 0.44444, 0, 0, 0.575],
          112: [0.19444, 0.44444, 0, 0, 0.63889],
          113: [0.19444, 0.44444, 0, 0, 0.60694],
          114: [0, 0.44444, 0, 0, 0.47361],
          115: [0, 0.44444, 0, 0, 0.45361],
          116: [0, 0.63492, 0, 0, 0.44722],
          117: [0, 0.44444, 0, 0, 0.63889],
          118: [0, 0.44444, 0.01597, 0, 0.60694],
          119: [0, 0.44444, 0.01597, 0, 0.83055],
          120: [0, 0.44444, 0, 0, 0.60694],
          121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
          122: [0, 0.44444, 0, 0, 0.51111],
          123: [0.25, 0.75, 0, 0, 0.575],
          124: [0.25, 0.75, 0, 0, 0.31944],
          125: [0.25, 0.75, 0, 0, 0.575],
          126: [0.35, 0.34444, 0, 0, 0.575],
          160: [0, 0, 0, 0, 0.25],
          163: [0, 0.69444, 0, 0, 0.86853],
          168: [0, 0.69444, 0, 0, 0.575],
          172: [0, 0.44444, 0, 0, 0.76666],
          176: [0, 0.69444, 0, 0, 0.86944],
          177: [0.13333, 0.63333, 0, 0, 0.89444],
          184: [0.17014, 0, 0, 0, 0.51111],
          198: [0, 0.68611, 0, 0, 1.04166],
          215: [0.13333, 0.63333, 0, 0, 0.89444],
          216: [0.04861, 0.73472, 0, 0, 0.89444],
          223: [0, 0.69444, 0, 0, 0.59722],
          230: [0, 0.44444, 0, 0, 0.83055],
          247: [0.13333, 0.63333, 0, 0, 0.89444],
          248: [0.09722, 0.54167, 0, 0, 0.575],
          305: [0, 0.44444, 0, 0, 0.31944],
          338: [0, 0.68611, 0, 0, 1.16944],
          339: [0, 0.44444, 0, 0, 0.89444],
          567: [0.19444, 0.44444, 0, 0, 0.35139],
          710: [0, 0.69444, 0, 0, 0.575],
          711: [0, 0.63194, 0, 0, 0.575],
          713: [0, 0.59611, 0, 0, 0.575],
          714: [0, 0.69444, 0, 0, 0.575],
          715: [0, 0.69444, 0, 0, 0.575],
          728: [0, 0.69444, 0, 0, 0.575],
          729: [0, 0.69444, 0, 0, 0.31944],
          730: [0, 0.69444, 0, 0, 0.86944],
          732: [0, 0.69444, 0, 0, 0.575],
          733: [0, 0.69444, 0, 0, 0.575],
          915: [0, 0.68611, 0, 0, 0.69166],
          916: [0, 0.68611, 0, 0, 0.95833],
          920: [0, 0.68611, 0, 0, 0.89444],
          923: [0, 0.68611, 0, 0, 0.80555],
          926: [0, 0.68611, 0, 0, 0.76666],
          928: [0, 0.68611, 0, 0, 0.9],
          931: [0, 0.68611, 0, 0, 0.83055],
          933: [0, 0.68611, 0, 0, 0.89444],
          934: [0, 0.68611, 0, 0, 0.83055],
          936: [0, 0.68611, 0, 0, 0.89444],
          937: [0, 0.68611, 0, 0, 0.83055],
          8211: [0, 0.44444, 0.03194, 0, 0.575],
          8212: [0, 0.44444, 0.03194, 0, 1.14999],
          8216: [0, 0.69444, 0, 0, 0.31944],
          8217: [0, 0.69444, 0, 0, 0.31944],
          8220: [0, 0.69444, 0, 0, 0.60278],
          8221: [0, 0.69444, 0, 0, 0.60278],
          8224: [0.19444, 0.69444, 0, 0, 0.51111],
          8225: [0.19444, 0.69444, 0, 0, 0.51111],
          8242: [0, 0.55556, 0, 0, 0.34444],
          8407: [0, 0.72444, 0.15486, 0, 0.575],
          8463: [0, 0.69444, 0, 0, 0.66759],
          8465: [0, 0.69444, 0, 0, 0.83055],
          8467: [0, 0.69444, 0, 0, 0.47361],
          8472: [0.19444, 0.44444, 0, 0, 0.74027],
          8476: [0, 0.69444, 0, 0, 0.83055],
          8501: [0, 0.69444, 0, 0, 0.70277],
          8592: [-0.10889, 0.39111, 0, 0, 1.14999],
          8593: [0.19444, 0.69444, 0, 0, 0.575],
          8594: [-0.10889, 0.39111, 0, 0, 1.14999],
          8595: [0.19444, 0.69444, 0, 0, 0.575],
          8596: [-0.10889, 0.39111, 0, 0, 1.14999],
          8597: [0.25, 0.75, 0, 0, 0.575],
          8598: [0.19444, 0.69444, 0, 0, 1.14999],
          8599: [0.19444, 0.69444, 0, 0, 1.14999],
          8600: [0.19444, 0.69444, 0, 0, 1.14999],
          8601: [0.19444, 0.69444, 0, 0, 1.14999],
          8636: [-0.10889, 0.39111, 0, 0, 1.14999],
          8637: [-0.10889, 0.39111, 0, 0, 1.14999],
          8640: [-0.10889, 0.39111, 0, 0, 1.14999],
          8641: [-0.10889, 0.39111, 0, 0, 1.14999],
          8656: [-0.10889, 0.39111, 0, 0, 1.14999],
          8657: [0.19444, 0.69444, 0, 0, 0.70277],
          8658: [-0.10889, 0.39111, 0, 0, 1.14999],
          8659: [0.19444, 0.69444, 0, 0, 0.70277],
          8660: [-0.10889, 0.39111, 0, 0, 1.14999],
          8661: [0.25, 0.75, 0, 0, 0.70277],
          8704: [0, 0.69444, 0, 0, 0.63889],
          8706: [0, 0.69444, 0.06389, 0, 0.62847],
          8707: [0, 0.69444, 0, 0, 0.63889],
          8709: [0.05556, 0.75, 0, 0, 0.575],
          8711: [0, 0.68611, 0, 0, 0.95833],
          8712: [0.08556, 0.58556, 0, 0, 0.76666],
          8715: [0.08556, 0.58556, 0, 0, 0.76666],
          8722: [0.13333, 0.63333, 0, 0, 0.89444],
          8723: [0.13333, 0.63333, 0, 0, 0.89444],
          8725: [0.25, 0.75, 0, 0, 0.575],
          8726: [0.25, 0.75, 0, 0, 0.575],
          8727: [-0.02778, 0.47222, 0, 0, 0.575],
          8728: [-0.02639, 0.47361, 0, 0, 0.575],
          8729: [-0.02639, 0.47361, 0, 0, 0.575],
          8730: [0.18, 0.82, 0, 0, 0.95833],
          8733: [0, 0.44444, 0, 0, 0.89444],
          8734: [0, 0.44444, 0, 0, 1.14999],
          8736: [0, 0.69224, 0, 0, 0.72222],
          8739: [0.25, 0.75, 0, 0, 0.31944],
          8741: [0.25, 0.75, 0, 0, 0.575],
          8743: [0, 0.55556, 0, 0, 0.76666],
          8744: [0, 0.55556, 0, 0, 0.76666],
          8745: [0, 0.55556, 0, 0, 0.76666],
          8746: [0, 0.55556, 0, 0, 0.76666],
          8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
          8764: [-0.10889, 0.39111, 0, 0, 0.89444],
          8768: [0.19444, 0.69444, 0, 0, 0.31944],
          8771: [0.00222, 0.50222, 0, 0, 0.89444],
          8773: [0.027, 0.638, 0, 0, 0.894],
          8776: [0.02444, 0.52444, 0, 0, 0.89444],
          8781: [0.00222, 0.50222, 0, 0, 0.89444],
          8801: [0.00222, 0.50222, 0, 0, 0.89444],
          8804: [0.19667, 0.69667, 0, 0, 0.89444],
          8805: [0.19667, 0.69667, 0, 0, 0.89444],
          8810: [0.08556, 0.58556, 0, 0, 1.14999],
          8811: [0.08556, 0.58556, 0, 0, 1.14999],
          8826: [0.08556, 0.58556, 0, 0, 0.89444],
          8827: [0.08556, 0.58556, 0, 0, 0.89444],
          8834: [0.08556, 0.58556, 0, 0, 0.89444],
          8835: [0.08556, 0.58556, 0, 0, 0.89444],
          8838: [0.19667, 0.69667, 0, 0, 0.89444],
          8839: [0.19667, 0.69667, 0, 0, 0.89444],
          8846: [0, 0.55556, 0, 0, 0.76666],
          8849: [0.19667, 0.69667, 0, 0, 0.89444],
          8850: [0.19667, 0.69667, 0, 0, 0.89444],
          8851: [0, 0.55556, 0, 0, 0.76666],
          8852: [0, 0.55556, 0, 0, 0.76666],
          8853: [0.13333, 0.63333, 0, 0, 0.89444],
          8854: [0.13333, 0.63333, 0, 0, 0.89444],
          8855: [0.13333, 0.63333, 0, 0, 0.89444],
          8856: [0.13333, 0.63333, 0, 0, 0.89444],
          8857: [0.13333, 0.63333, 0, 0, 0.89444],
          8866: [0, 0.69444, 0, 0, 0.70277],
          8867: [0, 0.69444, 0, 0, 0.70277],
          8868: [0, 0.69444, 0, 0, 0.89444],
          8869: [0, 0.69444, 0, 0, 0.89444],
          8900: [-0.02639, 0.47361, 0, 0, 0.575],
          8901: [-0.02639, 0.47361, 0, 0, 0.31944],
          8902: [-0.02778, 0.47222, 0, 0, 0.575],
          8968: [0.25, 0.75, 0, 0, 0.51111],
          8969: [0.25, 0.75, 0, 0, 0.51111],
          8970: [0.25, 0.75, 0, 0, 0.51111],
          8971: [0.25, 0.75, 0, 0, 0.51111],
          8994: [-0.13889, 0.36111, 0, 0, 1.14999],
          8995: [-0.13889, 0.36111, 0, 0, 1.14999],
          9651: [0.19444, 0.69444, 0, 0, 1.02222],
          9657: [-0.02778, 0.47222, 0, 0, 0.575],
          9661: [0.19444, 0.69444, 0, 0, 1.02222],
          9667: [-0.02778, 0.47222, 0, 0, 0.575],
          9711: [0.19444, 0.69444, 0, 0, 1.14999],
          9824: [0.12963, 0.69444, 0, 0, 0.89444],
          9825: [0.12963, 0.69444, 0, 0, 0.89444],
          9826: [0.12963, 0.69444, 0, 0, 0.89444],
          9827: [0.12963, 0.69444, 0, 0, 0.89444],
          9837: [0, 0.75, 0, 0, 0.44722],
          9838: [0.19444, 0.69444, 0, 0, 0.44722],
          9839: [0.19444, 0.69444, 0, 0, 0.44722],
          10216: [0.25, 0.75, 0, 0, 0.44722],
          10217: [0.25, 0.75, 0, 0, 0.44722],
          10815: [0, 0.68611, 0, 0, 0.9],
          10927: [0.19667, 0.69667, 0, 0, 0.89444],
          10928: [0.19667, 0.69667, 0, 0, 0.89444],
          57376: [0.19444, 0.69444, 0, 0, 0],
        },
        "Main-BoldItalic": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0.11417, 0, 0.38611],
          34: [0, 0.69444, 0.07939, 0, 0.62055],
          35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
          37: [0.05556, 0.75, 0.12861, 0, 0.94444],
          38: [0, 0.69444, 0.08528, 0, 0.88555],
          39: [0, 0.69444, 0.12945, 0, 0.35555],
          40: [0.25, 0.75, 0.15806, 0, 0.47333],
          41: [0.25, 0.75, 0.03306, 0, 0.47333],
          42: [0, 0.75, 0.14333, 0, 0.59111],
          43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
          44: [0.19444, 0.14722, 0, 0, 0.35555],
          45: [0, 0.44444, 0.02611, 0, 0.41444],
          46: [0, 0.14722, 0, 0, 0.35555],
          47: [0.25, 0.75, 0.15806, 0, 0.59111],
          48: [0, 0.64444, 0.13167, 0, 0.59111],
          49: [0, 0.64444, 0.13167, 0, 0.59111],
          50: [0, 0.64444, 0.13167, 0, 0.59111],
          51: [0, 0.64444, 0.13167, 0, 0.59111],
          52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
          53: [0, 0.64444, 0.13167, 0, 0.59111],
          54: [0, 0.64444, 0.13167, 0, 0.59111],
          55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
          56: [0, 0.64444, 0.13167, 0, 0.59111],
          57: [0, 0.64444, 0.13167, 0, 0.59111],
          58: [0, 0.44444, 0.06695, 0, 0.35555],
          59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
          61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
          63: [0, 0.69444, 0.11472, 0, 0.59111],
          64: [0, 0.69444, 0.09208, 0, 0.88555],
          65: [0, 0.68611, 0, 0, 0.86555],
          66: [0, 0.68611, 0.0992, 0, 0.81666],
          67: [0, 0.68611, 0.14208, 0, 0.82666],
          68: [0, 0.68611, 0.09062, 0, 0.87555],
          69: [0, 0.68611, 0.11431, 0, 0.75666],
          70: [0, 0.68611, 0.12903, 0, 0.72722],
          71: [0, 0.68611, 0.07347, 0, 0.89527],
          72: [0, 0.68611, 0.17208, 0, 0.8961],
          73: [0, 0.68611, 0.15681, 0, 0.47166],
          74: [0, 0.68611, 0.145, 0, 0.61055],
          75: [0, 0.68611, 0.14208, 0, 0.89499],
          76: [0, 0.68611, 0, 0, 0.69777],
          77: [0, 0.68611, 0.17208, 0, 1.07277],
          78: [0, 0.68611, 0.17208, 0, 0.8961],
          79: [0, 0.68611, 0.09062, 0, 0.85499],
          80: [0, 0.68611, 0.0992, 0, 0.78721],
          81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
          82: [0, 0.68611, 0.02559, 0, 0.85944],
          83: [0, 0.68611, 0.11264, 0, 0.64999],
          84: [0, 0.68611, 0.12903, 0, 0.7961],
          85: [0, 0.68611, 0.17208, 0, 0.88083],
          86: [0, 0.68611, 0.18625, 0, 0.86555],
          87: [0, 0.68611, 0.18625, 0, 1.15999],
          88: [0, 0.68611, 0.15681, 0, 0.86555],
          89: [0, 0.68611, 0.19803, 0, 0.86555],
          90: [0, 0.68611, 0.14208, 0, 0.70888],
          91: [0.25, 0.75, 0.1875, 0, 0.35611],
          93: [0.25, 0.75, 0.09972, 0, 0.35611],
          94: [0, 0.69444, 0.06709, 0, 0.59111],
          95: [0.31, 0.13444, 0.09811, 0, 0.59111],
          97: [0, 0.44444, 0.09426, 0, 0.59111],
          98: [0, 0.69444, 0.07861, 0, 0.53222],
          99: [0, 0.44444, 0.05222, 0, 0.53222],
          100: [0, 0.69444, 0.10861, 0, 0.59111],
          101: [0, 0.44444, 0.085, 0, 0.53222],
          102: [0.19444, 0.69444, 0.21778, 0, 0.4],
          103: [0.19444, 0.44444, 0.105, 0, 0.53222],
          104: [0, 0.69444, 0.09426, 0, 0.59111],
          105: [0, 0.69326, 0.11387, 0, 0.35555],
          106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
          107: [0, 0.69444, 0.11111, 0, 0.53222],
          108: [0, 0.69444, 0.10861, 0, 0.29666],
          109: [0, 0.44444, 0.09426, 0, 0.94444],
          110: [0, 0.44444, 0.09426, 0, 0.64999],
          111: [0, 0.44444, 0.07861, 0, 0.59111],
          112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
          113: [0.19444, 0.44444, 0.105, 0, 0.53222],
          114: [0, 0.44444, 0.11111, 0, 0.50167],
          115: [0, 0.44444, 0.08167, 0, 0.48694],
          116: [0, 0.63492, 0.09639, 0, 0.385],
          117: [0, 0.44444, 0.09426, 0, 0.62055],
          118: [0, 0.44444, 0.11111, 0, 0.53222],
          119: [0, 0.44444, 0.11111, 0, 0.76777],
          120: [0, 0.44444, 0.12583, 0, 0.56055],
          121: [0.19444, 0.44444, 0.105, 0, 0.56166],
          122: [0, 0.44444, 0.13889, 0, 0.49055],
          126: [0.35, 0.34444, 0.11472, 0, 0.59111],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.69444, 0.11473, 0, 0.59111],
          176: [0, 0.69444, 0, 0, 0.94888],
          184: [0.17014, 0, 0, 0, 0.53222],
          198: [0, 0.68611, 0.11431, 0, 1.02277],
          216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
          223: [0.19444, 0.69444, 0.09736, 0, 0.665],
          230: [0, 0.44444, 0.085, 0, 0.82666],
          248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
          305: [0, 0.44444, 0.09426, 0, 0.35555],
          338: [0, 0.68611, 0.11431, 0, 1.14054],
          339: [0, 0.44444, 0.085, 0, 0.82666],
          567: [0.19444, 0.44444, 0.04611, 0, 0.385],
          710: [0, 0.69444, 0.06709, 0, 0.59111],
          711: [0, 0.63194, 0.08271, 0, 0.59111],
          713: [0, 0.59444, 0.10444, 0, 0.59111],
          714: [0, 0.69444, 0.08528, 0, 0.59111],
          715: [0, 0.69444, 0, 0, 0.59111],
          728: [0, 0.69444, 0.10333, 0, 0.59111],
          729: [0, 0.69444, 0.12945, 0, 0.35555],
          730: [0, 0.69444, 0, 0, 0.94888],
          732: [0, 0.69444, 0.11472, 0, 0.59111],
          733: [0, 0.69444, 0.11472, 0, 0.59111],
          915: [0, 0.68611, 0.12903, 0, 0.69777],
          916: [0, 0.68611, 0, 0, 0.94444],
          920: [0, 0.68611, 0.09062, 0, 0.88555],
          923: [0, 0.68611, 0, 0, 0.80666],
          926: [0, 0.68611, 0.15092, 0, 0.76777],
          928: [0, 0.68611, 0.17208, 0, 0.8961],
          931: [0, 0.68611, 0.11431, 0, 0.82666],
          933: [0, 0.68611, 0.10778, 0, 0.88555],
          934: [0, 0.68611, 0.05632, 0, 0.82666],
          936: [0, 0.68611, 0.10778, 0, 0.88555],
          937: [0, 0.68611, 0.0992, 0, 0.82666],
          8211: [0, 0.44444, 0.09811, 0, 0.59111],
          8212: [0, 0.44444, 0.09811, 0, 1.18221],
          8216: [0, 0.69444, 0.12945, 0, 0.35555],
          8217: [0, 0.69444, 0.12945, 0, 0.35555],
          8220: [0, 0.69444, 0.16772, 0, 0.62055],
          8221: [0, 0.69444, 0.07939, 0, 0.62055],
        },
        "Main-Italic": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0.12417, 0, 0.30667],
          34: [0, 0.69444, 0.06961, 0, 0.51444],
          35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
          37: [0.05556, 0.75, 0.13639, 0, 0.81777],
          38: [0, 0.69444, 0.09694, 0, 0.76666],
          39: [0, 0.69444, 0.12417, 0, 0.30667],
          40: [0.25, 0.75, 0.16194, 0, 0.40889],
          41: [0.25, 0.75, 0.03694, 0, 0.40889],
          42: [0, 0.75, 0.14917, 0, 0.51111],
          43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
          44: [0.19444, 0.10556, 0, 0, 0.30667],
          45: [0, 0.43056, 0.02826, 0, 0.35778],
          46: [0, 0.10556, 0, 0, 0.30667],
          47: [0.25, 0.75, 0.16194, 0, 0.51111],
          48: [0, 0.64444, 0.13556, 0, 0.51111],
          49: [0, 0.64444, 0.13556, 0, 0.51111],
          50: [0, 0.64444, 0.13556, 0, 0.51111],
          51: [0, 0.64444, 0.13556, 0, 0.51111],
          52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
          53: [0, 0.64444, 0.13556, 0, 0.51111],
          54: [0, 0.64444, 0.13556, 0, 0.51111],
          55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
          56: [0, 0.64444, 0.13556, 0, 0.51111],
          57: [0, 0.64444, 0.13556, 0, 0.51111],
          58: [0, 0.43056, 0.0582, 0, 0.30667],
          59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
          61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
          63: [0, 0.69444, 0.1225, 0, 0.51111],
          64: [0, 0.69444, 0.09597, 0, 0.76666],
          65: [0, 0.68333, 0, 0, 0.74333],
          66: [0, 0.68333, 0.10257, 0, 0.70389],
          67: [0, 0.68333, 0.14528, 0, 0.71555],
          68: [0, 0.68333, 0.09403, 0, 0.755],
          69: [0, 0.68333, 0.12028, 0, 0.67833],
          70: [0, 0.68333, 0.13305, 0, 0.65277],
          71: [0, 0.68333, 0.08722, 0, 0.77361],
          72: [0, 0.68333, 0.16389, 0, 0.74333],
          73: [0, 0.68333, 0.15806, 0, 0.38555],
          74: [0, 0.68333, 0.14028, 0, 0.525],
          75: [0, 0.68333, 0.14528, 0, 0.76888],
          76: [0, 0.68333, 0, 0, 0.62722],
          77: [0, 0.68333, 0.16389, 0, 0.89666],
          78: [0, 0.68333, 0.16389, 0, 0.74333],
          79: [0, 0.68333, 0.09403, 0, 0.76666],
          80: [0, 0.68333, 0.10257, 0, 0.67833],
          81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
          82: [0, 0.68333, 0.03868, 0, 0.72944],
          83: [0, 0.68333, 0.11972, 0, 0.56222],
          84: [0, 0.68333, 0.13305, 0, 0.71555],
          85: [0, 0.68333, 0.16389, 0, 0.74333],
          86: [0, 0.68333, 0.18361, 0, 0.74333],
          87: [0, 0.68333, 0.18361, 0, 0.99888],
          88: [0, 0.68333, 0.15806, 0, 0.74333],
          89: [0, 0.68333, 0.19383, 0, 0.74333],
          90: [0, 0.68333, 0.14528, 0, 0.61333],
          91: [0.25, 0.75, 0.1875, 0, 0.30667],
          93: [0.25, 0.75, 0.10528, 0, 0.30667],
          94: [0, 0.69444, 0.06646, 0, 0.51111],
          95: [0.31, 0.12056, 0.09208, 0, 0.51111],
          97: [0, 0.43056, 0.07671, 0, 0.51111],
          98: [0, 0.69444, 0.06312, 0, 0.46],
          99: [0, 0.43056, 0.05653, 0, 0.46],
          100: [0, 0.69444, 0.10333, 0, 0.51111],
          101: [0, 0.43056, 0.07514, 0, 0.46],
          102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
          103: [0.19444, 0.43056, 0.08847, 0, 0.46],
          104: [0, 0.69444, 0.07671, 0, 0.51111],
          105: [0, 0.65536, 0.1019, 0, 0.30667],
          106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
          107: [0, 0.69444, 0.10764, 0, 0.46],
          108: [0, 0.69444, 0.10333, 0, 0.25555],
          109: [0, 0.43056, 0.07671, 0, 0.81777],
          110: [0, 0.43056, 0.07671, 0, 0.56222],
          111: [0, 0.43056, 0.06312, 0, 0.51111],
          112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
          113: [0.19444, 0.43056, 0.08847, 0, 0.46],
          114: [0, 0.43056, 0.10764, 0, 0.42166],
          115: [0, 0.43056, 0.08208, 0, 0.40889],
          116: [0, 0.61508, 0.09486, 0, 0.33222],
          117: [0, 0.43056, 0.07671, 0, 0.53666],
          118: [0, 0.43056, 0.10764, 0, 0.46],
          119: [0, 0.43056, 0.10764, 0, 0.66444],
          120: [0, 0.43056, 0.12042, 0, 0.46389],
          121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
          122: [0, 0.43056, 0.12292, 0, 0.40889],
          126: [0.35, 0.31786, 0.11585, 0, 0.51111],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.66786, 0.10474, 0, 0.51111],
          176: [0, 0.69444, 0, 0, 0.83129],
          184: [0.17014, 0, 0, 0, 0.46],
          198: [0, 0.68333, 0.12028, 0, 0.88277],
          216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
          223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
          230: [0, 0.43056, 0.07514, 0, 0.71555],
          248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
          338: [0, 0.68333, 0.12028, 0, 0.98499],
          339: [0, 0.43056, 0.07514, 0, 0.71555],
          710: [0, 0.69444, 0.06646, 0, 0.51111],
          711: [0, 0.62847, 0.08295, 0, 0.51111],
          713: [0, 0.56167, 0.10333, 0, 0.51111],
          714: [0, 0.69444, 0.09694, 0, 0.51111],
          715: [0, 0.69444, 0, 0, 0.51111],
          728: [0, 0.69444, 0.10806, 0, 0.51111],
          729: [0, 0.66786, 0.11752, 0, 0.30667],
          730: [0, 0.69444, 0, 0, 0.83129],
          732: [0, 0.66786, 0.11585, 0, 0.51111],
          733: [0, 0.69444, 0.1225, 0, 0.51111],
          915: [0, 0.68333, 0.13305, 0, 0.62722],
          916: [0, 0.68333, 0, 0, 0.81777],
          920: [0, 0.68333, 0.09403, 0, 0.76666],
          923: [0, 0.68333, 0, 0, 0.69222],
          926: [0, 0.68333, 0.15294, 0, 0.66444],
          928: [0, 0.68333, 0.16389, 0, 0.74333],
          931: [0, 0.68333, 0.12028, 0, 0.71555],
          933: [0, 0.68333, 0.11111, 0, 0.76666],
          934: [0, 0.68333, 0.05986, 0, 0.71555],
          936: [0, 0.68333, 0.11111, 0, 0.76666],
          937: [0, 0.68333, 0.10257, 0, 0.71555],
          8211: [0, 0.43056, 0.09208, 0, 0.51111],
          8212: [0, 0.43056, 0.09208, 0, 1.02222],
          8216: [0, 0.69444, 0.12417, 0, 0.30667],
          8217: [0, 0.69444, 0.12417, 0, 0.30667],
          8220: [0, 0.69444, 0.1685, 0, 0.51444],
          8221: [0, 0.69444, 0.06961, 0, 0.51444],
          8463: [0, 0.68889, 0, 0, 0.54028],
        },
        "Main-Regular": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0, 0, 0.27778],
          34: [0, 0.69444, 0, 0, 0.5],
          35: [0.19444, 0.69444, 0, 0, 0.83334],
          36: [0.05556, 0.75, 0, 0, 0.5],
          37: [0.05556, 0.75, 0, 0, 0.83334],
          38: [0, 0.69444, 0, 0, 0.77778],
          39: [0, 0.69444, 0, 0, 0.27778],
          40: [0.25, 0.75, 0, 0, 0.38889],
          41: [0.25, 0.75, 0, 0, 0.38889],
          42: [0, 0.75, 0, 0, 0.5],
          43: [0.08333, 0.58333, 0, 0, 0.77778],
          44: [0.19444, 0.10556, 0, 0, 0.27778],
          45: [0, 0.43056, 0, 0, 0.33333],
          46: [0, 0.10556, 0, 0, 0.27778],
          47: [0.25, 0.75, 0, 0, 0.5],
          48: [0, 0.64444, 0, 0, 0.5],
          49: [0, 0.64444, 0, 0, 0.5],
          50: [0, 0.64444, 0, 0, 0.5],
          51: [0, 0.64444, 0, 0, 0.5],
          52: [0, 0.64444, 0, 0, 0.5],
          53: [0, 0.64444, 0, 0, 0.5],
          54: [0, 0.64444, 0, 0, 0.5],
          55: [0, 0.64444, 0, 0, 0.5],
          56: [0, 0.64444, 0, 0, 0.5],
          57: [0, 0.64444, 0, 0, 0.5],
          58: [0, 0.43056, 0, 0, 0.27778],
          59: [0.19444, 0.43056, 0, 0, 0.27778],
          60: [0.0391, 0.5391, 0, 0, 0.77778],
          61: [-0.13313, 0.36687, 0, 0, 0.77778],
          62: [0.0391, 0.5391, 0, 0, 0.77778],
          63: [0, 0.69444, 0, 0, 0.47222],
          64: [0, 0.69444, 0, 0, 0.77778],
          65: [0, 0.68333, 0, 0, 0.75],
          66: [0, 0.68333, 0, 0, 0.70834],
          67: [0, 0.68333, 0, 0, 0.72222],
          68: [0, 0.68333, 0, 0, 0.76389],
          69: [0, 0.68333, 0, 0, 0.68056],
          70: [0, 0.68333, 0, 0, 0.65278],
          71: [0, 0.68333, 0, 0, 0.78472],
          72: [0, 0.68333, 0, 0, 0.75],
          73: [0, 0.68333, 0, 0, 0.36111],
          74: [0, 0.68333, 0, 0, 0.51389],
          75: [0, 0.68333, 0, 0, 0.77778],
          76: [0, 0.68333, 0, 0, 0.625],
          77: [0, 0.68333, 0, 0, 0.91667],
          78: [0, 0.68333, 0, 0, 0.75],
          79: [0, 0.68333, 0, 0, 0.77778],
          80: [0, 0.68333, 0, 0, 0.68056],
          81: [0.19444, 0.68333, 0, 0, 0.77778],
          82: [0, 0.68333, 0, 0, 0.73611],
          83: [0, 0.68333, 0, 0, 0.55556],
          84: [0, 0.68333, 0, 0, 0.72222],
          85: [0, 0.68333, 0, 0, 0.75],
          86: [0, 0.68333, 0.01389, 0, 0.75],
          87: [0, 0.68333, 0.01389, 0, 1.02778],
          88: [0, 0.68333, 0, 0, 0.75],
          89: [0, 0.68333, 0.025, 0, 0.75],
          90: [0, 0.68333, 0, 0, 0.61111],
          91: [0.25, 0.75, 0, 0, 0.27778],
          92: [0.25, 0.75, 0, 0, 0.5],
          93: [0.25, 0.75, 0, 0, 0.27778],
          94: [0, 0.69444, 0, 0, 0.5],
          95: [0.31, 0.12056, 0.02778, 0, 0.5],
          97: [0, 0.43056, 0, 0, 0.5],
          98: [0, 0.69444, 0, 0, 0.55556],
          99: [0, 0.43056, 0, 0, 0.44445],
          100: [0, 0.69444, 0, 0, 0.55556],
          101: [0, 0.43056, 0, 0, 0.44445],
          102: [0, 0.69444, 0.07778, 0, 0.30556],
          103: [0.19444, 0.43056, 0.01389, 0, 0.5],
          104: [0, 0.69444, 0, 0, 0.55556],
          105: [0, 0.66786, 0, 0, 0.27778],
          106: [0.19444, 0.66786, 0, 0, 0.30556],
          107: [0, 0.69444, 0, 0, 0.52778],
          108: [0, 0.69444, 0, 0, 0.27778],
          109: [0, 0.43056, 0, 0, 0.83334],
          110: [0, 0.43056, 0, 0, 0.55556],
          111: [0, 0.43056, 0, 0, 0.5],
          112: [0.19444, 0.43056, 0, 0, 0.55556],
          113: [0.19444, 0.43056, 0, 0, 0.52778],
          114: [0, 0.43056, 0, 0, 0.39167],
          115: [0, 0.43056, 0, 0, 0.39445],
          116: [0, 0.61508, 0, 0, 0.38889],
          117: [0, 0.43056, 0, 0, 0.55556],
          118: [0, 0.43056, 0.01389, 0, 0.52778],
          119: [0, 0.43056, 0.01389, 0, 0.72222],
          120: [0, 0.43056, 0, 0, 0.52778],
          121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
          122: [0, 0.43056, 0, 0, 0.44445],
          123: [0.25, 0.75, 0, 0, 0.5],
          124: [0.25, 0.75, 0, 0, 0.27778],
          125: [0.25, 0.75, 0, 0, 0.5],
          126: [0.35, 0.31786, 0, 0, 0.5],
          160: [0, 0, 0, 0, 0.25],
          163: [0, 0.69444, 0, 0, 0.76909],
          167: [0.19444, 0.69444, 0, 0, 0.44445],
          168: [0, 0.66786, 0, 0, 0.5],
          172: [0, 0.43056, 0, 0, 0.66667],
          176: [0, 0.69444, 0, 0, 0.75],
          177: [0.08333, 0.58333, 0, 0, 0.77778],
          182: [0.19444, 0.69444, 0, 0, 0.61111],
          184: [0.17014, 0, 0, 0, 0.44445],
          198: [0, 0.68333, 0, 0, 0.90278],
          215: [0.08333, 0.58333, 0, 0, 0.77778],
          216: [0.04861, 0.73194, 0, 0, 0.77778],
          223: [0, 0.69444, 0, 0, 0.5],
          230: [0, 0.43056, 0, 0, 0.72222],
          247: [0.08333, 0.58333, 0, 0, 0.77778],
          248: [0.09722, 0.52778, 0, 0, 0.5],
          305: [0, 0.43056, 0, 0, 0.27778],
          338: [0, 0.68333, 0, 0, 1.01389],
          339: [0, 0.43056, 0, 0, 0.77778],
          567: [0.19444, 0.43056, 0, 0, 0.30556],
          710: [0, 0.69444, 0, 0, 0.5],
          711: [0, 0.62847, 0, 0, 0.5],
          713: [0, 0.56778, 0, 0, 0.5],
          714: [0, 0.69444, 0, 0, 0.5],
          715: [0, 0.69444, 0, 0, 0.5],
          728: [0, 0.69444, 0, 0, 0.5],
          729: [0, 0.66786, 0, 0, 0.27778],
          730: [0, 0.69444, 0, 0, 0.75],
          732: [0, 0.66786, 0, 0, 0.5],
          733: [0, 0.69444, 0, 0, 0.5],
          915: [0, 0.68333, 0, 0, 0.625],
          916: [0, 0.68333, 0, 0, 0.83334],
          920: [0, 0.68333, 0, 0, 0.77778],
          923: [0, 0.68333, 0, 0, 0.69445],
          926: [0, 0.68333, 0, 0, 0.66667],
          928: [0, 0.68333, 0, 0, 0.75],
          931: [0, 0.68333, 0, 0, 0.72222],
          933: [0, 0.68333, 0, 0, 0.77778],
          934: [0, 0.68333, 0, 0, 0.72222],
          936: [0, 0.68333, 0, 0, 0.77778],
          937: [0, 0.68333, 0, 0, 0.72222],
          8211: [0, 0.43056, 0.02778, 0, 0.5],
          8212: [0, 0.43056, 0.02778, 0, 1],
          8216: [0, 0.69444, 0, 0, 0.27778],
          8217: [0, 0.69444, 0, 0, 0.27778],
          8220: [0, 0.69444, 0, 0, 0.5],
          8221: [0, 0.69444, 0, 0, 0.5],
          8224: [0.19444, 0.69444, 0, 0, 0.44445],
          8225: [0.19444, 0.69444, 0, 0, 0.44445],
          8230: [0, 0.123, 0, 0, 1.172],
          8242: [0, 0.55556, 0, 0, 0.275],
          8407: [0, 0.71444, 0.15382, 0, 0.5],
          8463: [0, 0.68889, 0, 0, 0.54028],
          8465: [0, 0.69444, 0, 0, 0.72222],
          8467: [0, 0.69444, 0, 0.11111, 0.41667],
          8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
          8476: [0, 0.69444, 0, 0, 0.72222],
          8501: [0, 0.69444, 0, 0, 0.61111],
          8592: [-0.13313, 0.36687, 0, 0, 1],
          8593: [0.19444, 0.69444, 0, 0, 0.5],
          8594: [-0.13313, 0.36687, 0, 0, 1],
          8595: [0.19444, 0.69444, 0, 0, 0.5],
          8596: [-0.13313, 0.36687, 0, 0, 1],
          8597: [0.25, 0.75, 0, 0, 0.5],
          8598: [0.19444, 0.69444, 0, 0, 1],
          8599: [0.19444, 0.69444, 0, 0, 1],
          8600: [0.19444, 0.69444, 0, 0, 1],
          8601: [0.19444, 0.69444, 0, 0, 1],
          8614: [0.011, 0.511, 0, 0, 1],
          8617: [0.011, 0.511, 0, 0, 1.126],
          8618: [0.011, 0.511, 0, 0, 1.126],
          8636: [-0.13313, 0.36687, 0, 0, 1],
          8637: [-0.13313, 0.36687, 0, 0, 1],
          8640: [-0.13313, 0.36687, 0, 0, 1],
          8641: [-0.13313, 0.36687, 0, 0, 1],
          8652: [0.011, 0.671, 0, 0, 1],
          8656: [-0.13313, 0.36687, 0, 0, 1],
          8657: [0.19444, 0.69444, 0, 0, 0.61111],
          8658: [-0.13313, 0.36687, 0, 0, 1],
          8659: [0.19444, 0.69444, 0, 0, 0.61111],
          8660: [-0.13313, 0.36687, 0, 0, 1],
          8661: [0.25, 0.75, 0, 0, 0.61111],
          8704: [0, 0.69444, 0, 0, 0.55556],
          8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
          8707: [0, 0.69444, 0, 0, 0.55556],
          8709: [0.05556, 0.75, 0, 0, 0.5],
          8711: [0, 0.68333, 0, 0, 0.83334],
          8712: [0.0391, 0.5391, 0, 0, 0.66667],
          8715: [0.0391, 0.5391, 0, 0, 0.66667],
          8722: [0.08333, 0.58333, 0, 0, 0.77778],
          8723: [0.08333, 0.58333, 0, 0, 0.77778],
          8725: [0.25, 0.75, 0, 0, 0.5],
          8726: [0.25, 0.75, 0, 0, 0.5],
          8727: [-0.03472, 0.46528, 0, 0, 0.5],
          8728: [-0.05555, 0.44445, 0, 0, 0.5],
          8729: [-0.05555, 0.44445, 0, 0, 0.5],
          8730: [0.2, 0.8, 0, 0, 0.83334],
          8733: [0, 0.43056, 0, 0, 0.77778],
          8734: [0, 0.43056, 0, 0, 1],
          8736: [0, 0.69224, 0, 0, 0.72222],
          8739: [0.25, 0.75, 0, 0, 0.27778],
          8741: [0.25, 0.75, 0, 0, 0.5],
          8743: [0, 0.55556, 0, 0, 0.66667],
          8744: [0, 0.55556, 0, 0, 0.66667],
          8745: [0, 0.55556, 0, 0, 0.66667],
          8746: [0, 0.55556, 0, 0, 0.66667],
          8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
          8764: [-0.13313, 0.36687, 0, 0, 0.77778],
          8768: [0.19444, 0.69444, 0, 0, 0.27778],
          8771: [-0.03625, 0.46375, 0, 0, 0.77778],
          8773: [-0.022, 0.589, 0, 0, 0.778],
          8776: [-0.01688, 0.48312, 0, 0, 0.77778],
          8781: [-0.03625, 0.46375, 0, 0, 0.77778],
          8784: [-0.133, 0.673, 0, 0, 0.778],
          8801: [-0.03625, 0.46375, 0, 0, 0.77778],
          8804: [0.13597, 0.63597, 0, 0, 0.77778],
          8805: [0.13597, 0.63597, 0, 0, 0.77778],
          8810: [0.0391, 0.5391, 0, 0, 1],
          8811: [0.0391, 0.5391, 0, 0, 1],
          8826: [0.0391, 0.5391, 0, 0, 0.77778],
          8827: [0.0391, 0.5391, 0, 0, 0.77778],
          8834: [0.0391, 0.5391, 0, 0, 0.77778],
          8835: [0.0391, 0.5391, 0, 0, 0.77778],
          8838: [0.13597, 0.63597, 0, 0, 0.77778],
          8839: [0.13597, 0.63597, 0, 0, 0.77778],
          8846: [0, 0.55556, 0, 0, 0.66667],
          8849: [0.13597, 0.63597, 0, 0, 0.77778],
          8850: [0.13597, 0.63597, 0, 0, 0.77778],
          8851: [0, 0.55556, 0, 0, 0.66667],
          8852: [0, 0.55556, 0, 0, 0.66667],
          8853: [0.08333, 0.58333, 0, 0, 0.77778],
          8854: [0.08333, 0.58333, 0, 0, 0.77778],
          8855: [0.08333, 0.58333, 0, 0, 0.77778],
          8856: [0.08333, 0.58333, 0, 0, 0.77778],
          8857: [0.08333, 0.58333, 0, 0, 0.77778],
          8866: [0, 0.69444, 0, 0, 0.61111],
          8867: [0, 0.69444, 0, 0, 0.61111],
          8868: [0, 0.69444, 0, 0, 0.77778],
          8869: [0, 0.69444, 0, 0, 0.77778],
          8872: [0.249, 0.75, 0, 0, 0.867],
          8900: [-0.05555, 0.44445, 0, 0, 0.5],
          8901: [-0.05555, 0.44445, 0, 0, 0.27778],
          8902: [-0.03472, 0.46528, 0, 0, 0.5],
          8904: [0.005, 0.505, 0, 0, 0.9],
          8942: [0.03, 0.903, 0, 0, 0.278],
          8943: [-0.19, 0.313, 0, 0, 1.172],
          8945: [-0.1, 0.823, 0, 0, 1.282],
          8968: [0.25, 0.75, 0, 0, 0.44445],
          8969: [0.25, 0.75, 0, 0, 0.44445],
          8970: [0.25, 0.75, 0, 0, 0.44445],
          8971: [0.25, 0.75, 0, 0, 0.44445],
          8994: [-0.14236, 0.35764, 0, 0, 1],
          8995: [-0.14236, 0.35764, 0, 0, 1],
          9136: [0.244, 0.744, 0, 0, 0.412],
          9137: [0.244, 0.745, 0, 0, 0.412],
          9651: [0.19444, 0.69444, 0, 0, 0.88889],
          9657: [-0.03472, 0.46528, 0, 0, 0.5],
          9661: [0.19444, 0.69444, 0, 0, 0.88889],
          9667: [-0.03472, 0.46528, 0, 0, 0.5],
          9711: [0.19444, 0.69444, 0, 0, 1],
          9824: [0.12963, 0.69444, 0, 0, 0.77778],
          9825: [0.12963, 0.69444, 0, 0, 0.77778],
          9826: [0.12963, 0.69444, 0, 0, 0.77778],
          9827: [0.12963, 0.69444, 0, 0, 0.77778],
          9837: [0, 0.75, 0, 0, 0.38889],
          9838: [0.19444, 0.69444, 0, 0, 0.38889],
          9839: [0.19444, 0.69444, 0, 0, 0.38889],
          10216: [0.25, 0.75, 0, 0, 0.38889],
          10217: [0.25, 0.75, 0, 0, 0.38889],
          10222: [0.244, 0.744, 0, 0, 0.412],
          10223: [0.244, 0.745, 0, 0, 0.412],
          10229: [0.011, 0.511, 0, 0, 1.609],
          10230: [0.011, 0.511, 0, 0, 1.638],
          10231: [0.011, 0.511, 0, 0, 1.859],
          10232: [0.024, 0.525, 0, 0, 1.609],
          10233: [0.024, 0.525, 0, 0, 1.638],
          10234: [0.024, 0.525, 0, 0, 1.858],
          10236: [0.011, 0.511, 0, 0, 1.638],
          10815: [0, 0.68333, 0, 0, 0.75],
          10927: [0.13597, 0.63597, 0, 0, 0.77778],
          10928: [0.13597, 0.63597, 0, 0, 0.77778],
          57376: [0.19444, 0.69444, 0, 0, 0],
        },
        "Math-BoldItalic": {
          32: [0, 0, 0, 0, 0.25],
          48: [0, 0.44444, 0, 0, 0.575],
          49: [0, 0.44444, 0, 0, 0.575],
          50: [0, 0.44444, 0, 0, 0.575],
          51: [0.19444, 0.44444, 0, 0, 0.575],
          52: [0.19444, 0.44444, 0, 0, 0.575],
          53: [0.19444, 0.44444, 0, 0, 0.575],
          54: [0, 0.64444, 0, 0, 0.575],
          55: [0.19444, 0.44444, 0, 0, 0.575],
          56: [0, 0.64444, 0, 0, 0.575],
          57: [0.19444, 0.44444, 0, 0, 0.575],
          65: [0, 0.68611, 0, 0, 0.86944],
          66: [0, 0.68611, 0.04835, 0, 0.8664],
          67: [0, 0.68611, 0.06979, 0, 0.81694],
          68: [0, 0.68611, 0.03194, 0, 0.93812],
          69: [0, 0.68611, 0.05451, 0, 0.81007],
          70: [0, 0.68611, 0.15972, 0, 0.68889],
          71: [0, 0.68611, 0, 0, 0.88673],
          72: [0, 0.68611, 0.08229, 0, 0.98229],
          73: [0, 0.68611, 0.07778, 0, 0.51111],
          74: [0, 0.68611, 0.10069, 0, 0.63125],
          75: [0, 0.68611, 0.06979, 0, 0.97118],
          76: [0, 0.68611, 0, 0, 0.75555],
          77: [0, 0.68611, 0.11424, 0, 1.14201],
          78: [0, 0.68611, 0.11424, 0, 0.95034],
          79: [0, 0.68611, 0.03194, 0, 0.83666],
          80: [0, 0.68611, 0.15972, 0, 0.72309],
          81: [0.19444, 0.68611, 0, 0, 0.86861],
          82: [0, 0.68611, 0.00421, 0, 0.87235],
          83: [0, 0.68611, 0.05382, 0, 0.69271],
          84: [0, 0.68611, 0.15972, 0, 0.63663],
          85: [0, 0.68611, 0.11424, 0, 0.80027],
          86: [0, 0.68611, 0.25555, 0, 0.67778],
          87: [0, 0.68611, 0.15972, 0, 1.09305],
          88: [0, 0.68611, 0.07778, 0, 0.94722],
          89: [0, 0.68611, 0.25555, 0, 0.67458],
          90: [0, 0.68611, 0.06979, 0, 0.77257],
          97: [0, 0.44444, 0, 0, 0.63287],
          98: [0, 0.69444, 0, 0, 0.52083],
          99: [0, 0.44444, 0, 0, 0.51342],
          100: [0, 0.69444, 0, 0, 0.60972],
          101: [0, 0.44444, 0, 0, 0.55361],
          102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
          103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
          104: [0, 0.69444, 0, 0, 0.66759],
          105: [0, 0.69326, 0, 0, 0.4048],
          106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
          107: [0, 0.69444, 0.01852, 0, 0.6037],
          108: [0, 0.69444, 0.0088, 0, 0.34815],
          109: [0, 0.44444, 0, 0, 1.0324],
          110: [0, 0.44444, 0, 0, 0.71296],
          111: [0, 0.44444, 0, 0, 0.58472],
          112: [0.19444, 0.44444, 0, 0, 0.60092],
          113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
          114: [0, 0.44444, 0.03194, 0, 0.5287],
          115: [0, 0.44444, 0, 0, 0.53125],
          116: [0, 0.63492, 0, 0, 0.41528],
          117: [0, 0.44444, 0, 0, 0.68102],
          118: [0, 0.44444, 0.03704, 0, 0.56666],
          119: [0, 0.44444, 0.02778, 0, 0.83148],
          120: [0, 0.44444, 0, 0, 0.65903],
          121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
          122: [0, 0.44444, 0.04213, 0, 0.55509],
          160: [0, 0, 0, 0, 0.25],
          915: [0, 0.68611, 0.15972, 0, 0.65694],
          916: [0, 0.68611, 0, 0, 0.95833],
          920: [0, 0.68611, 0.03194, 0, 0.86722],
          923: [0, 0.68611, 0, 0, 0.80555],
          926: [0, 0.68611, 0.07458, 0, 0.84125],
          928: [0, 0.68611, 0.08229, 0, 0.98229],
          931: [0, 0.68611, 0.05451, 0, 0.88507],
          933: [0, 0.68611, 0.15972, 0, 0.67083],
          934: [0, 0.68611, 0, 0, 0.76666],
          936: [0, 0.68611, 0.11653, 0, 0.71402],
          937: [0, 0.68611, 0.04835, 0, 0.8789],
          945: [0, 0.44444, 0, 0, 0.76064],
          946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
          947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
          948: [0, 0.69444, 0.03819, 0, 0.52222],
          949: [0, 0.44444, 0, 0, 0.52882],
          950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
          951: [0.19444, 0.44444, 0.03704, 0, 0.6],
          952: [0, 0.69444, 0.03194, 0, 0.5618],
          953: [0, 0.44444, 0, 0, 0.41204],
          954: [0, 0.44444, 0, 0, 0.66759],
          955: [0, 0.69444, 0, 0, 0.67083],
          956: [0.19444, 0.44444, 0, 0, 0.70787],
          957: [0, 0.44444, 0.06898, 0, 0.57685],
          958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
          959: [0, 0.44444, 0, 0, 0.58472],
          960: [0, 0.44444, 0.03704, 0, 0.68241],
          961: [0.19444, 0.44444, 0, 0, 0.6118],
          962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
          963: [0, 0.44444, 0.03704, 0, 0.68588],
          964: [0, 0.44444, 0.13472, 0, 0.52083],
          965: [0, 0.44444, 0.03704, 0, 0.63055],
          966: [0.19444, 0.44444, 0, 0, 0.74722],
          967: [0.19444, 0.44444, 0, 0, 0.71805],
          968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
          969: [0, 0.44444, 0.03704, 0, 0.71782],
          977: [0, 0.69444, 0, 0, 0.69155],
          981: [0.19444, 0.69444, 0, 0, 0.7125],
          982: [0, 0.44444, 0.03194, 0, 0.975],
          1009: [0.19444, 0.44444, 0, 0, 0.6118],
          1013: [0, 0.44444, 0, 0, 0.48333],
          57649: [0, 0.44444, 0, 0, 0.39352],
          57911: [0.19444, 0.44444, 0, 0, 0.43889],
        },
        "Math-Italic": {
          32: [0, 0, 0, 0, 0.25],
          48: [0, 0.43056, 0, 0, 0.5],
          49: [0, 0.43056, 0, 0, 0.5],
          50: [0, 0.43056, 0, 0, 0.5],
          51: [0.19444, 0.43056, 0, 0, 0.5],
          52: [0.19444, 0.43056, 0, 0, 0.5],
          53: [0.19444, 0.43056, 0, 0, 0.5],
          54: [0, 0.64444, 0, 0, 0.5],
          55: [0.19444, 0.43056, 0, 0, 0.5],
          56: [0, 0.64444, 0, 0, 0.5],
          57: [0.19444, 0.43056, 0, 0, 0.5],
          65: [0, 0.68333, 0, 0.13889, 0.75],
          66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
          67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
          68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
          69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
          70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
          71: [0, 0.68333, 0, 0.08334, 0.78625],
          72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
          73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
          74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
          75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
          76: [0, 0.68333, 0, 0.02778, 0.68056],
          77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
          78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
          79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
          80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
          81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
          82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
          83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
          84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
          85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
          86: [0, 0.68333, 0.22222, 0, 0.58333],
          87: [0, 0.68333, 0.13889, 0, 0.94445],
          88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
          89: [0, 0.68333, 0.22222, 0, 0.58056],
          90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
          97: [0, 0.43056, 0, 0, 0.52859],
          98: [0, 0.69444, 0, 0, 0.42917],
          99: [0, 0.43056, 0, 0.05556, 0.43276],
          100: [0, 0.69444, 0, 0.16667, 0.52049],
          101: [0, 0.43056, 0, 0.05556, 0.46563],
          102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
          103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
          104: [0, 0.69444, 0, 0, 0.57616],
          105: [0, 0.65952, 0, 0, 0.34451],
          106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
          107: [0, 0.69444, 0.03148, 0, 0.5206],
          108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
          109: [0, 0.43056, 0, 0, 0.87801],
          110: [0, 0.43056, 0, 0, 0.60023],
          111: [0, 0.43056, 0, 0.05556, 0.48472],
          112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
          113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
          114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
          115: [0, 0.43056, 0, 0.05556, 0.46875],
          116: [0, 0.61508, 0, 0.08334, 0.36111],
          117: [0, 0.43056, 0, 0.02778, 0.57246],
          118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
          119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
          120: [0, 0.43056, 0, 0.02778, 0.57153],
          121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
          122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
          160: [0, 0, 0, 0, 0.25],
          915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
          916: [0, 0.68333, 0, 0.16667, 0.83334],
          920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
          923: [0, 0.68333, 0, 0.16667, 0.69445],
          926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
          928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
          931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
          933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
          934: [0, 0.68333, 0, 0.08334, 0.66667],
          936: [0, 0.68333, 0.11, 0.05556, 0.61222],
          937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
          945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
          946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
          947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
          948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
          949: [0, 0.43056, 0, 0.08334, 0.46632],
          950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
          951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
          952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
          953: [0, 0.43056, 0, 0.05556, 0.35394],
          954: [0, 0.43056, 0, 0, 0.57616],
          955: [0, 0.69444, 0, 0, 0.58334],
          956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
          957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
          958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
          959: [0, 0.43056, 0, 0.05556, 0.48472],
          960: [0, 0.43056, 0.03588, 0, 0.57003],
          961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
          962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
          963: [0, 0.43056, 0.03588, 0, 0.57141],
          964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
          965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
          966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
          967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
          968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
          969: [0, 0.43056, 0.03588, 0, 0.62245],
          977: [0, 0.69444, 0, 0.08334, 0.59144],
          981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
          982: [0, 0.43056, 0.02778, 0, 0.82813],
          1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
          1013: [0, 0.43056, 0, 0.05556, 0.4059],
          57649: [0, 0.43056, 0, 0.02778, 0.32246],
          57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
        },
        "SansSerif-Bold": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0, 0, 0.36667],
          34: [0, 0.69444, 0, 0, 0.55834],
          35: [0.19444, 0.69444, 0, 0, 0.91667],
          36: [0.05556, 0.75, 0, 0, 0.55],
          37: [0.05556, 0.75, 0, 0, 1.02912],
          38: [0, 0.69444, 0, 0, 0.83056],
          39: [0, 0.69444, 0, 0, 0.30556],
          40: [0.25, 0.75, 0, 0, 0.42778],
          41: [0.25, 0.75, 0, 0, 0.42778],
          42: [0, 0.75, 0, 0, 0.55],
          43: [0.11667, 0.61667, 0, 0, 0.85556],
          44: [0.10556, 0.13056, 0, 0, 0.30556],
          45: [0, 0.45833, 0, 0, 0.36667],
          46: [0, 0.13056, 0, 0, 0.30556],
          47: [0.25, 0.75, 0, 0, 0.55],
          48: [0, 0.69444, 0, 0, 0.55],
          49: [0, 0.69444, 0, 0, 0.55],
          50: [0, 0.69444, 0, 0, 0.55],
          51: [0, 0.69444, 0, 0, 0.55],
          52: [0, 0.69444, 0, 0, 0.55],
          53: [0, 0.69444, 0, 0, 0.55],
          54: [0, 0.69444, 0, 0, 0.55],
          55: [0, 0.69444, 0, 0, 0.55],
          56: [0, 0.69444, 0, 0, 0.55],
          57: [0, 0.69444, 0, 0, 0.55],
          58: [0, 0.45833, 0, 0, 0.30556],
          59: [0.10556, 0.45833, 0, 0, 0.30556],
          61: [-0.09375, 0.40625, 0, 0, 0.85556],
          63: [0, 0.69444, 0, 0, 0.51945],
          64: [0, 0.69444, 0, 0, 0.73334],
          65: [0, 0.69444, 0, 0, 0.73334],
          66: [0, 0.69444, 0, 0, 0.73334],
          67: [0, 0.69444, 0, 0, 0.70278],
          68: [0, 0.69444, 0, 0, 0.79445],
          69: [0, 0.69444, 0, 0, 0.64167],
          70: [0, 0.69444, 0, 0, 0.61111],
          71: [0, 0.69444, 0, 0, 0.73334],
          72: [0, 0.69444, 0, 0, 0.79445],
          73: [0, 0.69444, 0, 0, 0.33056],
          74: [0, 0.69444, 0, 0, 0.51945],
          75: [0, 0.69444, 0, 0, 0.76389],
          76: [0, 0.69444, 0, 0, 0.58056],
          77: [0, 0.69444, 0, 0, 0.97778],
          78: [0, 0.69444, 0, 0, 0.79445],
          79: [0, 0.69444, 0, 0, 0.79445],
          80: [0, 0.69444, 0, 0, 0.70278],
          81: [0.10556, 0.69444, 0, 0, 0.79445],
          82: [0, 0.69444, 0, 0, 0.70278],
          83: [0, 0.69444, 0, 0, 0.61111],
          84: [0, 0.69444, 0, 0, 0.73334],
          85: [0, 0.69444, 0, 0, 0.76389],
          86: [0, 0.69444, 0.01528, 0, 0.73334],
          87: [0, 0.69444, 0.01528, 0, 1.03889],
          88: [0, 0.69444, 0, 0, 0.73334],
          89: [0, 0.69444, 0.0275, 0, 0.73334],
          90: [0, 0.69444, 0, 0, 0.67223],
          91: [0.25, 0.75, 0, 0, 0.34306],
          93: [0.25, 0.75, 0, 0, 0.34306],
          94: [0, 0.69444, 0, 0, 0.55],
          95: [0.35, 0.10833, 0.03056, 0, 0.55],
          97: [0, 0.45833, 0, 0, 0.525],
          98: [0, 0.69444, 0, 0, 0.56111],
          99: [0, 0.45833, 0, 0, 0.48889],
          100: [0, 0.69444, 0, 0, 0.56111],
          101: [0, 0.45833, 0, 0, 0.51111],
          102: [0, 0.69444, 0.07639, 0, 0.33611],
          103: [0.19444, 0.45833, 0.01528, 0, 0.55],
          104: [0, 0.69444, 0, 0, 0.56111],
          105: [0, 0.69444, 0, 0, 0.25556],
          106: [0.19444, 0.69444, 0, 0, 0.28611],
          107: [0, 0.69444, 0, 0, 0.53056],
          108: [0, 0.69444, 0, 0, 0.25556],
          109: [0, 0.45833, 0, 0, 0.86667],
          110: [0, 0.45833, 0, 0, 0.56111],
          111: [0, 0.45833, 0, 0, 0.55],
          112: [0.19444, 0.45833, 0, 0, 0.56111],
          113: [0.19444, 0.45833, 0, 0, 0.56111],
          114: [0, 0.45833, 0.01528, 0, 0.37222],
          115: [0, 0.45833, 0, 0, 0.42167],
          116: [0, 0.58929, 0, 0, 0.40417],
          117: [0, 0.45833, 0, 0, 0.56111],
          118: [0, 0.45833, 0.01528, 0, 0.5],
          119: [0, 0.45833, 0.01528, 0, 0.74445],
          120: [0, 0.45833, 0, 0, 0.5],
          121: [0.19444, 0.45833, 0.01528, 0, 0.5],
          122: [0, 0.45833, 0, 0, 0.47639],
          126: [0.35, 0.34444, 0, 0, 0.55],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.69444, 0, 0, 0.55],
          176: [0, 0.69444, 0, 0, 0.73334],
          180: [0, 0.69444, 0, 0, 0.55],
          184: [0.17014, 0, 0, 0, 0.48889],
          305: [0, 0.45833, 0, 0, 0.25556],
          567: [0.19444, 0.45833, 0, 0, 0.28611],
          710: [0, 0.69444, 0, 0, 0.55],
          711: [0, 0.63542, 0, 0, 0.55],
          713: [0, 0.63778, 0, 0, 0.55],
          728: [0, 0.69444, 0, 0, 0.55],
          729: [0, 0.69444, 0, 0, 0.30556],
          730: [0, 0.69444, 0, 0, 0.73334],
          732: [0, 0.69444, 0, 0, 0.55],
          733: [0, 0.69444, 0, 0, 0.55],
          915: [0, 0.69444, 0, 0, 0.58056],
          916: [0, 0.69444, 0, 0, 0.91667],
          920: [0, 0.69444, 0, 0, 0.85556],
          923: [0, 0.69444, 0, 0, 0.67223],
          926: [0, 0.69444, 0, 0, 0.73334],
          928: [0, 0.69444, 0, 0, 0.79445],
          931: [0, 0.69444, 0, 0, 0.79445],
          933: [0, 0.69444, 0, 0, 0.85556],
          934: [0, 0.69444, 0, 0, 0.79445],
          936: [0, 0.69444, 0, 0, 0.85556],
          937: [0, 0.69444, 0, 0, 0.79445],
          8211: [0, 0.45833, 0.03056, 0, 0.55],
          8212: [0, 0.45833, 0.03056, 0, 1.10001],
          8216: [0, 0.69444, 0, 0, 0.30556],
          8217: [0, 0.69444, 0, 0, 0.30556],
          8220: [0, 0.69444, 0, 0, 0.55834],
          8221: [0, 0.69444, 0, 0, 0.55834],
        },
        "SansSerif-Italic": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0.05733, 0, 0.31945],
          34: [0, 0.69444, 0.00316, 0, 0.5],
          35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
          36: [0.05556, 0.75, 0.11156, 0, 0.5],
          37: [0.05556, 0.75, 0.03126, 0, 0.83334],
          38: [0, 0.69444, 0.03058, 0, 0.75834],
          39: [0, 0.69444, 0.07816, 0, 0.27778],
          40: [0.25, 0.75, 0.13164, 0, 0.38889],
          41: [0.25, 0.75, 0.02536, 0, 0.38889],
          42: [0, 0.75, 0.11775, 0, 0.5],
          43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
          44: [0.125, 0.08333, 0, 0, 0.27778],
          45: [0, 0.44444, 0.01946, 0, 0.33333],
          46: [0, 0.08333, 0, 0, 0.27778],
          47: [0.25, 0.75, 0.13164, 0, 0.5],
          48: [0, 0.65556, 0.11156, 0, 0.5],
          49: [0, 0.65556, 0.11156, 0, 0.5],
          50: [0, 0.65556, 0.11156, 0, 0.5],
          51: [0, 0.65556, 0.11156, 0, 0.5],
          52: [0, 0.65556, 0.11156, 0, 0.5],
          53: [0, 0.65556, 0.11156, 0, 0.5],
          54: [0, 0.65556, 0.11156, 0, 0.5],
          55: [0, 0.65556, 0.11156, 0, 0.5],
          56: [0, 0.65556, 0.11156, 0, 0.5],
          57: [0, 0.65556, 0.11156, 0, 0.5],
          58: [0, 0.44444, 0.02502, 0, 0.27778],
          59: [0.125, 0.44444, 0.02502, 0, 0.27778],
          61: [-0.13, 0.37, 0.05087, 0, 0.77778],
          63: [0, 0.69444, 0.11809, 0, 0.47222],
          64: [0, 0.69444, 0.07555, 0, 0.66667],
          65: [0, 0.69444, 0, 0, 0.66667],
          66: [0, 0.69444, 0.08293, 0, 0.66667],
          67: [0, 0.69444, 0.11983, 0, 0.63889],
          68: [0, 0.69444, 0.07555, 0, 0.72223],
          69: [0, 0.69444, 0.11983, 0, 0.59722],
          70: [0, 0.69444, 0.13372, 0, 0.56945],
          71: [0, 0.69444, 0.11983, 0, 0.66667],
          72: [0, 0.69444, 0.08094, 0, 0.70834],
          73: [0, 0.69444, 0.13372, 0, 0.27778],
          74: [0, 0.69444, 0.08094, 0, 0.47222],
          75: [0, 0.69444, 0.11983, 0, 0.69445],
          76: [0, 0.69444, 0, 0, 0.54167],
          77: [0, 0.69444, 0.08094, 0, 0.875],
          78: [0, 0.69444, 0.08094, 0, 0.70834],
          79: [0, 0.69444, 0.07555, 0, 0.73611],
          80: [0, 0.69444, 0.08293, 0, 0.63889],
          81: [0.125, 0.69444, 0.07555, 0, 0.73611],
          82: [0, 0.69444, 0.08293, 0, 0.64584],
          83: [0, 0.69444, 0.09205, 0, 0.55556],
          84: [0, 0.69444, 0.13372, 0, 0.68056],
          85: [0, 0.69444, 0.08094, 0, 0.6875],
          86: [0, 0.69444, 0.1615, 0, 0.66667],
          87: [0, 0.69444, 0.1615, 0, 0.94445],
          88: [0, 0.69444, 0.13372, 0, 0.66667],
          89: [0, 0.69444, 0.17261, 0, 0.66667],
          90: [0, 0.69444, 0.11983, 0, 0.61111],
          91: [0.25, 0.75, 0.15942, 0, 0.28889],
          93: [0.25, 0.75, 0.08719, 0, 0.28889],
          94: [0, 0.69444, 0.0799, 0, 0.5],
          95: [0.35, 0.09444, 0.08616, 0, 0.5],
          97: [0, 0.44444, 0.00981, 0, 0.48056],
          98: [0, 0.69444, 0.03057, 0, 0.51667],
          99: [0, 0.44444, 0.08336, 0, 0.44445],
          100: [0, 0.69444, 0.09483, 0, 0.51667],
          101: [0, 0.44444, 0.06778, 0, 0.44445],
          102: [0, 0.69444, 0.21705, 0, 0.30556],
          103: [0.19444, 0.44444, 0.10836, 0, 0.5],
          104: [0, 0.69444, 0.01778, 0, 0.51667],
          105: [0, 0.67937, 0.09718, 0, 0.23889],
          106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
          107: [0, 0.69444, 0.08336, 0, 0.48889],
          108: [0, 0.69444, 0.09483, 0, 0.23889],
          109: [0, 0.44444, 0.01778, 0, 0.79445],
          110: [0, 0.44444, 0.01778, 0, 0.51667],
          111: [0, 0.44444, 0.06613, 0, 0.5],
          112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
          113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
          114: [0, 0.44444, 0.10836, 0, 0.34167],
          115: [0, 0.44444, 0.0778, 0, 0.38333],
          116: [0, 0.57143, 0.07225, 0, 0.36111],
          117: [0, 0.44444, 0.04169, 0, 0.51667],
          118: [0, 0.44444, 0.10836, 0, 0.46111],
          119: [0, 0.44444, 0.10836, 0, 0.68334],
          120: [0, 0.44444, 0.09169, 0, 0.46111],
          121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
          122: [0, 0.44444, 0.08752, 0, 0.43472],
          126: [0.35, 0.32659, 0.08826, 0, 0.5],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.67937, 0.06385, 0, 0.5],
          176: [0, 0.69444, 0, 0, 0.73752],
          184: [0.17014, 0, 0, 0, 0.44445],
          305: [0, 0.44444, 0.04169, 0, 0.23889],
          567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
          710: [0, 0.69444, 0.0799, 0, 0.5],
          711: [0, 0.63194, 0.08432, 0, 0.5],
          713: [0, 0.60889, 0.08776, 0, 0.5],
          714: [0, 0.69444, 0.09205, 0, 0.5],
          715: [0, 0.69444, 0, 0, 0.5],
          728: [0, 0.69444, 0.09483, 0, 0.5],
          729: [0, 0.67937, 0.07774, 0, 0.27778],
          730: [0, 0.69444, 0, 0, 0.73752],
          732: [0, 0.67659, 0.08826, 0, 0.5],
          733: [0, 0.69444, 0.09205, 0, 0.5],
          915: [0, 0.69444, 0.13372, 0, 0.54167],
          916: [0, 0.69444, 0, 0, 0.83334],
          920: [0, 0.69444, 0.07555, 0, 0.77778],
          923: [0, 0.69444, 0, 0, 0.61111],
          926: [0, 0.69444, 0.12816, 0, 0.66667],
          928: [0, 0.69444, 0.08094, 0, 0.70834],
          931: [0, 0.69444, 0.11983, 0, 0.72222],
          933: [0, 0.69444, 0.09031, 0, 0.77778],
          934: [0, 0.69444, 0.04603, 0, 0.72222],
          936: [0, 0.69444, 0.09031, 0, 0.77778],
          937: [0, 0.69444, 0.08293, 0, 0.72222],
          8211: [0, 0.44444, 0.08616, 0, 0.5],
          8212: [0, 0.44444, 0.08616, 0, 1],
          8216: [0, 0.69444, 0.07816, 0, 0.27778],
          8217: [0, 0.69444, 0.07816, 0, 0.27778],
          8220: [0, 0.69444, 0.14205, 0, 0.5],
          8221: [0, 0.69444, 0.00316, 0, 0.5],
        },
        "SansSerif-Regular": {
          32: [0, 0, 0, 0, 0.25],
          33: [0, 0.69444, 0, 0, 0.31945],
          34: [0, 0.69444, 0, 0, 0.5],
          35: [0.19444, 0.69444, 0, 0, 0.83334],
          36: [0.05556, 0.75, 0, 0, 0.5],
          37: [0.05556, 0.75, 0, 0, 0.83334],
          38: [0, 0.69444, 0, 0, 0.75834],
          39: [0, 0.69444, 0, 0, 0.27778],
          40: [0.25, 0.75, 0, 0, 0.38889],
          41: [0.25, 0.75, 0, 0, 0.38889],
          42: [0, 0.75, 0, 0, 0.5],
          43: [0.08333, 0.58333, 0, 0, 0.77778],
          44: [0.125, 0.08333, 0, 0, 0.27778],
          45: [0, 0.44444, 0, 0, 0.33333],
          46: [0, 0.08333, 0, 0, 0.27778],
          47: [0.25, 0.75, 0, 0, 0.5],
          48: [0, 0.65556, 0, 0, 0.5],
          49: [0, 0.65556, 0, 0, 0.5],
          50: [0, 0.65556, 0, 0, 0.5],
          51: [0, 0.65556, 0, 0, 0.5],
          52: [0, 0.65556, 0, 0, 0.5],
          53: [0, 0.65556, 0, 0, 0.5],
          54: [0, 0.65556, 0, 0, 0.5],
          55: [0, 0.65556, 0, 0, 0.5],
          56: [0, 0.65556, 0, 0, 0.5],
          57: [0, 0.65556, 0, 0, 0.5],
          58: [0, 0.44444, 0, 0, 0.27778],
          59: [0.125, 0.44444, 0, 0, 0.27778],
          61: [-0.13, 0.37, 0, 0, 0.77778],
          63: [0, 0.69444, 0, 0, 0.47222],
          64: [0, 0.69444, 0, 0, 0.66667],
          65: [0, 0.69444, 0, 0, 0.66667],
          66: [0, 0.69444, 0, 0, 0.66667],
          67: [0, 0.69444, 0, 0, 0.63889],
          68: [0, 0.69444, 0, 0, 0.72223],
          69: [0, 0.69444, 0, 0, 0.59722],
          70: [0, 0.69444, 0, 0, 0.56945],
          71: [0, 0.69444, 0, 0, 0.66667],
          72: [0, 0.69444, 0, 0, 0.70834],
          73: [0, 0.69444, 0, 0, 0.27778],
          74: [0, 0.69444, 0, 0, 0.47222],
          75: [0, 0.69444, 0, 0, 0.69445],
          76: [0, 0.69444, 0, 0, 0.54167],
          77: [0, 0.69444, 0, 0, 0.875],
          78: [0, 0.69444, 0, 0, 0.70834],
          79: [0, 0.69444, 0, 0, 0.73611],
          80: [0, 0.69444, 0, 0, 0.63889],
          81: [0.125, 0.69444, 0, 0, 0.73611],
          82: [0, 0.69444, 0, 0, 0.64584],
          83: [0, 0.69444, 0, 0, 0.55556],
          84: [0, 0.69444, 0, 0, 0.68056],
          85: [0, 0.69444, 0, 0, 0.6875],
          86: [0, 0.69444, 0.01389, 0, 0.66667],
          87: [0, 0.69444, 0.01389, 0, 0.94445],
          88: [0, 0.69444, 0, 0, 0.66667],
          89: [0, 0.69444, 0.025, 0, 0.66667],
          90: [0, 0.69444, 0, 0, 0.61111],
          91: [0.25, 0.75, 0, 0, 0.28889],
          93: [0.25, 0.75, 0, 0, 0.28889],
          94: [0, 0.69444, 0, 0, 0.5],
          95: [0.35, 0.09444, 0.02778, 0, 0.5],
          97: [0, 0.44444, 0, 0, 0.48056],
          98: [0, 0.69444, 0, 0, 0.51667],
          99: [0, 0.44444, 0, 0, 0.44445],
          100: [0, 0.69444, 0, 0, 0.51667],
          101: [0, 0.44444, 0, 0, 0.44445],
          102: [0, 0.69444, 0.06944, 0, 0.30556],
          103: [0.19444, 0.44444, 0.01389, 0, 0.5],
          104: [0, 0.69444, 0, 0, 0.51667],
          105: [0, 0.67937, 0, 0, 0.23889],
          106: [0.19444, 0.67937, 0, 0, 0.26667],
          107: [0, 0.69444, 0, 0, 0.48889],
          108: [0, 0.69444, 0, 0, 0.23889],
          109: [0, 0.44444, 0, 0, 0.79445],
          110: [0, 0.44444, 0, 0, 0.51667],
          111: [0, 0.44444, 0, 0, 0.5],
          112: [0.19444, 0.44444, 0, 0, 0.51667],
          113: [0.19444, 0.44444, 0, 0, 0.51667],
          114: [0, 0.44444, 0.01389, 0, 0.34167],
          115: [0, 0.44444, 0, 0, 0.38333],
          116: [0, 0.57143, 0, 0, 0.36111],
          117: [0, 0.44444, 0, 0, 0.51667],
          118: [0, 0.44444, 0.01389, 0, 0.46111],
          119: [0, 0.44444, 0.01389, 0, 0.68334],
          120: [0, 0.44444, 0, 0, 0.46111],
          121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
          122: [0, 0.44444, 0, 0, 0.43472],
          126: [0.35, 0.32659, 0, 0, 0.5],
          160: [0, 0, 0, 0, 0.25],
          168: [0, 0.67937, 0, 0, 0.5],
          176: [0, 0.69444, 0, 0, 0.66667],
          184: [0.17014, 0, 0, 0, 0.44445],
          305: [0, 0.44444, 0, 0, 0.23889],
          567: [0.19444, 0.44444, 0, 0, 0.26667],
          710: [0, 0.69444, 0, 0, 0.5],
          711: [0, 0.63194, 0, 0, 0.5],
          713: [0, 0.60889, 0, 0, 0.5],
          714: [0, 0.69444, 0, 0, 0.5],
          715: [0, 0.69444, 0, 0, 0.5],
          728: [0, 0.69444, 0, 0, 0.5],
          729: [0, 0.67937, 0, 0, 0.27778],
          730: [0, 0.69444, 0, 0, 0.66667],
          732: [0, 0.67659, 0, 0, 0.5],
          733: [0, 0.69444, 0, 0, 0.5],
          915: [0, 0.69444, 0, 0, 0.54167],
          916: [0, 0.69444, 0, 0, 0.83334],
          920: [0, 0.69444, 0, 0, 0.77778],
          923: [0, 0.69444, 0, 0, 0.61111],
          926: [0, 0.69444, 0, 0, 0.66667],
          928: [0, 0.69444, 0, 0, 0.70834],
          931: [0, 0.69444, 0, 0, 0.72222],
          933: [0, 0.69444, 0, 0, 0.77778],
          934: [0, 0.69444, 0, 0, 0.72222],
          936: [0, 0.69444, 0, 0, 0.77778],
          937: [0, 0.69444, 0, 0, 0.72222],
          8211: [0, 0.44444, 0.02778, 0, 0.5],
          8212: [0, 0.44444, 0.02778, 0, 1],
          8216: [0, 0.69444, 0, 0, 0.27778],
          8217: [0, 0.69444, 0, 0, 0.27778],
          8220: [0, 0.69444, 0, 0, 0.5],
          8221: [0, 0.69444, 0, 0, 0.5],
        },
        "Script-Regular": {
          32: [0, 0, 0, 0, 0.25],
          65: [0, 0.7, 0.22925, 0, 0.80253],
          66: [0, 0.7, 0.04087, 0, 0.90757],
          67: [0, 0.7, 0.1689, 0, 0.66619],
          68: [0, 0.7, 0.09371, 0, 0.77443],
          69: [0, 0.7, 0.18583, 0, 0.56162],
          70: [0, 0.7, 0.13634, 0, 0.89544],
          71: [0, 0.7, 0.17322, 0, 0.60961],
          72: [0, 0.7, 0.29694, 0, 0.96919],
          73: [0, 0.7, 0.19189, 0, 0.80907],
          74: [0.27778, 0.7, 0.19189, 0, 1.05159],
          75: [0, 0.7, 0.31259, 0, 0.91364],
          76: [0, 0.7, 0.19189, 0, 0.87373],
          77: [0, 0.7, 0.15981, 0, 1.08031],
          78: [0, 0.7, 0.3525, 0, 0.9015],
          79: [0, 0.7, 0.08078, 0, 0.73787],
          80: [0, 0.7, 0.08078, 0, 1.01262],
          81: [0, 0.7, 0.03305, 0, 0.88282],
          82: [0, 0.7, 0.06259, 0, 0.85],
          83: [0, 0.7, 0.19189, 0, 0.86767],
          84: [0, 0.7, 0.29087, 0, 0.74697],
          85: [0, 0.7, 0.25815, 0, 0.79996],
          86: [0, 0.7, 0.27523, 0, 0.62204],
          87: [0, 0.7, 0.27523, 0, 0.80532],
          88: [0, 0.7, 0.26006, 0, 0.94445],
          89: [0, 0.7, 0.2939, 0, 0.70961],
          90: [0, 0.7, 0.24037, 0, 0.8212],
          160: [0, 0, 0, 0, 0.25],
        },
        "Size1-Regular": {
          32: [0, 0, 0, 0, 0.25],
          40: [0.35001, 0.85, 0, 0, 0.45834],
          41: [0.35001, 0.85, 0, 0, 0.45834],
          47: [0.35001, 0.85, 0, 0, 0.57778],
          91: [0.35001, 0.85, 0, 0, 0.41667],
          92: [0.35001, 0.85, 0, 0, 0.57778],
          93: [0.35001, 0.85, 0, 0, 0.41667],
          123: [0.35001, 0.85, 0, 0, 0.58334],
          125: [0.35001, 0.85, 0, 0, 0.58334],
          160: [0, 0, 0, 0, 0.25],
          710: [0, 0.72222, 0, 0, 0.55556],
          732: [0, 0.72222, 0, 0, 0.55556],
          770: [0, 0.72222, 0, 0, 0.55556],
          771: [0, 0.72222, 0, 0, 0.55556],
          8214: [-0.00099, 0.601, 0, 0, 0.77778],
          8593: [1e-5, 0.6, 0, 0, 0.66667],
          8595: [1e-5, 0.6, 0, 0, 0.66667],
          8657: [1e-5, 0.6, 0, 0, 0.77778],
          8659: [1e-5, 0.6, 0, 0, 0.77778],
          8719: [0.25001, 0.75, 0, 0, 0.94445],
          8720: [0.25001, 0.75, 0, 0, 0.94445],
          8721: [0.25001, 0.75, 0, 0, 1.05556],
          8730: [0.35001, 0.85, 0, 0, 1],
          8739: [-0.00599, 0.606, 0, 0, 0.33333],
          8741: [-0.00599, 0.606, 0, 0, 0.55556],
          8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
          8748: [0.306, 0.805, 0.19445, 0, 0.47222],
          8749: [0.306, 0.805, 0.19445, 0, 0.47222],
          8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
          8896: [0.25001, 0.75, 0, 0, 0.83334],
          8897: [0.25001, 0.75, 0, 0, 0.83334],
          8898: [0.25001, 0.75, 0, 0, 0.83334],
          8899: [0.25001, 0.75, 0, 0, 0.83334],
          8968: [0.35001, 0.85, 0, 0, 0.47222],
          8969: [0.35001, 0.85, 0, 0, 0.47222],
          8970: [0.35001, 0.85, 0, 0, 0.47222],
          8971: [0.35001, 0.85, 0, 0, 0.47222],
          9168: [-0.00099, 0.601, 0, 0, 0.66667],
          10216: [0.35001, 0.85, 0, 0, 0.47222],
          10217: [0.35001, 0.85, 0, 0, 0.47222],
          10752: [0.25001, 0.75, 0, 0, 1.11111],
          10753: [0.25001, 0.75, 0, 0, 1.11111],
          10754: [0.25001, 0.75, 0, 0, 1.11111],
          10756: [0.25001, 0.75, 0, 0, 0.83334],
          10758: [0.25001, 0.75, 0, 0, 0.83334],
        },
        "Size2-Regular": {
          32: [0, 0, 0, 0, 0.25],
          40: [0.65002, 1.15, 0, 0, 0.59722],
          41: [0.65002, 1.15, 0, 0, 0.59722],
          47: [0.65002, 1.15, 0, 0, 0.81111],
          91: [0.65002, 1.15, 0, 0, 0.47222],
          92: [0.65002, 1.15, 0, 0, 0.81111],
          93: [0.65002, 1.15, 0, 0, 0.47222],
          123: [0.65002, 1.15, 0, 0, 0.66667],
          125: [0.65002, 1.15, 0, 0, 0.66667],
          160: [0, 0, 0, 0, 0.25],
          710: [0, 0.75, 0, 0, 1],
          732: [0, 0.75, 0, 0, 1],
          770: [0, 0.75, 0, 0, 1],
          771: [0, 0.75, 0, 0, 1],
          8719: [0.55001, 1.05, 0, 0, 1.27778],
          8720: [0.55001, 1.05, 0, 0, 1.27778],
          8721: [0.55001, 1.05, 0, 0, 1.44445],
          8730: [0.65002, 1.15, 0, 0, 1],
          8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
          8748: [0.862, 1.36, 0.44445, 0, 0.55556],
          8749: [0.862, 1.36, 0.44445, 0, 0.55556],
          8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
          8896: [0.55001, 1.05, 0, 0, 1.11111],
          8897: [0.55001, 1.05, 0, 0, 1.11111],
          8898: [0.55001, 1.05, 0, 0, 1.11111],
          8899: [0.55001, 1.05, 0, 0, 1.11111],
          8968: [0.65002, 1.15, 0, 0, 0.52778],
          8969: [0.65002, 1.15, 0, 0, 0.52778],
          8970: [0.65002, 1.15, 0, 0, 0.52778],
          8971: [0.65002, 1.15, 0, 0, 0.52778],
          10216: [0.65002, 1.15, 0, 0, 0.61111],
          10217: [0.65002, 1.15, 0, 0, 0.61111],
          10752: [0.55001, 1.05, 0, 0, 1.51112],
          10753: [0.55001, 1.05, 0, 0, 1.51112],
          10754: [0.55001, 1.05, 0, 0, 1.51112],
          10756: [0.55001, 1.05, 0, 0, 1.11111],
          10758: [0.55001, 1.05, 0, 0, 1.11111],
        },
        "Size3-Regular": {
          32: [0, 0, 0, 0, 0.25],
          40: [0.95003, 1.45, 0, 0, 0.73611],
          41: [0.95003, 1.45, 0, 0, 0.73611],
          47: [0.95003, 1.45, 0, 0, 1.04445],
          91: [0.95003, 1.45, 0, 0, 0.52778],
          92: [0.95003, 1.45, 0, 0, 1.04445],
          93: [0.95003, 1.45, 0, 0, 0.52778],
          123: [0.95003, 1.45, 0, 0, 0.75],
          125: [0.95003, 1.45, 0, 0, 0.75],
          160: [0, 0, 0, 0, 0.25],
          710: [0, 0.75, 0, 0, 1.44445],
          732: [0, 0.75, 0, 0, 1.44445],
          770: [0, 0.75, 0, 0, 1.44445],
          771: [0, 0.75, 0, 0, 1.44445],
          8730: [0.95003, 1.45, 0, 0, 1],
          8968: [0.95003, 1.45, 0, 0, 0.58334],
          8969: [0.95003, 1.45, 0, 0, 0.58334],
          8970: [0.95003, 1.45, 0, 0, 0.58334],
          8971: [0.95003, 1.45, 0, 0, 0.58334],
          10216: [0.95003, 1.45, 0, 0, 0.75],
          10217: [0.95003, 1.45, 0, 0, 0.75],
        },
        "Size4-Regular": {
          32: [0, 0, 0, 0, 0.25],
          40: [1.25003, 1.75, 0, 0, 0.79167],
          41: [1.25003, 1.75, 0, 0, 0.79167],
          47: [1.25003, 1.75, 0, 0, 1.27778],
          91: [1.25003, 1.75, 0, 0, 0.58334],
          92: [1.25003, 1.75, 0, 0, 1.27778],
          93: [1.25003, 1.75, 0, 0, 0.58334],
          123: [1.25003, 1.75, 0, 0, 0.80556],
          125: [1.25003, 1.75, 0, 0, 0.80556],
          160: [0, 0, 0, 0, 0.25],
          710: [0, 0.825, 0, 0, 1.8889],
          732: [0, 0.825, 0, 0, 1.8889],
          770: [0, 0.825, 0, 0, 1.8889],
          771: [0, 0.825, 0, 0, 1.8889],
          8730: [1.25003, 1.75, 0, 0, 1],
          8968: [1.25003, 1.75, 0, 0, 0.63889],
          8969: [1.25003, 1.75, 0, 0, 0.63889],
          8970: [1.25003, 1.75, 0, 0, 0.63889],
          8971: [1.25003, 1.75, 0, 0, 0.63889],
          9115: [0.64502, 1.155, 0, 0, 0.875],
          9116: [1e-5, 0.6, 0, 0, 0.875],
          9117: [0.64502, 1.155, 0, 0, 0.875],
          9118: [0.64502, 1.155, 0, 0, 0.875],
          9119: [1e-5, 0.6, 0, 0, 0.875],
          9120: [0.64502, 1.155, 0, 0, 0.875],
          9121: [0.64502, 1.155, 0, 0, 0.66667],
          9122: [-0.00099, 0.601, 0, 0, 0.66667],
          9123: [0.64502, 1.155, 0, 0, 0.66667],
          9124: [0.64502, 1.155, 0, 0, 0.66667],
          9125: [-0.00099, 0.601, 0, 0, 0.66667],
          9126: [0.64502, 1.155, 0, 0, 0.66667],
          9127: [1e-5, 0.9, 0, 0, 0.88889],
          9128: [0.65002, 1.15, 0, 0, 0.88889],
          9129: [0.90001, 0, 0, 0, 0.88889],
          9130: [0, 0.3, 0, 0, 0.88889],
          9131: [1e-5, 0.9, 0, 0, 0.88889],
          9132: [0.65002, 1.15, 0, 0, 0.88889],
          9133: [0.90001, 0, 0, 0, 0.88889],
          9143: [0.88502, 0.915, 0, 0, 1.05556],
          10216: [1.25003, 1.75, 0, 0, 0.80556],
          10217: [1.25003, 1.75, 0, 0, 0.80556],
          57344: [-0.00499, 0.605, 0, 0, 1.05556],
          57345: [-0.00499, 0.605, 0, 0, 1.05556],
          57680: [0, 0.12, 0, 0, 0.45],
          57681: [0, 0.12, 0, 0, 0.45],
          57682: [0, 0.12, 0, 0, 0.45],
          57683: [0, 0.12, 0, 0, 0.45],
        },
        "Typewriter-Regular": {
          32: [0, 0, 0, 0, 0.525],
          33: [0, 0.61111, 0, 0, 0.525],
          34: [0, 0.61111, 0, 0, 0.525],
          35: [0, 0.61111, 0, 0, 0.525],
          36: [0.08333, 0.69444, 0, 0, 0.525],
          37: [0.08333, 0.69444, 0, 0, 0.525],
          38: [0, 0.61111, 0, 0, 0.525],
          39: [0, 0.61111, 0, 0, 0.525],
          40: [0.08333, 0.69444, 0, 0, 0.525],
          41: [0.08333, 0.69444, 0, 0, 0.525],
          42: [0, 0.52083, 0, 0, 0.525],
          43: [-0.08056, 0.53055, 0, 0, 0.525],
          44: [0.13889, 0.125, 0, 0, 0.525],
          45: [-0.08056, 0.53055, 0, 0, 0.525],
          46: [0, 0.125, 0, 0, 0.525],
          47: [0.08333, 0.69444, 0, 0, 0.525],
          48: [0, 0.61111, 0, 0, 0.525],
          49: [0, 0.61111, 0, 0, 0.525],
          50: [0, 0.61111, 0, 0, 0.525],
          51: [0, 0.61111, 0, 0, 0.525],
          52: [0, 0.61111, 0, 0, 0.525],
          53: [0, 0.61111, 0, 0, 0.525],
          54: [0, 0.61111, 0, 0, 0.525],
          55: [0, 0.61111, 0, 0, 0.525],
          56: [0, 0.61111, 0, 0, 0.525],
          57: [0, 0.61111, 0, 0, 0.525],
          58: [0, 0.43056, 0, 0, 0.525],
          59: [0.13889, 0.43056, 0, 0, 0.525],
          60: [-0.05556, 0.55556, 0, 0, 0.525],
          61: [-0.19549, 0.41562, 0, 0, 0.525],
          62: [-0.05556, 0.55556, 0, 0, 0.525],
          63: [0, 0.61111, 0, 0, 0.525],
          64: [0, 0.61111, 0, 0, 0.525],
          65: [0, 0.61111, 0, 0, 0.525],
          66: [0, 0.61111, 0, 0, 0.525],
          67: [0, 0.61111, 0, 0, 0.525],
          68: [0, 0.61111, 0, 0, 0.525],
          69: [0, 0.61111, 0, 0, 0.525],
          70: [0, 0.61111, 0, 0, 0.525],
          71: [0, 0.61111, 0, 0, 0.525],
          72: [0, 0.61111, 0, 0, 0.525],
          73: [0, 0.61111, 0, 0, 0.525],
          74: [0, 0.61111, 0, 0, 0.525],
          75: [0, 0.61111, 0, 0, 0.525],
          76: [0, 0.61111, 0, 0, 0.525],
          77: [0, 0.61111, 0, 0, 0.525],
          78: [0, 0.61111, 0, 0, 0.525],
          79: [0, 0.61111, 0, 0, 0.525],
          80: [0, 0.61111, 0, 0, 0.525],
          81: [0.13889, 0.61111, 0, 0, 0.525],
          82: [0, 0.61111, 0, 0, 0.525],
          83: [0, 0.61111, 0, 0, 0.525],
          84: [0, 0.61111, 0, 0, 0.525],
          85: [0, 0.61111, 0, 0, 0.525],
          86: [0, 0.61111, 0, 0, 0.525],
          87: [0, 0.61111, 0, 0, 0.525],
          88: [0, 0.61111, 0, 0, 0.525],
          89: [0, 0.61111, 0, 0, 0.525],
          90: [0, 0.61111, 0, 0, 0.525],
          91: [0.08333, 0.69444, 0, 0, 0.525],
          92: [0.08333, 0.69444, 0, 0, 0.525],
          93: [0.08333, 0.69444, 0, 0, 0.525],
          94: [0, 0.61111, 0, 0, 0.525],
          95: [0.09514, 0, 0, 0, 0.525],
          96: [0, 0.61111, 0, 0, 0.525],
          97: [0, 0.43056, 0, 0, 0.525],
          98: [0, 0.61111, 0, 0, 0.525],
          99: [0, 0.43056, 0, 0, 0.525],
          100: [0, 0.61111, 0, 0, 0.525],
          101: [0, 0.43056, 0, 0, 0.525],
          102: [0, 0.61111, 0, 0, 0.525],
          103: [0.22222, 0.43056, 0, 0, 0.525],
          104: [0, 0.61111, 0, 0, 0.525],
          105: [0, 0.61111, 0, 0, 0.525],
          106: [0.22222, 0.61111, 0, 0, 0.525],
          107: [0, 0.61111, 0, 0, 0.525],
          108: [0, 0.61111, 0, 0, 0.525],
          109: [0, 0.43056, 0, 0, 0.525],
          110: [0, 0.43056, 0, 0, 0.525],
          111: [0, 0.43056, 0, 0, 0.525],
          112: [0.22222, 0.43056, 0, 0, 0.525],
          113: [0.22222, 0.43056, 0, 0, 0.525],
          114: [0, 0.43056, 0, 0, 0.525],
          115: [0, 0.43056, 0, 0, 0.525],
          116: [0, 0.55358, 0, 0, 0.525],
          117: [0, 0.43056, 0, 0, 0.525],
          118: [0, 0.43056, 0, 0, 0.525],
          119: [0, 0.43056, 0, 0, 0.525],
          120: [0, 0.43056, 0, 0, 0.525],
          121: [0.22222, 0.43056, 0, 0, 0.525],
          122: [0, 0.43056, 0, 0, 0.525],
          123: [0.08333, 0.69444, 0, 0, 0.525],
          124: [0.08333, 0.69444, 0, 0, 0.525],
          125: [0.08333, 0.69444, 0, 0, 0.525],
          126: [0, 0.61111, 0, 0, 0.525],
          127: [0, 0.61111, 0, 0, 0.525],
          160: [0, 0, 0, 0, 0.525],
          176: [0, 0.61111, 0, 0, 0.525],
          184: [0.19445, 0, 0, 0, 0.525],
          305: [0, 0.43056, 0, 0, 0.525],
          567: [0.22222, 0.43056, 0, 0, 0.525],
          711: [0, 0.56597, 0, 0, 0.525],
          713: [0, 0.56555, 0, 0, 0.525],
          714: [0, 0.61111, 0, 0, 0.525],
          715: [0, 0.61111, 0, 0, 0.525],
          728: [0, 0.61111, 0, 0, 0.525],
          730: [0, 0.61111, 0, 0, 0.525],
          770: [0, 0.61111, 0, 0, 0.525],
          771: [0, 0.61111, 0, 0, 0.525],
          776: [0, 0.61111, 0, 0, 0.525],
          915: [0, 0.61111, 0, 0, 0.525],
          916: [0, 0.61111, 0, 0, 0.525],
          920: [0, 0.61111, 0, 0, 0.525],
          923: [0, 0.61111, 0, 0, 0.525],
          926: [0, 0.61111, 0, 0, 0.525],
          928: [0, 0.61111, 0, 0, 0.525],
          931: [0, 0.61111, 0, 0, 0.525],
          933: [0, 0.61111, 0, 0, 0.525],
          934: [0, 0.61111, 0, 0, 0.525],
          936: [0, 0.61111, 0, 0, 0.525],
          937: [0, 0.61111, 0, 0, 0.525],
          8216: [0, 0.61111, 0, 0, 0.525],
          8217: [0, 0.61111, 0, 0, 0.525],
          8242: [0, 0.61111, 0, 0, 0.525],
          9251: [0.11111, 0.21944, 0, 0, 0.525],
        },
      },
      indexBFCcxPM5Value58 = {
        slant: [0.25, 0.25, 0.25],
        space: [0, 0, 0],
        stretch: [0, 0, 0],
        shrink: [0, 0, 0],
        xHeight: [0.431, 0.431, 0.431],
        quad: [1, 1.171, 1.472],
        extraSpace: [0, 0, 0],
        num1: [0.677, 0.732, 0.925],
        num2: [0.394, 0.384, 0.387],
        num3: [0.444, 0.471, 0.504],
        denom1: [0.686, 0.752, 1.025],
        denom2: [0.345, 0.344, 0.532],
        sup1: [0.413, 0.503, 0.504],
        sup2: [0.363, 0.431, 0.404],
        sup3: [0.289, 0.286, 0.294],
        sub1: [0.15, 0.143, 0.2],
        sub2: [0.247, 0.286, 0.4],
        supDrop: [0.386, 0.353, 0.494],
        subDrop: [0.05, 0.071, 0.1],
        delim1: [2.39, 1.7, 1.98],
        delim2: [1.01, 1.157, 1.42],
        axisHeight: [0.25, 0.25, 0.25],
        defaultRuleThickness: [0.04, 0.049, 0.049],
        bigOpSpacing1: [0.111, 0.111, 0.111],
        bigOpSpacing2: [0.166, 0.166, 0.166],
        bigOpSpacing3: [0.2, 0.2, 0.2],
        bigOpSpacing4: [0.6, 0.611, 0.611],
        bigOpSpacing5: [0.1, 0.143, 0.143],
        sqrtRuleThickness: [0.04, 0.04, 0.04],
        ptPerEm: [10, 10, 10],
        doubleRuleSep: [0.2, 0.2, 0.2],
        arrayRuleWidth: [0.04, 0.04, 0.04],
        fboxsep: [0.3, 0.3, 0.3],
        fboxrule: [0.04, 0.04, 0.04],
      },
      indexBFCcxPM5Value59 = {
        Å: "A",
        Ð: "D",
        Þ: "o",
        å: "a",
        ð: "d",
        þ: "o",
        А: "A",
        Б: "B",
        В: "B",
        Г: "F",
        Д: "A",
        Е: "E",
        Ж: "K",
        З: "3",
        И: "N",
        Й: "N",
        К: "K",
        Л: "N",
        М: "M",
        Н: "H",
        О: "O",
        П: "N",
        Р: "P",
        С: "C",
        Т: "T",
        У: "y",
        Ф: "O",
        Х: "X",
        Ц: "U",
        Ч: "h",
        Ш: "W",
        Щ: "W",
        Ъ: "B",
        Ы: "X",
        Ь: "B",
        Э: "3",
        Ю: "X",
        Я: "R",
        а: "a",
        б: "b",
        в: "a",
        г: "r",
        д: "y",
        е: "e",
        ж: "m",
        з: "e",
        и: "n",
        й: "n",
        к: "n",
        л: "n",
        м: "m",
        н: "n",
        о: "o",
        п: "n",
        р: "p",
        с: "c",
        т: "o",
        у: "y",
        ф: "b",
        х: "x",
        ц: "n",
        ч: "n",
        ш: "w",
        щ: "w",
        ъ: "a",
        ы: "m",
        ь: "a",
        э: "e",
        ю: "m",
        я: "r",
      },
      indexBFCcxPM5Value60 = {},
      indexBFCcxPM5Value61 = [
        [1, 1, 1],
        [2, 1, 1],
        [3, 1, 1],
        [4, 2, 1],
        [5, 2, 1],
        [6, 3, 1],
        [7, 4, 2],
        [8, 6, 3],
        [9, 7, 6],
        [10, 8, 7],
        [11, 10, 9],
      ],
      indexBFCcxPM5Value62 = [
        0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488,
      ],
      indexBFCcxPM5Value63 = function (
        indexBFCcxPM5Param792,
        indexBFCcxPM5Param793,
      ) {
        return indexBFCcxPM5Param793.size < 2
          ? indexBFCcxPM5Param792
          : indexBFCcxPM5Value61[indexBFCcxPM5Param792 - 1][
              indexBFCcxPM5Param793.size - 1
            ];
      },
      indexBFCcxPM5Value64 = class IndexBFCcxPM5Class2 {
        constructor(indexBFCcxPM5Param89) {
          this.style = undefined;
          this.color = undefined;
          this.size = undefined;
          this.textSize = undefined;
          this.phantom = undefined;
          this.font = undefined;
          this.fontFamily = undefined;
          this.fontWeight = undefined;
          this.fontShape = undefined;
          this.sizeMultiplier = undefined;
          this.maxSize = undefined;
          this.minRuleThickness = undefined;
          this._fontMetrics = undefined;
          this.style = indexBFCcxPM5Param89.style;
          this.color = indexBFCcxPM5Param89.color;
          this.size = indexBFCcxPM5Param89.size || IndexBFCcxPM5Class2.BASESIZE;
          this.textSize = indexBFCcxPM5Param89.textSize || this.size;
          this.phantom = !!indexBFCcxPM5Param89.phantom;
          this.font = indexBFCcxPM5Param89.font || "";
          this.fontFamily = indexBFCcxPM5Param89.fontFamily || "";
          this.fontWeight = indexBFCcxPM5Param89.fontWeight || "";
          this.fontShape = indexBFCcxPM5Param89.fontShape || "";
          this.sizeMultiplier = indexBFCcxPM5Value62[this.size - 1];
          this.maxSize = indexBFCcxPM5Param89.maxSize;
          this.minRuleThickness = indexBFCcxPM5Param89.minRuleThickness;
          this._fontMetrics = undefined;
        }
        extend(indexBFCcxPM5Param228) {
          var indexBFCcxPM5Value1054 = {
            style: this.style,
            size: this.size,
            textSize: this.textSize,
            color: this.color,
            phantom: this.phantom,
            font: this.font,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
            fontShape: this.fontShape,
            maxSize: this.maxSize,
            minRuleThickness: this.minRuleThickness,
          };
          for (var indexBFCcxPM5Value1055 in indexBFCcxPM5Param228)
            indexBFCcxPM5Param228.hasOwnProperty(indexBFCcxPM5Value1055) &&
              (indexBFCcxPM5Value1054[indexBFCcxPM5Value1055] =
                indexBFCcxPM5Param228[indexBFCcxPM5Value1055]);
          return new IndexBFCcxPM5Class2(indexBFCcxPM5Value1054);
        }
        havingStyle(indexBFCcxPM5Param644) {
          return this.style === indexBFCcxPM5Param644
            ? this
            : this.extend({
                style: indexBFCcxPM5Param644,
                size: indexBFCcxPM5Value63(
                  this.textSize,
                  indexBFCcxPM5Param644,
                ),
              });
        }
        havingCrampedStyle() {
          return this.havingStyle(this.style.cramp());
        }
        havingSize(indexBFCcxPM5Param425) {
          return this.size === indexBFCcxPM5Param425 &&
            this.textSize === indexBFCcxPM5Param425
            ? this
            : this.extend({
                style: this.style.text(),
                size: indexBFCcxPM5Param425,
                textSize: indexBFCcxPM5Param425,
                sizeMultiplier: indexBFCcxPM5Value62[indexBFCcxPM5Param425 - 1],
              });
        }
        havingBaseStyle(indexBFCcxPM5Param436) {
          indexBFCcxPM5Param436 ||= this.style.text();
          var indexBFCcxPM5Value1287 = indexBFCcxPM5Value63(
            IndexBFCcxPM5Class2.BASESIZE,
            indexBFCcxPM5Param436,
          );
          return this.size === indexBFCcxPM5Value1287 &&
            this.textSize === IndexBFCcxPM5Class2.BASESIZE &&
            this.style === indexBFCcxPM5Param436
            ? this
            : this.extend({
                style: indexBFCcxPM5Param436,
                size: indexBFCcxPM5Value1287,
              });
        }
        havingBaseSizing() {
          var indexBFCcxPM5Value1199;
          switch (this.style.id) {
            case 4:
            case 5:
              indexBFCcxPM5Value1199 = 3;
              break;
            case 6:
            case 7:
              indexBFCcxPM5Value1199 = 1;
              break;
            default:
              indexBFCcxPM5Value1199 = 6;
          }
          return this.extend({
            style: this.style.text(),
            size: indexBFCcxPM5Value1199,
          });
        }
        withColor(indexBFCcxPM5Param829) {
          return this.extend({
            color: indexBFCcxPM5Param829,
          });
        }
        withPhantom() {
          return this.extend({
            phantom: true,
          });
        }
        withFont(indexBFCcxPM5Param833) {
          return this.extend({
            font: indexBFCcxPM5Param833,
          });
        }
        withTextFontFamily(indexBFCcxPM5Param755) {
          return this.extend({
            fontFamily: indexBFCcxPM5Param755,
            font: "",
          });
        }
        withTextFontWeight(indexBFCcxPM5Param756) {
          return this.extend({
            fontWeight: indexBFCcxPM5Param756,
            font: "",
          });
        }
        withTextFontShape(indexBFCcxPM5Param757) {
          return this.extend({
            fontShape: indexBFCcxPM5Param757,
            font: "",
          });
        }
        sizingClasses(indexBFCcxPM5Param637) {
          return indexBFCcxPM5Param637.size === this.size
            ? []
            : [
                "sizing",
                "reset-size" + indexBFCcxPM5Param637.size,
                "size" + this.size,
              ];
        }
        baseSizingClasses() {
          return this.size === IndexBFCcxPM5Class2.BASESIZE
            ? []
            : [
                "sizing",
                "reset-size" + this.size,
                "size" + IndexBFCcxPM5Class2.BASESIZE,
              ];
        }
        fontMetrics() {
          return (
            (this._fontMetrics ||= indexBFCcxPM5Helper33(this.size)),
            this._fontMetrics
          );
        }
        getColor() {
          return this.phantom ? "transparent" : this.color;
        }
      },
      indexBFCcxPM5Value64.BASESIZE = 6,
      indexBFCcxPM5Value65 = {
        pt: 1,
        mm: 2.8452755905511813,
        cm: 28.45275590551181,
        in: 72.27,
        bp: 1.00375,
        pc: 12,
        dd: 1.070008643042351,
        cc: 12.84010371650821,
        nd: 1.0669781931464175,
        nc: 12.80373831775701,
        sp: 0.0000152587890625,
        px: 1.00375,
      },
      indexBFCcxPM5Value66 = {
        ex: true,
        em: true,
        mu: true,
      },
      indexBFCcxPM5Value67 = function (indexBFCcxPM5Param647) {
        return (
          typeof indexBFCcxPM5Param647 != "string" &&
            (indexBFCcxPM5Param647 = indexBFCcxPM5Param647.unit),
          (indexBFCcxPM5Param647 in indexBFCcxPM5Value65) ||
            (indexBFCcxPM5Param647 in indexBFCcxPM5Value66) ||
            indexBFCcxPM5Param647 === "ex"
        );
      },
      indexBFCcxPM5Value68 = function (
        indexBFCcxPM5Param178,
        indexBFCcxPM5Param179,
      ) {
        var indexBFCcxPM5Value970;
        if ((indexBFCcxPM5Param178.unit in indexBFCcxPM5Value65))
          indexBFCcxPM5Value970 =
            indexBFCcxPM5Value65[indexBFCcxPM5Param178.unit] /
            indexBFCcxPM5Param179.fontMetrics().ptPerEm /
            indexBFCcxPM5Param179.sizeMultiplier;
        else if (indexBFCcxPM5Param178.unit === "mu")
          indexBFCcxPM5Value970 =
            indexBFCcxPM5Param179.fontMetrics().cssEmPerMu;
        else {
          var indexBFCcxPM5Value971;
          if (
            ((indexBFCcxPM5Value971 = indexBFCcxPM5Param179.style.isTight()
              ? indexBFCcxPM5Param179.havingStyle(
                  indexBFCcxPM5Param179.style.text(),
                )
              : indexBFCcxPM5Param179),
            indexBFCcxPM5Param178.unit === "ex")
          )
            indexBFCcxPM5Value970 = indexBFCcxPM5Value971.fontMetrics().xHeight;
          else if (indexBFCcxPM5Param178.unit === "em")
            indexBFCcxPM5Value970 = indexBFCcxPM5Value971.fontMetrics().quad;
          else
            throw new indexBFCcxPM5Value14(
              "Invalid unit: '" + indexBFCcxPM5Param178.unit + "'",
            );
          indexBFCcxPM5Value971 !== indexBFCcxPM5Param179 &&
            (indexBFCcxPM5Value970 *=
              indexBFCcxPM5Value971.sizeMultiplier /
              indexBFCcxPM5Param179.sizeMultiplier);
        }
        return Math.min(
          indexBFCcxPM5Param178.number * indexBFCcxPM5Value970,
          indexBFCcxPM5Param179.maxSize,
        );
      },
      indexBFCcxPM5Value69 = function (indexBFCcxPM5Param850) {
        return +indexBFCcxPM5Param850.toFixed(4) + "em";
      },
      indexBFCcxPM5Value70 = function (indexBFCcxPM5Param830) {
        return indexBFCcxPM5Param830.filter((item) => item).join(" ");
      },
      indexBFCcxPM5Value71 = function (
        indexBFCcxPM5Param328,
        indexBFCcxPM5Param329,
        indexBFCcxPM5Param330,
      ) {
        if (
          ((this.classes = indexBFCcxPM5Param328 || []),
          (this.attributes = {}),
          (this.height = 0),
          (this.depth = 0),
          (this.maxFontSize = 0),
          (this.style = indexBFCcxPM5Param330 || {}),
          indexBFCcxPM5Param329)
        ) {
          indexBFCcxPM5Param329.style.isTight() && this.classes.push("mtight");
          var indexBFCcxPM5Value1172 = indexBFCcxPM5Param329.getColor();
          indexBFCcxPM5Value1172 && (this.style.color = indexBFCcxPM5Value1172);
        }
      },
      $t = function (indexBFCcxPM5Param270) {
        var indexBFCcxPM5Value1110 = document.createElement(
          indexBFCcxPM5Param270,
        );
        for (var indexBFCcxPM5Value1111 in ((indexBFCcxPM5Value1110.className =
          indexBFCcxPM5Value70(this.classes)),
        this.style))
          this.style.hasOwnProperty(indexBFCcxPM5Value1111) &&
            (indexBFCcxPM5Value1110.style[indexBFCcxPM5Value1111] =
              this.style[indexBFCcxPM5Value1111]);
        for (var indexBFCcxPM5Value1112 in this.attributes)
          this.attributes.hasOwnProperty(indexBFCcxPM5Value1112) &&
            indexBFCcxPM5Value1110.setAttribute(
              indexBFCcxPM5Value1112,
              this.attributes[indexBFCcxPM5Value1112],
            );
        for (
          var indexBFCcxPM5Value1113 = 0;
          indexBFCcxPM5Value1113 < this.children.length;
          indexBFCcxPM5Value1113++
        )
          indexBFCcxPM5Value1110.appendChild(
            this.children[indexBFCcxPM5Value1113].toNode(),
          );
        return indexBFCcxPM5Value1110;
      },
      indexBFCcxPM5Value72 = /[\s"'>/=\x00-\x1f]/,
      indexBFCcxPM5Value73 = function (indexBFCcxPM5Param156) {
        var indexBFCcxPM5Value912 = "<" + indexBFCcxPM5Param156;
        this.classes.length &&
          (indexBFCcxPM5Value912 +=
            ' class="' +
            indexBFCcxPM5Value23.escape(indexBFCcxPM5Value70(this.classes)) +
            '"');
        var indexBFCcxPM5Value913 = "";
        for (var indexBFCcxPM5Value914 in this.style)
          this.style.hasOwnProperty(indexBFCcxPM5Value914) &&
            (indexBFCcxPM5Value913 +=
              indexBFCcxPM5Value23.hyphenate(indexBFCcxPM5Value914) +
              ":" +
              this.style[indexBFCcxPM5Value914] +
              ";");
        for (var indexBFCcxPM5Value915 in (indexBFCcxPM5Value913 &&
          (indexBFCcxPM5Value912 +=
            ' style="' +
            indexBFCcxPM5Value23.escape(indexBFCcxPM5Value913) +
            '"'),
        this.attributes))
          if (this.attributes.hasOwnProperty(indexBFCcxPM5Value915)) {
            if (indexBFCcxPM5Value72.test(indexBFCcxPM5Value915))
              throw new indexBFCcxPM5Value14(
                "Invalid attribute name '" + indexBFCcxPM5Value915 + "'",
              );
            indexBFCcxPM5Value912 +=
              " " +
              indexBFCcxPM5Value915 +
              '="' +
              indexBFCcxPM5Value23.escape(
                this.attributes[indexBFCcxPM5Value915],
              ) +
              '"';
          }
        indexBFCcxPM5Value912 += ">";
        for (
          var indexBFCcxPM5Value916 = 0;
          indexBFCcxPM5Value916 < this.children.length;
          indexBFCcxPM5Value916++
        )
          indexBFCcxPM5Value912 +=
            this.children[indexBFCcxPM5Value916].toMarkup();
        return (
          (indexBFCcxPM5Value912 += "</" + indexBFCcxPM5Param156 + ">"),
          indexBFCcxPM5Value912
        );
      },
      indexBFCcxPM5Value74 = class {
        constructor(
          indexBFCcxPM5Param316,
          indexBFCcxPM5Param317,
          indexBFCcxPM5Param318,
          indexBFCcxPM5Param319,
        ) {
          this.children = undefined;
          this.attributes = undefined;
          this.classes = undefined;
          this.height = undefined;
          this.depth = undefined;
          this.width = undefined;
          this.maxFontSize = undefined;
          this.style = undefined;
          indexBFCcxPM5Value71.call(
            this,
            indexBFCcxPM5Param316,
            indexBFCcxPM5Param318,
            indexBFCcxPM5Param319,
          );
          this.children = indexBFCcxPM5Param317 || [];
        }
        setAttribute(indexBFCcxPM5Param835, indexBFCcxPM5Param836) {
          this.attributes[indexBFCcxPM5Param835] = indexBFCcxPM5Param836;
        }
        hasClass(indexBFCcxPM5Param824) {
          return indexBFCcxPM5Value23.contains(
            this.classes,
            indexBFCcxPM5Param824,
          );
        }
        toNode() {
          return $t.call(this, "span");
        }
        toMarkup() {
          return indexBFCcxPM5Value73.call(this, "span");
        }
      },
      indexBFCcxPM5Value75 = class {
        constructor(
          indexBFCcxPM5Param310,
          indexBFCcxPM5Param311,
          indexBFCcxPM5Param312,
          indexBFCcxPM5Param313,
        ) {
          this.children = undefined;
          this.attributes = undefined;
          this.classes = undefined;
          this.height = undefined;
          this.depth = undefined;
          this.maxFontSize = undefined;
          this.style = undefined;
          indexBFCcxPM5Value71.call(
            this,
            indexBFCcxPM5Param311,
            indexBFCcxPM5Param313,
          );
          this.children = indexBFCcxPM5Param312 || [];
          this.setAttribute("href", indexBFCcxPM5Param310);
        }
        setAttribute(indexBFCcxPM5Param837, indexBFCcxPM5Param838) {
          this.attributes[indexBFCcxPM5Param837] = indexBFCcxPM5Param838;
        }
        hasClass(indexBFCcxPM5Param825) {
          return indexBFCcxPM5Value23.contains(
            this.classes,
            indexBFCcxPM5Param825,
          );
        }
        toNode() {
          return $t.call(this, "a");
        }
        toMarkup() {
          return indexBFCcxPM5Value73.call(this, "a");
        }
      },
      indexBFCcxPM5Value76 = class {
        constructor(
          indexBFCcxPM5Param320,
          indexBFCcxPM5Param321,
          indexBFCcxPM5Param322,
        ) {
          this.src = undefined;
          this.alt = undefined;
          this.classes = undefined;
          this.height = undefined;
          this.depth = undefined;
          this.maxFontSize = undefined;
          this.style = undefined;
          this.alt = indexBFCcxPM5Param321;
          this.src = indexBFCcxPM5Param320;
          this.classes = ["mord"];
          this.style = indexBFCcxPM5Param322;
        }
        hasClass(indexBFCcxPM5Param826) {
          return indexBFCcxPM5Value23.contains(
            this.classes,
            indexBFCcxPM5Param826,
          );
        }
        toNode() {
          var indexBFCcxPM5Value1275 = document.createElement("img");
          for (var indexBFCcxPM5Value1276 in ((indexBFCcxPM5Value1275.src =
            this.src),
          (indexBFCcxPM5Value1275.alt = this.alt),
          (indexBFCcxPM5Value1275.className = "mord"),
          this.style))
            this.style.hasOwnProperty(indexBFCcxPM5Value1276) &&
              (indexBFCcxPM5Value1275.style[indexBFCcxPM5Value1276] =
                this.style[indexBFCcxPM5Value1276]);
          return indexBFCcxPM5Value1275;
        }
        toMarkup() {
          var indexBFCcxPM5Value1153 =
              '<img src="' +
              indexBFCcxPM5Value23.escape(this.src) +
              '"' +
              (' alt="' + indexBFCcxPM5Value23.escape(this.alt) + '"'),
            indexBFCcxPM5Value1154 = "";
          for (var indexBFCcxPM5Value1155 in this.style)
            this.style.hasOwnProperty(indexBFCcxPM5Value1155) &&
              (indexBFCcxPM5Value1154 +=
                indexBFCcxPM5Value23.hyphenate(indexBFCcxPM5Value1155) +
                ":" +
                this.style[indexBFCcxPM5Value1155] +
                ";");
          return (
            indexBFCcxPM5Value1154 &&
              (indexBFCcxPM5Value1153 +=
                ' style="' +
                indexBFCcxPM5Value23.escape(indexBFCcxPM5Value1154) +
                '"'),
            (indexBFCcxPM5Value1153 += "'/>"),
            indexBFCcxPM5Value1153
          );
        }
      },
      on = {
        î: "ı̂",
        ï: "ı̈",
        í: "ı́",
        ì: "ı̀",
      },
      indexBFCcxPM5Value77 = class {
        constructor(
          indexBFCcxPM5Param132,
          indexBFCcxPM5Param133,
          indexBFCcxPM5Param134,
          indexBFCcxPM5Param135,
          indexBFCcxPM5Param136,
          indexBFCcxPM5Param137,
          indexBFCcxPM5Param138,
          indexBFCcxPM5Param139,
        ) {
          this.text = undefined;
          this.height = undefined;
          this.depth = undefined;
          this.italic = undefined;
          this.skew = undefined;
          this.width = undefined;
          this.maxFontSize = undefined;
          this.classes = undefined;
          this.style = undefined;
          this.text = indexBFCcxPM5Param132;
          this.height = indexBFCcxPM5Param133 || 0;
          this.depth = indexBFCcxPM5Param134 || 0;
          this.italic = indexBFCcxPM5Param135 || 0;
          this.skew = indexBFCcxPM5Param136 || 0;
          this.width = indexBFCcxPM5Param137 || 0;
          this.classes = indexBFCcxPM5Param138 || [];
          this.style = indexBFCcxPM5Param139 || {};
          this.maxFontSize = 0;
          var indexBFCcxPM5Value885 = indexBFCcxPM5Helper29(
            this.text.charCodeAt(0),
          );
          indexBFCcxPM5Value885 &&
            this.classes.push(indexBFCcxPM5Value885 + "_fallback");
          /[îïíì]/.test(this.text) && (this.text = on[this.text]);
        }
        hasClass(indexBFCcxPM5Param827) {
          return indexBFCcxPM5Value23.contains(
            this.classes,
            indexBFCcxPM5Param827,
          );
        }
        toNode() {
          var indexBFCcxPM5Value1019 = document.createTextNode(this.text),
            indexBFCcxPM5Value1020 = null;
          for (var indexBFCcxPM5Value1021 in (this.italic > 0 &&
            ((indexBFCcxPM5Value1020 = document.createElement("span")),
            (indexBFCcxPM5Value1020.style.marginRight = indexBFCcxPM5Value69(
              this.italic,
            ))),
          this.classes.length > 0 &&
            ((indexBFCcxPM5Value1020 ||= document.createElement("span")),
            (indexBFCcxPM5Value1020.className = indexBFCcxPM5Value70(
              this.classes,
            ))),
          this.style))
            this.style.hasOwnProperty(indexBFCcxPM5Value1021) &&
              ((indexBFCcxPM5Value1020 ||= document.createElement("span")),
              (indexBFCcxPM5Value1020.style[indexBFCcxPM5Value1021] =
                this.style[indexBFCcxPM5Value1021]));
          return indexBFCcxPM5Value1020
            ? (indexBFCcxPM5Value1020.appendChild(indexBFCcxPM5Value1019),
              indexBFCcxPM5Value1020)
            : indexBFCcxPM5Value1019;
        }
        toMarkup() {
          var indexBFCcxPM5Value965 = false,
            indexBFCcxPM5Value966 = "<span";
          this.classes.length &&
            ((indexBFCcxPM5Value965 = true),
            (indexBFCcxPM5Value966 += ' class="'),
            (indexBFCcxPM5Value966 += indexBFCcxPM5Value23.escape(
              indexBFCcxPM5Value70(this.classes),
            )),
            (indexBFCcxPM5Value966 += '"'));
          var indexBFCcxPM5Value967 = "";
          for (var indexBFCcxPM5Value968 in (this.italic > 0 &&
            (indexBFCcxPM5Value967 += "margin-right:" + this.italic + "em;"),
          this.style))
            this.style.hasOwnProperty(indexBFCcxPM5Value968) &&
              (indexBFCcxPM5Value967 +=
                indexBFCcxPM5Value23.hyphenate(indexBFCcxPM5Value968) +
                ":" +
                this.style[indexBFCcxPM5Value968] +
                ";");
          indexBFCcxPM5Value967 &&
            ((indexBFCcxPM5Value965 = true),
            (indexBFCcxPM5Value966 +=
              ' style="' +
              indexBFCcxPM5Value23.escape(indexBFCcxPM5Value967) +
              '"'));
          var indexBFCcxPM5Value969 = indexBFCcxPM5Value23.escape(this.text);
          return indexBFCcxPM5Value965
            ? ((indexBFCcxPM5Value966 += ">"),
              (indexBFCcxPM5Value966 += indexBFCcxPM5Value969),
              (indexBFCcxPM5Value966 += "</span>"),
              indexBFCcxPM5Value966)
            : indexBFCcxPM5Value969;
        }
      },
      indexBFCcxPM5Value78 = class {
        constructor(indexBFCcxPM5Param581, indexBFCcxPM5Param582) {
          this.children = undefined;
          this.attributes = undefined;
          this.children = indexBFCcxPM5Param581 || [];
          this.attributes = indexBFCcxPM5Param582 || {};
        }
        toNode() {
          var indexBFCcxPM5Value1175 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
          );
          for (var indexBFCcxPM5Value1176 in this.attributes)
            Object.prototype.hasOwnProperty.call(
              this.attributes,
              indexBFCcxPM5Value1176,
            ) &&
              indexBFCcxPM5Value1175.setAttribute(
                indexBFCcxPM5Value1176,
                this.attributes[indexBFCcxPM5Value1176],
              );
          for (
            var indexBFCcxPM5Value1177 = 0;
            indexBFCcxPM5Value1177 < this.children.length;
            indexBFCcxPM5Value1177++
          )
            indexBFCcxPM5Value1175.appendChild(
              this.children[indexBFCcxPM5Value1177].toNode(),
            );
          return indexBFCcxPM5Value1175;
        }
        toMarkup() {
          var indexBFCcxPM5Value1136 =
            '<svg xmlns="http://www.w3.org/2000/svg"';
          for (var indexBFCcxPM5Value1137 in this.attributes)
            Object.prototype.hasOwnProperty.call(
              this.attributes,
              indexBFCcxPM5Value1137,
            ) &&
              (indexBFCcxPM5Value1136 +=
                " " +
                indexBFCcxPM5Value1137 +
                '="' +
                indexBFCcxPM5Value23.escape(
                  this.attributes[indexBFCcxPM5Value1137],
                ) +
                '"');
          indexBFCcxPM5Value1136 += ">";
          for (
            var indexBFCcxPM5Value1138 = 0;
            indexBFCcxPM5Value1138 < this.children.length;
            indexBFCcxPM5Value1138++
          )
            indexBFCcxPM5Value1136 +=
              this.children[indexBFCcxPM5Value1138].toMarkup();
          return ((indexBFCcxPM5Value1136 += "</svg>"), indexBFCcxPM5Value1136);
        }
      },
      indexBFCcxPM5Value79 = class {
        constructor(indexBFCcxPM5Param609, indexBFCcxPM5Param610) {
          this.pathName = undefined;
          this.alternate = undefined;
          this.pathName = indexBFCcxPM5Param609;
          this.alternate = indexBFCcxPM5Param610;
        }
        toNode() {
          var indexBFCcxPM5Value1252 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
          );
          return (
            this.alternate
              ? indexBFCcxPM5Value1252.setAttribute("d", this.alternate)
              : indexBFCcxPM5Value1252.setAttribute(
                  "d",
                  indexBFCcxPM5Value54[this.pathName],
                ),
            indexBFCcxPM5Value1252
          );
        }
        toMarkup() {
          return this.alternate
            ? '<path d="' + indexBFCcxPM5Value23.escape(this.alternate) + '"/>'
            : '<path d="' +
                indexBFCcxPM5Value23.escape(
                  indexBFCcxPM5Value54[this.pathName],
                ) +
                '"/>';
        }
      },
      indexBFCcxPM5Value80 = class {
        constructor(indexBFCcxPM5Param746) {
          this.attributes = undefined;
          this.attributes = indexBFCcxPM5Param746 || {};
        }
        toNode() {
          var indexBFCcxPM5Value1247 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line",
          );
          for (var indexBFCcxPM5Value1248 in this.attributes)
            Object.prototype.hasOwnProperty.call(
              this.attributes,
              indexBFCcxPM5Value1248,
            ) &&
              indexBFCcxPM5Value1247.setAttribute(
                indexBFCcxPM5Value1248,
                this.attributes[indexBFCcxPM5Value1248],
              );
          return indexBFCcxPM5Value1247;
        }
        toMarkup() {
          var indexBFCcxPM5Value1294 = "<line";
          for (var indexBFCcxPM5Value1295 in this.attributes)
            Object.prototype.hasOwnProperty.call(
              this.attributes,
              indexBFCcxPM5Value1295,
            ) &&
              (indexBFCcxPM5Value1294 +=
                " " +
                indexBFCcxPM5Value1295 +
                '="' +
                indexBFCcxPM5Value23.escape(
                  this.attributes[indexBFCcxPM5Value1295],
                ) +
                '"');
          return ((indexBFCcxPM5Value1294 += "/>"), indexBFCcxPM5Value1294);
        }
      },
      indexBFCcxPM5Value81 = {
        bin: 1,
        close: 1,
        inner: 1,
        open: 1,
        punct: 1,
        rel: 1,
      },
      indexBFCcxPM5Value82 = {
        "accent-token": 1,
        mathord: 1,
        "op-token": 1,
        spacing: 1,
        textord: 1,
      },
      indexBFCcxPM5Value83 = {
        math: {},
        text: {},
      },
      indexBFCcxPM5Value84 = "math",
      indexBFCcxPM5Value85 = "text",
      indexBFCcxPM5Value86 = "main",
      indexBFCcxPM5Value87 = "ams",
      indexBFCcxPM5Value88 = "accent-token",
      indexBFCcxPM5Value89 = "bin",
      indexBFCcxPM5Value90 = "close",
      indexBFCcxPM5Value91 = "inner",
      indexBFCcxPM5Value92 = "mathord",
      indexBFCcxPM5Value93 = "op-token",
      indexBFCcxPM5Value94 = "open",
      indexBFCcxPM5Value95 = "punct",
      indexBFCcxPM5Value96 = "rel",
      _n = "spacing",
      indexBFCcxPM5Value97 = "textord",
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≡",
        "\\equiv",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≺",
        "\\prec",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≻",
        "\\succ",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "∼",
        "\\sim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊥",
        "\\perp",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⪯",
        "\\preceq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⪰",
        "\\succeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≃",
        "\\simeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "∣",
        "\\mid",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≪",
        "\\ll",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≫",
        "\\gg",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≍",
        "\\asymp",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "∥",
        "\\parallel",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⋈",
        "\\bowtie",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⌣",
        "\\smile",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊑",
        "\\sqsubseteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊒",
        "\\sqsupseteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≐",
        "\\doteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⌢",
        "\\frown",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "∋",
        "\\ni",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "∝",
        "\\propto",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊢",
        "\\vdash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊣",
        "\\dashv",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "∋",
        "\\owns",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value95,
        ".",
        "\\ldotp",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value95,
        "⋅",
        "\\cdotp",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "#",
        "\\#",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "#",
        "\\#",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "&",
        "\\&",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "&",
        "\\&",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ℵ",
        "\\aleph",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∀",
        "\\forall",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ℏ",
        "\\hbar",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∃",
        "\\exists",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∇",
        "\\nabla",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "♭",
        "\\flat",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ℓ",
        "\\ell",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "♮",
        "\\natural",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "♣",
        "\\clubsuit",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "℘",
        "\\wp",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "♯",
        "\\sharp",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "♢",
        "\\diamondsuit",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ℜ",
        "\\Re",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "♡",
        "\\heartsuit",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ℑ",
        "\\Im",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "♠",
        "\\spadesuit",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "§",
        "\\S",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "§",
        "\\S",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "¶",
        "\\P",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "¶",
        "\\P",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "†",
        "\\dag",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "†",
        "\\dag",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "†",
        "\\textdagger",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "‡",
        "\\ddag",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "‡",
        "\\ddag",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "‡",
        "\\textdaggerdbl",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "⎱",
        "\\rmoustache",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "⎰",
        "\\lmoustache",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "⟯",
        "\\rgroup",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "⟮",
        "\\lgroup",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∓",
        "\\mp",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⊖",
        "\\ominus",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⊎",
        "\\uplus",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⊓",
        "\\sqcap",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∗",
        "\\ast",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⊔",
        "\\sqcup",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "◯",
        "\\bigcirc",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∙",
        "\\bullet",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "‡",
        "\\ddagger",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "≀",
        "\\wr",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⨿",
        "\\amalg",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "&",
        "\\And",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⟵",
        "\\longleftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇐",
        "\\Leftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⟸",
        "\\Longleftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⟶",
        "\\longrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇒",
        "\\Rightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⟹",
        "\\Longrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↔",
        "\\leftrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⟷",
        "\\longleftrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇔",
        "\\Leftrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⟺",
        "\\Longleftrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↦",
        "\\mapsto",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⟼",
        "\\longmapsto",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↗",
        "\\nearrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↩",
        "\\hookleftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↪",
        "\\hookrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↘",
        "\\searrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↼",
        "\\leftharpoonup",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇀",
        "\\rightharpoonup",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↙",
        "\\swarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↽",
        "\\leftharpoondown",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇁",
        "\\rightharpoondown",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↖",
        "\\nwarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇌",
        "\\rightleftharpoons",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≮",
        "\\nless",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@nleqslant",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@nleqq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪇",
        "\\lneq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≨",
        "\\lneqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@lvertneqq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋦",
        "\\lnsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪉",
        "\\lnapprox",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊀",
        "\\nprec",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋠",
        "\\npreceq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋨",
        "\\precnsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪹",
        "\\precnapprox",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≁",
        "\\nsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@nshortmid",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∤",
        "\\nmid",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊬",
        "\\nvdash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊭",
        "\\nvDash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋪",
        "\\ntriangleleft",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋬",
        "\\ntrianglelefteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊊",
        "\\subsetneq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@varsubsetneq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⫋",
        "\\subsetneqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@varsubsetneqq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≯",
        "\\ngtr",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@ngeqslant",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@ngeqq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪈",
        "\\gneq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≩",
        "\\gneqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@gvertneqq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋧",
        "\\gnsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪊",
        "\\gnapprox",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊁",
        "\\nsucc",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋡",
        "\\nsucceq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋩",
        "\\succnsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪺",
        "\\succnapprox",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≆",
        "\\ncong",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@nshortparallel",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∦",
        "\\nparallel",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊯",
        "\\nVDash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋫",
        "\\ntriangleright",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋭",
        "\\ntrianglerighteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@nsupseteqq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊋",
        "\\supsetneq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@varsupsetneq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⫌",
        "\\supsetneqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@varsupsetneqq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊮",
        "\\nVdash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪵",
        "\\precneqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪶",
        "\\succneqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "",
        "\\@nsubseteqq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊴",
        "\\unlhd",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊵",
        "\\unrhd",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↚",
        "\\nleftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↛",
        "\\nrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇍",
        "\\nLeftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇏",
        "\\nRightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↮",
        "\\nleftrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇎",
        "\\nLeftrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "△",
        "\\vartriangle",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "ℏ",
        "\\hslash",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "▽",
        "\\triangledown",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "◊",
        "\\lozenge",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "Ⓢ",
        "\\circledS",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "®",
        "\\circledR",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "®",
        "\\circledR",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "∡",
        "\\measuredangle",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "∄",
        "\\nexists",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "℧",
        "\\mho",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "Ⅎ",
        "\\Finv",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "⅁",
        "\\Game",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "‵",
        "\\backprime",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "▲",
        "\\blacktriangle",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "▼",
        "\\blacktriangledown",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "■",
        "\\blacksquare",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "⧫",
        "\\blacklozenge",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "★",
        "\\bigstar",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "∢",
        "\\sphericalangle",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "∁",
        "\\complement",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "ð",
        "\\eth",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ð",
        "ð",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "╱",
        "\\diagup",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "╲",
        "\\diagdown",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "□",
        "\\square",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "□",
        "\\Box",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "◊",
        "\\Diamond",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "¥",
        "\\yen",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "¥",
        "\\yen",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "✓",
        "\\checkmark",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "✓",
        "\\checkmark",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "ℶ",
        "\\beth",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "ℸ",
        "\\daleth",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "ℷ",
        "\\gimel",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "ϝ",
        "\\digamma",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "ϰ",
        "\\varkappa",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value94,
        "┌",
        "\\@ulcorner",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value90,
        "┐",
        "\\@urcorner",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value94,
        "└",
        "\\@llcorner",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value90,
        "┘",
        "\\@lrcorner",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≦",
        "\\leqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⩽",
        "\\leqslant",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪕",
        "\\eqslantless",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≲",
        "\\lesssim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪅",
        "\\lessapprox",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≊",
        "\\approxeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋖",
        "\\lessdot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋘",
        "\\lll",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≶",
        "\\lessgtr",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋚",
        "\\lesseqgtr",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪋",
        "\\lesseqqgtr",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≑",
        "\\doteqdot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≓",
        "\\risingdotseq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≒",
        "\\fallingdotseq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∽",
        "\\backsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋍",
        "\\backsimeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⫅",
        "\\subseteqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋐",
        "\\Subset",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊏",
        "\\sqsubset",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≼",
        "\\preccurlyeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋞",
        "\\curlyeqprec",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≾",
        "\\precsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪷",
        "\\precapprox",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊲",
        "\\vartriangleleft",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊴",
        "\\trianglelefteq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊨",
        "\\vDash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊪",
        "\\Vvdash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⌣",
        "\\smallsmile",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⌢",
        "\\smallfrown",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≏",
        "\\bumpeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≎",
        "\\Bumpeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≧",
        "\\geqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⩾",
        "\\geqslant",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪖",
        "\\eqslantgtr",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≳",
        "\\gtrsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪆",
        "\\gtrapprox",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋗",
        "\\gtrdot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋙",
        "\\ggg",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≷",
        "\\gtrless",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋛",
        "\\gtreqless",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪌",
        "\\gtreqqless",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≖",
        "\\eqcirc",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≗",
        "\\circeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≜",
        "\\triangleq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∼",
        "\\thicksim",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≈",
        "\\thickapprox",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⫆",
        "\\supseteqq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋑",
        "\\Supset",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊐",
        "\\sqsupset",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≽",
        "\\succcurlyeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋟",
        "\\curlyeqsucc",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≿",
        "\\succsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⪸",
        "\\succapprox",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊳",
        "\\vartriangleright",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊵",
        "\\trianglerighteq",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊩",
        "\\Vdash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∣",
        "\\shortmid",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∥",
        "\\shortparallel",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≬",
        "\\between",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋔",
        "\\pitchfork",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∝",
        "\\varpropto",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "◀",
        "\\blacktriangleleft",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∴",
        "\\therefore",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∍",
        "\\backepsilon",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "▶",
        "\\blacktriangleright",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "∵",
        "\\because",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋘",
        "\\llless",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⋙",
        "\\gggtr",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊲",
        "\\lhd",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊳",
        "\\rhd",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≂",
        "\\eqsim",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⋈",
        "\\Join",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≑",
        "\\Doteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "∔",
        "\\dotplus",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "∖",
        "\\smallsetminus",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋒",
        "\\Cap",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋓",
        "\\Cup",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⩞",
        "\\doublebarwedge",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊟",
        "\\boxminus",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊞",
        "\\boxplus",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋇",
        "\\divideontimes",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋉",
        "\\ltimes",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋊",
        "\\rtimes",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋋",
        "\\leftthreetimes",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋌",
        "\\rightthreetimes",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋏",
        "\\curlywedge",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋎",
        "\\curlyvee",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊝",
        "\\circleddash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊛",
        "\\circledast",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋅",
        "\\centerdot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊺",
        "\\intercal",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋒",
        "\\doublecap",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⋓",
        "\\doublecup",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊠",
        "\\boxtimes",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇢",
        "\\dashrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇠",
        "\\dashleftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇇",
        "\\leftleftarrows",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇆",
        "\\leftrightarrows",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇚",
        "\\Lleftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↞",
        "\\twoheadleftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↢",
        "\\leftarrowtail",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↫",
        "\\looparrowleft",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇋",
        "\\leftrightharpoons",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↶",
        "\\curvearrowleft",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↺",
        "\\circlearrowleft",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↰",
        "\\Lsh",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇈",
        "\\upuparrows",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↿",
        "\\upharpoonleft",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇃",
        "\\downharpoonleft",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊶",
        "\\origof",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊷",
        "\\imageof",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊸",
        "\\multimap",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↭",
        "\\leftrightsquigarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇉",
        "\\rightrightarrows",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇄",
        "\\rightleftarrows",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↠",
        "\\twoheadrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↣",
        "\\rightarrowtail",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↬",
        "\\looparrowright",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↷",
        "\\curvearrowright",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↻",
        "\\circlearrowright",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↱",
        "\\Rsh",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇊",
        "\\downdownarrows",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↾",
        "\\upharpoonright",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇂",
        "\\downharpoonright",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇝",
        "\\rightsquigarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇝",
        "\\leadsto",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⇛",
        "\\Rrightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "↾",
        "\\restriction",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "‘",
        "`",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "$",
        "\\$",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "$",
        "\\$",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "$",
        "\\textdollar",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "%",
        "\\%",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "%",
        "\\%",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "_",
        "\\_",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "_",
        "\\_",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "_",
        "\\textunderscore",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∠",
        "\\angle",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∞",
        "\\infty",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "′",
        "\\prime",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "△",
        "\\triangle",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Γ",
        "\\Gamma",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Δ",
        "\\Delta",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Θ",
        "\\Theta",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Λ",
        "\\Lambda",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Ξ",
        "\\Xi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Π",
        "\\Pi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Σ",
        "\\Sigma",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Υ",
        "\\Upsilon",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Φ",
        "\\Phi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Ψ",
        "\\Psi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Ω",
        "\\Omega",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "A",
        "Α",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "B",
        "Β",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "E",
        "Ε",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Z",
        "Ζ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "H",
        "Η",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "I",
        "Ι",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "K",
        "Κ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "M",
        "Μ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "N",
        "Ν",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "O",
        "Ο",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "P",
        "Ρ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "T",
        "Τ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "X",
        "Χ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "¬",
        "\\neg",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "¬",
        "\\lnot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "⊤",
        "\\top",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "⊥",
        "\\bot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∅",
        "\\emptyset",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "∅",
        "\\varnothing",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "α",
        "\\alpha",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "β",
        "\\beta",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "γ",
        "\\gamma",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "δ",
        "\\delta",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ϵ",
        "\\epsilon",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ζ",
        "\\zeta",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "η",
        "\\eta",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "θ",
        "\\theta",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ι",
        "\\iota",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "κ",
        "\\kappa",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "λ",
        "\\lambda",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "μ",
        "\\mu",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ν",
        "\\nu",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ξ",
        "\\xi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ο",
        "\\omicron",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "π",
        "\\pi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ρ",
        "\\rho",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "σ",
        "\\sigma",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "τ",
        "\\tau",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "υ",
        "\\upsilon",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ϕ",
        "\\phi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "χ",
        "\\chi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ψ",
        "\\psi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ω",
        "\\omega",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ε",
        "\\varepsilon",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ϑ",
        "\\vartheta",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ϖ",
        "\\varpi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ϱ",
        "\\varrho",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "ς",
        "\\varsigma",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "φ",
        "\\varphi",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∗",
        "*",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "+",
        "+",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "−",
        "-",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⋅",
        "\\cdot",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∘",
        "\\circ",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "÷",
        "\\div",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "±",
        "\\pm",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "×",
        "\\times",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∩",
        "\\cap",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∪",
        "\\cup",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∖",
        "\\setminus",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∧",
        "\\land",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∨",
        "\\lor",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∧",
        "\\wedge",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "∨",
        "\\vee",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "√",
        "\\surd",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "⟨",
        "\\langle",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "∣",
        "\\lvert",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "∥",
        "\\lVert",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "?",
        "?",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "!",
        "!",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "⟩",
        "\\rangle",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "∣",
        "\\rvert",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "∥",
        "\\rVert",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "=",
        "=",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        ":",
        ":",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≈",
        "\\approx",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≅",
        "\\cong",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≥",
        "\\ge",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≥",
        "\\geq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "←",
        "\\gets",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        ">",
        "\\gt",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "∈",
        "\\in",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "",
        "\\@not",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊂",
        "\\subset",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊃",
        "\\supset",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊆",
        "\\subseteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊇",
        "\\supseteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊈",
        "\\nsubseteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "⊉",
        "\\nsupseteq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⊨",
        "\\models",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "←",
        "\\leftarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≤",
        "\\le",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "≤",
        "\\leq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "<",
        "\\lt",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "→",
        "\\rightarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "→",
        "\\to",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≱",
        "\\ngeq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value96,
        "≰",
        "\\nleq",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        _n,
        "\xA0",
        "\\ ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        _n,
        "\xA0",
        "\\space",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        _n,
        "\xA0",
        "\\nobreakspace",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        _n,
        "\xA0",
        "\\ ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        _n,
        "\xA0",
        " ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        _n,
        "\xA0",
        "\\space",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        _n,
        "\xA0",
        "\\nobreakspace",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        _n,
        null,
        "\\nobreak",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        _n,
        null,
        "\\allowbreak",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value95,
        ",",
        ",",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value95,
        ";",
        ";",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊼",
        "\\barwedge",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊻",
        "\\veebar",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⊙",
        "\\odot",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⊕",
        "\\oplus",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⊗",
        "\\otimes",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∂",
        "\\partial",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⊘",
        "\\oslash",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊚",
        "\\circledcirc",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value89,
        "⊡",
        "\\boxdot",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "△",
        "\\bigtriangleup",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "▽",
        "\\bigtriangledown",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "†",
        "\\dagger",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⋄",
        "\\diamond",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "⋆",
        "\\star",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "◃",
        "\\triangleleft",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value89,
        "▹",
        "\\triangleright",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "{",
        "\\{",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "{",
        "\\{",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "{",
        "\\textbraceleft",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "}",
        "\\}",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "}",
        "\\}",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "}",
        "\\textbraceright",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "{",
        "\\lbrace",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "}",
        "\\rbrace",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "[",
        "\\lbrack",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "[",
        "\\lbrack",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "]",
        "\\rbrack",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "]",
        "\\rbrack",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "(",
        "\\lparen",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        ")",
        "\\rparen",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "<",
        "\\textless",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        ">",
        "\\textgreater",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "⌊",
        "\\lfloor",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "⌋",
        "\\rfloor",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value94,
        "⌈",
        "\\lceil",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value90,
        "⌉",
        "\\rceil",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "\\",
        "\\backslash",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∣",
        "|",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∣",
        "\\vert",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "|",
        "\\textbar",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∥",
        "\\|",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∥",
        "\\Vert",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "∥",
        "\\textbardbl",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "~",
        "\\textasciitilde",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "\\",
        "\\textbackslash",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "^",
        "\\textasciicircum",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↑",
        "\\uparrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇑",
        "\\Uparrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↓",
        "\\downarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇓",
        "\\Downarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "↕",
        "\\updownarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value96,
        "⇕",
        "\\Updownarrow",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∐",
        "\\coprod",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⋁",
        "\\bigvee",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⋀",
        "\\bigwedge",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⨄",
        "\\biguplus",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⋂",
        "\\bigcap",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⋃",
        "\\bigcup",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∫",
        "\\int",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∫",
        "\\intop",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∬",
        "\\iint",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∭",
        "\\iiint",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∏",
        "\\prod",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∑",
        "\\sum",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⨂",
        "\\bigotimes",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⨁",
        "\\bigoplus",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⨀",
        "\\bigodot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∮",
        "\\oint",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∯",
        "\\oiint",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∰",
        "\\oiiint",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "⨆",
        "\\bigsqcup",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value93,
        "∫",
        "\\smallint",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value91,
        "…",
        "\\textellipsis",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value91,
        "…",
        "\\mathellipsis",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value91,
        "…",
        "\\ldots",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value91,
        "…",
        "\\ldots",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value91,
        "⋯",
        "\\@cdots",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value91,
        "⋱",
        "\\ddots",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "⋮",
        "\\varvdots",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "⋮",
        "\\varvdots",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˊ",
        "\\acute",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˋ",
        "\\grave",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "¨",
        "\\ddot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "~",
        "\\tilde",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˉ",
        "\\bar",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "˘",
        "\\breve",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˇ",
        "\\check",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "^",
        "\\hat",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "⃗",
        "\\vec",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "˙",
        "\\dot",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "˚",
        "\\mathring",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "",
        "\\@imath",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "",
        "\\@jmath",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ı",
        "ı",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ȷ",
        "ȷ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ı",
        "\\i",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ȷ",
        "\\j",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ß",
        "\\ss",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "æ",
        "\\ae",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "œ",
        "\\oe",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "ø",
        "\\o",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Æ",
        "\\AE",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Œ",
        "\\OE",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "Ø",
        "\\O",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˊ",
        "\\'",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˋ",
        "\\`",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˆ",
        "\\^",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "˜",
        "\\~",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˉ",
        "\\=",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "˘",
        "\\u",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "˙",
        "\\.",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "¸",
        "\\c",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "˚",
        "\\r",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "ˇ",
        "\\v",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "¨",
        '\\"',
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "˝",
        "\\H",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value88,
        "◯",
        "\\textcircled",
      ),
      indexBFCcxPM5Value98 = {
        "--": true,
        "---": true,
        "``": true,
        "''": true,
      },
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "–",
        "--",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "–",
        "\\textendash",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "—",
        "---",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "—",
        "\\textemdash",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "‘",
        "`",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "‘",
        "\\textquoteleft",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "’",
        "'",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "’",
        "\\textquoteright",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "“",
        "``",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "“",
        "\\textquotedblleft",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "”",
        "''",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "”",
        "\\textquotedblright",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "°",
        "\\degree",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "°",
        "\\degree",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "°",
        "\\textdegree",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "£",
        "\\pounds",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "£",
        "\\mathsterling",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "£",
        "\\pounds",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "£",
        "\\textsterling",
        true,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "✠",
        "\\maltese",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "✠",
        "\\maltese",
      ),
      indexBFCcxPM5Value99 = '0123456789/@."',
      indexBFCcxPM5Value100 = 0;
    indexBFCcxPM5Value100 < indexBFCcxPM5Value99.length;
    indexBFCcxPM5Value100++
  ) {
    indexBFCcxPM5Value101 = indexBFCcxPM5Value99.charAt(indexBFCcxPM5Value100);
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value101,
      indexBFCcxPM5Value101,
    );
  }
  for (
    indexBFCcxPM5Value102 = '0123456789!@*()-=+";:?/.,',
      indexBFCcxPM5Value103 = 0;
    indexBFCcxPM5Value103 < indexBFCcxPM5Value102.length;
    indexBFCcxPM5Value103++
  ) {
    indexBFCcxPM5Value104 = indexBFCcxPM5Value102.charAt(indexBFCcxPM5Value103);
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value104,
      indexBFCcxPM5Value104,
    );
  }
  for (
    indexBFCcxPM5Value105 =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      indexBFCcxPM5Value106 = 0;
    indexBFCcxPM5Value106 < indexBFCcxPM5Value105.length;
    indexBFCcxPM5Value106++
  ) {
    indexBFCcxPM5Value107 = indexBFCcxPM5Value105.charAt(indexBFCcxPM5Value106);
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value107,
      indexBFCcxPM5Value107,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value107,
      indexBFCcxPM5Value107,
    );
  }
  for (
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value87,
      indexBFCcxPM5Value97,
      "C",
      "ℂ",
    ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "C",
        "ℂ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "H",
        "ℍ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "H",
        "ℍ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "N",
        "ℕ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "N",
        "ℕ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "P",
        "ℙ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "P",
        "ℙ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "Q",
        "ℚ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "Q",
        "ℚ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "R",
        "ℝ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "R",
        "ℝ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "Z",
        "ℤ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value87,
        indexBFCcxPM5Value97,
        "Z",
        "ℤ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "h",
        "ℎ",
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "h",
        "ℎ",
      ),
      indexBFCcxPM5Value108 = "",
      indexBFCcxPM5Value109 = 0;
    indexBFCcxPM5Value109 < indexBFCcxPM5Value105.length;
    indexBFCcxPM5Value109++
  ) {
    indexBFCcxPM5Value110 = indexBFCcxPM5Value105.charAt(indexBFCcxPM5Value109);
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56320 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56372 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56424 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56580 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56684 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56736 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56788 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56840 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      56944 + indexBFCcxPM5Value109,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value110,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value109 < 26 &&
      ((indexBFCcxPM5Value108 = String.fromCharCode(
        55349,
        56632 + indexBFCcxPM5Value109,
      )),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        indexBFCcxPM5Value110,
        indexBFCcxPM5Value108,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        indexBFCcxPM5Value110,
        indexBFCcxPM5Value108,
      ),
      (indexBFCcxPM5Value108 = String.fromCharCode(
        55349,
        56476 + indexBFCcxPM5Value109,
      )),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        indexBFCcxPM5Value110,
        indexBFCcxPM5Value108,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        indexBFCcxPM5Value110,
        indexBFCcxPM5Value108,
      ));
  }
  for (
    indexBFCcxPM5Value108 = "𝕜",
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value84,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value92,
        "k",
        indexBFCcxPM5Value108,
      ),
      indexBFCcxPM5Helper36(
        indexBFCcxPM5Value85,
        indexBFCcxPM5Value86,
        indexBFCcxPM5Value97,
        "k",
        indexBFCcxPM5Value108,
      ),
      indexBFCcxPM5Value111 = 0;
    indexBFCcxPM5Value111 < 10;
    indexBFCcxPM5Value111++
  ) {
    indexBFCcxPM5Value112 = indexBFCcxPM5Value111.toString();
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      57294 + indexBFCcxPM5Value111,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value112,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value112,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      57314 + indexBFCcxPM5Value111,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value112,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value112,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      57324 + indexBFCcxPM5Value111,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value112,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value112,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Value108 = String.fromCharCode(
      55349,
      57334 + indexBFCcxPM5Value111,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value112,
      indexBFCcxPM5Value108,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value112,
      indexBFCcxPM5Value108,
    );
  }
  for (
    indexBFCcxPM5Value113 = "ÐÞþ", indexBFCcxPM5Value114 = 0;
    indexBFCcxPM5Value114 < indexBFCcxPM5Value113.length;
    indexBFCcxPM5Value114++
  ) {
    indexBFCcxPM5Value115 = indexBFCcxPM5Value113.charAt(indexBFCcxPM5Value114);
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value84,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value92,
      indexBFCcxPM5Value115,
      indexBFCcxPM5Value115,
    );
    indexBFCcxPM5Helper36(
      indexBFCcxPM5Value85,
      indexBFCcxPM5Value86,
      indexBFCcxPM5Value97,
      indexBFCcxPM5Value115,
      indexBFCcxPM5Value115,
    );
  }
  indexBFCcxPM5Value116 = [
    ["mathbf", "textbf", "Main-Bold"],
    ["mathbf", "textbf", "Main-Bold"],
    ["mathnormal", "textit", "Math-Italic"],
    ["mathnormal", "textit", "Math-Italic"],
    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
    ["mathscr", "textscr", "Script-Regular"],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["mathfrak", "textfrak", "Fraktur-Regular"],
    ["mathfrak", "textfrak", "Fraktur-Regular"],
    ["mathbb", "textbb", "AMS-Regular"],
    ["mathbb", "textbb", "AMS-Regular"],
    ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
    ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathitsf", "textitsf", "SansSerif-Italic"],
    ["mathitsf", "textitsf", "SansSerif-Italic"],
    ["", "", ""],
    ["", "", ""],
    ["mathtt", "texttt", "Typewriter-Regular"],
    ["mathtt", "texttt", "Typewriter-Regular"],
  ];
  indexBFCcxPM5Value117 = [
    ["mathbf", "textbf", "Main-Bold"],
    ["", "", ""],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathtt", "texttt", "Typewriter-Regular"],
  ];
  indexBFCcxPM5Value118 = function (
    indexBFCcxPM5Param198,
    indexBFCcxPM5Param199,
  ) {
    var indexBFCcxPM5Value996 = indexBFCcxPM5Param198.charCodeAt(0),
      indexBFCcxPM5Value997 = indexBFCcxPM5Param198.charCodeAt(1),
      indexBFCcxPM5Value998 =
        (indexBFCcxPM5Value996 - 55296) * 1024 +
        (indexBFCcxPM5Value997 - 56320) +
        65536,
      indexBFCcxPM5Value999 = indexBFCcxPM5Param199 === "math" ? 0 : 1;
    if (119808 <= indexBFCcxPM5Value998 && indexBFCcxPM5Value998 < 120484) {
      var indexBFCcxPM5Value1000 = Math.floor(
        (indexBFCcxPM5Value998 - 119808) / 26,
      );
      return [
        indexBFCcxPM5Value116[indexBFCcxPM5Value1000][2],
        indexBFCcxPM5Value116[indexBFCcxPM5Value1000][indexBFCcxPM5Value999],
      ];
    } else if (
      120782 <= indexBFCcxPM5Value998 &&
      indexBFCcxPM5Value998 <= 120831
    ) {
      var indexBFCcxPM5Value1001 = Math.floor(
        (indexBFCcxPM5Value998 - 120782) / 10,
      );
      return [
        indexBFCcxPM5Value117[indexBFCcxPM5Value1001][2],
        indexBFCcxPM5Value117[indexBFCcxPM5Value1001][indexBFCcxPM5Value999],
      ];
    } else {
      if (indexBFCcxPM5Value998 === 120485 || indexBFCcxPM5Value998 === 120486)
        return [
          indexBFCcxPM5Value116[0][2],
          indexBFCcxPM5Value116[0][indexBFCcxPM5Value999],
        ];
      if (120486 < indexBFCcxPM5Value998 && indexBFCcxPM5Value998 < 120782)
        return ["", ""];
      throw new indexBFCcxPM5Value14(
        "Unsupported character: " + indexBFCcxPM5Param198,
      );
    }
  };
  indexBFCcxPM5Value119 = function (
    indexBFCcxPM5Param633,
    indexBFCcxPM5Param634,
    indexBFCcxPM5Param635,
  ) {
    return (
      indexBFCcxPM5Value83[indexBFCcxPM5Param635][indexBFCcxPM5Param633] &&
        indexBFCcxPM5Value83[indexBFCcxPM5Param635][indexBFCcxPM5Param633]
          .replace &&
        (indexBFCcxPM5Param633 =
          indexBFCcxPM5Value83[indexBFCcxPM5Param635][indexBFCcxPM5Param633]
            .replace),
      {
        value: indexBFCcxPM5Param633,
        metrics: indexBFCcxPM5Helper32(
          indexBFCcxPM5Param633,
          indexBFCcxPM5Param634,
          indexBFCcxPM5Param635,
        ),
      }
    );
  };
  indexBFCcxPM5Value120 = function (
    indexBFCcxPM5Param163,
    indexBFCcxPM5Param164,
    indexBFCcxPM5Param165,
    indexBFCcxPM5Param166,
    indexBFCcxPM5Param167,
  ) {
    var indexBFCcxPM5Value933 = indexBFCcxPM5Value119(
        indexBFCcxPM5Param163,
        indexBFCcxPM5Param164,
        indexBFCcxPM5Param165,
      ),
      indexBFCcxPM5Value934 = indexBFCcxPM5Value933.metrics;
    indexBFCcxPM5Param163 = indexBFCcxPM5Value933.value;
    var indexBFCcxPM5Value935;
    if (indexBFCcxPM5Value934) {
      var indexBFCcxPM5Value936 = indexBFCcxPM5Value934.italic;
      (indexBFCcxPM5Param165 === "text" ||
        (indexBFCcxPM5Param166 && indexBFCcxPM5Param166.font === "mathit")) &&
        (indexBFCcxPM5Value936 = 0);
      indexBFCcxPM5Value935 = new indexBFCcxPM5Value77(
        indexBFCcxPM5Param163,
        indexBFCcxPM5Value934.height,
        indexBFCcxPM5Value934.depth,
        indexBFCcxPM5Value936,
        indexBFCcxPM5Value934.skew,
        indexBFCcxPM5Value934.width,
        indexBFCcxPM5Param167,
      );
    } else {
      typeof console < "u" &&
        console.warn(
          "No character metrics " +
            ("for '" +
              indexBFCcxPM5Param163 +
              "' in style '" +
              indexBFCcxPM5Param164 +
              "' and mode '" +
              indexBFCcxPM5Param165 +
              "'"),
        );
      indexBFCcxPM5Value935 = new indexBFCcxPM5Value77(
        indexBFCcxPM5Param163,
        0,
        0,
        0,
        0,
        0,
        indexBFCcxPM5Param167,
      );
    }
    if (indexBFCcxPM5Param166) {
      indexBFCcxPM5Value935.maxFontSize = indexBFCcxPM5Param166.sizeMultiplier;
      indexBFCcxPM5Param166.style.isTight() &&
        indexBFCcxPM5Value935.classes.push("mtight");
      var indexBFCcxPM5Value937 = indexBFCcxPM5Param166.getColor();
      indexBFCcxPM5Value937 &&
        (indexBFCcxPM5Value935.style.color = indexBFCcxPM5Value937);
    }
    return indexBFCcxPM5Value935;
  };
  indexBFCcxPM5Value121 = function (
    indexBFCcxPM5Param350,
    indexBFCcxPM5Param351,
    indexBFCcxPM5Param352,
    indexBFCcxPM5Param353,
  ) {
    return (
      indexBFCcxPM5Param353 === undefined && (indexBFCcxPM5Param353 = []),
      indexBFCcxPM5Param352.font === "boldsymbol" &&
      indexBFCcxPM5Value119(
        indexBFCcxPM5Param350,
        "Main-Bold",
        indexBFCcxPM5Param351,
      ).metrics
        ? indexBFCcxPM5Value120(
            indexBFCcxPM5Param350,
            "Main-Bold",
            indexBFCcxPM5Param351,
            indexBFCcxPM5Param352,
            indexBFCcxPM5Param353.concat(["mathbf"]),
          )
        : indexBFCcxPM5Param350 === "\\" ||
            indexBFCcxPM5Value83[indexBFCcxPM5Param351][indexBFCcxPM5Param350]
              .font === "main"
          ? indexBFCcxPM5Value120(
              indexBFCcxPM5Param350,
              "Main-Regular",
              indexBFCcxPM5Param351,
              indexBFCcxPM5Param352,
              indexBFCcxPM5Param353,
            )
          : indexBFCcxPM5Value120(
              indexBFCcxPM5Param350,
              "AMS-Regular",
              indexBFCcxPM5Param351,
              indexBFCcxPM5Param352,
              indexBFCcxPM5Param353.concat(["amsrm"]),
            )
    );
  };
  indexBFCcxPM5Value122 = function (
    indexBFCcxPM5Param526,
    indexBFCcxPM5Param527,
    indexBFCcxPM5Param528,
    indexBFCcxPM5Param529,
    indexBFCcxPM5Param530,
  ) {
    return indexBFCcxPM5Param530 !== "textord" &&
      indexBFCcxPM5Value119(
        indexBFCcxPM5Param526,
        "Math-BoldItalic",
        indexBFCcxPM5Param527,
      ).metrics
      ? {
          fontName: "Math-BoldItalic",
          fontClass: "boldsymbol",
        }
      : {
          fontName: "Main-Bold",
          fontClass: "mathbf",
        };
  };
  indexBFCcxPM5Value123 = function (
    indexBFCcxPM5Param47,
    indexBFCcxPM5Param48,
    indexBFCcxPM5Param49,
  ) {
    var indexBFCcxPM5Value595 = indexBFCcxPM5Param47.mode,
      indexBFCcxPM5Value596 = indexBFCcxPM5Param47.text,
      indexBFCcxPM5Value597 = ["mord"],
      indexBFCcxPM5Value598 =
        indexBFCcxPM5Value595 === "math" ||
        (indexBFCcxPM5Value595 === "text" && indexBFCcxPM5Param48.font),
      indexBFCcxPM5Value599 = indexBFCcxPM5Value598
        ? indexBFCcxPM5Param48.font
        : indexBFCcxPM5Param48.fontFamily,
      indexBFCcxPM5Value600 = "",
      indexBFCcxPM5Value601 = "";
    if (
      (indexBFCcxPM5Value596.charCodeAt(0) === 55349 &&
        ([indexBFCcxPM5Value600, indexBFCcxPM5Value601] = indexBFCcxPM5Value118(
          indexBFCcxPM5Value596,
          indexBFCcxPM5Value595,
        )),
      indexBFCcxPM5Value600.length > 0)
    )
      return indexBFCcxPM5Value120(
        indexBFCcxPM5Value596,
        indexBFCcxPM5Value600,
        indexBFCcxPM5Value595,
        indexBFCcxPM5Param48,
        indexBFCcxPM5Value597.concat(indexBFCcxPM5Value601),
      );
    if (indexBFCcxPM5Value599) {
      var indexBFCcxPM5Value602, indexBFCcxPM5Value603;
      if (indexBFCcxPM5Value599 === "boldsymbol") {
        var indexBFCcxPM5Value604 = indexBFCcxPM5Value122(
          indexBFCcxPM5Value596,
          indexBFCcxPM5Value595,
          indexBFCcxPM5Param48,
          indexBFCcxPM5Value597,
          indexBFCcxPM5Param49,
        );
        indexBFCcxPM5Value602 = indexBFCcxPM5Value604.fontName;
        indexBFCcxPM5Value603 = [indexBFCcxPM5Value604.fontClass];
      } else
        indexBFCcxPM5Value598
          ? ((indexBFCcxPM5Value602 =
              indexBFCcxPM5Value136[indexBFCcxPM5Value599].fontName),
            (indexBFCcxPM5Value603 = [indexBFCcxPM5Value599]))
          : ((indexBFCcxPM5Value602 = indexBFCcxPM5Value135(
              indexBFCcxPM5Value599,
              indexBFCcxPM5Param48.fontWeight,
              indexBFCcxPM5Param48.fontShape,
            )),
            (indexBFCcxPM5Value603 = [
              indexBFCcxPM5Value599,
              indexBFCcxPM5Param48.fontWeight,
              indexBFCcxPM5Param48.fontShape,
            ]));
      if (
        indexBFCcxPM5Value119(
          indexBFCcxPM5Value596,
          indexBFCcxPM5Value602,
          indexBFCcxPM5Value595,
        ).metrics
      )
        return indexBFCcxPM5Value120(
          indexBFCcxPM5Value596,
          indexBFCcxPM5Value602,
          indexBFCcxPM5Value595,
          indexBFCcxPM5Param48,
          indexBFCcxPM5Value597.concat(indexBFCcxPM5Value603),
        );
      if (
        indexBFCcxPM5Value98.hasOwnProperty(indexBFCcxPM5Value596) &&
        indexBFCcxPM5Value602.slice(0, 10) === "Typewriter"
      ) {
        for (
          var indexBFCcxPM5Value605 = [], indexBFCcxPM5Value606 = 0;
          indexBFCcxPM5Value606 < indexBFCcxPM5Value596.length;
          indexBFCcxPM5Value606++
        )
          indexBFCcxPM5Value605.push(
            indexBFCcxPM5Value120(
              indexBFCcxPM5Value596[indexBFCcxPM5Value606],
              indexBFCcxPM5Value602,
              indexBFCcxPM5Value595,
              indexBFCcxPM5Param48,
              indexBFCcxPM5Value597.concat(indexBFCcxPM5Value603),
            ),
          );
        return indexBFCcxPM5Value131(indexBFCcxPM5Value605);
      }
    }
    if (indexBFCcxPM5Param49 === "mathord")
      return indexBFCcxPM5Value120(
        indexBFCcxPM5Value596,
        "Math-Italic",
        indexBFCcxPM5Value595,
        indexBFCcxPM5Param48,
        indexBFCcxPM5Value597.concat(["mathnormal"]),
      );
    if (indexBFCcxPM5Param49 === "textord") {
      var indexBFCcxPM5Value607 =
        indexBFCcxPM5Value83[indexBFCcxPM5Value595][indexBFCcxPM5Value596] &&
        indexBFCcxPM5Value83[indexBFCcxPM5Value595][indexBFCcxPM5Value596].font;
      if (indexBFCcxPM5Value607 === "ams")
        return indexBFCcxPM5Value120(
          indexBFCcxPM5Value596,
          indexBFCcxPM5Value135(
            "amsrm",
            indexBFCcxPM5Param48.fontWeight,
            indexBFCcxPM5Param48.fontShape,
          ),
          indexBFCcxPM5Value595,
          indexBFCcxPM5Param48,
          indexBFCcxPM5Value597.concat(
            "amsrm",
            indexBFCcxPM5Param48.fontWeight,
            indexBFCcxPM5Param48.fontShape,
          ),
        );
      if (indexBFCcxPM5Value607 === "main" || !indexBFCcxPM5Value607)
        return indexBFCcxPM5Value120(
          indexBFCcxPM5Value596,
          indexBFCcxPM5Value135(
            "textrm",
            indexBFCcxPM5Param48.fontWeight,
            indexBFCcxPM5Param48.fontShape,
          ),
          indexBFCcxPM5Value595,
          indexBFCcxPM5Param48,
          indexBFCcxPM5Value597.concat(
            indexBFCcxPM5Param48.fontWeight,
            indexBFCcxPM5Param48.fontShape,
          ),
        );
      var indexBFCcxPM5Value608 = indexBFCcxPM5Value135(
        indexBFCcxPM5Value607,
        indexBFCcxPM5Param48.fontWeight,
        indexBFCcxPM5Param48.fontShape,
      );
      return indexBFCcxPM5Value120(
        indexBFCcxPM5Value596,
        indexBFCcxPM5Value608,
        indexBFCcxPM5Value595,
        indexBFCcxPM5Param48,
        indexBFCcxPM5Value597.concat(
          indexBFCcxPM5Value608,
          indexBFCcxPM5Param48.fontWeight,
          indexBFCcxPM5Param48.fontShape,
        ),
      );
    } else
      throw Error("unexpected type: " + indexBFCcxPM5Param49 + " in makeOrd");
  };
  indexBFCcxPM5Value124 = (indexBFCcxPM5Param238, indexBFCcxPM5Param239) => {
    if (
      indexBFCcxPM5Value70(indexBFCcxPM5Param238.classes) !==
        indexBFCcxPM5Value70(indexBFCcxPM5Param239.classes) ||
      indexBFCcxPM5Param238.skew !== indexBFCcxPM5Param239.skew ||
      indexBFCcxPM5Param238.maxFontSize !== indexBFCcxPM5Param239.maxFontSize
    )
      return false;
    if (indexBFCcxPM5Param238.classes.length === 1) {
      var indexBFCcxPM5Value1072 = indexBFCcxPM5Param238.classes[0];
      if (
        indexBFCcxPM5Value1072 === "mbin" ||
        indexBFCcxPM5Value1072 === "mord"
      )
        return false;
    }
    for (var indexBFCcxPM5Value1073 in indexBFCcxPM5Param238.style)
      if (
        indexBFCcxPM5Param238.style.hasOwnProperty(indexBFCcxPM5Value1073) &&
        indexBFCcxPM5Param238.style[indexBFCcxPM5Value1073] !==
          indexBFCcxPM5Param239.style[indexBFCcxPM5Value1073]
      )
        return false;
    for (var indexBFCcxPM5Value1074 in indexBFCcxPM5Param239.style)
      if (
        indexBFCcxPM5Param239.style.hasOwnProperty(indexBFCcxPM5Value1074) &&
        indexBFCcxPM5Param238.style[indexBFCcxPM5Value1074] !==
          indexBFCcxPM5Param239.style[indexBFCcxPM5Value1074]
      )
        return false;
    return true;
  };
  indexBFCcxPM5Value125 = (indexBFCcxPM5Param305) => {
    for (
      var indexBFCcxPM5Value1156 = 0;
      indexBFCcxPM5Value1156 < indexBFCcxPM5Param305.length - 1;
      indexBFCcxPM5Value1156++
    ) {
      var indexBFCcxPM5Value1157 =
          indexBFCcxPM5Param305[indexBFCcxPM5Value1156],
        indexBFCcxPM5Value1158 =
          indexBFCcxPM5Param305[indexBFCcxPM5Value1156 + 1];
      indexBFCcxPM5Value1157 instanceof indexBFCcxPM5Value77 &&
        indexBFCcxPM5Value1158 instanceof indexBFCcxPM5Value77 &&
        indexBFCcxPM5Value124(indexBFCcxPM5Value1157, indexBFCcxPM5Value1158) &&
        ((indexBFCcxPM5Value1157.text += indexBFCcxPM5Value1158.text),
        (indexBFCcxPM5Value1157.height = Math.max(
          indexBFCcxPM5Value1157.height,
          indexBFCcxPM5Value1158.height,
        )),
        (indexBFCcxPM5Value1157.depth = Math.max(
          indexBFCcxPM5Value1157.depth,
          indexBFCcxPM5Value1158.depth,
        )),
        (indexBFCcxPM5Value1157.italic = indexBFCcxPM5Value1158.italic),
        indexBFCcxPM5Param305.splice(indexBFCcxPM5Value1156 + 1, 1),
        indexBFCcxPM5Value1156--);
    }
    return indexBFCcxPM5Param305;
  };
  indexBFCcxPM5Value126 = function (indexBFCcxPM5Param387) {
    for (
      var indexBFCcxPM5Value1242 = 0,
        indexBFCcxPM5Value1243 = 0,
        indexBFCcxPM5Value1244 = 0,
        indexBFCcxPM5Value1245 = 0;
      indexBFCcxPM5Value1245 < indexBFCcxPM5Param387.children.length;
      indexBFCcxPM5Value1245++
    ) {
      var indexBFCcxPM5Value1246 =
        indexBFCcxPM5Param387.children[indexBFCcxPM5Value1245];
      indexBFCcxPM5Value1246.height > indexBFCcxPM5Value1242 &&
        (indexBFCcxPM5Value1242 = indexBFCcxPM5Value1246.height);
      indexBFCcxPM5Value1246.depth > indexBFCcxPM5Value1243 &&
        (indexBFCcxPM5Value1243 = indexBFCcxPM5Value1246.depth);
      indexBFCcxPM5Value1246.maxFontSize > indexBFCcxPM5Value1244 &&
        (indexBFCcxPM5Value1244 = indexBFCcxPM5Value1246.maxFontSize);
    }
    indexBFCcxPM5Param387.height = indexBFCcxPM5Value1242;
    indexBFCcxPM5Param387.depth = indexBFCcxPM5Value1243;
    indexBFCcxPM5Param387.maxFontSize = indexBFCcxPM5Value1244;
  };
  indexBFCcxPM5Value127 = function (
    indexBFCcxPM5Param767,
    indexBFCcxPM5Param768,
    indexBFCcxPM5Param769,
    indexBFCcxPM5Param770,
  ) {
    var indexBFCcxPM5Value1461 = new indexBFCcxPM5Value74(
      indexBFCcxPM5Param767,
      indexBFCcxPM5Param768,
      indexBFCcxPM5Param769,
      indexBFCcxPM5Param770,
    );
    return (
      indexBFCcxPM5Value126(indexBFCcxPM5Value1461),
      indexBFCcxPM5Value1461
    );
  };
  indexBFCcxPM5Value128 = (
    indexBFCcxPM5Param875,
    indexBFCcxPM5Param876,
    indexBFCcxPM5Param877,
    indexBFCcxPM5Param878,
  ) =>
    new indexBFCcxPM5Value74(
      indexBFCcxPM5Param875,
      indexBFCcxPM5Param876,
      indexBFCcxPM5Param877,
      indexBFCcxPM5Param878,
    );
  indexBFCcxPM5Value129 = function (
    indexBFCcxPM5Param421,
    indexBFCcxPM5Param422,
    indexBFCcxPM5Param423,
  ) {
    var indexBFCcxPM5Value1277 = indexBFCcxPM5Value127(
      [indexBFCcxPM5Param421],
      [],
      indexBFCcxPM5Param422,
    );
    return (
      (indexBFCcxPM5Value1277.height = Math.max(
        indexBFCcxPM5Param423 ||
          indexBFCcxPM5Param422.fontMetrics().defaultRuleThickness,
        indexBFCcxPM5Param422.minRuleThickness,
      )),
      (indexBFCcxPM5Value1277.style.borderBottomWidth = indexBFCcxPM5Value69(
        indexBFCcxPM5Value1277.height,
      )),
      (indexBFCcxPM5Value1277.maxFontSize = 1),
      indexBFCcxPM5Value1277
    );
  };
  indexBFCcxPM5Value130 = function (
    indexBFCcxPM5Param771,
    indexBFCcxPM5Param772,
    indexBFCcxPM5Param773,
    indexBFCcxPM5Param774,
  ) {
    var indexBFCcxPM5Value1462 = new indexBFCcxPM5Value75(
      indexBFCcxPM5Param771,
      indexBFCcxPM5Param772,
      indexBFCcxPM5Param773,
      indexBFCcxPM5Param774,
    );
    return (
      indexBFCcxPM5Value126(indexBFCcxPM5Value1462),
      indexBFCcxPM5Value1462
    );
  };
  indexBFCcxPM5Value131 = function (indexBFCcxPM5Param813) {
    var indexBFCcxPM5Value1467 = new indexBFCcxPM5Value56(
      indexBFCcxPM5Param813,
    );
    return (
      indexBFCcxPM5Value126(indexBFCcxPM5Value1467),
      indexBFCcxPM5Value1467
    );
  };
  indexBFCcxPM5Value132 = function (
    indexBFCcxPM5Param801,
    indexBFCcxPM5Param802,
  ) {
    return indexBFCcxPM5Param801 instanceof indexBFCcxPM5Value56
      ? indexBFCcxPM5Value127(
          [],
          [indexBFCcxPM5Param801],
          indexBFCcxPM5Param802,
        )
      : indexBFCcxPM5Param801;
  };
  indexBFCcxPM5Value133 = function (indexBFCcxPM5Param81) {
    if (indexBFCcxPM5Param81.positionType === "individualShift") {
      for (
        var indexBFCcxPM5Value734 = indexBFCcxPM5Param81.children,
          indexBFCcxPM5Value735 = [indexBFCcxPM5Value734[0]],
          indexBFCcxPM5Value736 =
            -indexBFCcxPM5Value734[0].shift -
            indexBFCcxPM5Value734[0].elem.depth,
          indexBFCcxPM5Value737 = indexBFCcxPM5Value736,
          indexBFCcxPM5Value738 = 1;
        indexBFCcxPM5Value738 < indexBFCcxPM5Value734.length;
        indexBFCcxPM5Value738++
      ) {
        var indexBFCcxPM5Value739 =
            -indexBFCcxPM5Value734[indexBFCcxPM5Value738].shift -
            indexBFCcxPM5Value737 -
            indexBFCcxPM5Value734[indexBFCcxPM5Value738].elem.depth,
          indexBFCcxPM5Value740 =
            indexBFCcxPM5Value739 -
            (indexBFCcxPM5Value734[indexBFCcxPM5Value738 - 1].elem.height +
              indexBFCcxPM5Value734[indexBFCcxPM5Value738 - 1].elem.depth);
        indexBFCcxPM5Value737 += indexBFCcxPM5Value739;
        indexBFCcxPM5Value735.push({
          type: "kern",
          size: indexBFCcxPM5Value740,
        });
        indexBFCcxPM5Value735.push(
          indexBFCcxPM5Value734[indexBFCcxPM5Value738],
        );
      }
      return {
        children: indexBFCcxPM5Value735,
        depth: indexBFCcxPM5Value736,
      };
    }
    var indexBFCcxPM5Value741;
    if (indexBFCcxPM5Param81.positionType === "top") {
      for (
        var indexBFCcxPM5Value742 = indexBFCcxPM5Param81.positionData,
          indexBFCcxPM5Value743 = 0;
        indexBFCcxPM5Value743 < indexBFCcxPM5Param81.children.length;
        indexBFCcxPM5Value743++
      ) {
        var indexBFCcxPM5Value744 =
          indexBFCcxPM5Param81.children[indexBFCcxPM5Value743];
        indexBFCcxPM5Value742 -=
          indexBFCcxPM5Value744.type === "kern"
            ? indexBFCcxPM5Value744.size
            : indexBFCcxPM5Value744.elem.height +
              indexBFCcxPM5Value744.elem.depth;
      }
      indexBFCcxPM5Value741 = indexBFCcxPM5Value742;
    } else if (indexBFCcxPM5Param81.positionType === "bottom")
      indexBFCcxPM5Value741 = -indexBFCcxPM5Param81.positionData;
    else {
      var indexBFCcxPM5Value745 = indexBFCcxPM5Param81.children[0];
      if (indexBFCcxPM5Value745.type !== "elem")
        throw Error('First child must have type "elem".');
      if (indexBFCcxPM5Param81.positionType === "shift")
        indexBFCcxPM5Value741 =
          -indexBFCcxPM5Value745.elem.depth - indexBFCcxPM5Param81.positionData;
      else if (indexBFCcxPM5Param81.positionType === "firstBaseline")
        indexBFCcxPM5Value741 = -indexBFCcxPM5Value745.elem.depth;
      else
        throw Error(
          "Invalid positionType " + indexBFCcxPM5Param81.positionType + ".",
        );
    }
    return {
      children: indexBFCcxPM5Param81.children,
      depth: indexBFCcxPM5Value741,
    };
  };
  indexBFCcxPM5Value134 = function (
    indexBFCcxPM5Param63,
    indexBFCcxPM5Param64,
  ) {
    for (
      var { children, depth } = indexBFCcxPM5Value133(indexBFCcxPM5Param63),
        indexBFCcxPM5Value669 = 0,
        indexBFCcxPM5Value670 = 0;
      indexBFCcxPM5Value670 < children.length;
      indexBFCcxPM5Value670++
    ) {
      var indexBFCcxPM5Value671 = children[indexBFCcxPM5Value670];
      if (indexBFCcxPM5Value671.type === "elem") {
        var indexBFCcxPM5Value672 = indexBFCcxPM5Value671.elem;
        indexBFCcxPM5Value669 = Math.max(
          indexBFCcxPM5Value669,
          indexBFCcxPM5Value672.maxFontSize,
          indexBFCcxPM5Value672.height,
        );
      }
    }
    indexBFCcxPM5Value669 += 2;
    var indexBFCcxPM5Value673 = indexBFCcxPM5Value127(["pstrut"], []);
    indexBFCcxPM5Value673.style.height = indexBFCcxPM5Value69(
      indexBFCcxPM5Value669,
    );
    for (
      var indexBFCcxPM5Value674 = [],
        indexBFCcxPM5Value675 = depth,
        indexBFCcxPM5Value676 = depth,
        indexBFCcxPM5Value677 = depth,
        indexBFCcxPM5Value678 = 0;
      indexBFCcxPM5Value678 < children.length;
      indexBFCcxPM5Value678++
    ) {
      var indexBFCcxPM5Value679 = children[indexBFCcxPM5Value678];
      if (indexBFCcxPM5Value679.type === "kern")
        indexBFCcxPM5Value677 += indexBFCcxPM5Value679.size;
      else {
        var indexBFCcxPM5Value680 = indexBFCcxPM5Value679.elem,
          indexBFCcxPM5Value681 = indexBFCcxPM5Value679.wrapperClasses || [],
          indexBFCcxPM5Value682 = indexBFCcxPM5Value679.wrapperStyle || {},
          indexBFCcxPM5Value683 = indexBFCcxPM5Value127(
            indexBFCcxPM5Value681,
            [indexBFCcxPM5Value673, indexBFCcxPM5Value680],
            undefined,
            indexBFCcxPM5Value682,
          );
        indexBFCcxPM5Value683.style.top = indexBFCcxPM5Value69(
          -indexBFCcxPM5Value669 -
            indexBFCcxPM5Value677 -
            indexBFCcxPM5Value680.depth,
        );
        indexBFCcxPM5Value679.marginLeft &&
          (indexBFCcxPM5Value683.style.marginLeft =
            indexBFCcxPM5Value679.marginLeft);
        indexBFCcxPM5Value679.marginRight &&
          (indexBFCcxPM5Value683.style.marginRight =
            indexBFCcxPM5Value679.marginRight);
        indexBFCcxPM5Value674.push(indexBFCcxPM5Value683);
        indexBFCcxPM5Value677 +=
          indexBFCcxPM5Value680.height + indexBFCcxPM5Value680.depth;
      }
      indexBFCcxPM5Value675 = Math.min(
        indexBFCcxPM5Value675,
        indexBFCcxPM5Value677,
      );
      indexBFCcxPM5Value676 = Math.max(
        indexBFCcxPM5Value676,
        indexBFCcxPM5Value677,
      );
    }
    var indexBFCcxPM5Value684 = indexBFCcxPM5Value127(
      ["vlist"],
      indexBFCcxPM5Value674,
    );
    indexBFCcxPM5Value684.style.height = indexBFCcxPM5Value69(
      indexBFCcxPM5Value676,
    );
    var indexBFCcxPM5Value685;
    if (indexBFCcxPM5Value675 < 0) {
      var indexBFCcxPM5Value686 = indexBFCcxPM5Value127(
        ["vlist"],
        [indexBFCcxPM5Value127([], [])],
      );
      indexBFCcxPM5Value686.style.height = indexBFCcxPM5Value69(
        -indexBFCcxPM5Value675,
      );
      indexBFCcxPM5Value685 = [
        indexBFCcxPM5Value127(
          ["vlist-r"],
          [
            indexBFCcxPM5Value684,
            indexBFCcxPM5Value127(["vlist-s"], [new indexBFCcxPM5Value77("​")]),
          ],
        ),
        indexBFCcxPM5Value127(["vlist-r"], [indexBFCcxPM5Value686]),
      ];
    } else
      indexBFCcxPM5Value685 = [
        indexBFCcxPM5Value127(["vlist-r"], [indexBFCcxPM5Value684]),
      ];
    var indexBFCcxPM5Value687 = indexBFCcxPM5Value127(
      ["vlist-t"],
      indexBFCcxPM5Value685,
    );
    return (
      indexBFCcxPM5Value685.length === 2 &&
        indexBFCcxPM5Value687.classes.push("vlist-t2"),
      (indexBFCcxPM5Value687.height = indexBFCcxPM5Value676),
      (indexBFCcxPM5Value687.depth = -indexBFCcxPM5Value675),
      indexBFCcxPM5Value687
    );
  };
  $n = (indexBFCcxPM5Param692, indexBFCcxPM5Param693) => {
    var indexBFCcxPM5Value1436 = indexBFCcxPM5Value127(
        ["mspace"],
        [],
        indexBFCcxPM5Param693,
      ),
      indexBFCcxPM5Value1437 = indexBFCcxPM5Value68(
        indexBFCcxPM5Param692,
        indexBFCcxPM5Param693,
      );
    return (
      (indexBFCcxPM5Value1436.style.marginRight = indexBFCcxPM5Value69(
        indexBFCcxPM5Value1437,
      )),
      indexBFCcxPM5Value1436
    );
  };
  indexBFCcxPM5Value135 = function (
    indexBFCcxPM5Param184,
    indexBFCcxPM5Param185,
    indexBFCcxPM5Param186,
  ) {
    var indexBFCcxPM5Value977 = "";
    switch (indexBFCcxPM5Param184) {
      case "amsrm":
        indexBFCcxPM5Value977 = "AMS";
        break;
      case "textrm":
        indexBFCcxPM5Value977 = "Main";
        break;
      case "textsf":
        indexBFCcxPM5Value977 = "SansSerif";
        break;
      case "texttt":
        indexBFCcxPM5Value977 = "Typewriter";
        break;
      default:
        indexBFCcxPM5Value977 = indexBFCcxPM5Param184;
    }
    var indexBFCcxPM5Value978;
    return (
      (indexBFCcxPM5Value978 =
        indexBFCcxPM5Param185 === "textbf" && indexBFCcxPM5Param186 === "textit"
          ? "BoldItalic"
          : indexBFCcxPM5Param185 === "textbf"
            ? "Bold"
            : indexBFCcxPM5Param185 === "textit"
              ? "Italic"
              : "Regular"),
      indexBFCcxPM5Value977 + "-" + indexBFCcxPM5Value978
    );
  };
  indexBFCcxPM5Value136 = {
    mathbf: {
      variant: "bold",
      fontName: "Main-Bold",
    },
    mathrm: {
      variant: "normal",
      fontName: "Main-Regular",
    },
    textit: {
      variant: "italic",
      fontName: "Main-Italic",
    },
    mathit: {
      variant: "italic",
      fontName: "Main-Italic",
    },
    mathnormal: {
      variant: "italic",
      fontName: "Math-Italic",
    },
    mathsfit: {
      variant: "sans-serif-italic",
      fontName: "SansSerif-Italic",
    },
    mathbb: {
      variant: "double-struck",
      fontName: "AMS-Regular",
    },
    mathcal: {
      variant: "script",
      fontName: "Caligraphic-Regular",
    },
    mathfrak: {
      variant: "fraktur",
      fontName: "Fraktur-Regular",
    },
    mathscr: {
      variant: "script",
      fontName: "Script-Regular",
    },
    mathsf: {
      variant: "sans-serif",
      fontName: "SansSerif-Regular",
    },
    mathtt: {
      variant: "monospace",
      fontName: "Typewriter-Regular",
    },
  };
  indexBFCcxPM5Value137 = {
    vec: ["vec", 0.471, 0.714],
    oiintSize1: ["oiintSize1", 0.957, 0.499],
    oiintSize2: ["oiintSize2", 1.472, 0.659],
    oiiintSize1: ["oiiintSize1", 1.304, 0.499],
    oiiintSize2: ["oiiintSize2", 1.98, 0.659],
  };
  indexBFCcxPM5Value138 = function (
    indexBFCcxPM5Param240,
    indexBFCcxPM5Param241,
  ) {
    var [
        indexBFCcxPM5Value1075,
        indexBFCcxPM5Value1076,
        indexBFCcxPM5Value1077,
      ] = indexBFCcxPM5Value137[indexBFCcxPM5Param240],
      indexBFCcxPM5Value1078 = new indexBFCcxPM5Value79(indexBFCcxPM5Value1075),
      indexBFCcxPM5Value1079 = indexBFCcxPM5Value128(
        ["overlay"],
        [
          new indexBFCcxPM5Value78([indexBFCcxPM5Value1078], {
            width: indexBFCcxPM5Value69(indexBFCcxPM5Value1076),
            height: indexBFCcxPM5Value69(indexBFCcxPM5Value1077),
            style: "width:" + indexBFCcxPM5Value69(indexBFCcxPM5Value1076),
            viewBox:
              "0 0 " +
              1e3 * indexBFCcxPM5Value1076 +
              " " +
              1e3 * indexBFCcxPM5Value1077,
            preserveAspectRatio: "xMinYMin",
          }),
        ],
        indexBFCcxPM5Param241,
      );
    return (
      (indexBFCcxPM5Value1079.height = indexBFCcxPM5Value1077),
      (indexBFCcxPM5Value1079.style.height = indexBFCcxPM5Value69(
        indexBFCcxPM5Value1077,
      )),
      (indexBFCcxPM5Value1079.style.width = indexBFCcxPM5Value69(
        indexBFCcxPM5Value1076,
      )),
      indexBFCcxPM5Value1079
    );
  };
  indexBFCcxPM5Value139 = {
    fontMap: indexBFCcxPM5Value136,
    makeSymbol: indexBFCcxPM5Value120,
    mathsym: indexBFCcxPM5Value121,
    makeSpan: indexBFCcxPM5Value127,
    makeSvgSpan: indexBFCcxPM5Value128,
    makeLineSpan: indexBFCcxPM5Value129,
    makeAnchor: indexBFCcxPM5Value130,
    makeFragment: indexBFCcxPM5Value131,
    wrapFragment: indexBFCcxPM5Value132,
    makeVList: indexBFCcxPM5Value134,
    makeOrd: indexBFCcxPM5Value123,
    makeGlue: $n,
    staticSvg: indexBFCcxPM5Value138,
    svgData: indexBFCcxPM5Value137,
    tryCombineChars: indexBFCcxPM5Value125,
  };
  indexBFCcxPM5Value140 = {
    number: 3,
    unit: "mu",
  };
  indexBFCcxPM5Value141 = {
    number: 4,
    unit: "mu",
  };
  indexBFCcxPM5Value142 = {
    number: 5,
    unit: "mu",
  };
  or = {
    mord: {
      mop: indexBFCcxPM5Value140,
      mbin: indexBFCcxPM5Value141,
      mrel: indexBFCcxPM5Value142,
      minner: indexBFCcxPM5Value140,
    },
    mop: {
      mord: indexBFCcxPM5Value140,
      mop: indexBFCcxPM5Value140,
      mrel: indexBFCcxPM5Value142,
      minner: indexBFCcxPM5Value140,
    },
    mbin: {
      mord: indexBFCcxPM5Value141,
      mop: indexBFCcxPM5Value141,
      mopen: indexBFCcxPM5Value141,
      minner: indexBFCcxPM5Value141,
    },
    mrel: {
      mord: indexBFCcxPM5Value142,
      mop: indexBFCcxPM5Value142,
      mopen: indexBFCcxPM5Value142,
      minner: indexBFCcxPM5Value142,
    },
    mopen: {},
    mclose: {
      mop: indexBFCcxPM5Value140,
      mbin: indexBFCcxPM5Value141,
      mrel: indexBFCcxPM5Value142,
      minner: indexBFCcxPM5Value140,
    },
    mpunct: {
      mord: indexBFCcxPM5Value140,
      mop: indexBFCcxPM5Value140,
      mrel: indexBFCcxPM5Value142,
      mopen: indexBFCcxPM5Value140,
      mclose: indexBFCcxPM5Value140,
      mpunct: indexBFCcxPM5Value140,
      minner: indexBFCcxPM5Value140,
    },
    minner: {
      mord: indexBFCcxPM5Value140,
      mop: indexBFCcxPM5Value140,
      mbin: indexBFCcxPM5Value141,
      mrel: indexBFCcxPM5Value142,
      mopen: indexBFCcxPM5Value140,
      mpunct: indexBFCcxPM5Value140,
      minner: indexBFCcxPM5Value140,
    },
  };
  indexBFCcxPM5Value143 = {
    mord: {
      mop: indexBFCcxPM5Value140,
    },
    mop: {
      mord: indexBFCcxPM5Value140,
      mop: indexBFCcxPM5Value140,
    },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: {
      mop: indexBFCcxPM5Value140,
    },
    mpunct: {},
    minner: {
      mop: indexBFCcxPM5Value140,
    },
  };
  indexBFCcxPM5Value144 = {};
  indexBFCcxPM5Value145 = {};
  indexBFCcxPM5Value146 = {};
  indexBFCcxPM5Value147 = function (indexBFCcxPM5Param747) {
    return indexBFCcxPM5Param747.type === "ordgroup" &&
      indexBFCcxPM5Param747.body.length === 1
      ? indexBFCcxPM5Param747.body[0]
      : indexBFCcxPM5Param747;
  };
  indexBFCcxPM5Value148 = function (indexBFCcxPM5Param811) {
    return indexBFCcxPM5Param811.type === "ordgroup"
      ? indexBFCcxPM5Param811.body
      : [indexBFCcxPM5Param811];
  };
  indexBFCcxPM5Value149 = indexBFCcxPM5Value139.makeSpan;
  indexBFCcxPM5Value150 = [
    "leftmost",
    "mbin",
    "mopen",
    "mrel",
    "mop",
    "mpunct",
  ];
  indexBFCcxPM5Value151 = ["rightmost", "mrel", "mclose", "mpunct"];
  indexBFCcxPM5Value152 = {
    display: indexBFCcxPM5Value41.DISPLAY,
    text: indexBFCcxPM5Value41.TEXT,
    script: indexBFCcxPM5Value41.SCRIPT,
    scriptscript: indexBFCcxPM5Value41.SCRIPTSCRIPT,
  };
  indexBFCcxPM5Value153 = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner",
  };
  indexBFCcxPM5Value154 = function (
    indexBFCcxPM5Param70,
    indexBFCcxPM5Param71,
    indexBFCcxPM5Param72,
    indexBFCcxPM5Param73,
  ) {
    indexBFCcxPM5Param73 === undefined && (indexBFCcxPM5Param73 = [null, null]);
    for (
      var indexBFCcxPM5Value707 = [], indexBFCcxPM5Value708 = 0;
      indexBFCcxPM5Value708 < indexBFCcxPM5Param70.length;
      indexBFCcxPM5Value708++
    ) {
      var indexBFCcxPM5Value709 = indexBFCcxPM5Value159(
        indexBFCcxPM5Param70[indexBFCcxPM5Value708],
        indexBFCcxPM5Param71,
      );
      if (indexBFCcxPM5Value709 instanceof indexBFCcxPM5Value56) {
        var indexBFCcxPM5Value710 = indexBFCcxPM5Value709.children;
        indexBFCcxPM5Value707.push(...indexBFCcxPM5Value710);
      } else indexBFCcxPM5Value707.push(indexBFCcxPM5Value709);
    }
    if (
      (indexBFCcxPM5Value139.tryCombineChars(indexBFCcxPM5Value707),
      !indexBFCcxPM5Param72)
    )
      return indexBFCcxPM5Value707;
    var indexBFCcxPM5Value711 = indexBFCcxPM5Param71;
    if (indexBFCcxPM5Param70.length === 1) {
      var indexBFCcxPM5Value712 = indexBFCcxPM5Param70[0];
      indexBFCcxPM5Value712.type === "sizing"
        ? (indexBFCcxPM5Value711 = indexBFCcxPM5Param71.havingSize(
            indexBFCcxPM5Value712.size,
          ))
        : indexBFCcxPM5Value712.type === "styling" &&
          (indexBFCcxPM5Value711 = indexBFCcxPM5Param71.havingStyle(
            indexBFCcxPM5Value152[indexBFCcxPM5Value712.style],
          ));
    }
    var indexBFCcxPM5Value713 = indexBFCcxPM5Value149(
        [indexBFCcxPM5Param73[0] || "leftmost"],
        [],
        indexBFCcxPM5Param71,
      ),
      indexBFCcxPM5Value714 = indexBFCcxPM5Value149(
        [indexBFCcxPM5Param73[1] || "rightmost"],
        [],
        indexBFCcxPM5Param71,
      ),
      indexBFCcxPM5Value715 = indexBFCcxPM5Param72 === "root";
    return (
      _r(
        indexBFCcxPM5Value707,
        (indexBFCcxPM5Param481, indexBFCcxPM5Param482) => {
          var indexBFCcxPM5Value1320 = indexBFCcxPM5Param482.classes[0],
            indexBFCcxPM5Value1321 = indexBFCcxPM5Param481.classes[0];
          indexBFCcxPM5Value1320 === "mbin" &&
          indexBFCcxPM5Value23.contains(
            indexBFCcxPM5Value151,
            indexBFCcxPM5Value1321,
          )
            ? (indexBFCcxPM5Param482.classes[0] = "mord")
            : indexBFCcxPM5Value1321 === "mbin" &&
              indexBFCcxPM5Value23.contains(
                indexBFCcxPM5Value150,
                indexBFCcxPM5Value1320,
              ) &&
              (indexBFCcxPM5Param481.classes[0] = "mord");
        },
        {
          node: indexBFCcxPM5Value713,
        },
        indexBFCcxPM5Value714,
        indexBFCcxPM5Value715,
      ),
      _r(
        indexBFCcxPM5Value707,
        (indexBFCcxPM5Param564, indexBFCcxPM5Param565) => {
          var indexBFCcxPM5Value1370 = indexBFCcxPM5Value157(
              indexBFCcxPM5Param565,
            ),
            indexBFCcxPM5Value1371 = indexBFCcxPM5Value157(
              indexBFCcxPM5Param564,
            ),
            indexBFCcxPM5Value1372 =
              indexBFCcxPM5Value1370 && indexBFCcxPM5Value1371
                ? indexBFCcxPM5Param564.hasClass("mtight")
                  ? indexBFCcxPM5Value143[indexBFCcxPM5Value1370][
                      indexBFCcxPM5Value1371
                    ]
                  : or[indexBFCcxPM5Value1370][indexBFCcxPM5Value1371]
                : null;
          if (indexBFCcxPM5Value1372)
            return indexBFCcxPM5Value139.makeGlue(
              indexBFCcxPM5Value1372,
              indexBFCcxPM5Value711,
            );
        },
        {
          node: indexBFCcxPM5Value713,
        },
        indexBFCcxPM5Value714,
        indexBFCcxPM5Value715,
      ),
      indexBFCcxPM5Value707
    );
  };
  _r = function indexBFCcxPM5Helper62(
    indexBFCcxPM5Param187,
    indexBFCcxPM5Param188,
    indexBFCcxPM5Param189,
    indexBFCcxPM5Param190,
    indexBFCcxPM5Param191,
  ) {
    indexBFCcxPM5Param190 && indexBFCcxPM5Param187.push(indexBFCcxPM5Param190);
    for (
      var indexBFCcxPM5Value979 = 0;
      indexBFCcxPM5Value979 < indexBFCcxPM5Param187.length;
      indexBFCcxPM5Value979++
    ) {
      var indexBFCcxPM5Value980 = indexBFCcxPM5Param187[indexBFCcxPM5Value979],
        indexBFCcxPM5Value981 = indexBFCcxPM5Value155(indexBFCcxPM5Value980);
      if (indexBFCcxPM5Value981) {
        indexBFCcxPM5Helper62(
          indexBFCcxPM5Value981.children,
          indexBFCcxPM5Param188,
          indexBFCcxPM5Param189,
          null,
          indexBFCcxPM5Param191,
        );
        continue;
      }
      var indexBFCcxPM5Value982 = !indexBFCcxPM5Value980.hasClass("mspace");
      if (indexBFCcxPM5Value982) {
        var indexBFCcxPM5Value983 = indexBFCcxPM5Param188(
          indexBFCcxPM5Value980,
          indexBFCcxPM5Param189.node,
        );
        indexBFCcxPM5Value983 &&
          (indexBFCcxPM5Param189.insertAfter
            ? indexBFCcxPM5Param189.insertAfter(indexBFCcxPM5Value983)
            : (indexBFCcxPM5Param187.unshift(indexBFCcxPM5Value983),
              indexBFCcxPM5Value979++));
      }
      indexBFCcxPM5Value982
        ? (indexBFCcxPM5Param189.node = indexBFCcxPM5Value980)
        : indexBFCcxPM5Param191 &&
          indexBFCcxPM5Value980.hasClass("newline") &&
          (indexBFCcxPM5Param189.node = indexBFCcxPM5Value149(["leftmost"]));
      indexBFCcxPM5Param189.insertAfter = (
        (indexBFCcxPM5Param828) => (indexBFCcxPM5Param844) => {
          indexBFCcxPM5Param187.splice(
            indexBFCcxPM5Param828 + 1,
            0,
            indexBFCcxPM5Param844,
          );
          indexBFCcxPM5Value979++;
        }
      )(indexBFCcxPM5Value979);
    }
    indexBFCcxPM5Param190 && indexBFCcxPM5Param187.pop();
  };
  indexBFCcxPM5Value155 = function (indexBFCcxPM5Param623) {
    return indexBFCcxPM5Param623 instanceof indexBFCcxPM5Value56 ||
      indexBFCcxPM5Param623 instanceof indexBFCcxPM5Value75 ||
      (indexBFCcxPM5Param623 instanceof indexBFCcxPM5Value74 &&
        indexBFCcxPM5Param623.hasClass("enclosing"))
      ? indexBFCcxPM5Param623
      : null;
  };
  indexBFCcxPM5Value156 = function indexBFCcxPM5Helper63(
    indexBFCcxPM5Param465,
    indexBFCcxPM5Param466,
  ) {
    var indexBFCcxPM5Value1308 = indexBFCcxPM5Value155(indexBFCcxPM5Param465);
    if (indexBFCcxPM5Value1308) {
      var indexBFCcxPM5Value1309 = indexBFCcxPM5Value1308.children;
      if (indexBFCcxPM5Value1309.length) {
        if (indexBFCcxPM5Param466 === "right")
          return indexBFCcxPM5Helper63(
            indexBFCcxPM5Value1309[indexBFCcxPM5Value1309.length - 1],
            "right",
          );
        if (indexBFCcxPM5Param466 === "left")
          return indexBFCcxPM5Helper63(indexBFCcxPM5Value1309[0], "left");
      }
    }
    return indexBFCcxPM5Param465;
  };
  indexBFCcxPM5Value157 = function (
    indexBFCcxPM5Param742,
    indexBFCcxPM5Param743,
  ) {
    return indexBFCcxPM5Param742
      ? (indexBFCcxPM5Param743 &&
          (indexBFCcxPM5Param742 = indexBFCcxPM5Value156(
            indexBFCcxPM5Param742,
            indexBFCcxPM5Param743,
          )),
        indexBFCcxPM5Value153[indexBFCcxPM5Param742.classes[0]] || null)
      : null;
  };
  indexBFCcxPM5Value158 = function (
    indexBFCcxPM5Param708,
    indexBFCcxPM5Param709,
  ) {
    var indexBFCcxPM5Value1441 = ["nulldelimiter"].concat(
      indexBFCcxPM5Param708.baseSizingClasses(),
    );
    return indexBFCcxPM5Value149(
      indexBFCcxPM5Param709.concat(indexBFCcxPM5Value1441),
    );
  };
  indexBFCcxPM5Value159 = function (
    indexBFCcxPM5Param334,
    indexBFCcxPM5Param335,
    indexBFCcxPM5Param336,
  ) {
    if (!indexBFCcxPM5Param334) return indexBFCcxPM5Value149();
    if (indexBFCcxPM5Value145[indexBFCcxPM5Param334.type]) {
      var indexBFCcxPM5Value1178 = indexBFCcxPM5Value145[
        indexBFCcxPM5Param334.type
      ](indexBFCcxPM5Param334, indexBFCcxPM5Param335);
      if (
        indexBFCcxPM5Param336 &&
        indexBFCcxPM5Param335.size !== indexBFCcxPM5Param336.size
      ) {
        indexBFCcxPM5Value1178 = indexBFCcxPM5Value149(
          indexBFCcxPM5Param335.sizingClasses(indexBFCcxPM5Param336),
          [indexBFCcxPM5Value1178],
          indexBFCcxPM5Param335,
        );
        var indexBFCcxPM5Value1179 =
          indexBFCcxPM5Param335.sizeMultiplier /
          indexBFCcxPM5Param336.sizeMultiplier;
        indexBFCcxPM5Value1178.height *= indexBFCcxPM5Value1179;
        indexBFCcxPM5Value1178.depth *= indexBFCcxPM5Value1179;
      }
      return indexBFCcxPM5Value1178;
    } else
      throw new indexBFCcxPM5Value14(
        "Got group of unknown type: '" + indexBFCcxPM5Param334.type + "'",
      );
  };
  indexBFCcxPM5Value160 = class {
    constructor(
      indexBFCcxPM5Param410,
      indexBFCcxPM5Param411,
      indexBFCcxPM5Param412,
    ) {
      this.type = undefined;
      this.attributes = undefined;
      this.children = undefined;
      this.classes = undefined;
      this.type = indexBFCcxPM5Param410;
      this.attributes = {};
      this.children = indexBFCcxPM5Param411 || [];
      this.classes = indexBFCcxPM5Param412 || [];
    }
    setAttribute(indexBFCcxPM5Param847, indexBFCcxPM5Param848) {
      this.attributes[indexBFCcxPM5Param847] = indexBFCcxPM5Param848;
    }
    getAttribute(indexBFCcxPM5Param849) {
      return this.attributes[indexBFCcxPM5Param849];
    }
    toNode() {
      var indexBFCcxPM5Value879 = document.createElementNS(
        "http://www.w3.org/1998/Math/MathML",
        this.type,
      );
      for (var indexBFCcxPM5Value880 in this.attributes)
        Object.prototype.hasOwnProperty.call(
          this.attributes,
          indexBFCcxPM5Value880,
        ) &&
          indexBFCcxPM5Value879.setAttribute(
            indexBFCcxPM5Value880,
            this.attributes[indexBFCcxPM5Value880],
          );
      this.classes.length > 0 &&
        (indexBFCcxPM5Value879.className = indexBFCcxPM5Value70(this.classes));
      for (
        var indexBFCcxPM5Value881 = 0;
        indexBFCcxPM5Value881 < this.children.length;
        indexBFCcxPM5Value881++
      )
        if (
          this.children[indexBFCcxPM5Value881] instanceof
            indexBFCcxPM5Value161 &&
          this.children[indexBFCcxPM5Value881 + 1] instanceof
            indexBFCcxPM5Value161
        ) {
          for (
            var indexBFCcxPM5Value882 =
              this.children[indexBFCcxPM5Value881].toText() +
              this.children[++indexBFCcxPM5Value881].toText();
            this.children[indexBFCcxPM5Value881 + 1] instanceof
            indexBFCcxPM5Value161;
          )
            indexBFCcxPM5Value882 +=
              this.children[++indexBFCcxPM5Value881].toText();
          indexBFCcxPM5Value879.appendChild(
            new indexBFCcxPM5Value161(indexBFCcxPM5Value882).toNode(),
          );
        } else
          indexBFCcxPM5Value879.appendChild(
            this.children[indexBFCcxPM5Value881].toNode(),
          );
      return indexBFCcxPM5Value879;
    }
    toMarkup() {
      var indexBFCcxPM5Value1056 = "<" + this.type;
      for (var indexBFCcxPM5Value1057 in this.attributes)
        Object.prototype.hasOwnProperty.call(
          this.attributes,
          indexBFCcxPM5Value1057,
        ) &&
          ((indexBFCcxPM5Value1056 += " " + indexBFCcxPM5Value1057 + '="'),
          (indexBFCcxPM5Value1056 += indexBFCcxPM5Value23.escape(
            this.attributes[indexBFCcxPM5Value1057],
          )),
          (indexBFCcxPM5Value1056 += '"'));
      this.classes.length > 0 &&
        (indexBFCcxPM5Value1056 +=
          ' class ="' +
          indexBFCcxPM5Value23.escape(indexBFCcxPM5Value70(this.classes)) +
          '"');
      indexBFCcxPM5Value1056 += ">";
      for (
        var indexBFCcxPM5Value1058 = 0;
        indexBFCcxPM5Value1058 < this.children.length;
        indexBFCcxPM5Value1058++
      )
        indexBFCcxPM5Value1056 +=
          this.children[indexBFCcxPM5Value1058].toMarkup();
      return (
        (indexBFCcxPM5Value1056 += "</" + this.type + ">"),
        indexBFCcxPM5Value1056
      );
    }
    toText() {
      return this.children.map((item) => item.toText()).join("");
    }
  };
  indexBFCcxPM5Value161 = class {
    constructor(indexBFCcxPM5Param807) {
      this.text = undefined;
      this.text = indexBFCcxPM5Param807;
    }
    toNode() {
      return document.createTextNode(this.text);
    }
    toMarkup() {
      return indexBFCcxPM5Value23.escape(this.toText());
    }
    toText() {
      return this.text;
    }
  };
  indexBFCcxPM5Value162 = class {
    constructor(indexBFCcxPM5Param124) {
      this.width = undefined;
      this.character = undefined;
      this.width = indexBFCcxPM5Param124;
      indexBFCcxPM5Param124 >= 0.05555 && indexBFCcxPM5Param124 <= 0.05556
        ? (this.character = "\u200A")
        : indexBFCcxPM5Param124 >= 0.1666 && indexBFCcxPM5Param124 <= 0.1667
          ? (this.character = "\u2009")
          : indexBFCcxPM5Param124 >= 0.2222 && indexBFCcxPM5Param124 <= 0.2223
            ? (this.character = "\u2005")
            : indexBFCcxPM5Param124 >= 0.2777 && indexBFCcxPM5Param124 <= 0.2778
              ? (this.character = "\u2005\u200A")
              : indexBFCcxPM5Param124 >= -0.05556 &&
                  indexBFCcxPM5Param124 <= -0.05555
                ? (this.character = "\u200A⁣")
                : indexBFCcxPM5Param124 >= -0.1667 &&
                    indexBFCcxPM5Param124 <= -0.1666
                  ? (this.character = "\u2009⁣")
                  : indexBFCcxPM5Param124 >= -0.2223 &&
                      indexBFCcxPM5Param124 <= -0.2222
                    ? (this.character = "\u205F⁣")
                    : indexBFCcxPM5Param124 >= -0.2778 &&
                        indexBFCcxPM5Param124 <= -0.2777
                      ? (this.character = "\u2005⁣")
                      : (this.character = null);
    }
    toNode() {
      if (this.character) return document.createTextNode(this.character);
      var indexBFCcxPM5Value1293 = document.createElementNS(
        "http://www.w3.org/1998/Math/MathML",
        "mspace",
      );
      return (
        indexBFCcxPM5Value1293.setAttribute(
          "width",
          indexBFCcxPM5Value69(this.width),
        ),
        indexBFCcxPM5Value1293
      );
    }
    toMarkup() {
      return this.character
        ? "<mtext>" + this.character + "</mtext>"
        : '<mspace width="' + indexBFCcxPM5Value69(this.width) + '"/>';
    }
    toText() {
      return this.character ? this.character : " ";
    }
  };
  indexBFCcxPM5Value163 = {
    MathNode: indexBFCcxPM5Value160,
    TextNode: indexBFCcxPM5Value161,
    SpaceNode: indexBFCcxPM5Value162,
    newDocumentFragment: be,
  };
  indexBFCcxPM5Value164 = function (
    indexBFCcxPM5Param331,
    indexBFCcxPM5Param332,
    indexBFCcxPM5Param333,
  ) {
    return (
      indexBFCcxPM5Value83[indexBFCcxPM5Param332][indexBFCcxPM5Param331] &&
        indexBFCcxPM5Value83[indexBFCcxPM5Param332][indexBFCcxPM5Param331]
          .replace &&
        indexBFCcxPM5Param331.charCodeAt(0) !== 55349 &&
        !(
          indexBFCcxPM5Value98.hasOwnProperty(indexBFCcxPM5Param331) &&
          indexBFCcxPM5Param333 &&
          ((indexBFCcxPM5Param333.fontFamily &&
            indexBFCcxPM5Param333.fontFamily.slice(4, 6) === "tt") ||
            (indexBFCcxPM5Param333.font &&
              indexBFCcxPM5Param333.font.slice(4, 6) === "tt"))
        ) &&
        (indexBFCcxPM5Param331 =
          indexBFCcxPM5Value83[indexBFCcxPM5Param332][indexBFCcxPM5Param331]
            .replace),
      new indexBFCcxPM5Value163.TextNode(indexBFCcxPM5Param331)
    );
  };
  indexBFCcxPM5Value165 = function (indexBFCcxPM5Param782) {
    return indexBFCcxPM5Param782.length === 1
      ? indexBFCcxPM5Param782[0]
      : new indexBFCcxPM5Value163.MathNode("mrow", indexBFCcxPM5Param782);
  };
  indexBFCcxPM5Value166 = function (
    indexBFCcxPM5Param65,
    indexBFCcxPM5Param66,
  ) {
    if (indexBFCcxPM5Param66.fontFamily === "texttt") return "monospace";
    if (indexBFCcxPM5Param66.fontFamily === "textsf")
      return indexBFCcxPM5Param66.fontShape === "textit" &&
        indexBFCcxPM5Param66.fontWeight === "textbf"
        ? "sans-serif-bold-italic"
        : indexBFCcxPM5Param66.fontShape === "textit"
          ? "sans-serif-italic"
          : indexBFCcxPM5Param66.fontWeight === "textbf"
            ? "bold-sans-serif"
            : "sans-serif";
    if (
      indexBFCcxPM5Param66.fontShape === "textit" &&
      indexBFCcxPM5Param66.fontWeight === "textbf"
    )
      return "bold-italic";
    if (indexBFCcxPM5Param66.fontShape === "textit") return "italic";
    if (indexBFCcxPM5Param66.fontWeight === "textbf") return "bold";
    var indexBFCcxPM5Value688 = indexBFCcxPM5Param66.font;
    if (!indexBFCcxPM5Value688 || indexBFCcxPM5Value688 === "mathnormal")
      return null;
    var indexBFCcxPM5Value689 = indexBFCcxPM5Param65.mode;
    if (indexBFCcxPM5Value688 === "mathit") return "italic";
    if (indexBFCcxPM5Value688 === "boldsymbol")
      return indexBFCcxPM5Param65.type === "textord" ? "bold" : "bold-italic";
    if (indexBFCcxPM5Value688 === "mathbf") return "bold";
    if (indexBFCcxPM5Value688 === "mathbb") return "double-struck";
    if (indexBFCcxPM5Value688 === "mathsfit") return "sans-serif-italic";
    if (indexBFCcxPM5Value688 === "mathfrak") return "fraktur";
    if (
      indexBFCcxPM5Value688 === "mathscr" ||
      indexBFCcxPM5Value688 === "mathcal"
    )
      return "script";
    if (indexBFCcxPM5Value688 === "mathsf") return "sans-serif";
    if (indexBFCcxPM5Value688 === "mathtt") return "monospace";
    var indexBFCcxPM5Value690 = indexBFCcxPM5Param65.text;
    if (
      indexBFCcxPM5Value23.contains(
        ["\\imath", "\\jmath"],
        indexBFCcxPM5Value690,
      )
    )
      return null;
    indexBFCcxPM5Value83[indexBFCcxPM5Value689][indexBFCcxPM5Value690] &&
      indexBFCcxPM5Value83[indexBFCcxPM5Value689][indexBFCcxPM5Value690]
        .replace &&
      (indexBFCcxPM5Value690 =
        indexBFCcxPM5Value83[indexBFCcxPM5Value689][indexBFCcxPM5Value690]
          .replace);
    var indexBFCcxPM5Value691 =
      indexBFCcxPM5Value139.fontMap[indexBFCcxPM5Value688].fontName;
    return indexBFCcxPM5Helper32(
      indexBFCcxPM5Value690,
      indexBFCcxPM5Value691,
      indexBFCcxPM5Value689,
    )
      ? indexBFCcxPM5Value139.fontMap[indexBFCcxPM5Value688].variant
      : null;
  };
  indexBFCcxPM5Value167 = function (
    indexBFCcxPM5Param39,
    indexBFCcxPM5Param40,
    indexBFCcxPM5Param41,
  ) {
    if (indexBFCcxPM5Param39.length === 1) {
      var indexBFCcxPM5Value578 = $(
        indexBFCcxPM5Param39[0],
        indexBFCcxPM5Param40,
      );
      return (
        indexBFCcxPM5Param41 &&
          indexBFCcxPM5Value578 instanceof indexBFCcxPM5Value160 &&
          indexBFCcxPM5Value578.type === "mo" &&
          (indexBFCcxPM5Value578.setAttribute("lspace", "0em"),
          indexBFCcxPM5Value578.setAttribute("rspace", "0em")),
        [indexBFCcxPM5Value578]
      );
    }
    for (
      var indexBFCcxPM5Value579 = [],
        indexBFCcxPM5Value580,
        indexBFCcxPM5Value581 = 0;
      indexBFCcxPM5Value581 < indexBFCcxPM5Param39.length;
      indexBFCcxPM5Value581++
    ) {
      var indexBFCcxPM5Value582 = $(
        indexBFCcxPM5Param39[indexBFCcxPM5Value581],
        indexBFCcxPM5Param40,
      );
      if (
        indexBFCcxPM5Value582 instanceof indexBFCcxPM5Value160 &&
        indexBFCcxPM5Value580 instanceof indexBFCcxPM5Value160
      ) {
        if (
          indexBFCcxPM5Value582.type === "mtext" &&
          indexBFCcxPM5Value580.type === "mtext" &&
          indexBFCcxPM5Value582.getAttribute("mathvariant") ===
            indexBFCcxPM5Value580.getAttribute("mathvariant")
        ) {
          indexBFCcxPM5Value580.children.push(
            ...indexBFCcxPM5Value582.children,
          );
          continue;
        } else if (
          indexBFCcxPM5Value582.type === "mn" &&
          indexBFCcxPM5Value580.type === "mn"
        ) {
          indexBFCcxPM5Value580.children.push(
            ...indexBFCcxPM5Value582.children,
          );
          continue;
        } else if (
          indexBFCcxPM5Helper40(indexBFCcxPM5Value582) &&
          indexBFCcxPM5Value580.type === "mn"
        ) {
          indexBFCcxPM5Value580.children.push(
            ...indexBFCcxPM5Value582.children,
          );
          continue;
        } else if (
          indexBFCcxPM5Value582.type === "mn" &&
          indexBFCcxPM5Helper40(indexBFCcxPM5Value580)
        ) {
          indexBFCcxPM5Value582.children = [
            ...indexBFCcxPM5Value580.children,
            ...indexBFCcxPM5Value582.children,
          ];
          indexBFCcxPM5Value579.pop();
        } else if (
          (indexBFCcxPM5Value582.type === "msup" ||
            indexBFCcxPM5Value582.type === "msub") &&
          indexBFCcxPM5Value582.children.length >= 1 &&
          (indexBFCcxPM5Value580.type === "mn" ||
            indexBFCcxPM5Helper40(indexBFCcxPM5Value580))
        ) {
          var indexBFCcxPM5Value583 = indexBFCcxPM5Value582.children[0];
          indexBFCcxPM5Value583 instanceof indexBFCcxPM5Value160 &&
            indexBFCcxPM5Value583.type === "mn" &&
            ((indexBFCcxPM5Value583.children = [
              ...indexBFCcxPM5Value580.children,
              ...indexBFCcxPM5Value583.children,
            ]),
            indexBFCcxPM5Value579.pop());
        } else if (
          indexBFCcxPM5Value580.type === "mi" &&
          indexBFCcxPM5Value580.children.length === 1
        ) {
          var indexBFCcxPM5Value584 = indexBFCcxPM5Value580.children[0];
          if (
            indexBFCcxPM5Value584 instanceof indexBFCcxPM5Value161 &&
            indexBFCcxPM5Value584.text === "̸" &&
            (indexBFCcxPM5Value582.type === "mo" ||
              indexBFCcxPM5Value582.type === "mi" ||
              indexBFCcxPM5Value582.type === "mn")
          ) {
            var indexBFCcxPM5Value585 = indexBFCcxPM5Value582.children[0];
            indexBFCcxPM5Value585 instanceof indexBFCcxPM5Value161 &&
              indexBFCcxPM5Value585.text.length > 0 &&
              ((indexBFCcxPM5Value585.text =
                indexBFCcxPM5Value585.text.slice(0, 1) +
                "̸" +
                indexBFCcxPM5Value585.text.slice(1)),
              indexBFCcxPM5Value579.pop());
          }
        }
      }
      indexBFCcxPM5Value579.push(indexBFCcxPM5Value582);
      indexBFCcxPM5Value580 = indexBFCcxPM5Value582;
    }
    return indexBFCcxPM5Value579;
  };
  indexBFCcxPM5Value168 = function (
    indexBFCcxPM5Param855,
    indexBFCcxPM5Param856,
    indexBFCcxPM5Param857,
  ) {
    return indexBFCcxPM5Value165(
      indexBFCcxPM5Value167(
        indexBFCcxPM5Param855,
        indexBFCcxPM5Param856,
        indexBFCcxPM5Param857,
      ),
    );
  };
  $ = function (indexBFCcxPM5Param594, indexBFCcxPM5Param595) {
    if (!indexBFCcxPM5Param594)
      return new indexBFCcxPM5Value163.MathNode("mrow");
    if (indexBFCcxPM5Value146[indexBFCcxPM5Param594.type])
      return indexBFCcxPM5Value146[indexBFCcxPM5Param594.type](
        indexBFCcxPM5Param594,
        indexBFCcxPM5Param595,
      );
    throw new indexBFCcxPM5Value14(
      "Got group of unknown type: '" + indexBFCcxPM5Param594.type + "'",
    );
  };
  indexBFCcxPM5Value169 = function (indexBFCcxPM5Param598) {
    return new indexBFCcxPM5Value64({
      style: indexBFCcxPM5Param598.displayMode
        ? indexBFCcxPM5Value41.DISPLAY
        : indexBFCcxPM5Value41.TEXT,
      maxSize: indexBFCcxPM5Param598.maxSize,
      minRuleThickness: indexBFCcxPM5Param598.minRuleThickness,
    });
  };
  indexBFCcxPM5Value170 = function (
    indexBFCcxPM5Param543,
    indexBFCcxPM5Param544,
  ) {
    if (indexBFCcxPM5Param544.displayMode) {
      var indexBFCcxPM5Value1350 = ["katex-display"];
      indexBFCcxPM5Param544.leqno && indexBFCcxPM5Value1350.push("leqno");
      indexBFCcxPM5Param544.fleqn && indexBFCcxPM5Value1350.push("fleqn");
      indexBFCcxPM5Param543 = indexBFCcxPM5Value139.makeSpan(
        indexBFCcxPM5Value1350,
        [indexBFCcxPM5Param543],
      );
    }
    return indexBFCcxPM5Param543;
  };
  indexBFCcxPM5Value171 = function (
    indexBFCcxPM5Param337,
    indexBFCcxPM5Param338,
    indexBFCcxPM5Param339,
  ) {
    var indexBFCcxPM5Value1181 = indexBFCcxPM5Value169(indexBFCcxPM5Param339),
      indexBFCcxPM5Value1182;
    if (indexBFCcxPM5Param339.output === "mathml")
      return indexBFCcxPM5Helper41(
        indexBFCcxPM5Param337,
        indexBFCcxPM5Param338,
        indexBFCcxPM5Value1181,
        indexBFCcxPM5Param339.displayMode,
        true,
      );
    if (indexBFCcxPM5Param339.output === "html") {
      var indexBFCcxPM5Value1183 = indexBFCcxPM5Helper39(
        indexBFCcxPM5Param337,
        indexBFCcxPM5Value1181,
      );
      indexBFCcxPM5Value1182 = indexBFCcxPM5Value139.makeSpan(
        ["katex"],
        [indexBFCcxPM5Value1183],
      );
    } else {
      var indexBFCcxPM5Value1184 = indexBFCcxPM5Helper41(
          indexBFCcxPM5Param337,
          indexBFCcxPM5Param338,
          indexBFCcxPM5Value1181,
          indexBFCcxPM5Param339.displayMode,
          false,
        ),
        indexBFCcxPM5Value1185 = indexBFCcxPM5Helper39(
          indexBFCcxPM5Param337,
          indexBFCcxPM5Value1181,
        );
      indexBFCcxPM5Value1182 = indexBFCcxPM5Value139.makeSpan(
        ["katex"],
        [indexBFCcxPM5Value1184, indexBFCcxPM5Value1185],
      );
    }
    return indexBFCcxPM5Value170(indexBFCcxPM5Value1182, indexBFCcxPM5Param339);
  };
  indexBFCcxPM5Value172 = function (
    indexBFCcxPM5Param724,
    indexBFCcxPM5Param725,
    indexBFCcxPM5Param726,
  ) {
    var indexBFCcxPM5Value1449 = indexBFCcxPM5Helper39(
      indexBFCcxPM5Param724,
      indexBFCcxPM5Value169(indexBFCcxPM5Param726),
    );
    return indexBFCcxPM5Value170(
      indexBFCcxPM5Value139.makeSpan(["katex"], [indexBFCcxPM5Value1449]),
      indexBFCcxPM5Param726,
    );
  };
  indexBFCcxPM5Value173 = {
    widehat: "^",
    widecheck: "ˇ",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "←",
    underleftarrow: "←",
    xleftarrow: "←",
    overrightarrow: "→",
    underrightarrow: "→",
    xrightarrow: "→",
    underbrace: "⏟",
    overbrace: "⏞",
    overgroup: "⏠",
    undergroup: "⏡",
    overleftrightarrow: "↔",
    underleftrightarrow: "↔",
    xleftrightarrow: "↔",
    Overrightarrow: "⇒",
    xRightarrow: "⇒",
    overleftharpoon: "↼",
    xleftharpoonup: "↼",
    overrightharpoon: "⇀",
    xrightharpoonup: "⇀",
    xLeftarrow: "⇐",
    xLeftrightarrow: "⇔",
    xhookleftarrow: "↩",
    xhookrightarrow: "↪",
    xmapsto: "↦",
    xrightharpoondown: "⇁",
    xleftharpoondown: "↽",
    xrightleftharpoons: "⇌",
    xleftrightharpoons: "⇋",
    xtwoheadleftarrow: "↞",
    xtwoheadrightarrow: "↠",
    xlongequal: "=",
    xtofrom: "⇄",
    xrightleftarrows: "⇄",
    xrightequilibrium: "⇌",
    xleftequilibrium: "⇋",
    "\\cdrightarrow": "→",
    "\\cdleftarrow": "←",
    "\\cdlongequal": "=",
  };
  indexBFCcxPM5Value174 = function (indexBFCcxPM5Param636) {
    var indexBFCcxPM5Value1414 = new indexBFCcxPM5Value163.MathNode("mo", [
      new indexBFCcxPM5Value163.TextNode(
        indexBFCcxPM5Value173[indexBFCcxPM5Param636.replace(/^\\/, "")],
      ),
    ]);
    return (
      indexBFCcxPM5Value1414.setAttribute("stretchy", "true"),
      indexBFCcxPM5Value1414
    );
  };
  indexBFCcxPM5Value175 = {
    overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
    overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
    underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
    underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
    xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
    "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
    xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
    "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
    Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
    xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
    xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
    overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
    xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
    xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
    overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
    xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
    "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
    xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
    xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
    overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
    overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
    underbrace: [
      ["leftbraceunder", "midbraceunder", "rightbraceunder"],
      1.6,
      548,
    ],
    underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
    xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
    xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
    xrightleftharpoons: [
      ["leftharpoondownplus", "rightharpoonplus"],
      1.75,
      716,
    ],
    xleftrightharpoons: [
      ["leftharpoonplus", "rightharpoondownplus"],
      1.75,
      716,
    ],
    xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
    xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
    overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
    undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
    xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
    xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
    xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
    xrightequilibrium: [
      ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"],
      1.75,
      716,
    ],
    xleftequilibrium: [
      ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"],
      1.75,
      716,
    ],
  };
  indexBFCcxPM5Value176 = function (indexBFCcxPM5Param798) {
    return indexBFCcxPM5Param798.type === "ordgroup"
      ? indexBFCcxPM5Param798.body.length
      : 1;
  };
  indexBFCcxPM5Value177 = function (
    indexBFCcxPM5Param15,
    indexBFCcxPM5Param16,
  ) {
    function indexBFCcxPM5Helper59() {
      var indexBFCcxPM5Value474 = 4e5,
        indexBFCcxPM5Value475 = indexBFCcxPM5Param15.label.slice(1);
      if (
        indexBFCcxPM5Value23.contains(
          ["widehat", "widecheck", "widetilde", "utilde"],
          indexBFCcxPM5Value475,
        )
      ) {
        var indexBFCcxPM5Value476 = indexBFCcxPM5Value176(
            indexBFCcxPM5Param15.base,
          ),
          indexBFCcxPM5Value477,
          indexBFCcxPM5Value478,
          indexBFCcxPM5Value479;
        if (indexBFCcxPM5Value476 > 5)
          indexBFCcxPM5Value475 === "widehat" ||
          indexBFCcxPM5Value475 === "widecheck"
            ? ((indexBFCcxPM5Value477 = 420),
              (indexBFCcxPM5Value474 = 2364),
              (indexBFCcxPM5Value479 = 0.42),
              (indexBFCcxPM5Value478 = indexBFCcxPM5Value475 + "4"))
            : ((indexBFCcxPM5Value477 = 312),
              (indexBFCcxPM5Value474 = 2340),
              (indexBFCcxPM5Value479 = 0.34),
              (indexBFCcxPM5Value478 = "tilde4"));
        else {
          var indexBFCcxPM5Value480 = [1, 1, 2, 2, 3, 3][indexBFCcxPM5Value476];
          indexBFCcxPM5Value475 === "widehat" ||
          indexBFCcxPM5Value475 === "widecheck"
            ? ((indexBFCcxPM5Value474 = [0, 1062, 2364, 2364, 2364][
                indexBFCcxPM5Value480
              ]),
              (indexBFCcxPM5Value477 = [0, 239, 300, 360, 420][
                indexBFCcxPM5Value480
              ]),
              (indexBFCcxPM5Value479 = [0, 0.24, 0.3, 0.3, 0.36, 0.42][
                indexBFCcxPM5Value480
              ]),
              (indexBFCcxPM5Value478 =
                indexBFCcxPM5Value475 + indexBFCcxPM5Value480))
            : ((indexBFCcxPM5Value474 = [0, 600, 1033, 2339, 2340][
                indexBFCcxPM5Value480
              ]),
              (indexBFCcxPM5Value477 = [0, 260, 286, 306, 312][
                indexBFCcxPM5Value480
              ]),
              (indexBFCcxPM5Value479 = [0, 0.26, 0.286, 0.3, 0.306, 0.34][
                indexBFCcxPM5Value480
              ]),
              (indexBFCcxPM5Value478 = "tilde" + indexBFCcxPM5Value480));
        }
        var indexBFCcxPM5Value481 = new indexBFCcxPM5Value79(
            indexBFCcxPM5Value478,
          ),
          indexBFCcxPM5Value482 = new indexBFCcxPM5Value78(
            [indexBFCcxPM5Value481],
            {
              width: "100%",
              height: indexBFCcxPM5Value69(indexBFCcxPM5Value479),
              viewBox:
                "0 0 " + indexBFCcxPM5Value474 + " " + indexBFCcxPM5Value477,
              preserveAspectRatio: "none",
            },
          );
        return {
          span: indexBFCcxPM5Value139.makeSvgSpan(
            [],
            [indexBFCcxPM5Value482],
            indexBFCcxPM5Param16,
          ),
          minWidth: 0,
          height: indexBFCcxPM5Value479,
        };
      } else {
        var indexBFCcxPM5Value483 = [],
          indexBFCcxPM5Value484 = indexBFCcxPM5Value175[indexBFCcxPM5Value475],
          [
            indexBFCcxPM5Value485,
            indexBFCcxPM5Value486,
            indexBFCcxPM5Value487,
          ] = indexBFCcxPM5Value484,
          indexBFCcxPM5Value488 = indexBFCcxPM5Value487 / 1e3,
          indexBFCcxPM5Value489 = indexBFCcxPM5Value485.length,
          indexBFCcxPM5Value490,
          indexBFCcxPM5Value491;
        if (indexBFCcxPM5Value489 === 1) {
          var indexBFCcxPM5Value492 = indexBFCcxPM5Value484[3];
          indexBFCcxPM5Value490 = ["hide-tail"];
          indexBFCcxPM5Value491 = [indexBFCcxPM5Value492];
        } else if (indexBFCcxPM5Value489 === 2) {
          indexBFCcxPM5Value490 = ["halfarrow-left", "halfarrow-right"];
          indexBFCcxPM5Value491 = ["xMinYMin", "xMaxYMin"];
        } else if (indexBFCcxPM5Value489 === 3) {
          indexBFCcxPM5Value490 = ["brace-left", "brace-center", "brace-right"];
          indexBFCcxPM5Value491 = ["xMinYMin", "xMidYMin", "xMaxYMin"];
        } else
          throw Error(
            "Correct katexImagesData or update code here to support\n                    " +
              indexBFCcxPM5Value489 +
              " children.",
          );
        for (
          var indexBFCcxPM5Value493 = 0;
          indexBFCcxPM5Value493 < indexBFCcxPM5Value489;
          indexBFCcxPM5Value493++
        ) {
          var indexBFCcxPM5Value494 = new indexBFCcxPM5Value79(
              indexBFCcxPM5Value485[indexBFCcxPM5Value493],
            ),
            indexBFCcxPM5Value495 = new indexBFCcxPM5Value78(
              [indexBFCcxPM5Value494],
              {
                width: "400em",
                height: indexBFCcxPM5Value69(indexBFCcxPM5Value488),
                viewBox:
                  "0 0 " + indexBFCcxPM5Value474 + " " + indexBFCcxPM5Value487,
                preserveAspectRatio:
                  indexBFCcxPM5Value491[indexBFCcxPM5Value493] + " slice",
              },
            ),
            indexBFCcxPM5Value496 = indexBFCcxPM5Value139.makeSvgSpan(
              [indexBFCcxPM5Value490[indexBFCcxPM5Value493]],
              [indexBFCcxPM5Value495],
              indexBFCcxPM5Param16,
            );
          if (indexBFCcxPM5Value489 === 1)
            return {
              span: indexBFCcxPM5Value496,
              minWidth: indexBFCcxPM5Value486,
              height: indexBFCcxPM5Value488,
            };
          indexBFCcxPM5Value496.style.height = indexBFCcxPM5Value69(
            indexBFCcxPM5Value488,
          );
          indexBFCcxPM5Value483.push(indexBFCcxPM5Value496);
        }
        return {
          span: indexBFCcxPM5Value139.makeSpan(
            ["stretchy"],
            indexBFCcxPM5Value483,
            indexBFCcxPM5Param16,
          ),
          minWidth: indexBFCcxPM5Value486,
          height: indexBFCcxPM5Value488,
        };
      }
    }
    var { span, minWidth, height } = indexBFCcxPM5Helper59();
    return (
      (span.height = height),
      (span.style.height = indexBFCcxPM5Value69(height)),
      minWidth > 0 && (span.style.minWidth = indexBFCcxPM5Value69(minWidth)),
      span
    );
  };
  indexBFCcxPM5Value178 = function (
    indexBFCcxPM5Param102,
    indexBFCcxPM5Param103,
    indexBFCcxPM5Param104,
    indexBFCcxPM5Param105,
    indexBFCcxPM5Param106,
  ) {
    var indexBFCcxPM5Value817,
      indexBFCcxPM5Value818 =
        indexBFCcxPM5Param102.height +
        indexBFCcxPM5Param102.depth +
        indexBFCcxPM5Param104 +
        indexBFCcxPM5Param105;
    if (/fbox|color|angl/.test(indexBFCcxPM5Param103)) {
      if (
        ((indexBFCcxPM5Value817 = indexBFCcxPM5Value139.makeSpan(
          ["stretchy", indexBFCcxPM5Param103],
          [],
          indexBFCcxPM5Param106,
        )),
        indexBFCcxPM5Param103 === "fbox")
      ) {
        var indexBFCcxPM5Value819 =
          indexBFCcxPM5Param106.color && indexBFCcxPM5Param106.getColor();
        indexBFCcxPM5Value819 &&
          (indexBFCcxPM5Value817.style.borderColor = indexBFCcxPM5Value819);
      }
    } else {
      var indexBFCcxPM5Value820 = [];
      /^[bx]cancel$/.test(indexBFCcxPM5Param103) &&
        indexBFCcxPM5Value820.push(
          new indexBFCcxPM5Value80({
            x1: "0",
            y1: "0",
            x2: "100%",
            y2: "100%",
            "stroke-width": "0.046em",
          }),
        );
      /^x?cancel$/.test(indexBFCcxPM5Param103) &&
        indexBFCcxPM5Value820.push(
          new indexBFCcxPM5Value80({
            x1: "0",
            y1: "100%",
            x2: "100%",
            y2: "0",
            "stroke-width": "0.046em",
          }),
        );
      var indexBFCcxPM5Value821 = new indexBFCcxPM5Value78(
        indexBFCcxPM5Value820,
        {
          width: "100%",
          height: indexBFCcxPM5Value69(indexBFCcxPM5Value818),
        },
      );
      indexBFCcxPM5Value817 = indexBFCcxPM5Value139.makeSvgSpan(
        [],
        [indexBFCcxPM5Value821],
        indexBFCcxPM5Param106,
      );
    }
    return (
      (indexBFCcxPM5Value817.height = indexBFCcxPM5Value818),
      (indexBFCcxPM5Value817.style.height = indexBFCcxPM5Value69(
        indexBFCcxPM5Value818,
      )),
      indexBFCcxPM5Value817
    );
  };
  indexBFCcxPM5Value179 = {
    encloseSpan: indexBFCcxPM5Value178,
    mathMLnode: indexBFCcxPM5Value174,
    svgSpan: indexBFCcxPM5Value177,
  };
  indexBFCcxPM5Value180 = (indexBFCcxPM5Param31, indexBFCcxPM5Param32) => {
    var indexBFCcxPM5Value517, indexBFCcxPM5Value518, indexBFCcxPM5Value519;
    indexBFCcxPM5Param31 && indexBFCcxPM5Param31.type === "supsub"
      ? ((indexBFCcxPM5Value518 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param31.base,
          "accent",
        )),
        (indexBFCcxPM5Value517 = indexBFCcxPM5Value518.base),
        (indexBFCcxPM5Param31.base = indexBFCcxPM5Value517),
        (indexBFCcxPM5Value519 = indexBFCcxPM5Helper35(
          indexBFCcxPM5Value159(indexBFCcxPM5Param31, indexBFCcxPM5Param32),
        )),
        (indexBFCcxPM5Param31.base = indexBFCcxPM5Value518))
      : ((indexBFCcxPM5Value518 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param31,
          "accent",
        )),
        (indexBFCcxPM5Value517 = indexBFCcxPM5Value518.base));
    var indexBFCcxPM5Value520 = indexBFCcxPM5Value159(
        indexBFCcxPM5Value517,
        indexBFCcxPM5Param32.havingCrampedStyle(),
      ),
      indexBFCcxPM5Value521 =
        indexBFCcxPM5Value518.isShifty &&
        indexBFCcxPM5Value23.isCharacterBox(indexBFCcxPM5Value517),
      indexBFCcxPM5Value522 = 0;
    indexBFCcxPM5Value521 &&
      (indexBFCcxPM5Value522 = indexBFCcxPM5Helper34(
        indexBFCcxPM5Value159(
          indexBFCcxPM5Value23.getBaseElem(indexBFCcxPM5Value517),
          indexBFCcxPM5Param32.havingCrampedStyle(),
        ),
      ).skew);
    var indexBFCcxPM5Value523 = indexBFCcxPM5Value518.label === "\\c",
      indexBFCcxPM5Value524 = indexBFCcxPM5Value523
        ? indexBFCcxPM5Value520.height + indexBFCcxPM5Value520.depth
        : Math.min(
            indexBFCcxPM5Value520.height,
            indexBFCcxPM5Param32.fontMetrics().xHeight,
          ),
      indexBFCcxPM5Value525;
    if (indexBFCcxPM5Value518.isStretchy) {
      indexBFCcxPM5Value525 = indexBFCcxPM5Value179.svgSpan(
        indexBFCcxPM5Value518,
        indexBFCcxPM5Param32,
      );
      indexBFCcxPM5Value525 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "firstBaseline",
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value520,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value525,
              wrapperClasses: ["svg-align"],
              wrapperStyle:
                indexBFCcxPM5Value522 > 0
                  ? {
                      width:
                        "calc(100% - " +
                        indexBFCcxPM5Value69(2 * indexBFCcxPM5Value522) +
                        ")",
                      marginLeft: indexBFCcxPM5Value69(
                        2 * indexBFCcxPM5Value522,
                      ),
                    }
                  : undefined,
            },
          ],
        },
        indexBFCcxPM5Param32,
      );
    } else {
      var indexBFCcxPM5Value526, indexBFCcxPM5Value527;
      indexBFCcxPM5Value518.label === "\\vec"
        ? ((indexBFCcxPM5Value526 = indexBFCcxPM5Value139.staticSvg(
            "vec",
            indexBFCcxPM5Param32,
          )),
          (indexBFCcxPM5Value527 = indexBFCcxPM5Value139.svgData.vec[1]))
        : ((indexBFCcxPM5Value526 = indexBFCcxPM5Value139.makeOrd(
            {
              mode: indexBFCcxPM5Value518.mode,
              text: indexBFCcxPM5Value518.label,
            },
            indexBFCcxPM5Param32,
            "textord",
          )),
          (indexBFCcxPM5Value526 = indexBFCcxPM5Helper34(
            indexBFCcxPM5Value526,
          )),
          (indexBFCcxPM5Value526.italic = 0),
          (indexBFCcxPM5Value527 = indexBFCcxPM5Value526.width),
          indexBFCcxPM5Value523 &&
            (indexBFCcxPM5Value524 += indexBFCcxPM5Value526.depth));
      indexBFCcxPM5Value525 = indexBFCcxPM5Value139.makeSpan(
        ["accent-body"],
        [indexBFCcxPM5Value526],
      );
      var indexBFCcxPM5Value528 =
        indexBFCcxPM5Value518.label === "\\textcircled";
      indexBFCcxPM5Value528 &&
        (indexBFCcxPM5Value525.classes.push("accent-full"),
        (indexBFCcxPM5Value524 = indexBFCcxPM5Value520.height));
      var indexBFCcxPM5Value529 = indexBFCcxPM5Value522;
      indexBFCcxPM5Value528 ||
        (indexBFCcxPM5Value529 -= indexBFCcxPM5Value527 / 2);
      indexBFCcxPM5Value525.style.left = indexBFCcxPM5Value69(
        indexBFCcxPM5Value529,
      );
      indexBFCcxPM5Value518.label === "\\textcircled" &&
        (indexBFCcxPM5Value525.style.top = ".2em");
      indexBFCcxPM5Value525 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "firstBaseline",
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value520,
            },
            {
              type: "kern",
              size: -indexBFCcxPM5Value524,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value525,
            },
          ],
        },
        indexBFCcxPM5Param32,
      );
    }
    var indexBFCcxPM5Value530 = indexBFCcxPM5Value139.makeSpan(
      ["mord", "accent"],
      [indexBFCcxPM5Value525],
      indexBFCcxPM5Param32,
    );
    return indexBFCcxPM5Value519
      ? ((indexBFCcxPM5Value519.children[0] = indexBFCcxPM5Value530),
        (indexBFCcxPM5Value519.height = Math.max(
          indexBFCcxPM5Value530.height,
          indexBFCcxPM5Value519.height,
        )),
        (indexBFCcxPM5Value519.classes[0] = "mord"),
        indexBFCcxPM5Value519)
      : indexBFCcxPM5Value530;
  };
  indexBFCcxPM5Value181 = (indexBFCcxPM5Param495, indexBFCcxPM5Param496) => {
    var indexBFCcxPM5Value1328 = indexBFCcxPM5Param495.isStretchy
        ? indexBFCcxPM5Value179.mathMLnode(indexBFCcxPM5Param495.label)
        : new indexBFCcxPM5Value163.MathNode("mo", [
            indexBFCcxPM5Value164(
              indexBFCcxPM5Param495.label,
              indexBFCcxPM5Param495.mode,
            ),
          ]),
      indexBFCcxPM5Value1329 = new indexBFCcxPM5Value163.MathNode("mover", [
        $(indexBFCcxPM5Param495.base, indexBFCcxPM5Param496),
        indexBFCcxPM5Value1328,
      ]);
    return (
      indexBFCcxPM5Value1329.setAttribute("accent", "true"),
      indexBFCcxPM5Value1329
    );
  };
  indexBFCcxPM5Value182 = new RegExp(
    [
      "\\acute",
      "\\grave",
      "\\ddot",
      "\\tilde",
      "\\bar",
      "\\breve",
      "\\check",
      "\\hat",
      "\\vec",
      "\\dot",
      "\\mathring",
    ]
      .map((item) => "\\" + item)
      .join("|"),
  );
  indexBFCcxPM5Helper37({
    type: "accent",
    names: [
      "\\acute",
      "\\grave",
      "\\ddot",
      "\\tilde",
      "\\bar",
      "\\breve",
      "\\check",
      "\\hat",
      "\\vec",
      "\\dot",
      "\\mathring",
      "\\widecheck",
      "\\widehat",
      "\\widetilde",
      "\\overrightarrow",
      "\\overleftarrow",
      "\\Overrightarrow",
      "\\overleftrightarrow",
      "\\overgroup",
      "\\overlinesegment",
      "\\overleftharpoon",
      "\\overrightharpoon",
    ],
    props: {
      numArgs: 1,
    },
    handler: (indexBFCcxPM5Param306, indexBFCcxPM5Param307) => {
      var indexBFCcxPM5Value1159 = indexBFCcxPM5Value147(
          indexBFCcxPM5Param307[0],
        ),
        indexBFCcxPM5Value1160 = !indexBFCcxPM5Value182.test(
          indexBFCcxPM5Param306.funcName,
        ),
        indexBFCcxPM5Value1161 =
          !indexBFCcxPM5Value1160 ||
          indexBFCcxPM5Param306.funcName === "\\widehat" ||
          indexBFCcxPM5Param306.funcName === "\\widetilde" ||
          indexBFCcxPM5Param306.funcName === "\\widecheck";
      return {
        type: "accent",
        mode: indexBFCcxPM5Param306.parser.mode,
        label: indexBFCcxPM5Param306.funcName,
        isStretchy: indexBFCcxPM5Value1160,
        isShifty: indexBFCcxPM5Value1161,
        base: indexBFCcxPM5Value1159,
      };
    },
    htmlBuilder: indexBFCcxPM5Value180,
    mathmlBuilder: indexBFCcxPM5Value181,
  });
  indexBFCcxPM5Helper37({
    type: "accent",
    names: [
      "\\'",
      "\\`",
      "\\^",
      "\\~",
      "\\=",
      "\\u",
      "\\.",
      '\\"',
      "\\c",
      "\\r",
      "\\H",
      "\\v",
      "\\textcircled",
    ],
    props: {
      numArgs: 1,
      allowedInText: true,
      allowedInMath: true,
      argTypes: ["primitive"],
    },
    handler: (indexBFCcxPM5Param251, indexBFCcxPM5Param252) => {
      var indexBFCcxPM5Value1090 = indexBFCcxPM5Param252[0],
        indexBFCcxPM5Value1091 = indexBFCcxPM5Param251.parser.mode;
      return (
        indexBFCcxPM5Value1091 === "math" &&
          (indexBFCcxPM5Param251.parser.settings.reportNonstrict(
            "mathVsTextAccents",
            "LaTeX's accent " +
              indexBFCcxPM5Param251.funcName +
              " works only in text mode",
          ),
          (indexBFCcxPM5Value1091 = "text")),
        {
          type: "accent",
          mode: indexBFCcxPM5Value1091,
          label: indexBFCcxPM5Param251.funcName,
          isStretchy: false,
          isShifty: true,
          base: indexBFCcxPM5Value1090,
        }
      );
    },
    htmlBuilder: indexBFCcxPM5Value180,
    mathmlBuilder: indexBFCcxPM5Value181,
  });
  indexBFCcxPM5Helper37({
    type: "accentUnder",
    names: [
      "\\underleftarrow",
      "\\underrightarrow",
      "\\underleftrightarrow",
      "\\undergroup",
      "\\underlinesegment",
      "\\utilde",
    ],
    props: {
      numArgs: 1,
    },
    handler: (indexBFCcxPM5Param625, indexBFCcxPM5Param626) => {
      var { parser, funcName } = indexBFCcxPM5Param625,
        indexBFCcxPM5Value1411 = indexBFCcxPM5Param626[0];
      return {
        type: "accentUnder",
        mode: parser.mode,
        label: funcName,
        base: indexBFCcxPM5Value1411,
      };
    },
    htmlBuilder: (indexBFCcxPM5Param226, indexBFCcxPM5Param227) => {
      var indexBFCcxPM5Value1050 = indexBFCcxPM5Value159(
          indexBFCcxPM5Param226.base,
          indexBFCcxPM5Param227,
        ),
        indexBFCcxPM5Value1051 = indexBFCcxPM5Value179.svgSpan(
          indexBFCcxPM5Param226,
          indexBFCcxPM5Param227,
        ),
        indexBFCcxPM5Value1052 =
          indexBFCcxPM5Param226.label === "\\utilde" ? 0.12 : 0,
        indexBFCcxPM5Value1053 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "top",
            positionData: indexBFCcxPM5Value1050.height,
            children: [
              {
                type: "elem",
                elem: indexBFCcxPM5Value1051,
                wrapperClasses: ["svg-align"],
              },
              {
                type: "kern",
                size: indexBFCcxPM5Value1052,
              },
              {
                type: "elem",
                elem: indexBFCcxPM5Value1050,
              },
            ],
          },
          indexBFCcxPM5Param227,
        );
      return indexBFCcxPM5Value139.makeSpan(
        ["mord", "accentunder"],
        [indexBFCcxPM5Value1053],
        indexBFCcxPM5Param227,
      );
    },
    mathmlBuilder: (indexBFCcxPM5Param599, indexBFCcxPM5Param600) => {
      var indexBFCcxPM5Value1394 = indexBFCcxPM5Value179.mathMLnode(
          indexBFCcxPM5Param599.label,
        ),
        indexBFCcxPM5Value1395 = new indexBFCcxPM5Value163.MathNode("munder", [
          $(indexBFCcxPM5Param599.base, indexBFCcxPM5Param600),
          indexBFCcxPM5Value1394,
        ]);
      return (
        indexBFCcxPM5Value1395.setAttribute("accentunder", "true"),
        indexBFCcxPM5Value1395
      );
    },
  });
  indexBFCcxPM5Value183 = (indexBFCcxPM5Param573) => {
    var indexBFCcxPM5Value1381 = new indexBFCcxPM5Value163.MathNode(
      "mpadded",
      indexBFCcxPM5Param573 ? [indexBFCcxPM5Param573] : [],
    );
    return (
      indexBFCcxPM5Value1381.setAttribute("width", "+0.6em"),
      indexBFCcxPM5Value1381.setAttribute("lspace", "0.3em"),
      indexBFCcxPM5Value1381
    );
  };
  indexBFCcxPM5Helper37({
    type: "xArrow",
    names: [
      "\\xleftarrow",
      "\\xrightarrow",
      "\\xLeftarrow",
      "\\xRightarrow",
      "\\xleftrightarrow",
      "\\xLeftrightarrow",
      "\\xhookleftarrow",
      "\\xhookrightarrow",
      "\\xmapsto",
      "\\xrightharpoondown",
      "\\xrightharpoonup",
      "\\xleftharpoondown",
      "\\xleftharpoonup",
      "\\xrightleftharpoons",
      "\\xleftrightharpoons",
      "\\xlongequal",
      "\\xtwoheadrightarrow",
      "\\xtwoheadleftarrow",
      "\\xtofrom",
      "\\xrightleftarrows",
      "\\xrightequilibrium",
      "\\xleftequilibrium",
      "\\\\cdrightarrow",
      "\\\\cdleftarrow",
      "\\\\cdlongequal",
    ],
    props: {
      numArgs: 1,
      numOptionalArgs: 1,
    },
    handler(
      indexBFCcxPM5Param552,
      indexBFCcxPM5Param553,
      indexBFCcxPM5Param554,
    ) {
      var { parser, funcName } = indexBFCcxPM5Param552;
      return {
        type: "xArrow",
        mode: parser.mode,
        label: funcName,
        body: indexBFCcxPM5Param553[0],
        below: indexBFCcxPM5Param554[0],
      };
    },
    htmlBuilder(indexBFCcxPM5Param59, indexBFCcxPM5Param60) {
      var indexBFCcxPM5Value646 = indexBFCcxPM5Param60.style,
        indexBFCcxPM5Value647 = indexBFCcxPM5Param60.havingStyle(
          indexBFCcxPM5Value646.sup(),
        ),
        indexBFCcxPM5Value648 = indexBFCcxPM5Value139.wrapFragment(
          indexBFCcxPM5Value159(
            indexBFCcxPM5Param59.body,
            indexBFCcxPM5Value647,
            indexBFCcxPM5Param60,
          ),
          indexBFCcxPM5Param60,
        ),
        indexBFCcxPM5Value649 =
          indexBFCcxPM5Param59.label.slice(0, 2) === "\\x" ? "x" : "cd";
      indexBFCcxPM5Value648.classes.push(indexBFCcxPM5Value649 + "-arrow-pad");
      var indexBFCcxPM5Value650;
      indexBFCcxPM5Param59.below &&
        ((indexBFCcxPM5Value647 = indexBFCcxPM5Param60.havingStyle(
          indexBFCcxPM5Value646.sub(),
        )),
        (indexBFCcxPM5Value650 = indexBFCcxPM5Value139.wrapFragment(
          indexBFCcxPM5Value159(
            indexBFCcxPM5Param59.below,
            indexBFCcxPM5Value647,
            indexBFCcxPM5Param60,
          ),
          indexBFCcxPM5Param60,
        )),
        indexBFCcxPM5Value650.classes.push(
          indexBFCcxPM5Value649 + "-arrow-pad",
        ));
      var indexBFCcxPM5Value651 = indexBFCcxPM5Value179.svgSpan(
          indexBFCcxPM5Param59,
          indexBFCcxPM5Param60,
        ),
        indexBFCcxPM5Value652 =
          -indexBFCcxPM5Param60.fontMetrics().axisHeight +
          0.5 * indexBFCcxPM5Value651.height,
        indexBFCcxPM5Value653 =
          -indexBFCcxPM5Param60.fontMetrics().axisHeight -
          0.5 * indexBFCcxPM5Value651.height -
          0.111;
      (indexBFCcxPM5Value648.depth > 0.25 ||
        indexBFCcxPM5Param59.label === "\\xleftequilibrium") &&
        (indexBFCcxPM5Value653 -= indexBFCcxPM5Value648.depth);
      var indexBFCcxPM5Value654;
      if (indexBFCcxPM5Value650) {
        var indexBFCcxPM5Value655 =
          -indexBFCcxPM5Param60.fontMetrics().axisHeight +
          indexBFCcxPM5Value650.height +
          0.5 * indexBFCcxPM5Value651.height +
          0.111;
        indexBFCcxPM5Value654 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "individualShift",
            children: [
              {
                type: "elem",
                elem: indexBFCcxPM5Value648,
                shift: indexBFCcxPM5Value653,
              },
              {
                type: "elem",
                elem: indexBFCcxPM5Value651,
                shift: indexBFCcxPM5Value652,
              },
              {
                type: "elem",
                elem: indexBFCcxPM5Value650,
                shift: indexBFCcxPM5Value655,
              },
            ],
          },
          indexBFCcxPM5Param60,
        );
      } else
        indexBFCcxPM5Value654 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "individualShift",
            children: [
              {
                type: "elem",
                elem: indexBFCcxPM5Value648,
                shift: indexBFCcxPM5Value653,
              },
              {
                type: "elem",
                elem: indexBFCcxPM5Value651,
                shift: indexBFCcxPM5Value652,
              },
            ],
          },
          indexBFCcxPM5Param60,
        );
      return (
        indexBFCcxPM5Value654.children[0].children[0].children[1].classes.push(
          "svg-align",
        ),
        indexBFCcxPM5Value139.makeSpan(
          ["mrel", "x-arrow"],
          [indexBFCcxPM5Value654],
          indexBFCcxPM5Param60,
        )
      );
    },
    mathmlBuilder(indexBFCcxPM5Param194, indexBFCcxPM5Param195) {
      var indexBFCcxPM5Value985 = indexBFCcxPM5Value179.mathMLnode(
        indexBFCcxPM5Param194.label,
      );
      indexBFCcxPM5Value985.setAttribute(
        "minsize",
        indexBFCcxPM5Param194.label.charAt(0) === "x" ? "1.75em" : "3.0em",
      );
      var indexBFCcxPM5Value986;
      if (indexBFCcxPM5Param194.body) {
        var indexBFCcxPM5Value987 = indexBFCcxPM5Value183(
          $(indexBFCcxPM5Param194.body, indexBFCcxPM5Param195),
        );
        if (indexBFCcxPM5Param194.below) {
          var indexBFCcxPM5Value988 = indexBFCcxPM5Value183(
            $(indexBFCcxPM5Param194.below, indexBFCcxPM5Param195),
          );
          indexBFCcxPM5Value986 = new indexBFCcxPM5Value163.MathNode(
            "munderover",
            [
              indexBFCcxPM5Value985,
              indexBFCcxPM5Value988,
              indexBFCcxPM5Value987,
            ],
          );
        } else
          indexBFCcxPM5Value986 = new indexBFCcxPM5Value163.MathNode("mover", [
            indexBFCcxPM5Value985,
            indexBFCcxPM5Value987,
          ]);
      } else if (indexBFCcxPM5Param194.below) {
        var indexBFCcxPM5Value989 = indexBFCcxPM5Value183(
          $(indexBFCcxPM5Param194.below, indexBFCcxPM5Param195),
        );
        indexBFCcxPM5Value986 = new indexBFCcxPM5Value163.MathNode("munder", [
          indexBFCcxPM5Value985,
          indexBFCcxPM5Value989,
        ]);
      } else {
        indexBFCcxPM5Value986 = indexBFCcxPM5Value183();
        indexBFCcxPM5Value986 = new indexBFCcxPM5Value163.MathNode("mover", [
          indexBFCcxPM5Value985,
          indexBFCcxPM5Value986,
        ]);
      }
      return indexBFCcxPM5Value986;
    },
  });
  indexBFCcxPM5Value184 = indexBFCcxPM5Value139.makeSpan;
  indexBFCcxPM5Helper37({
    type: "mclass",
    names: [
      "\\mathord",
      "\\mathbin",
      "\\mathrel",
      "\\mathopen",
      "\\mathclose",
      "\\mathpunct",
      "\\mathinner",
    ],
    props: {
      numArgs: 1,
      primitive: true,
    },
    handler(indexBFCcxPM5Param450, indexBFCcxPM5Param451) {
      var { parser, funcName } = indexBFCcxPM5Param450,
        indexBFCcxPM5Value1297 = indexBFCcxPM5Param451[0];
      return {
        type: "mclass",
        mode: parser.mode,
        mclass: "m" + funcName.slice(5),
        body: indexBFCcxPM5Value148(indexBFCcxPM5Value1297),
        isCharacterBox: indexBFCcxPM5Value23.isCharacterBox(
          indexBFCcxPM5Value1297,
        ),
      };
    },
    htmlBuilder: indexBFCcxPM5Helper45,
    mathmlBuilder: indexBFCcxPM5Helper46,
  });
  indexBFCcxPM5Value185 = (indexBFCcxPM5Param558) => {
    var indexBFCcxPM5Value1366 =
      indexBFCcxPM5Param558.type === "ordgroup" &&
      indexBFCcxPM5Param558.body.length
        ? indexBFCcxPM5Param558.body[0]
        : indexBFCcxPM5Param558;
    return indexBFCcxPM5Value1366.type === "atom" &&
      (indexBFCcxPM5Value1366.family === "bin" ||
        indexBFCcxPM5Value1366.family === "rel")
      ? "m" + indexBFCcxPM5Value1366.family
      : "mord";
  };
  indexBFCcxPM5Helper37({
    type: "mclass",
    names: ["\\@binrel"],
    props: {
      numArgs: 2,
    },
    handler(indexBFCcxPM5Param513, indexBFCcxPM5Param514) {
      var { parser } = indexBFCcxPM5Param513;
      return {
        type: "mclass",
        mode: parser.mode,
        mclass: indexBFCcxPM5Value185(indexBFCcxPM5Param514[0]),
        body: indexBFCcxPM5Value148(indexBFCcxPM5Param514[1]),
        isCharacterBox: indexBFCcxPM5Value23.isCharacterBox(
          indexBFCcxPM5Param514[1],
        ),
      };
    },
  });
  indexBFCcxPM5Helper37({
    type: "mclass",
    names: ["\\stackrel", "\\overset", "\\underset"],
    props: {
      numArgs: 2,
    },
    handler(indexBFCcxPM5Param149, indexBFCcxPM5Param150) {
      var { parser, funcName } = indexBFCcxPM5Param149,
        indexBFCcxPM5Value907 = indexBFCcxPM5Param150[1],
        indexBFCcxPM5Value908 = indexBFCcxPM5Param150[0],
        indexBFCcxPM5Value909 =
          funcName === "\\stackrel"
            ? "mrel"
            : indexBFCcxPM5Value185(indexBFCcxPM5Value907),
        indexBFCcxPM5Value910 = {
          type: "op",
          mode: indexBFCcxPM5Value907.mode,
          limits: true,
          alwaysHandleSupSub: true,
          parentIsSupSub: false,
          symbol: false,
          suppressBaseShift: funcName !== "\\stackrel",
          body: indexBFCcxPM5Value148(indexBFCcxPM5Value907),
        },
        indexBFCcxPM5Value911 = {
          type: "supsub",
          mode: indexBFCcxPM5Value908.mode,
          base: indexBFCcxPM5Value910,
          sup: funcName === "\\underset" ? null : indexBFCcxPM5Value908,
          sub: funcName === "\\underset" ? indexBFCcxPM5Value908 : null,
        };
      return {
        type: "mclass",
        mode: parser.mode,
        mclass: indexBFCcxPM5Value909,
        body: [indexBFCcxPM5Value911],
        isCharacterBox: indexBFCcxPM5Value23.isCharacterBox(
          indexBFCcxPM5Value911,
        ),
      };
    },
    htmlBuilder: indexBFCcxPM5Helper45,
    mathmlBuilder: indexBFCcxPM5Helper46,
  });
  indexBFCcxPM5Helper37({
    type: "pmb",
    names: ["\\pmb"],
    props: {
      numArgs: 1,
      allowedInText: true,
    },
    handler(indexBFCcxPM5Param668, indexBFCcxPM5Param669) {
      var { parser } = indexBFCcxPM5Param668;
      return {
        type: "pmb",
        mode: parser.mode,
        mclass: indexBFCcxPM5Value185(indexBFCcxPM5Param669[0]),
        body: indexBFCcxPM5Value148(indexBFCcxPM5Param669[0]),
      };
    },
    htmlBuilder(indexBFCcxPM5Param611, indexBFCcxPM5Param612) {
      var indexBFCcxPM5Value1400 = indexBFCcxPM5Value154(
          indexBFCcxPM5Param611.body,
          indexBFCcxPM5Param612,
          true,
        ),
        indexBFCcxPM5Value1401 = indexBFCcxPM5Value139.makeSpan(
          [indexBFCcxPM5Param611.mclass],
          indexBFCcxPM5Value1400,
          indexBFCcxPM5Param612,
        );
      return (
        (indexBFCcxPM5Value1401.style.textShadow = "0.02em 0.01em 0.04px"),
        indexBFCcxPM5Value1401
      );
    },
    mathmlBuilder(indexBFCcxPM5Param550, indexBFCcxPM5Param551) {
      var indexBFCcxPM5Value1357 = indexBFCcxPM5Value167(
          indexBFCcxPM5Param550.body,
          indexBFCcxPM5Param551,
        ),
        indexBFCcxPM5Value1358 = new indexBFCcxPM5Value163.MathNode(
          "mstyle",
          indexBFCcxPM5Value1357,
        );
      return (
        indexBFCcxPM5Value1358.setAttribute(
          "style",
          "text-shadow: 0.02em 0.01em 0.04px",
        ),
        indexBFCcxPM5Value1358
      );
    },
  });
  indexBFCcxPM5Value186 = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    A: "\\uparrow",
    V: "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow",
  };
  indexBFCcxPM5Value187 = () => ({
    type: "styling",
    body: [],
    mode: "math",
    style: "display",
  });
  indexBFCcxPM5Value188 = (indexBFCcxPM5Param869) =>
    indexBFCcxPM5Param869.type === "textord" &&
    indexBFCcxPM5Param869.text === "@";
  indexBFCcxPM5Value189 = (indexBFCcxPM5Param799, indexBFCcxPM5Param800) =>
    (indexBFCcxPM5Param799.type === "mathord" ||
      indexBFCcxPM5Param799.type === "atom") &&
    indexBFCcxPM5Param799.text === indexBFCcxPM5Param800;
  indexBFCcxPM5Helper37({
    type: "cdlabel",
    names: ["\\\\cdleft", "\\\\cdright"],
    props: {
      numArgs: 1,
    },
    handler(indexBFCcxPM5Param645, indexBFCcxPM5Param646) {
      var { parser, funcName } = indexBFCcxPM5Param645;
      return {
        type: "cdlabel",
        mode: parser.mode,
        side: funcName.slice(4),
        label: indexBFCcxPM5Param646[0],
      };
    },
    htmlBuilder(indexBFCcxPM5Param403, indexBFCcxPM5Param404) {
      var indexBFCcxPM5Value1261 = indexBFCcxPM5Param404.havingStyle(
          indexBFCcxPM5Param404.style.sup(),
        ),
        indexBFCcxPM5Value1262 = indexBFCcxPM5Value139.wrapFragment(
          indexBFCcxPM5Value159(
            indexBFCcxPM5Param403.label,
            indexBFCcxPM5Value1261,
            indexBFCcxPM5Param404,
          ),
          indexBFCcxPM5Param404,
        );
      return (
        indexBFCcxPM5Value1262.classes.push(
          "cd-label-" + indexBFCcxPM5Param403.side,
        ),
        (indexBFCcxPM5Value1262.style.bottom = indexBFCcxPM5Value69(
          0.8 - indexBFCcxPM5Value1262.depth,
        )),
        (indexBFCcxPM5Value1262.height = 0),
        (indexBFCcxPM5Value1262.depth = 0),
        indexBFCcxPM5Value1262
      );
    },
    mathmlBuilder(indexBFCcxPM5Param268, indexBFCcxPM5Param269) {
      var indexBFCcxPM5Value1109 = new indexBFCcxPM5Value163.MathNode("mrow", [
        $(indexBFCcxPM5Param268.label, indexBFCcxPM5Param269),
      ]);
      return (
        (indexBFCcxPM5Value1109 = new indexBFCcxPM5Value163.MathNode(
          "mpadded",
          [indexBFCcxPM5Value1109],
        )),
        indexBFCcxPM5Value1109.setAttribute("width", "0"),
        indexBFCcxPM5Param268.side === "left" &&
          indexBFCcxPM5Value1109.setAttribute("lspace", "-1width"),
        indexBFCcxPM5Value1109.setAttribute("voffset", "0.7em"),
        (indexBFCcxPM5Value1109 = new indexBFCcxPM5Value163.MathNode("mstyle", [
          indexBFCcxPM5Value1109,
        ])),
        indexBFCcxPM5Value1109.setAttribute("displaystyle", "false"),
        indexBFCcxPM5Value1109.setAttribute("scriptlevel", "1"),
        indexBFCcxPM5Value1109
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "cdlabelparent",
    names: ["\\\\cdparent"],
    props: {
      numArgs: 1,
    },
    handler(indexBFCcxPM5Param685, indexBFCcxPM5Param686) {
      var { parser } = indexBFCcxPM5Param685;
      return {
        type: "cdlabelparent",
        mode: parser.mode,
        fragment: indexBFCcxPM5Param686[0],
      };
    },
    htmlBuilder(indexBFCcxPM5Param670, indexBFCcxPM5Param671) {
      var indexBFCcxPM5Value1432 = indexBFCcxPM5Value139.wrapFragment(
        indexBFCcxPM5Value159(
          indexBFCcxPM5Param670.fragment,
          indexBFCcxPM5Param671,
        ),
        indexBFCcxPM5Param671,
      );
      return (
        indexBFCcxPM5Value1432.classes.push("cd-vert-arrow"),
        indexBFCcxPM5Value1432
      );
    },
    mathmlBuilder(indexBFCcxPM5Param775, indexBFCcxPM5Param776) {
      return new indexBFCcxPM5Value163.MathNode("mrow", [
        $(indexBFCcxPM5Param775.fragment, indexBFCcxPM5Param776),
      ]);
    },
  });
  indexBFCcxPM5Helper37({
    type: "textord",
    names: ["\\@char"],
    props: {
      numArgs: 1,
      allowedInText: true,
    },
    handler(indexBFCcxPM5Param171, indexBFCcxPM5Param172) {
      for (
        var { parser } = indexBFCcxPM5Param171,
          indexBFCcxPM5Value948 = indexBFCcxPM5Helper42(
            indexBFCcxPM5Param172[0],
            "ordgroup",
          ).body,
          indexBFCcxPM5Value949 = "",
          indexBFCcxPM5Value950 = 0;
        indexBFCcxPM5Value950 < indexBFCcxPM5Value948.length;
        indexBFCcxPM5Value950++
      ) {
        var indexBFCcxPM5Value951 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Value948[indexBFCcxPM5Value950],
          "textord",
        );
        indexBFCcxPM5Value949 += indexBFCcxPM5Value951.text;
      }
      var indexBFCcxPM5Value952 = parseInt(indexBFCcxPM5Value949),
        indexBFCcxPM5Value953;
      if (isNaN(indexBFCcxPM5Value952))
        throw new indexBFCcxPM5Value14(
          "\\@char has non-numeric argument " + indexBFCcxPM5Value949,
        );
      if (indexBFCcxPM5Value952 < 0 || indexBFCcxPM5Value952 >= 1114111)
        throw new indexBFCcxPM5Value14(
          "\\@char with invalid code point " + indexBFCcxPM5Value949,
        );
      return (
        indexBFCcxPM5Value952 <= 65535
          ? (indexBFCcxPM5Value953 = String.fromCharCode(indexBFCcxPM5Value952))
          : ((indexBFCcxPM5Value952 -= 65536),
            (indexBFCcxPM5Value953 = String.fromCharCode(
              (indexBFCcxPM5Value952 >> 10) + 55296,
              (indexBFCcxPM5Value952 & 1023) + 56320,
            ))),
        {
          type: "textord",
          mode: parser.mode,
          text: indexBFCcxPM5Value953,
        }
      );
    },
  });
  indexBFCcxPM5Value190 = (indexBFCcxPM5Param731, indexBFCcxPM5Param732) => {
    var indexBFCcxPM5Value1451 = indexBFCcxPM5Value154(
      indexBFCcxPM5Param731.body,
      indexBFCcxPM5Param732.withColor(indexBFCcxPM5Param731.color),
      false,
    );
    return indexBFCcxPM5Value139.makeFragment(indexBFCcxPM5Value1451);
  };
  indexBFCcxPM5Value191 = (indexBFCcxPM5Param618, indexBFCcxPM5Param619) => {
    var indexBFCcxPM5Value1407 = indexBFCcxPM5Value167(
        indexBFCcxPM5Param618.body,
        indexBFCcxPM5Param619.withColor(indexBFCcxPM5Param618.color),
      ),
      indexBFCcxPM5Value1408 = new indexBFCcxPM5Value163.MathNode(
        "mstyle",
        indexBFCcxPM5Value1407,
      );
    return (
      indexBFCcxPM5Value1408.setAttribute(
        "mathcolor",
        indexBFCcxPM5Param618.color,
      ),
      indexBFCcxPM5Value1408
    );
  };
  indexBFCcxPM5Helper37({
    type: "color",
    names: ["\\textcolor"],
    props: {
      numArgs: 2,
      allowedInText: true,
      argTypes: ["color", "original"],
    },
    handler(indexBFCcxPM5Param577, indexBFCcxPM5Param578) {
      var { parser } = indexBFCcxPM5Param577,
        indexBFCcxPM5Value1383 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param578[0],
          "color-token",
        ).color,
        indexBFCcxPM5Value1384 = indexBFCcxPM5Param578[1];
      return {
        type: "color",
        mode: parser.mode,
        color: indexBFCcxPM5Value1383,
        body: indexBFCcxPM5Value148(indexBFCcxPM5Value1384),
      };
    },
    htmlBuilder: indexBFCcxPM5Value190,
    mathmlBuilder: indexBFCcxPM5Value191,
  });
  indexBFCcxPM5Helper37({
    type: "color",
    names: ["\\color"],
    props: {
      numArgs: 1,
      allowedInText: true,
      argTypes: ["color"],
    },
    handler(indexBFCcxPM5Param437, indexBFCcxPM5Param438) {
      var { parser, breakOnTokenText } = indexBFCcxPM5Param437,
        indexBFCcxPM5Value1288 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param438[0],
          "color-token",
        ).color;
      parser.gullet.macros.set("\\current@color", indexBFCcxPM5Value1288);
      var indexBFCcxPM5Value1289 = parser.parseExpression(
        true,
        breakOnTokenText,
      );
      return {
        type: "color",
        mode: parser.mode,
        color: indexBFCcxPM5Value1288,
        body: indexBFCcxPM5Value1289,
      };
    },
    htmlBuilder: indexBFCcxPM5Value190,
    mathmlBuilder: indexBFCcxPM5Value191,
  });
  indexBFCcxPM5Helper37({
    type: "cr",
    names: ["\\\\"],
    props: {
      numArgs: 0,
      numOptionalArgs: 0,
      allowedInText: true,
    },
    handler(
      indexBFCcxPM5Param256,
      indexBFCcxPM5Param257,
      indexBFCcxPM5Param258,
    ) {
      var { parser } = indexBFCcxPM5Param256,
        indexBFCcxPM5Value1094 =
          parser.gullet.future().text === "["
            ? parser.parseSizeGroup(true)
            : null,
        indexBFCcxPM5Value1095 =
          !parser.settings.displayMode ||
          !parser.settings.useStrictBehavior(
            "newLineInDisplayMode",
            "In LaTeX, \\\\ or \\newline does nothing in display mode",
          );
      return {
        type: "cr",
        mode: parser.mode,
        newLine: indexBFCcxPM5Value1095,
        size:
          indexBFCcxPM5Value1094 &&
          indexBFCcxPM5Helper42(indexBFCcxPM5Value1094, "size").value,
      };
    },
    htmlBuilder(indexBFCcxPM5Param507, indexBFCcxPM5Param508) {
      var indexBFCcxPM5Value1336 = indexBFCcxPM5Value139.makeSpan(
        ["mspace"],
        [],
        indexBFCcxPM5Param508,
      );
      return (
        indexBFCcxPM5Param507.newLine &&
          (indexBFCcxPM5Value1336.classes.push("newline"),
          indexBFCcxPM5Param507.size &&
            (indexBFCcxPM5Value1336.style.marginTop = indexBFCcxPM5Value69(
              indexBFCcxPM5Value68(
                indexBFCcxPM5Param507.size,
                indexBFCcxPM5Param508,
              ),
            ))),
        indexBFCcxPM5Value1336
      );
    },
    mathmlBuilder(indexBFCcxPM5Param483, indexBFCcxPM5Param484) {
      var indexBFCcxPM5Value1322 = new indexBFCcxPM5Value163.MathNode("mspace");
      return (
        indexBFCcxPM5Param483.newLine &&
          (indexBFCcxPM5Value1322.setAttribute("linebreak", "newline"),
          indexBFCcxPM5Param483.size &&
            indexBFCcxPM5Value1322.setAttribute(
              "height",
              indexBFCcxPM5Value69(
                indexBFCcxPM5Value68(
                  indexBFCcxPM5Param483.size,
                  indexBFCcxPM5Param484,
                ),
              ),
            )),
        indexBFCcxPM5Value1322
      );
    },
  });
  $r = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture",
  };
  indexBFCcxPM5Value192 = (indexBFCcxPM5Param642) => {
    var indexBFCcxPM5Value1419 = indexBFCcxPM5Param642.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(indexBFCcxPM5Value1419))
      throw new indexBFCcxPM5Value14(
        "Expected a control sequence",
        indexBFCcxPM5Param642,
      );
    return indexBFCcxPM5Value1419;
  };
  indexBFCcxPM5Value193 = (indexBFCcxPM5Param559) => {
    var indexBFCcxPM5Value1367 = indexBFCcxPM5Param559.gullet.popToken();
    return (
      indexBFCcxPM5Value1367.text === "=" &&
        ((indexBFCcxPM5Value1367 = indexBFCcxPM5Param559.gullet.popToken()),
        indexBFCcxPM5Value1367.text === " " &&
          (indexBFCcxPM5Value1367 = indexBFCcxPM5Param559.gullet.popToken())),
      indexBFCcxPM5Value1367
    );
  };
  indexBFCcxPM5Value194 = (
    indexBFCcxPM5Param446,
    indexBFCcxPM5Param447,
    indexBFCcxPM5Param448,
    indexBFCcxPM5Param449,
  ) => {
    var indexBFCcxPM5Value1296 = indexBFCcxPM5Param446.gullet.macros.get(
      indexBFCcxPM5Param448.text,
    );
    indexBFCcxPM5Value1296 ??=
      ((indexBFCcxPM5Param448.noexpand = true),
      {
        tokens: [indexBFCcxPM5Param448],
        numArgs: 0,
        unexpandable: !indexBFCcxPM5Param446.gullet.isExpandable(
          indexBFCcxPM5Param448.text,
        ),
      });
    indexBFCcxPM5Param446.gullet.macros.set(
      indexBFCcxPM5Param447,
      indexBFCcxPM5Value1296,
      indexBFCcxPM5Param449,
    );
  };
  indexBFCcxPM5Helper37({
    type: "internal",
    names: ["\\global", "\\long", "\\\\globallong"],
    props: {
      numArgs: 0,
      allowedInText: true,
    },
    handler(indexBFCcxPM5Param344) {
      var { parser, funcName } = indexBFCcxPM5Param344;
      parser.consumeSpaces();
      var indexBFCcxPM5Value1191 = parser.fetch();
      if ($r[indexBFCcxPM5Value1191.text])
        return (
          (funcName === "\\global" || funcName === "\\\\globallong") &&
            (indexBFCcxPM5Value1191.text = $r[indexBFCcxPM5Value1191.text]),
          indexBFCcxPM5Helper42(parser.parseFunction(), "internal")
        );
      throw new indexBFCcxPM5Value14(
        "Invalid token after macro prefix",
        indexBFCcxPM5Value1191,
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "internal",
    names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
    props: {
      numArgs: 0,
      allowedInText: true,
      primitive: true,
    },
    handler(indexBFCcxPM5Param76) {
      var { parser, funcName } = indexBFCcxPM5Param76,
        indexBFCcxPM5Value716 = parser.gullet.popToken(),
        indexBFCcxPM5Value717 = indexBFCcxPM5Value716.text;
      if (/^(?:[\\{}$&#^_]|EOF)$/.test(indexBFCcxPM5Value717))
        throw new indexBFCcxPM5Value14(
          "Expected a control sequence",
          indexBFCcxPM5Value716,
        );
      for (
        var indexBFCcxPM5Value718 = 0,
          indexBFCcxPM5Value719,
          indexBFCcxPM5Value720 = [[]];
        parser.gullet.future().text !== "{";
      )
        if (
          ((indexBFCcxPM5Value716 = parser.gullet.popToken()),
          indexBFCcxPM5Value716.text === "#")
        ) {
          if (parser.gullet.future().text === "{") {
            indexBFCcxPM5Value719 = parser.gullet.future();
            indexBFCcxPM5Value720[indexBFCcxPM5Value718].push("{");
            break;
          }
          if (
            ((indexBFCcxPM5Value716 = parser.gullet.popToken()),
            !/^[1-9]$/.test(indexBFCcxPM5Value716.text))
          )
            throw new indexBFCcxPM5Value14(
              'Invalid argument number "' + indexBFCcxPM5Value716.text + '"',
            );
          if (
            parseInt(indexBFCcxPM5Value716.text) !==
            indexBFCcxPM5Value718 + 1
          )
            throw new indexBFCcxPM5Value14(
              'Argument number "' +
                indexBFCcxPM5Value716.text +
                '" out of order',
            );
          indexBFCcxPM5Value718++;
          indexBFCcxPM5Value720.push([]);
        } else {
          if (indexBFCcxPM5Value716.text === "EOF")
            throw new indexBFCcxPM5Value14("Expected a macro definition");
          indexBFCcxPM5Value720[indexBFCcxPM5Value718].push(
            indexBFCcxPM5Value716.text,
          );
        }
      var { tokens } = parser.gullet.consumeArg();
      return (
        indexBFCcxPM5Value719 && tokens.unshift(indexBFCcxPM5Value719),
        (funcName === "\\edef" || funcName === "\\xdef") &&
          ((tokens = parser.gullet.expandTokens(tokens)), tokens.reverse()),
        parser.gullet.macros.set(
          indexBFCcxPM5Value717,
          {
            tokens,
            numArgs: indexBFCcxPM5Value718,
            delimiters: indexBFCcxPM5Value720,
          },
          funcName === $r[funcName],
        ),
        {
          type: "internal",
          mode: parser.mode,
        }
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "internal",
    names: ["\\let", "\\\\globallet"],
    props: {
      numArgs: 0,
      allowedInText: true,
      primitive: true,
    },
    handler(indexBFCcxPM5Param468) {
      var { parser, funcName } = indexBFCcxPM5Param468,
        indexBFCcxPM5Value1311 = indexBFCcxPM5Value192(
          parser.gullet.popToken(),
        );
      return (
        parser.gullet.consumeSpaces(),
        indexBFCcxPM5Value194(
          parser,
          indexBFCcxPM5Value1311,
          indexBFCcxPM5Value193(parser),
          funcName === "\\\\globallet",
        ),
        {
          type: "internal",
          mode: parser.mode,
        }
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "internal",
    names: ["\\futurelet", "\\\\globalfuture"],
    props: {
      numArgs: 0,
      allowedInText: true,
      primitive: true,
    },
    handler(indexBFCcxPM5Param357) {
      var { parser, funcName } = indexBFCcxPM5Param357,
        indexBFCcxPM5Value1202 = indexBFCcxPM5Value192(
          parser.gullet.popToken(),
        ),
        indexBFCcxPM5Value1203 = parser.gullet.popToken(),
        indexBFCcxPM5Value1204 = parser.gullet.popToken();
      return (
        indexBFCcxPM5Value194(
          parser,
          indexBFCcxPM5Value1202,
          indexBFCcxPM5Value1204,
          funcName === "\\\\globalfuture",
        ),
        parser.gullet.pushToken(indexBFCcxPM5Value1204),
        parser.gullet.pushToken(indexBFCcxPM5Value1203),
        {
          type: "internal",
          mode: parser.mode,
        }
      );
    },
  });
  indexBFCcxPM5Value195 = function (
    indexBFCcxPM5Param568,
    indexBFCcxPM5Param569,
    indexBFCcxPM5Param570,
  ) {
    var indexBFCcxPM5Value1376 = indexBFCcxPM5Helper32(
      (indexBFCcxPM5Value83.math[indexBFCcxPM5Param568] &&
        indexBFCcxPM5Value83.math[indexBFCcxPM5Param568].replace) ||
        indexBFCcxPM5Param568,
      indexBFCcxPM5Param569,
      indexBFCcxPM5Param570,
    );
    if (!indexBFCcxPM5Value1376)
      throw Error(
        "Unsupported symbol " +
          indexBFCcxPM5Param568 +
          " and font size " +
          indexBFCcxPM5Param569 +
          ".",
      );
    return indexBFCcxPM5Value1376;
  };
  indexBFCcxPM5Value196 = function (
    indexBFCcxPM5Param415,
    indexBFCcxPM5Param416,
    indexBFCcxPM5Param417,
    indexBFCcxPM5Param418,
  ) {
    var indexBFCcxPM5Value1272 = indexBFCcxPM5Param417.havingBaseStyle(
        indexBFCcxPM5Param416,
      ),
      indexBFCcxPM5Value1273 = indexBFCcxPM5Value139.makeSpan(
        indexBFCcxPM5Param418.concat(
          indexBFCcxPM5Value1272.sizingClasses(indexBFCcxPM5Param417),
        ),
        [indexBFCcxPM5Param415],
        indexBFCcxPM5Param417,
      ),
      indexBFCcxPM5Value1274 =
        indexBFCcxPM5Value1272.sizeMultiplier /
        indexBFCcxPM5Param417.sizeMultiplier;
    return (
      (indexBFCcxPM5Value1273.height *= indexBFCcxPM5Value1274),
      (indexBFCcxPM5Value1273.depth *= indexBFCcxPM5Value1274),
      (indexBFCcxPM5Value1273.maxFontSize =
        indexBFCcxPM5Value1272.sizeMultiplier),
      indexBFCcxPM5Value1273
    );
  };
  indexBFCcxPM5Value197 = function (
    indexBFCcxPM5Param428,
    indexBFCcxPM5Param429,
    indexBFCcxPM5Param430,
  ) {
    var indexBFCcxPM5Value1281 = indexBFCcxPM5Param429.havingBaseStyle(
        indexBFCcxPM5Param430,
      ),
      indexBFCcxPM5Value1282 =
        (1 -
          indexBFCcxPM5Param429.sizeMultiplier /
            indexBFCcxPM5Value1281.sizeMultiplier) *
        indexBFCcxPM5Param429.fontMetrics().axisHeight;
    indexBFCcxPM5Param428.classes.push("delimcenter");
    indexBFCcxPM5Param428.style.top = indexBFCcxPM5Value69(
      indexBFCcxPM5Value1282,
    );
    indexBFCcxPM5Param428.height -= indexBFCcxPM5Value1282;
    indexBFCcxPM5Param428.depth += indexBFCcxPM5Value1282;
  };
  indexBFCcxPM5Value198 = function (
    indexBFCcxPM5Param649,
    indexBFCcxPM5Param650,
    indexBFCcxPM5Param651,
    indexBFCcxPM5Param652,
    indexBFCcxPM5Param653,
    indexBFCcxPM5Param654,
  ) {
    var indexBFCcxPM5Value1423 = indexBFCcxPM5Value196(
      indexBFCcxPM5Value139.makeSymbol(
        indexBFCcxPM5Param649,
        "Main-Regular",
        indexBFCcxPM5Param653,
        indexBFCcxPM5Param652,
      ),
      indexBFCcxPM5Param650,
      indexBFCcxPM5Param652,
      indexBFCcxPM5Param654,
    );
    return (
      indexBFCcxPM5Param651 &&
        indexBFCcxPM5Value197(
          indexBFCcxPM5Value1423,
          indexBFCcxPM5Param652,
          indexBFCcxPM5Param650,
        ),
      indexBFCcxPM5Value1423
    );
  };
  indexBFCcxPM5Value199 = function (
    indexBFCcxPM5Param758,
    indexBFCcxPM5Param759,
    indexBFCcxPM5Param760,
    indexBFCcxPM5Param761,
  ) {
    return indexBFCcxPM5Value139.makeSymbol(
      indexBFCcxPM5Param758,
      "Size" + indexBFCcxPM5Param759 + "-Regular",
      indexBFCcxPM5Param760,
      indexBFCcxPM5Param761,
    );
  };
  indexBFCcxPM5Value200 = function (
    indexBFCcxPM5Param584,
    indexBFCcxPM5Param585,
    indexBFCcxPM5Param586,
    indexBFCcxPM5Param587,
    indexBFCcxPM5Param588,
    indexBFCcxPM5Param589,
  ) {
    var indexBFCcxPM5Value1388 = indexBFCcxPM5Value199(
        indexBFCcxPM5Param584,
        indexBFCcxPM5Param585,
        indexBFCcxPM5Param588,
        indexBFCcxPM5Param587,
      ),
      indexBFCcxPM5Value1389 = indexBFCcxPM5Value196(
        indexBFCcxPM5Value139.makeSpan(
          ["delimsizing", "size" + indexBFCcxPM5Param585],
          [indexBFCcxPM5Value1388],
          indexBFCcxPM5Param587,
        ),
        indexBFCcxPM5Value41.TEXT,
        indexBFCcxPM5Param587,
        indexBFCcxPM5Param589,
      );
    return (
      indexBFCcxPM5Param586 &&
        indexBFCcxPM5Value197(
          indexBFCcxPM5Value1389,
          indexBFCcxPM5Param587,
          indexBFCcxPM5Value41.TEXT,
        ),
      indexBFCcxPM5Value1389
    );
  };
  indexBFCcxPM5Value201 = function (
    indexBFCcxPM5Param459,
    indexBFCcxPM5Param460,
    indexBFCcxPM5Param461,
  ) {
    var indexBFCcxPM5Value1304 =
      indexBFCcxPM5Param460 === "Size1-Regular" ? "delim-size1" : "delim-size4";
    return {
      type: "elem",
      elem: indexBFCcxPM5Value139.makeSpan(
        ["delimsizinginner", indexBFCcxPM5Value1304],
        [
          indexBFCcxPM5Value139.makeSpan(
            [],
            [
              indexBFCcxPM5Value139.makeSymbol(
                indexBFCcxPM5Param459,
                indexBFCcxPM5Param460,
                indexBFCcxPM5Param461,
              ),
            ],
          ),
        ],
      ),
    };
  };
  ui = function (
    indexBFCcxPM5Param180,
    indexBFCcxPM5Param181,
    indexBFCcxPM5Param182,
  ) {
    var indexBFCcxPM5Value972 = indexBFCcxPM5Value57["Size4-Regular"][
        indexBFCcxPM5Param180.charCodeAt(0)
      ]
        ? indexBFCcxPM5Value57["Size4-Regular"][
            indexBFCcxPM5Param180.charCodeAt(0)
          ][4]
        : indexBFCcxPM5Value57["Size1-Regular"][
            indexBFCcxPM5Param180.charCodeAt(0)
          ][4],
      indexBFCcxPM5Value973 = new indexBFCcxPM5Value79(
        "inner",
        indexBFCcxPM5Value53(
          indexBFCcxPM5Param180,
          Math.round(1e3 * indexBFCcxPM5Param181),
        ),
      ),
      indexBFCcxPM5Value974 = new indexBFCcxPM5Value78(
        [indexBFCcxPM5Value973],
        {
          width: indexBFCcxPM5Value69(indexBFCcxPM5Value972),
          height: indexBFCcxPM5Value69(indexBFCcxPM5Param181),
          style: "width:" + indexBFCcxPM5Value69(indexBFCcxPM5Value972),
          viewBox:
            "0 0 " +
            1e3 * indexBFCcxPM5Value972 +
            " " +
            Math.round(1e3 * indexBFCcxPM5Param181),
          preserveAspectRatio: "xMinYMin",
        },
      ),
      indexBFCcxPM5Value975 = indexBFCcxPM5Value139.makeSvgSpan(
        [],
        [indexBFCcxPM5Value974],
        indexBFCcxPM5Param182,
      );
    return (
      (indexBFCcxPM5Value975.height = indexBFCcxPM5Param181),
      (indexBFCcxPM5Value975.style.height = indexBFCcxPM5Value69(
        indexBFCcxPM5Param181,
      )),
      (indexBFCcxPM5Value975.style.width = indexBFCcxPM5Value69(
        indexBFCcxPM5Value972,
      )),
      {
        type: "elem",
        elem: indexBFCcxPM5Value975,
      }
    );
  };
  indexBFCcxPM5Value202 = 0.008;
  indexBFCcxPM5Value203 = {
    type: "kern",
    size: -1 * indexBFCcxPM5Value202,
  };
  indexBFCcxPM5Value204 = ["|", "\\lvert", "\\rvert", "\\vert"];
  indexBFCcxPM5Value205 = ["\\|", "\\lVert", "\\rVert", "\\Vert"];
  indexBFCcxPM5Value206 = function (
    indexBFCcxPM5Param1,
    indexBFCcxPM5Param2,
    indexBFCcxPM5Param3,
    indexBFCcxPM5Param4,
    indexBFCcxPM5Param5,
    indexBFCcxPM5Param6,
  ) {
    var indexBFCcxPM5Value298,
      indexBFCcxPM5Value299,
      indexBFCcxPM5Value300,
      indexBFCcxPM5Value301,
      indexBFCcxPM5Value302 = "",
      indexBFCcxPM5Value303 = 0;
    indexBFCcxPM5Value298 =
      indexBFCcxPM5Value300 =
      indexBFCcxPM5Value301 =
        indexBFCcxPM5Param1;
    indexBFCcxPM5Value299 = null;
    var indexBFCcxPM5Value304 = "Size1-Regular";
    indexBFCcxPM5Param1 === "\\uparrow"
      ? (indexBFCcxPM5Value300 = indexBFCcxPM5Value301 = "⏐")
      : indexBFCcxPM5Param1 === "\\Uparrow"
        ? (indexBFCcxPM5Value300 = indexBFCcxPM5Value301 = "‖")
        : indexBFCcxPM5Param1 === "\\downarrow"
          ? (indexBFCcxPM5Value298 = indexBFCcxPM5Value300 = "⏐")
          : indexBFCcxPM5Param1 === "\\Downarrow"
            ? (indexBFCcxPM5Value298 = indexBFCcxPM5Value300 = "‖")
            : indexBFCcxPM5Param1 === "\\updownarrow"
              ? ((indexBFCcxPM5Value298 = "\\uparrow"),
                (indexBFCcxPM5Value300 = "⏐"),
                (indexBFCcxPM5Value301 = "\\downarrow"))
              : indexBFCcxPM5Param1 === "\\Updownarrow"
                ? ((indexBFCcxPM5Value298 = "\\Uparrow"),
                  (indexBFCcxPM5Value300 = "‖"),
                  (indexBFCcxPM5Value301 = "\\Downarrow"))
                : indexBFCcxPM5Value23.contains(
                      indexBFCcxPM5Value204,
                      indexBFCcxPM5Param1,
                    )
                  ? ((indexBFCcxPM5Value300 = "∣"),
                    (indexBFCcxPM5Value302 = "vert"),
                    (indexBFCcxPM5Value303 = 333))
                  : indexBFCcxPM5Value23.contains(
                        indexBFCcxPM5Value205,
                        indexBFCcxPM5Param1,
                      )
                    ? ((indexBFCcxPM5Value300 = "∥"),
                      (indexBFCcxPM5Value302 = "doublevert"),
                      (indexBFCcxPM5Value303 = 556))
                    : indexBFCcxPM5Param1 === "[" ||
                        indexBFCcxPM5Param1 === "\\lbrack"
                      ? ((indexBFCcxPM5Value298 = "⎡"),
                        (indexBFCcxPM5Value300 = "⎢"),
                        (indexBFCcxPM5Value301 = "⎣"),
                        (indexBFCcxPM5Value304 = "Size4-Regular"),
                        (indexBFCcxPM5Value302 = "lbrack"),
                        (indexBFCcxPM5Value303 = 667))
                      : indexBFCcxPM5Param1 === "]" ||
                          indexBFCcxPM5Param1 === "\\rbrack"
                        ? ((indexBFCcxPM5Value298 = "⎤"),
                          (indexBFCcxPM5Value300 = "⎥"),
                          (indexBFCcxPM5Value301 = "⎦"),
                          (indexBFCcxPM5Value304 = "Size4-Regular"),
                          (indexBFCcxPM5Value302 = "rbrack"),
                          (indexBFCcxPM5Value303 = 667))
                        : indexBFCcxPM5Param1 === "\\lfloor" ||
                            indexBFCcxPM5Param1 === "⌊"
                          ? ((indexBFCcxPM5Value300 = indexBFCcxPM5Value298 =
                              "⎢"),
                            (indexBFCcxPM5Value301 = "⎣"),
                            (indexBFCcxPM5Value304 = "Size4-Regular"),
                            (indexBFCcxPM5Value302 = "lfloor"),
                            (indexBFCcxPM5Value303 = 667))
                          : indexBFCcxPM5Param1 === "\\lceil" ||
                              indexBFCcxPM5Param1 === "⌈"
                            ? ((indexBFCcxPM5Value298 = "⎡"),
                              (indexBFCcxPM5Value300 = indexBFCcxPM5Value301 =
                                "⎢"),
                              (indexBFCcxPM5Value304 = "Size4-Regular"),
                              (indexBFCcxPM5Value302 = "lceil"),
                              (indexBFCcxPM5Value303 = 667))
                            : indexBFCcxPM5Param1 === "\\rfloor" ||
                                indexBFCcxPM5Param1 === "⌋"
                              ? ((indexBFCcxPM5Value300 =
                                  indexBFCcxPM5Value298 =
                                    "⎥"),
                                (indexBFCcxPM5Value301 = "⎦"),
                                (indexBFCcxPM5Value304 = "Size4-Regular"),
                                (indexBFCcxPM5Value302 = "rfloor"),
                                (indexBFCcxPM5Value303 = 667))
                              : indexBFCcxPM5Param1 === "\\rceil" ||
                                  indexBFCcxPM5Param1 === "⌉"
                                ? ((indexBFCcxPM5Value298 = "⎤"),
                                  (indexBFCcxPM5Value300 =
                                    indexBFCcxPM5Value301 =
                                      "⎥"),
                                  (indexBFCcxPM5Value304 = "Size4-Regular"),
                                  (indexBFCcxPM5Value302 = "rceil"),
                                  (indexBFCcxPM5Value303 = 667))
                                : indexBFCcxPM5Param1 === "(" ||
                                    indexBFCcxPM5Param1 === "\\lparen"
                                  ? ((indexBFCcxPM5Value298 = "⎛"),
                                    (indexBFCcxPM5Value300 = "⎜"),
                                    (indexBFCcxPM5Value301 = "⎝"),
                                    (indexBFCcxPM5Value304 = "Size4-Regular"),
                                    (indexBFCcxPM5Value302 = "lparen"),
                                    (indexBFCcxPM5Value303 = 875))
                                  : indexBFCcxPM5Param1 === ")" ||
                                      indexBFCcxPM5Param1 === "\\rparen"
                                    ? ((indexBFCcxPM5Value298 = "⎞"),
                                      (indexBFCcxPM5Value300 = "⎟"),
                                      (indexBFCcxPM5Value301 = "⎠"),
                                      (indexBFCcxPM5Value304 = "Size4-Regular"),
                                      (indexBFCcxPM5Value302 = "rparen"),
                                      (indexBFCcxPM5Value303 = 875))
                                    : indexBFCcxPM5Param1 === "\\{" ||
                                        indexBFCcxPM5Param1 === "\\lbrace"
                                      ? ((indexBFCcxPM5Value298 = "⎧"),
                                        (indexBFCcxPM5Value299 = "⎨"),
                                        (indexBFCcxPM5Value301 = "⎩"),
                                        (indexBFCcxPM5Value300 = "⎪"),
                                        (indexBFCcxPM5Value304 =
                                          "Size4-Regular"))
                                      : indexBFCcxPM5Param1 === "\\}" ||
                                          indexBFCcxPM5Param1 === "\\rbrace"
                                        ? ((indexBFCcxPM5Value298 = "⎫"),
                                          (indexBFCcxPM5Value299 = "⎬"),
                                          (indexBFCcxPM5Value301 = "⎭"),
                                          (indexBFCcxPM5Value300 = "⎪"),
                                          (indexBFCcxPM5Value304 =
                                            "Size4-Regular"))
                                        : indexBFCcxPM5Param1 === "\\lgroup" ||
                                            indexBFCcxPM5Param1 === "⟮"
                                          ? ((indexBFCcxPM5Value298 = "⎧"),
                                            (indexBFCcxPM5Value301 = "⎩"),
                                            (indexBFCcxPM5Value300 = "⎪"),
                                            (indexBFCcxPM5Value304 =
                                              "Size4-Regular"))
                                          : indexBFCcxPM5Param1 ===
                                                "\\rgroup" ||
                                              indexBFCcxPM5Param1 === "⟯"
                                            ? ((indexBFCcxPM5Value298 = "⎫"),
                                              (indexBFCcxPM5Value301 = "⎭"),
                                              (indexBFCcxPM5Value300 = "⎪"),
                                              (indexBFCcxPM5Value304 =
                                                "Size4-Regular"))
                                            : indexBFCcxPM5Param1 ===
                                                  "\\lmoustache" ||
                                                indexBFCcxPM5Param1 === "⎰"
                                              ? ((indexBFCcxPM5Value298 = "⎧"),
                                                (indexBFCcxPM5Value301 = "⎭"),
                                                (indexBFCcxPM5Value300 = "⎪"),
                                                (indexBFCcxPM5Value304 =
                                                  "Size4-Regular"))
                                              : (indexBFCcxPM5Param1 ===
                                                  "\\rmoustache" ||
                                                  indexBFCcxPM5Param1 ===
                                                    "⎱") &&
                                                ((indexBFCcxPM5Value298 = "⎫"),
                                                (indexBFCcxPM5Value301 = "⎩"),
                                                (indexBFCcxPM5Value300 = "⎪"),
                                                (indexBFCcxPM5Value304 =
                                                  "Size4-Regular"));
    var indexBFCcxPM5Value305 = indexBFCcxPM5Value195(
        indexBFCcxPM5Value298,
        indexBFCcxPM5Value304,
        indexBFCcxPM5Param5,
      ),
      indexBFCcxPM5Value306 =
        indexBFCcxPM5Value305.height + indexBFCcxPM5Value305.depth,
      indexBFCcxPM5Value307 = indexBFCcxPM5Value195(
        indexBFCcxPM5Value300,
        indexBFCcxPM5Value304,
        indexBFCcxPM5Param5,
      ),
      indexBFCcxPM5Value308 =
        indexBFCcxPM5Value307.height + indexBFCcxPM5Value307.depth,
      indexBFCcxPM5Value309 = indexBFCcxPM5Value195(
        indexBFCcxPM5Value301,
        indexBFCcxPM5Value304,
        indexBFCcxPM5Param5,
      ),
      indexBFCcxPM5Value310 =
        indexBFCcxPM5Value309.height + indexBFCcxPM5Value309.depth,
      indexBFCcxPM5Value311 = 0,
      indexBFCcxPM5Value312 = 1;
    if (indexBFCcxPM5Value299 !== null) {
      var indexBFCcxPM5Value313 = indexBFCcxPM5Value195(
        indexBFCcxPM5Value299,
        indexBFCcxPM5Value304,
        indexBFCcxPM5Param5,
      );
      indexBFCcxPM5Value311 =
        indexBFCcxPM5Value313.height + indexBFCcxPM5Value313.depth;
      indexBFCcxPM5Value312 = 2;
    }
    var indexBFCcxPM5Value314 =
        indexBFCcxPM5Value306 + indexBFCcxPM5Value310 + indexBFCcxPM5Value311,
      indexBFCcxPM5Value315 =
        indexBFCcxPM5Value314 +
        Math.max(
          0,
          Math.ceil(
            (indexBFCcxPM5Param2 - indexBFCcxPM5Value314) /
              (indexBFCcxPM5Value312 * indexBFCcxPM5Value308),
          ),
        ) *
          indexBFCcxPM5Value312 *
          indexBFCcxPM5Value308,
      indexBFCcxPM5Value316 = indexBFCcxPM5Param4.fontMetrics().axisHeight;
    indexBFCcxPM5Param3 &&
      (indexBFCcxPM5Value316 *= indexBFCcxPM5Param4.sizeMultiplier);
    var indexBFCcxPM5Value317 =
        indexBFCcxPM5Value315 / 2 - indexBFCcxPM5Value316,
      indexBFCcxPM5Value318 = [];
    if (indexBFCcxPM5Value302.length > 0) {
      var indexBFCcxPM5Value319 =
          indexBFCcxPM5Value315 - indexBFCcxPM5Value306 - indexBFCcxPM5Value310,
        indexBFCcxPM5Value320 = Math.round(indexBFCcxPM5Value315 * 1e3),
        indexBFCcxPM5Value321 = indexBFCcxPM5Value55(
          indexBFCcxPM5Value302,
          Math.round(indexBFCcxPM5Value319 * 1e3),
        ),
        indexBFCcxPM5Value322 = new indexBFCcxPM5Value79(
          indexBFCcxPM5Value302,
          indexBFCcxPM5Value321,
        ),
        indexBFCcxPM5Value323 = (indexBFCcxPM5Value303 / 1e3).toFixed(3) + "em",
        indexBFCcxPM5Value324 = (indexBFCcxPM5Value320 / 1e3).toFixed(3) + "em",
        indexBFCcxPM5Value325 = new indexBFCcxPM5Value78(
          [indexBFCcxPM5Value322],
          {
            width: indexBFCcxPM5Value323,
            height: indexBFCcxPM5Value324,
            viewBox:
              "0 0 " + indexBFCcxPM5Value303 + " " + indexBFCcxPM5Value320,
          },
        ),
        indexBFCcxPM5Value326 = indexBFCcxPM5Value139.makeSvgSpan(
          [],
          [indexBFCcxPM5Value325],
          indexBFCcxPM5Param4,
        );
      indexBFCcxPM5Value326.height = indexBFCcxPM5Value320 / 1e3;
      indexBFCcxPM5Value326.style.width = indexBFCcxPM5Value323;
      indexBFCcxPM5Value326.style.height = indexBFCcxPM5Value324;
      indexBFCcxPM5Value318.push({
        type: "elem",
        elem: indexBFCcxPM5Value326,
      });
    } else {
      if (
        (indexBFCcxPM5Value318.push(
          indexBFCcxPM5Value201(
            indexBFCcxPM5Value301,
            indexBFCcxPM5Value304,
            indexBFCcxPM5Param5,
          ),
        ),
        indexBFCcxPM5Value318.push(indexBFCcxPM5Value203),
        indexBFCcxPM5Value299 === null)
      ) {
        var indexBFCcxPM5Value327 =
          indexBFCcxPM5Value315 -
          indexBFCcxPM5Value306 -
          indexBFCcxPM5Value310 +
          2 * indexBFCcxPM5Value202;
        indexBFCcxPM5Value318.push(
          ui(indexBFCcxPM5Value300, indexBFCcxPM5Value327, indexBFCcxPM5Param4),
        );
      } else {
        var indexBFCcxPM5Value328 =
          (indexBFCcxPM5Value315 -
            indexBFCcxPM5Value306 -
            indexBFCcxPM5Value310 -
            indexBFCcxPM5Value311) /
            2 +
          2 * indexBFCcxPM5Value202;
        indexBFCcxPM5Value318.push(
          ui(indexBFCcxPM5Value300, indexBFCcxPM5Value328, indexBFCcxPM5Param4),
        );
        indexBFCcxPM5Value318.push(indexBFCcxPM5Value203);
        indexBFCcxPM5Value318.push(
          indexBFCcxPM5Value201(
            indexBFCcxPM5Value299,
            indexBFCcxPM5Value304,
            indexBFCcxPM5Param5,
          ),
        );
        indexBFCcxPM5Value318.push(indexBFCcxPM5Value203);
        indexBFCcxPM5Value318.push(
          ui(indexBFCcxPM5Value300, indexBFCcxPM5Value328, indexBFCcxPM5Param4),
        );
      }
      indexBFCcxPM5Value318.push(indexBFCcxPM5Value203);
      indexBFCcxPM5Value318.push(
        indexBFCcxPM5Value201(
          indexBFCcxPM5Value298,
          indexBFCcxPM5Value304,
          indexBFCcxPM5Param5,
        ),
      );
    }
    var indexBFCcxPM5Value329 = indexBFCcxPM5Param4.havingBaseStyle(
        indexBFCcxPM5Value41.TEXT,
      ),
      indexBFCcxPM5Value330 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "bottom",
          positionData: indexBFCcxPM5Value317,
          children: indexBFCcxPM5Value318,
        },
        indexBFCcxPM5Value329,
      );
    return indexBFCcxPM5Value196(
      indexBFCcxPM5Value139.makeSpan(
        ["delimsizing", "mult"],
        [indexBFCcxPM5Value330],
        indexBFCcxPM5Value329,
      ),
      indexBFCcxPM5Value41.TEXT,
      indexBFCcxPM5Param4,
      indexBFCcxPM5Param6,
    );
  };
  indexBFCcxPM5Value207 = 80;
  _i = 0.08;
  indexBFCcxPM5Value208 = function (
    indexBFCcxPM5Param398,
    indexBFCcxPM5Param399,
    indexBFCcxPM5Param400,
    indexBFCcxPM5Param401,
    indexBFCcxPM5Param402,
  ) {
    var indexBFCcxPM5Value1258 = indexBFCcxPM5Value52(
        indexBFCcxPM5Param398,
        indexBFCcxPM5Param401,
        indexBFCcxPM5Param400,
      ),
      indexBFCcxPM5Value1259 = new indexBFCcxPM5Value79(
        indexBFCcxPM5Param398,
        indexBFCcxPM5Value1258,
      ),
      indexBFCcxPM5Value1260 = new indexBFCcxPM5Value78(
        [indexBFCcxPM5Value1259],
        {
          width: "400em",
          height: indexBFCcxPM5Value69(indexBFCcxPM5Param399),
          viewBox: "0 0 400000 " + indexBFCcxPM5Param400,
          preserveAspectRatio: "xMinYMin slice",
        },
      );
    return indexBFCcxPM5Value139.makeSvgSpan(
      ["hide-tail"],
      [indexBFCcxPM5Value1260],
      indexBFCcxPM5Param402,
    );
  };
  indexBFCcxPM5Value209 = function (
    indexBFCcxPM5Param68,
    indexBFCcxPM5Param69,
  ) {
    var indexBFCcxPM5Value698 = indexBFCcxPM5Param69.havingBaseSizing(),
      indexBFCcxPM5Value699 = indexBFCcxPM5Value219(
        "\\surd",
        indexBFCcxPM5Param68 * indexBFCcxPM5Value698.sizeMultiplier,
        indexBFCcxPM5Value217,
        indexBFCcxPM5Value698,
      ),
      indexBFCcxPM5Value700 = indexBFCcxPM5Value698.sizeMultiplier,
      indexBFCcxPM5Value701 = Math.max(
        0,
        indexBFCcxPM5Param69.minRuleThickness -
          indexBFCcxPM5Param69.fontMetrics().sqrtRuleThickness,
      ),
      indexBFCcxPM5Value702,
      indexBFCcxPM5Value703 = 0,
      indexBFCcxPM5Value704 = 0,
      indexBFCcxPM5Value705 = 0,
      indexBFCcxPM5Value706;
    return (
      indexBFCcxPM5Value699.type === "small"
        ? ((indexBFCcxPM5Value705 =
            1e3 + 1e3 * indexBFCcxPM5Value701 + indexBFCcxPM5Value207),
          indexBFCcxPM5Param68 < 1
            ? (indexBFCcxPM5Value700 = 1)
            : indexBFCcxPM5Param68 < 1.4 && (indexBFCcxPM5Value700 = 0.7),
          (indexBFCcxPM5Value703 =
            (1 + indexBFCcxPM5Value701 + _i) / indexBFCcxPM5Value700),
          (indexBFCcxPM5Value704 =
            (1 + indexBFCcxPM5Value701) / indexBFCcxPM5Value700),
          (indexBFCcxPM5Value702 = indexBFCcxPM5Value208(
            "sqrtMain",
            indexBFCcxPM5Value703,
            indexBFCcxPM5Value705,
            indexBFCcxPM5Value701,
            indexBFCcxPM5Param69,
          )),
          (indexBFCcxPM5Value702.style.minWidth = "0.853em"),
          (indexBFCcxPM5Value706 = 0.833 / indexBFCcxPM5Value700))
        : indexBFCcxPM5Value699.type === "large"
          ? ((indexBFCcxPM5Value705 =
              (1e3 + indexBFCcxPM5Value207) *
              indexBFCcxPM5Value213[indexBFCcxPM5Value699.size]),
            (indexBFCcxPM5Value704 =
              (indexBFCcxPM5Value213[indexBFCcxPM5Value699.size] +
                indexBFCcxPM5Value701) /
              indexBFCcxPM5Value700),
            (indexBFCcxPM5Value703 =
              (indexBFCcxPM5Value213[indexBFCcxPM5Value699.size] +
                indexBFCcxPM5Value701 +
                _i) /
              indexBFCcxPM5Value700),
            (indexBFCcxPM5Value702 = indexBFCcxPM5Value208(
              "sqrtSize" + indexBFCcxPM5Value699.size,
              indexBFCcxPM5Value703,
              indexBFCcxPM5Value705,
              indexBFCcxPM5Value701,
              indexBFCcxPM5Param69,
            )),
            (indexBFCcxPM5Value702.style.minWidth = "1.02em"),
            (indexBFCcxPM5Value706 = 1 / indexBFCcxPM5Value700))
          : ((indexBFCcxPM5Value703 =
              indexBFCcxPM5Param68 + indexBFCcxPM5Value701 + _i),
            (indexBFCcxPM5Value704 =
              indexBFCcxPM5Param68 + indexBFCcxPM5Value701),
            (indexBFCcxPM5Value705 =
              Math.floor(1e3 * indexBFCcxPM5Param68 + indexBFCcxPM5Value701) +
              indexBFCcxPM5Value207),
            (indexBFCcxPM5Value702 = indexBFCcxPM5Value208(
              "sqrtTall",
              indexBFCcxPM5Value703,
              indexBFCcxPM5Value705,
              indexBFCcxPM5Value701,
              indexBFCcxPM5Param69,
            )),
            (indexBFCcxPM5Value702.style.minWidth = "0.742em"),
            (indexBFCcxPM5Value706 = 1.056)),
      (indexBFCcxPM5Value702.height = indexBFCcxPM5Value704),
      (indexBFCcxPM5Value702.style.height = indexBFCcxPM5Value69(
        indexBFCcxPM5Value703,
      )),
      {
        span: indexBFCcxPM5Value702,
        advanceWidth: indexBFCcxPM5Value706,
        ruleWidth:
          (indexBFCcxPM5Param69.fontMetrics().sqrtRuleThickness +
            indexBFCcxPM5Value701) *
          indexBFCcxPM5Value700,
      }
    );
  };
  indexBFCcxPM5Value210 = [
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "\\surd",
  ];
  indexBFCcxPM5Value211 = [
    "\\uparrow",
    "\\downarrow",
    "\\updownarrow",
    "\\Uparrow",
    "\\Downarrow",
    "\\Updownarrow",
    "|",
    "\\|",
    "\\vert",
    "\\Vert",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱",
  ];
  indexBFCcxPM5Value212 = [
    "<",
    ">",
    "\\langle",
    "\\rangle",
    "/",
    "\\backslash",
    "\\lt",
    "\\gt",
  ];
  indexBFCcxPM5Value213 = [0, 1.2, 1.8, 2.4, 3];
  indexBFCcxPM5Value214 = function (
    indexBFCcxPM5Param323,
    indexBFCcxPM5Param324,
    indexBFCcxPM5Param325,
    indexBFCcxPM5Param326,
    indexBFCcxPM5Param327,
  ) {
    if (
      (indexBFCcxPM5Param323 === "<" ||
      indexBFCcxPM5Param323 === "\\lt" ||
      indexBFCcxPM5Param323 === "⟨"
        ? (indexBFCcxPM5Param323 = "\\langle")
        : (indexBFCcxPM5Param323 === ">" ||
            indexBFCcxPM5Param323 === "\\gt" ||
            indexBFCcxPM5Param323 === "⟩") &&
          (indexBFCcxPM5Param323 = "\\rangle"),
      indexBFCcxPM5Value23.contains(
        indexBFCcxPM5Value210,
        indexBFCcxPM5Param323,
      ) ||
        indexBFCcxPM5Value23.contains(
          indexBFCcxPM5Value212,
          indexBFCcxPM5Param323,
        ))
    )
      return indexBFCcxPM5Value200(
        indexBFCcxPM5Param323,
        indexBFCcxPM5Param324,
        false,
        indexBFCcxPM5Param325,
        indexBFCcxPM5Param326,
        indexBFCcxPM5Param327,
      );
    if (
      indexBFCcxPM5Value23.contains(
        indexBFCcxPM5Value211,
        indexBFCcxPM5Param323,
      )
    )
      return indexBFCcxPM5Value206(
        indexBFCcxPM5Param323,
        indexBFCcxPM5Value213[indexBFCcxPM5Param324],
        false,
        indexBFCcxPM5Param325,
        indexBFCcxPM5Param326,
        indexBFCcxPM5Param327,
      );
    throw new indexBFCcxPM5Value14(
      "Illegal delimiter: '" + indexBFCcxPM5Param323 + "'",
    );
  };
  indexBFCcxPM5Value215 = [
    {
      type: "small",
      style: indexBFCcxPM5Value41.SCRIPTSCRIPT,
    },
    {
      type: "small",
      style: indexBFCcxPM5Value41.SCRIPT,
    },
    {
      type: "small",
      style: indexBFCcxPM5Value41.TEXT,
    },
    {
      type: "large",
      size: 1,
    },
    {
      type: "large",
      size: 2,
    },
    {
      type: "large",
      size: 3,
    },
    {
      type: "large",
      size: 4,
    },
  ];
  indexBFCcxPM5Value216 = [
    {
      type: "small",
      style: indexBFCcxPM5Value41.SCRIPTSCRIPT,
    },
    {
      type: "small",
      style: indexBFCcxPM5Value41.SCRIPT,
    },
    {
      type: "small",
      style: indexBFCcxPM5Value41.TEXT,
    },
    {
      type: "stack",
    },
  ];
  indexBFCcxPM5Value217 = [
    {
      type: "small",
      style: indexBFCcxPM5Value41.SCRIPTSCRIPT,
    },
    {
      type: "small",
      style: indexBFCcxPM5Value41.SCRIPT,
    },
    {
      type: "small",
      style: indexBFCcxPM5Value41.TEXT,
    },
    {
      type: "large",
      size: 1,
    },
    {
      type: "large",
      size: 2,
    },
    {
      type: "large",
      size: 3,
    },
    {
      type: "large",
      size: 4,
    },
    {
      type: "stack",
    },
  ];
  indexBFCcxPM5Value218 = function (indexBFCcxPM5Param462) {
    if (indexBFCcxPM5Param462.type === "small") return "Main-Regular";
    if (indexBFCcxPM5Param462.type === "large")
      return "Size" + indexBFCcxPM5Param462.size + "-Regular";
    if (indexBFCcxPM5Param462.type === "stack") return "Size4-Regular";
    throw Error(
      "Add support for delim type '" + indexBFCcxPM5Param462.type + "' here.",
    );
  };
  indexBFCcxPM5Value219 = function (
    indexBFCcxPM5Param298,
    indexBFCcxPM5Param299,
    indexBFCcxPM5Param300,
    indexBFCcxPM5Param301,
  ) {
    for (
      var indexBFCcxPM5Value1143 = Math.min(
        2,
        3 - indexBFCcxPM5Param301.style.size,
      );
      indexBFCcxPM5Value1143 < indexBFCcxPM5Param300.length &&
      indexBFCcxPM5Param300[indexBFCcxPM5Value1143].type !== "stack";
      indexBFCcxPM5Value1143++
    ) {
      var indexBFCcxPM5Value1144 = indexBFCcxPM5Value195(
          indexBFCcxPM5Param298,
          indexBFCcxPM5Value218(indexBFCcxPM5Param300[indexBFCcxPM5Value1143]),
          "math",
        ),
        indexBFCcxPM5Value1145 =
          indexBFCcxPM5Value1144.height + indexBFCcxPM5Value1144.depth;
      if (indexBFCcxPM5Param300[indexBFCcxPM5Value1143].type === "small") {
        var indexBFCcxPM5Value1146 = indexBFCcxPM5Param301.havingBaseStyle(
          indexBFCcxPM5Param300[indexBFCcxPM5Value1143].style,
        );
        indexBFCcxPM5Value1145 *= indexBFCcxPM5Value1146.sizeMultiplier;
      }
      if (indexBFCcxPM5Value1145 > indexBFCcxPM5Param299)
        return indexBFCcxPM5Param300[indexBFCcxPM5Value1143];
    }
    return indexBFCcxPM5Param300[indexBFCcxPM5Param300.length - 1];
  };
  indexBFCcxPM5Value220 = function (
    indexBFCcxPM5Param281,
    indexBFCcxPM5Param282,
    indexBFCcxPM5Param283,
    indexBFCcxPM5Param284,
    indexBFCcxPM5Param285,
    indexBFCcxPM5Param286,
  ) {
    indexBFCcxPM5Param281 === "<" ||
    indexBFCcxPM5Param281 === "\\lt" ||
    indexBFCcxPM5Param281 === "⟨"
      ? (indexBFCcxPM5Param281 = "\\langle")
      : (indexBFCcxPM5Param281 === ">" ||
          indexBFCcxPM5Param281 === "\\gt" ||
          indexBFCcxPM5Param281 === "⟩") &&
        (indexBFCcxPM5Param281 = "\\rangle");
    var indexBFCcxPM5Value1128 = indexBFCcxPM5Value23.contains(
        indexBFCcxPM5Value212,
        indexBFCcxPM5Param281,
      )
        ? indexBFCcxPM5Value215
        : indexBFCcxPM5Value23.contains(
              indexBFCcxPM5Value210,
              indexBFCcxPM5Param281,
            )
          ? indexBFCcxPM5Value217
          : indexBFCcxPM5Value216,
      indexBFCcxPM5Value1129 = indexBFCcxPM5Value219(
        indexBFCcxPM5Param281,
        indexBFCcxPM5Param282,
        indexBFCcxPM5Value1128,
        indexBFCcxPM5Param284,
      );
    return indexBFCcxPM5Value1129.type === "small"
      ? indexBFCcxPM5Value198(
          indexBFCcxPM5Param281,
          indexBFCcxPM5Value1129.style,
          indexBFCcxPM5Param283,
          indexBFCcxPM5Param284,
          indexBFCcxPM5Param285,
          indexBFCcxPM5Param286,
        )
      : indexBFCcxPM5Value1129.type === "large"
        ? indexBFCcxPM5Value200(
            indexBFCcxPM5Param281,
            indexBFCcxPM5Value1129.size,
            indexBFCcxPM5Param283,
            indexBFCcxPM5Param284,
            indexBFCcxPM5Param285,
            indexBFCcxPM5Param286,
          )
        : indexBFCcxPM5Value206(
            indexBFCcxPM5Param281,
            indexBFCcxPM5Param282,
            indexBFCcxPM5Param283,
            indexBFCcxPM5Param284,
            indexBFCcxPM5Param285,
            indexBFCcxPM5Param286,
          );
  };
  indexBFCcxPM5Value221 = function (
    indexBFCcxPM5Param470,
    indexBFCcxPM5Param471,
    indexBFCcxPM5Param472,
    indexBFCcxPM5Param473,
    indexBFCcxPM5Param474,
    indexBFCcxPM5Param475,
  ) {
    var indexBFCcxPM5Value1313 =
        indexBFCcxPM5Param473.fontMetrics().axisHeight *
        indexBFCcxPM5Param473.sizeMultiplier,
      indexBFCcxPM5Value1315 = 5 / indexBFCcxPM5Param473.fontMetrics().ptPerEm,
      indexBFCcxPM5Value1316 = Math.max(
        indexBFCcxPM5Param471 - indexBFCcxPM5Value1313,
        indexBFCcxPM5Param472 + indexBFCcxPM5Value1313,
      );
    return indexBFCcxPM5Value220(
      indexBFCcxPM5Param470,
      Math.max(
        (indexBFCcxPM5Value1316 / 500) * 901,
        2 * indexBFCcxPM5Value1316 - indexBFCcxPM5Value1315,
      ),
      true,
      indexBFCcxPM5Param473,
      indexBFCcxPM5Param474,
      indexBFCcxPM5Param475,
    );
  };
  indexBFCcxPM5Value222 = {
    sqrtImage: indexBFCcxPM5Value209,
    sizedDelim: indexBFCcxPM5Value214,
    sizeToMaxHeight: indexBFCcxPM5Value213,
    customSizedDelim: indexBFCcxPM5Value220,
    leftRightDelim: indexBFCcxPM5Value221,
  };
  indexBFCcxPM5Value223 = {
    "\\bigl": {
      mclass: "mopen",
      size: 1,
    },
    "\\Bigl": {
      mclass: "mopen",
      size: 2,
    },
    "\\biggl": {
      mclass: "mopen",
      size: 3,
    },
    "\\Biggl": {
      mclass: "mopen",
      size: 4,
    },
    "\\bigr": {
      mclass: "mclose",
      size: 1,
    },
    "\\Bigr": {
      mclass: "mclose",
      size: 2,
    },
    "\\biggr": {
      mclass: "mclose",
      size: 3,
    },
    "\\Biggr": {
      mclass: "mclose",
      size: 4,
    },
    "\\bigm": {
      mclass: "mrel",
      size: 1,
    },
    "\\Bigm": {
      mclass: "mrel",
      size: 2,
    },
    "\\biggm": {
      mclass: "mrel",
      size: 3,
    },
    "\\Biggm": {
      mclass: "mrel",
      size: 4,
    },
    "\\big": {
      mclass: "mord",
      size: 1,
    },
    "\\Big": {
      mclass: "mord",
      size: 2,
    },
    "\\bigg": {
      mclass: "mord",
      size: 3,
    },
    "\\Bigg": {
      mclass: "mord",
      size: 4,
    },
  };
  indexBFCcxPM5Value224 =
    "(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,⌊,⌋,\\lceil,\\rceil,⌈,⌉,<,>,\\langle,⟨,\\rangle,⟩,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,⟮,⟯,\\lmoustache,\\rmoustache,⎰,⎱,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.".split(
      ",",
    );
  indexBFCcxPM5Helper37({
    type: "delimsizing",
    names: [
      "\\bigl",
      "\\Bigl",
      "\\biggl",
      "\\Biggl",
      "\\bigr",
      "\\Bigr",
      "\\biggr",
      "\\Biggr",
      "\\bigm",
      "\\Bigm",
      "\\biggm",
      "\\Biggm",
      "\\big",
      "\\Big",
      "\\bigg",
      "\\Bigg",
    ],
    props: {
      numArgs: 1,
      argTypes: ["primitive"],
    },
    handler: (indexBFCcxPM5Param502, indexBFCcxPM5Param503) => {
      var indexBFCcxPM5Value1332 = indexBFCcxPM5Helper49(
        indexBFCcxPM5Param503[0],
        indexBFCcxPM5Param502,
      );
      return {
        type: "delimsizing",
        mode: indexBFCcxPM5Param502.parser.mode,
        size: indexBFCcxPM5Value223[indexBFCcxPM5Param502.funcName].size,
        mclass: indexBFCcxPM5Value223[indexBFCcxPM5Param502.funcName].mclass,
        delim: indexBFCcxPM5Value1332.text,
      };
    },
    htmlBuilder: (indexBFCcxPM5Param659, indexBFCcxPM5Param660) =>
      indexBFCcxPM5Param659.delim === "."
        ? indexBFCcxPM5Value139.makeSpan([indexBFCcxPM5Param659.mclass])
        : indexBFCcxPM5Value222.sizedDelim(
            indexBFCcxPM5Param659.delim,
            indexBFCcxPM5Param659.size,
            indexBFCcxPM5Param660,
            indexBFCcxPM5Param659.mode,
            [indexBFCcxPM5Param659.mclass],
          ),
    mathmlBuilder: (indexBFCcxPM5Param278) => {
      var indexBFCcxPM5Value1123 = [];
      indexBFCcxPM5Param278.delim !== "." &&
        indexBFCcxPM5Value1123.push(
          indexBFCcxPM5Value164(
            indexBFCcxPM5Param278.delim,
            indexBFCcxPM5Param278.mode,
          ),
        );
      var indexBFCcxPM5Value1124 = new indexBFCcxPM5Value163.MathNode(
        "mo",
        indexBFCcxPM5Value1123,
      );
      indexBFCcxPM5Param278.mclass === "mopen" ||
      indexBFCcxPM5Param278.mclass === "mclose"
        ? indexBFCcxPM5Value1124.setAttribute("fence", "true")
        : indexBFCcxPM5Value1124.setAttribute("fence", "false");
      indexBFCcxPM5Value1124.setAttribute("stretchy", "true");
      var indexBFCcxPM5Value1125 = indexBFCcxPM5Value69(
        indexBFCcxPM5Value222.sizeToMaxHeight[indexBFCcxPM5Param278.size],
      );
      return (
        indexBFCcxPM5Value1124.setAttribute("minsize", indexBFCcxPM5Value1125),
        indexBFCcxPM5Value1124.setAttribute("maxsize", indexBFCcxPM5Value1125),
        indexBFCcxPM5Value1124
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "leftright-right",
    names: ["\\right"],
    props: {
      numArgs: 1,
      primitive: true,
    },
    handler: (indexBFCcxPM5Param373, indexBFCcxPM5Param374) => {
      var indexBFCcxPM5Value1231 =
        indexBFCcxPM5Param373.parser.gullet.macros.get("\\current@color");
      if (indexBFCcxPM5Value1231 && typeof indexBFCcxPM5Value1231 != "string")
        throw new indexBFCcxPM5Value14(
          "\\current@color set to non-string in \\right",
        );
      return {
        type: "leftright-right",
        mode: indexBFCcxPM5Param373.parser.mode,
        delim: indexBFCcxPM5Helper49(
          indexBFCcxPM5Param374[0],
          indexBFCcxPM5Param373,
        ).text,
        color: indexBFCcxPM5Value1231,
      };
    },
  });
  indexBFCcxPM5Helper37({
    type: "leftright",
    names: ["\\left"],
    props: {
      numArgs: 1,
      primitive: true,
    },
    handler: (indexBFCcxPM5Param296, indexBFCcxPM5Param297) => {
      var indexBFCcxPM5Value1139 = indexBFCcxPM5Helper49(
          indexBFCcxPM5Param297[0],
          indexBFCcxPM5Param296,
        ),
        indexBFCcxPM5Value1140 = indexBFCcxPM5Param296.parser;
      ++indexBFCcxPM5Value1140.leftrightDepth;
      var indexBFCcxPM5Value1141 =
        indexBFCcxPM5Value1140.parseExpression(false);
      --indexBFCcxPM5Value1140.leftrightDepth;
      indexBFCcxPM5Value1140.expect("\\right", false);
      var indexBFCcxPM5Value1142 = indexBFCcxPM5Helper42(
        indexBFCcxPM5Value1140.parseFunction(),
        "leftright-right",
      );
      return {
        type: "leftright",
        mode: indexBFCcxPM5Value1140.mode,
        body: indexBFCcxPM5Value1141,
        left: indexBFCcxPM5Value1139.text,
        right: indexBFCcxPM5Value1142.delim,
        rightColor: indexBFCcxPM5Value1142.color,
      };
    },
    htmlBuilder: (indexBFCcxPM5Param90, indexBFCcxPM5Param91) => {
      indexBFCcxPM5Helper50(indexBFCcxPM5Param90);
      for (
        var indexBFCcxPM5Value767 = indexBFCcxPM5Value154(
            indexBFCcxPM5Param90.body,
            indexBFCcxPM5Param91,
            true,
            ["mopen", "mclose"],
          ),
          indexBFCcxPM5Value768 = 0,
          indexBFCcxPM5Value769 = 0,
          indexBFCcxPM5Value770 = false,
          indexBFCcxPM5Value771 = 0;
        indexBFCcxPM5Value771 < indexBFCcxPM5Value767.length;
        indexBFCcxPM5Value771++
      )
        indexBFCcxPM5Value767[indexBFCcxPM5Value771].isMiddle
          ? (indexBFCcxPM5Value770 = true)
          : ((indexBFCcxPM5Value768 = Math.max(
              indexBFCcxPM5Value767[indexBFCcxPM5Value771].height,
              indexBFCcxPM5Value768,
            )),
            (indexBFCcxPM5Value769 = Math.max(
              indexBFCcxPM5Value767[indexBFCcxPM5Value771].depth,
              indexBFCcxPM5Value769,
            )));
      indexBFCcxPM5Value768 *= indexBFCcxPM5Param91.sizeMultiplier;
      indexBFCcxPM5Value769 *= indexBFCcxPM5Param91.sizeMultiplier;
      var indexBFCcxPM5Value772;
      if (
        ((indexBFCcxPM5Value772 =
          indexBFCcxPM5Param90.left === "."
            ? indexBFCcxPM5Value158(indexBFCcxPM5Param91, ["mopen"])
            : indexBFCcxPM5Value222.leftRightDelim(
                indexBFCcxPM5Param90.left,
                indexBFCcxPM5Value768,
                indexBFCcxPM5Value769,
                indexBFCcxPM5Param91,
                indexBFCcxPM5Param90.mode,
                ["mopen"],
              )),
        indexBFCcxPM5Value767.unshift(indexBFCcxPM5Value772),
        indexBFCcxPM5Value770)
      )
        for (
          var indexBFCcxPM5Value773 = 1;
          indexBFCcxPM5Value773 < indexBFCcxPM5Value767.length;
          indexBFCcxPM5Value773++
        ) {
          var indexBFCcxPM5Value774 =
            indexBFCcxPM5Value767[indexBFCcxPM5Value773].isMiddle;
          indexBFCcxPM5Value774 &&
            (indexBFCcxPM5Value767[indexBFCcxPM5Value773] =
              indexBFCcxPM5Value222.leftRightDelim(
                indexBFCcxPM5Value774.delim,
                indexBFCcxPM5Value768,
                indexBFCcxPM5Value769,
                indexBFCcxPM5Value774.options,
                indexBFCcxPM5Param90.mode,
                [],
              ));
        }
      var indexBFCcxPM5Value775;
      if (indexBFCcxPM5Param90.right === ".")
        indexBFCcxPM5Value775 = indexBFCcxPM5Value158(indexBFCcxPM5Param91, [
          "mclose",
        ]);
      else {
        var indexBFCcxPM5Value776 = indexBFCcxPM5Param90.rightColor
          ? indexBFCcxPM5Param91.withColor(indexBFCcxPM5Param90.rightColor)
          : indexBFCcxPM5Param91;
        indexBFCcxPM5Value775 = indexBFCcxPM5Value222.leftRightDelim(
          indexBFCcxPM5Param90.right,
          indexBFCcxPM5Value768,
          indexBFCcxPM5Value769,
          indexBFCcxPM5Value776,
          indexBFCcxPM5Param90.mode,
          ["mclose"],
        );
      }
      return (
        indexBFCcxPM5Value767.push(indexBFCcxPM5Value775),
        indexBFCcxPM5Value139.makeSpan(
          ["minner"],
          indexBFCcxPM5Value767,
          indexBFCcxPM5Param91,
        )
      );
    },
    mathmlBuilder: (indexBFCcxPM5Param259, indexBFCcxPM5Param260) => {
      indexBFCcxPM5Helper50(indexBFCcxPM5Param259);
      var indexBFCcxPM5Value1096 = indexBFCcxPM5Value167(
        indexBFCcxPM5Param259.body,
        indexBFCcxPM5Param260,
      );
      if (indexBFCcxPM5Param259.left !== ".") {
        var indexBFCcxPM5Value1097 = new indexBFCcxPM5Value163.MathNode("mo", [
          indexBFCcxPM5Value164(
            indexBFCcxPM5Param259.left,
            indexBFCcxPM5Param259.mode,
          ),
        ]);
        indexBFCcxPM5Value1097.setAttribute("fence", "true");
        indexBFCcxPM5Value1096.unshift(indexBFCcxPM5Value1097);
      }
      if (indexBFCcxPM5Param259.right !== ".") {
        var indexBFCcxPM5Value1098 = new indexBFCcxPM5Value163.MathNode("mo", [
          indexBFCcxPM5Value164(
            indexBFCcxPM5Param259.right,
            indexBFCcxPM5Param259.mode,
          ),
        ]);
        indexBFCcxPM5Value1098.setAttribute("fence", "true");
        indexBFCcxPM5Param259.rightColor &&
          indexBFCcxPM5Value1098.setAttribute(
            "mathcolor",
            indexBFCcxPM5Param259.rightColor,
          );
        indexBFCcxPM5Value1096.push(indexBFCcxPM5Value1098);
      }
      return indexBFCcxPM5Value165(indexBFCcxPM5Value1096);
    },
  });
  indexBFCcxPM5Helper37({
    type: "middle",
    names: ["\\middle"],
    props: {
      numArgs: 1,
      primitive: true,
    },
    handler: (indexBFCcxPM5Param546, indexBFCcxPM5Param547) => {
      var indexBFCcxPM5Value1354 = indexBFCcxPM5Helper49(
        indexBFCcxPM5Param547[0],
        indexBFCcxPM5Param546,
      );
      if (!indexBFCcxPM5Param546.parser.leftrightDepth)
        throw new indexBFCcxPM5Value14(
          "\\middle without preceding \\left",
          indexBFCcxPM5Value1354,
        );
      return {
        type: "middle",
        mode: indexBFCcxPM5Param546.parser.mode,
        delim: indexBFCcxPM5Value1354.text,
      };
    },
    htmlBuilder: (indexBFCcxPM5Param485, indexBFCcxPM5Param486) => {
      var indexBFCcxPM5Value1323;
      if (indexBFCcxPM5Param485.delim === ".")
        indexBFCcxPM5Value1323 = indexBFCcxPM5Value158(
          indexBFCcxPM5Param486,
          [],
        );
      else {
        indexBFCcxPM5Value1323 = indexBFCcxPM5Value222.sizedDelim(
          indexBFCcxPM5Param485.delim,
          1,
          indexBFCcxPM5Param486,
          indexBFCcxPM5Param485.mode,
          [],
        );
        var indexBFCcxPM5Value1324 = {
          delim: indexBFCcxPM5Param485.delim,
          options: indexBFCcxPM5Param486,
        };
        indexBFCcxPM5Value1323.isMiddle = indexBFCcxPM5Value1324;
      }
      return indexBFCcxPM5Value1323;
    },
    mathmlBuilder: (indexBFCcxPM5Param347, indexBFCcxPM5Param348) => {
      var indexBFCcxPM5Value1196 =
          indexBFCcxPM5Param347.delim === "\\vert" ||
          indexBFCcxPM5Param347.delim === "|"
            ? indexBFCcxPM5Value164("|", "text")
            : indexBFCcxPM5Value164(
                indexBFCcxPM5Param347.delim,
                indexBFCcxPM5Param347.mode,
              ),
        indexBFCcxPM5Value1197 = new indexBFCcxPM5Value163.MathNode("mo", [
          indexBFCcxPM5Value1196,
        ]);
      return (
        indexBFCcxPM5Value1197.setAttribute("fence", "true"),
        indexBFCcxPM5Value1197.setAttribute("lspace", "0.05em"),
        indexBFCcxPM5Value1197.setAttribute("rspace", "0.05em"),
        indexBFCcxPM5Value1197
      );
    },
  });
  indexBFCcxPM5Value225 = (indexBFCcxPM5Param13, indexBFCcxPM5Param14) => {
    var indexBFCcxPM5Value399 = indexBFCcxPM5Value139.wrapFragment(
        indexBFCcxPM5Value159(indexBFCcxPM5Param13.body, indexBFCcxPM5Param14),
        indexBFCcxPM5Param14,
      ),
      indexBFCcxPM5Value400 = indexBFCcxPM5Param13.label.slice(1),
      indexBFCcxPM5Value401 = indexBFCcxPM5Param14.sizeMultiplier,
      indexBFCcxPM5Value402,
      indexBFCcxPM5Value403 = 0,
      indexBFCcxPM5Value404 = indexBFCcxPM5Value23.isCharacterBox(
        indexBFCcxPM5Param13.body,
      );
    if (indexBFCcxPM5Value400 === "sout") {
      indexBFCcxPM5Value402 = indexBFCcxPM5Value139.makeSpan([
        "stretchy",
        "sout",
      ]);
      indexBFCcxPM5Value402.height =
        indexBFCcxPM5Param14.fontMetrics().defaultRuleThickness /
        indexBFCcxPM5Value401;
      indexBFCcxPM5Value403 = -0.5 * indexBFCcxPM5Param14.fontMetrics().xHeight;
    } else if (indexBFCcxPM5Value400 === "phase") {
      var indexBFCcxPM5Value405 = indexBFCcxPM5Value68(
          {
            number: 0.6,
            unit: "pt",
          },
          indexBFCcxPM5Param14,
        ),
        indexBFCcxPM5Value406 = indexBFCcxPM5Value68(
          {
            number: 0.35,
            unit: "ex",
          },
          indexBFCcxPM5Param14,
        ),
        indexBFCcxPM5Value407 = indexBFCcxPM5Param14.havingBaseSizing();
      indexBFCcxPM5Value401 /= indexBFCcxPM5Value407.sizeMultiplier;
      var indexBFCcxPM5Value408 =
        indexBFCcxPM5Value399.height +
        indexBFCcxPM5Value399.depth +
        indexBFCcxPM5Value405 +
        indexBFCcxPM5Value406;
      indexBFCcxPM5Value399.style.paddingLeft = indexBFCcxPM5Value69(
        indexBFCcxPM5Value408 / 2 + indexBFCcxPM5Value405,
      );
      var indexBFCcxPM5Value409 = Math.floor(
          1e3 * indexBFCcxPM5Value408 * indexBFCcxPM5Value401,
        ),
        indexBFCcxPM5Value410 = indexBFCcxPM5Value50(indexBFCcxPM5Value409),
        indexBFCcxPM5Value411 = new indexBFCcxPM5Value78(
          [new indexBFCcxPM5Value79("phase", indexBFCcxPM5Value410)],
          {
            width: "400em",
            height: indexBFCcxPM5Value69(indexBFCcxPM5Value409 / 1e3),
            viewBox: "0 0 400000 " + indexBFCcxPM5Value409,
            preserveAspectRatio: "xMinYMin slice",
          },
        );
      indexBFCcxPM5Value402 = indexBFCcxPM5Value139.makeSvgSpan(
        ["hide-tail"],
        [indexBFCcxPM5Value411],
        indexBFCcxPM5Param14,
      );
      indexBFCcxPM5Value402.style.height = indexBFCcxPM5Value69(
        indexBFCcxPM5Value408,
      );
      indexBFCcxPM5Value403 =
        indexBFCcxPM5Value399.depth +
        indexBFCcxPM5Value405 +
        indexBFCcxPM5Value406;
    } else {
      /cancel/.test(indexBFCcxPM5Value400)
        ? indexBFCcxPM5Value404 ||
          indexBFCcxPM5Value399.classes.push("cancel-pad")
        : indexBFCcxPM5Value400 === "angl"
          ? indexBFCcxPM5Value399.classes.push("anglpad")
          : indexBFCcxPM5Value399.classes.push("boxpad");
      var indexBFCcxPM5Value412 = 0,
        indexBFCcxPM5Value413 = 0,
        indexBFCcxPM5Value414 = 0;
      /box/.test(indexBFCcxPM5Value400)
        ? ((indexBFCcxPM5Value414 = Math.max(
            indexBFCcxPM5Param14.fontMetrics().fboxrule,
            indexBFCcxPM5Param14.minRuleThickness,
          )),
          (indexBFCcxPM5Value412 =
            indexBFCcxPM5Param14.fontMetrics().fboxsep +
            (indexBFCcxPM5Value400 === "colorbox" ? 0 : indexBFCcxPM5Value414)),
          (indexBFCcxPM5Value413 = indexBFCcxPM5Value412))
        : indexBFCcxPM5Value400 === "angl"
          ? ((indexBFCcxPM5Value414 = Math.max(
              indexBFCcxPM5Param14.fontMetrics().defaultRuleThickness,
              indexBFCcxPM5Param14.minRuleThickness,
            )),
            (indexBFCcxPM5Value412 = 4 * indexBFCcxPM5Value414),
            (indexBFCcxPM5Value413 = Math.max(
              0,
              0.25 - indexBFCcxPM5Value399.depth,
            )))
          : ((indexBFCcxPM5Value412 = indexBFCcxPM5Value404 ? 0.2 : 0),
            (indexBFCcxPM5Value413 = indexBFCcxPM5Value412));
      indexBFCcxPM5Value402 = indexBFCcxPM5Value179.encloseSpan(
        indexBFCcxPM5Value399,
        indexBFCcxPM5Value400,
        indexBFCcxPM5Value412,
        indexBFCcxPM5Value413,
        indexBFCcxPM5Param14,
      );
      /fbox|boxed|fcolorbox/.test(indexBFCcxPM5Value400)
        ? ((indexBFCcxPM5Value402.style.borderStyle = "solid"),
          (indexBFCcxPM5Value402.style.borderWidth = indexBFCcxPM5Value69(
            indexBFCcxPM5Value414,
          )))
        : indexBFCcxPM5Value400 === "angl" &&
          indexBFCcxPM5Value414 !== 0.049 &&
          ((indexBFCcxPM5Value402.style.borderTopWidth = indexBFCcxPM5Value69(
            indexBFCcxPM5Value414,
          )),
          (indexBFCcxPM5Value402.style.borderRightWidth = indexBFCcxPM5Value69(
            indexBFCcxPM5Value414,
          )));
      indexBFCcxPM5Value403 =
        indexBFCcxPM5Value399.depth + indexBFCcxPM5Value413;
      indexBFCcxPM5Param13.backgroundColor &&
        ((indexBFCcxPM5Value402.style.backgroundColor =
          indexBFCcxPM5Param13.backgroundColor),
        indexBFCcxPM5Param13.borderColor &&
          (indexBFCcxPM5Value402.style.borderColor =
            indexBFCcxPM5Param13.borderColor));
    }
    var indexBFCcxPM5Value415;
    if (indexBFCcxPM5Param13.backgroundColor)
      indexBFCcxPM5Value415 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value402,
              shift: indexBFCcxPM5Value403,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value399,
              shift: 0,
            },
          ],
        },
        indexBFCcxPM5Param14,
      );
    else {
      var indexBFCcxPM5Value416 = /cancel|phase/.test(indexBFCcxPM5Value400)
        ? ["svg-align"]
        : [];
      indexBFCcxPM5Value415 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value399,
              shift: 0,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value402,
              shift: indexBFCcxPM5Value403,
              wrapperClasses: indexBFCcxPM5Value416,
            },
          ],
        },
        indexBFCcxPM5Param14,
      );
    }
    return (
      /cancel/.test(indexBFCcxPM5Value400) &&
        ((indexBFCcxPM5Value415.height = indexBFCcxPM5Value399.height),
        (indexBFCcxPM5Value415.depth = indexBFCcxPM5Value399.depth)),
      /cancel/.test(indexBFCcxPM5Value400) && !indexBFCcxPM5Value404
        ? indexBFCcxPM5Value139.makeSpan(
            ["mord", "cancel-lap"],
            [indexBFCcxPM5Value415],
            indexBFCcxPM5Param14,
          )
        : indexBFCcxPM5Value139.makeSpan(
            ["mord"],
            [indexBFCcxPM5Value415],
            indexBFCcxPM5Param14,
          )
    );
  };
  indexBFCcxPM5Value226 = (indexBFCcxPM5Param52, indexBFCcxPM5Param53) => {
    var indexBFCcxPM5Value619 = 0,
      indexBFCcxPM5Value620 = new indexBFCcxPM5Value163.MathNode(
        indexBFCcxPM5Param52.label.indexOf("colorbox") > -1
          ? "mpadded"
          : "menclose",
        [$(indexBFCcxPM5Param52.body, indexBFCcxPM5Param53)],
      );
    switch (indexBFCcxPM5Param52.label) {
      case "\\cancel":
        indexBFCcxPM5Value620.setAttribute("notation", "updiagonalstrike");
        break;
      case "\\bcancel":
        indexBFCcxPM5Value620.setAttribute("notation", "downdiagonalstrike");
        break;
      case "\\phase":
        indexBFCcxPM5Value620.setAttribute("notation", "phasorangle");
        break;
      case "\\sout":
        indexBFCcxPM5Value620.setAttribute("notation", "horizontalstrike");
        break;
      case "\\fbox":
        indexBFCcxPM5Value620.setAttribute("notation", "box");
        break;
      case "\\angl":
        indexBFCcxPM5Value620.setAttribute("notation", "actuarial");
        break;
      case "\\fcolorbox":
      case "\\colorbox":
        if (
          ((indexBFCcxPM5Value619 =
            indexBFCcxPM5Param53.fontMetrics().fboxsep *
            indexBFCcxPM5Param53.fontMetrics().ptPerEm),
          indexBFCcxPM5Value620.setAttribute(
            "width",
            "+" + 2 * indexBFCcxPM5Value619 + "pt",
          ),
          indexBFCcxPM5Value620.setAttribute(
            "height",
            "+" + 2 * indexBFCcxPM5Value619 + "pt",
          ),
          indexBFCcxPM5Value620.setAttribute(
            "lspace",
            indexBFCcxPM5Value619 + "pt",
          ),
          indexBFCcxPM5Value620.setAttribute(
            "voffset",
            indexBFCcxPM5Value619 + "pt",
          ),
          indexBFCcxPM5Param52.label === "\\fcolorbox")
        ) {
          var indexBFCcxPM5Value621 = Math.max(
            indexBFCcxPM5Param53.fontMetrics().fboxrule,
            indexBFCcxPM5Param53.minRuleThickness,
          );
          indexBFCcxPM5Value620.setAttribute(
            "style",
            "border: " +
              indexBFCcxPM5Value621 +
              "em solid " +
              String(indexBFCcxPM5Param52.borderColor),
          );
        }
        break;
      case "\\xcancel":
        indexBFCcxPM5Value620.setAttribute(
          "notation",
          "updiagonalstrike downdiagonalstrike",
        );
        break;
    }
    return (
      indexBFCcxPM5Param52.backgroundColor &&
        indexBFCcxPM5Value620.setAttribute(
          "mathbackground",
          indexBFCcxPM5Param52.backgroundColor,
        ),
      indexBFCcxPM5Value620
    );
  };
  indexBFCcxPM5Helper37({
    type: "enclose",
    names: ["\\colorbox"],
    props: {
      numArgs: 2,
      allowedInText: true,
      argTypes: ["color", "text"],
    },
    handler(
      indexBFCcxPM5Param431,
      indexBFCcxPM5Param432,
      indexBFCcxPM5Param433,
    ) {
      var { parser, funcName } = indexBFCcxPM5Param431,
        indexBFCcxPM5Value1283 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param432[0],
          "color-token",
        ).color,
        indexBFCcxPM5Value1284 = indexBFCcxPM5Param432[1];
      return {
        type: "enclose",
        mode: parser.mode,
        label: funcName,
        backgroundColor: indexBFCcxPM5Value1283,
        body: indexBFCcxPM5Value1284,
      };
    },
    htmlBuilder: indexBFCcxPM5Value225,
    mathmlBuilder: indexBFCcxPM5Value226,
  });
  indexBFCcxPM5Helper37({
    type: "enclose",
    names: ["\\fcolorbox"],
    props: {
      numArgs: 3,
      allowedInText: true,
      argTypes: ["color", "color", "text"],
    },
    handler(
      indexBFCcxPM5Param363,
      indexBFCcxPM5Param364,
      indexBFCcxPM5Param365,
    ) {
      var { parser, funcName } = indexBFCcxPM5Param363,
        indexBFCcxPM5Value1210 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param364[0],
          "color-token",
        ).color,
        indexBFCcxPM5Value1211 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param364[1],
          "color-token",
        ).color,
        indexBFCcxPM5Value1212 = indexBFCcxPM5Param364[2];
      return {
        type: "enclose",
        mode: parser.mode,
        label: funcName,
        backgroundColor: indexBFCcxPM5Value1211,
        borderColor: indexBFCcxPM5Value1210,
        body: indexBFCcxPM5Value1212,
      };
    },
    htmlBuilder: indexBFCcxPM5Value225,
    mathmlBuilder: indexBFCcxPM5Value226,
  });
  indexBFCcxPM5Helper37({
    type: "enclose",
    names: ["\\fbox"],
    props: {
      numArgs: 1,
      argTypes: ["hbox"],
      allowedInText: true,
    },
    handler(indexBFCcxPM5Param672, indexBFCcxPM5Param673) {
      var { parser } = indexBFCcxPM5Param672;
      return {
        type: "enclose",
        mode: parser.mode,
        label: "\\fbox",
        body: indexBFCcxPM5Param673[0],
      };
    },
  });
  indexBFCcxPM5Helper37({
    type: "enclose",
    names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
    props: {
      numArgs: 1,
    },
    handler(indexBFCcxPM5Param627, indexBFCcxPM5Param628) {
      var { parser, funcName } = indexBFCcxPM5Param627,
        indexBFCcxPM5Value1412 = indexBFCcxPM5Param628[0];
      return {
        type: "enclose",
        mode: parser.mode,
        label: funcName,
        body: indexBFCcxPM5Value1412,
      };
    },
    htmlBuilder: indexBFCcxPM5Value225,
    mathmlBuilder: indexBFCcxPM5Value226,
  });
  indexBFCcxPM5Helper37({
    type: "enclose",
    names: ["\\angl"],
    props: {
      numArgs: 1,
      argTypes: ["hbox"],
      allowedInText: false,
    },
    handler(indexBFCcxPM5Param674, indexBFCcxPM5Param675) {
      var { parser } = indexBFCcxPM5Param674;
      return {
        type: "enclose",
        mode: parser.mode,
        label: "\\angl",
        body: indexBFCcxPM5Param675[0],
      };
    },
  });
  indexBFCcxPM5Value227 = {};
  indexBFCcxPM5Value228 = {};
  indexBFCcxPM5Value229 = (indexBFCcxPM5Param661) => {
    if (!indexBFCcxPM5Param661.parser.settings.displayMode)
      throw new indexBFCcxPM5Value14(
        "{" +
          indexBFCcxPM5Param661.envName +
          "} can be used only in display mode.",
      );
  };
  indexBFCcxPM5Value230 = function (indexBFCcxPM5Param7, indexBFCcxPM5Param8) {
    var indexBFCcxPM5Value331,
      indexBFCcxPM5Value332,
      indexBFCcxPM5Value333 = indexBFCcxPM5Param7.body.length,
      indexBFCcxPM5Value334 = indexBFCcxPM5Param7.hLinesBeforeRow,
      indexBFCcxPM5Value335 = 0,
      indexBFCcxPM5Value336 = Array(indexBFCcxPM5Value333),
      indexBFCcxPM5Value337 = [],
      indexBFCcxPM5Value338 = Math.max(
        indexBFCcxPM5Param8.fontMetrics().arrayRuleWidth,
        indexBFCcxPM5Param8.minRuleThickness,
      ),
      indexBFCcxPM5Value339 = 1 / indexBFCcxPM5Param8.fontMetrics().ptPerEm,
      indexBFCcxPM5Value340 = 5 * indexBFCcxPM5Value339;
    indexBFCcxPM5Param7.colSeparationType &&
      indexBFCcxPM5Param7.colSeparationType === "small" &&
      (indexBFCcxPM5Value340 =
        0.2778 *
        (indexBFCcxPM5Param8.havingStyle(indexBFCcxPM5Value41.SCRIPT)
          .sizeMultiplier /
          indexBFCcxPM5Param8.sizeMultiplier));
    var indexBFCcxPM5Value341 =
        indexBFCcxPM5Param7.colSeparationType === "CD"
          ? indexBFCcxPM5Value68(
              {
                number: 3,
                unit: "ex",
              },
              indexBFCcxPM5Param8,
            )
          : 12 * indexBFCcxPM5Value339,
      indexBFCcxPM5Value342 = 3 * indexBFCcxPM5Value339,
      indexBFCcxPM5Value343 =
        indexBFCcxPM5Param7.arraystretch * indexBFCcxPM5Value341,
      indexBFCcxPM5Value344 = 0.7 * indexBFCcxPM5Value343,
      indexBFCcxPM5Value345 = 0.3 * indexBFCcxPM5Value343,
      indexBFCcxPM5Value346 = 0;
    function indexBFCcxPM5Helper58(indexBFCcxPM5Param655) {
      for (
        var indexBFCcxPM5Value1424 = 0;
        indexBFCcxPM5Value1424 < indexBFCcxPM5Param655.length;
        ++indexBFCcxPM5Value1424
      ) {
        indexBFCcxPM5Value1424 > 0 && (indexBFCcxPM5Value346 += 0.25);
        indexBFCcxPM5Value337.push({
          pos: indexBFCcxPM5Value346,
          isDashed: indexBFCcxPM5Param655[indexBFCcxPM5Value1424],
        });
      }
    }
    for (
      indexBFCcxPM5Helper58(indexBFCcxPM5Value334[0]),
        indexBFCcxPM5Value331 = 0;
      indexBFCcxPM5Value331 < indexBFCcxPM5Param7.body.length;
      ++indexBFCcxPM5Value331
    ) {
      var indexBFCcxPM5Value347 =
          indexBFCcxPM5Param7.body[indexBFCcxPM5Value331],
        indexBFCcxPM5Value348 = indexBFCcxPM5Value344,
        indexBFCcxPM5Value349 = indexBFCcxPM5Value345;
      indexBFCcxPM5Value335 < indexBFCcxPM5Value347.length &&
        (indexBFCcxPM5Value335 = indexBFCcxPM5Value347.length);
      var indexBFCcxPM5Value350 = Array(indexBFCcxPM5Value347.length);
      for (
        indexBFCcxPM5Value332 = 0;
        indexBFCcxPM5Value332 < indexBFCcxPM5Value347.length;
        ++indexBFCcxPM5Value332
      ) {
        var indexBFCcxPM5Value351 = indexBFCcxPM5Value159(
          indexBFCcxPM5Value347[indexBFCcxPM5Value332],
          indexBFCcxPM5Param8,
        );
        indexBFCcxPM5Value349 < indexBFCcxPM5Value351.depth &&
          (indexBFCcxPM5Value349 = indexBFCcxPM5Value351.depth);
        indexBFCcxPM5Value348 < indexBFCcxPM5Value351.height &&
          (indexBFCcxPM5Value348 = indexBFCcxPM5Value351.height);
        indexBFCcxPM5Value350[indexBFCcxPM5Value332] = indexBFCcxPM5Value351;
      }
      var indexBFCcxPM5Value352 =
          indexBFCcxPM5Param7.rowGaps[indexBFCcxPM5Value331],
        indexBFCcxPM5Value353 = 0;
      indexBFCcxPM5Value352 &&
        ((indexBFCcxPM5Value353 = indexBFCcxPM5Value68(
          indexBFCcxPM5Value352,
          indexBFCcxPM5Param8,
        )),
        indexBFCcxPM5Value353 > 0 &&
          ((indexBFCcxPM5Value353 += indexBFCcxPM5Value345),
          indexBFCcxPM5Value349 < indexBFCcxPM5Value353 &&
            (indexBFCcxPM5Value349 = indexBFCcxPM5Value353),
          (indexBFCcxPM5Value353 = 0)));
      indexBFCcxPM5Param7.addJot &&
        (indexBFCcxPM5Value349 += indexBFCcxPM5Value342);
      indexBFCcxPM5Value350.height = indexBFCcxPM5Value348;
      indexBFCcxPM5Value350.depth = indexBFCcxPM5Value349;
      indexBFCcxPM5Value346 += indexBFCcxPM5Value348;
      indexBFCcxPM5Value350.pos = indexBFCcxPM5Value346;
      indexBFCcxPM5Value346 += indexBFCcxPM5Value349 + indexBFCcxPM5Value353;
      indexBFCcxPM5Value336[indexBFCcxPM5Value331] = indexBFCcxPM5Value350;
      indexBFCcxPM5Helper58(indexBFCcxPM5Value334[indexBFCcxPM5Value331 + 1]);
    }
    var indexBFCcxPM5Value354 =
        indexBFCcxPM5Value346 / 2 +
        indexBFCcxPM5Param8.fontMetrics().axisHeight,
      indexBFCcxPM5Value355 = indexBFCcxPM5Param7.cols || [],
      indexBFCcxPM5Value356 = [],
      indexBFCcxPM5Value357,
      indexBFCcxPM5Value358,
      indexBFCcxPM5Value359 = [];
    if (
      indexBFCcxPM5Param7.tags &&
      indexBFCcxPM5Param7.tags.some((item) => item)
    )
      for (
        indexBFCcxPM5Value331 = 0;
        indexBFCcxPM5Value331 < indexBFCcxPM5Value333;
        ++indexBFCcxPM5Value331
      ) {
        var indexBFCcxPM5Value360 =
            indexBFCcxPM5Value336[indexBFCcxPM5Value331],
          indexBFCcxPM5Value361 =
            indexBFCcxPM5Value360.pos - indexBFCcxPM5Value354,
          indexBFCcxPM5Value362 =
            indexBFCcxPM5Param7.tags[indexBFCcxPM5Value331],
          indexBFCcxPM5Value363 = undefined;
        indexBFCcxPM5Value363 =
          indexBFCcxPM5Value362 === true
            ? indexBFCcxPM5Value139.makeSpan(
                ["eqn-num"],
                [],
                indexBFCcxPM5Param8,
              )
            : indexBFCcxPM5Value362 === false
              ? indexBFCcxPM5Value139.makeSpan([], [], indexBFCcxPM5Param8)
              : indexBFCcxPM5Value139.makeSpan(
                  [],
                  indexBFCcxPM5Value154(
                    indexBFCcxPM5Value362,
                    indexBFCcxPM5Param8,
                    true,
                  ),
                  indexBFCcxPM5Param8,
                );
        indexBFCcxPM5Value363.depth = indexBFCcxPM5Value360.depth;
        indexBFCcxPM5Value363.height = indexBFCcxPM5Value360.height;
        indexBFCcxPM5Value359.push({
          type: "elem",
          elem: indexBFCcxPM5Value363,
          shift: indexBFCcxPM5Value361,
        });
      }
    for (
      indexBFCcxPM5Value332 = 0, indexBFCcxPM5Value358 = 0;
      indexBFCcxPM5Value332 < indexBFCcxPM5Value335 ||
      indexBFCcxPM5Value358 < indexBFCcxPM5Value355.length;
      ++indexBFCcxPM5Value332, ++indexBFCcxPM5Value358
    ) {
      for (
        var indexBFCcxPM5Value364 =
            indexBFCcxPM5Value355[indexBFCcxPM5Value358] || {},
          indexBFCcxPM5Value365 = true;
        indexBFCcxPM5Value364.type === "separator";
      ) {
        if (
          (indexBFCcxPM5Value365 ||
            ((indexBFCcxPM5Value357 = indexBFCcxPM5Value139.makeSpan(
              ["arraycolsep"],
              [],
            )),
            (indexBFCcxPM5Value357.style.width = indexBFCcxPM5Value69(
              indexBFCcxPM5Param8.fontMetrics().doubleRuleSep,
            )),
            indexBFCcxPM5Value356.push(indexBFCcxPM5Value357)),
          indexBFCcxPM5Value364.separator === "|" ||
            indexBFCcxPM5Value364.separator === ":")
        ) {
          var indexBFCcxPM5Value366 =
              indexBFCcxPM5Value364.separator === "|" ? "solid" : "dashed",
            indexBFCcxPM5Value367 = indexBFCcxPM5Value139.makeSpan(
              ["vertical-separator"],
              [],
              indexBFCcxPM5Param8,
            );
          indexBFCcxPM5Value367.style.height = indexBFCcxPM5Value69(
            indexBFCcxPM5Value346,
          );
          indexBFCcxPM5Value367.style.borderRightWidth = indexBFCcxPM5Value69(
            indexBFCcxPM5Value338,
          );
          indexBFCcxPM5Value367.style.borderRightStyle = indexBFCcxPM5Value366;
          indexBFCcxPM5Value367.style.margin =
            "0 " + indexBFCcxPM5Value69(-indexBFCcxPM5Value338 / 2);
          var indexBFCcxPM5Value368 =
            indexBFCcxPM5Value346 - indexBFCcxPM5Value354;
          indexBFCcxPM5Value368 &&
            (indexBFCcxPM5Value367.style.verticalAlign = indexBFCcxPM5Value69(
              -indexBFCcxPM5Value368,
            ));
          indexBFCcxPM5Value356.push(indexBFCcxPM5Value367);
        } else
          throw new indexBFCcxPM5Value14(
            "Invalid separator type: " + indexBFCcxPM5Value364.separator,
          );
        indexBFCcxPM5Value358++;
        indexBFCcxPM5Value364 =
          indexBFCcxPM5Value355[indexBFCcxPM5Value358] || {};
        indexBFCcxPM5Value365 = false;
      }
      if (!(indexBFCcxPM5Value332 >= indexBFCcxPM5Value335)) {
        var indexBFCcxPM5Value369 = undefined;
        (indexBFCcxPM5Value332 > 0 ||
          indexBFCcxPM5Param7.hskipBeforeAndAfter) &&
          ((indexBFCcxPM5Value369 = indexBFCcxPM5Value23.deflt(
            indexBFCcxPM5Value364.pregap,
            indexBFCcxPM5Value340,
          )),
          indexBFCcxPM5Value369 !== 0 &&
            ((indexBFCcxPM5Value357 = indexBFCcxPM5Value139.makeSpan(
              ["arraycolsep"],
              [],
            )),
            (indexBFCcxPM5Value357.style.width = indexBFCcxPM5Value69(
              indexBFCcxPM5Value369,
            )),
            indexBFCcxPM5Value356.push(indexBFCcxPM5Value357)));
        var indexBFCcxPM5Value370 = [];
        for (
          indexBFCcxPM5Value331 = 0;
          indexBFCcxPM5Value331 < indexBFCcxPM5Value333;
          ++indexBFCcxPM5Value331
        ) {
          var indexBFCcxPM5Value371 =
              indexBFCcxPM5Value336[indexBFCcxPM5Value331],
            _e = indexBFCcxPM5Value371[indexBFCcxPM5Value332];
          if (_e) {
            var indexBFCcxPM5Value372 =
              indexBFCcxPM5Value371.pos - indexBFCcxPM5Value354;
            _e.depth = indexBFCcxPM5Value371.depth;
            _e.height = indexBFCcxPM5Value371.height;
            indexBFCcxPM5Value370.push({
              type: "elem",
              elem: _e,
              shift: indexBFCcxPM5Value372,
            });
          }
        }
        indexBFCcxPM5Value370 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "individualShift",
            children: indexBFCcxPM5Value370,
          },
          indexBFCcxPM5Param8,
        );
        indexBFCcxPM5Value370 = indexBFCcxPM5Value139.makeSpan(
          ["col-align-" + (indexBFCcxPM5Value364.align || "c")],
          [indexBFCcxPM5Value370],
        );
        indexBFCcxPM5Value356.push(indexBFCcxPM5Value370);
        (indexBFCcxPM5Value332 < indexBFCcxPM5Value335 - 1 ||
          indexBFCcxPM5Param7.hskipBeforeAndAfter) &&
          ((indexBFCcxPM5Value369 = indexBFCcxPM5Value23.deflt(
            indexBFCcxPM5Value364.postgap,
            indexBFCcxPM5Value340,
          )),
          indexBFCcxPM5Value369 !== 0 &&
            ((indexBFCcxPM5Value357 = indexBFCcxPM5Value139.makeSpan(
              ["arraycolsep"],
              [],
            )),
            (indexBFCcxPM5Value357.style.width = indexBFCcxPM5Value69(
              indexBFCcxPM5Value369,
            )),
            indexBFCcxPM5Value356.push(indexBFCcxPM5Value357)));
      }
    }
    if (
      ((indexBFCcxPM5Value336 = indexBFCcxPM5Value139.makeSpan(
        ["mtable"],
        indexBFCcxPM5Value356,
      )),
      indexBFCcxPM5Value337.length > 0)
    ) {
      for (
        var indexBFCcxPM5Value373 = indexBFCcxPM5Value139.makeLineSpan(
            "hline",
            indexBFCcxPM5Param8,
            indexBFCcxPM5Value338,
          ),
          be = indexBFCcxPM5Value139.makeLineSpan(
            "hdashline",
            indexBFCcxPM5Param8,
            indexBFCcxPM5Value338,
          ),
          indexBFCcxPM5Value374 = [
            {
              type: "elem",
              elem: indexBFCcxPM5Value336,
              shift: 0,
            },
          ];
        indexBFCcxPM5Value337.length > 0;
      ) {
        var indexBFCcxPM5Value375 = indexBFCcxPM5Value337.pop(),
          indexBFCcxPM5Value376 =
            indexBFCcxPM5Value375.pos - indexBFCcxPM5Value354;
        indexBFCcxPM5Value375.isDashed
          ? indexBFCcxPM5Value374.push({
              type: "elem",
              elem: be,
              shift: indexBFCcxPM5Value376,
            })
          : indexBFCcxPM5Value374.push({
              type: "elem",
              elem: indexBFCcxPM5Value373,
              shift: indexBFCcxPM5Value376,
            });
      }
      indexBFCcxPM5Value336 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "individualShift",
          children: indexBFCcxPM5Value374,
        },
        indexBFCcxPM5Param8,
      );
    }
    if (indexBFCcxPM5Value359.length === 0)
      return indexBFCcxPM5Value139.makeSpan(
        ["mord"],
        [indexBFCcxPM5Value336],
        indexBFCcxPM5Param8,
      );
    var indexBFCcxPM5Value377 = indexBFCcxPM5Value139.makeVList(
      {
        positionType: "individualShift",
        children: indexBFCcxPM5Value359,
      },
      indexBFCcxPM5Param8,
    );
    return (
      (indexBFCcxPM5Value377 = indexBFCcxPM5Value139.makeSpan(
        ["tag"],
        [indexBFCcxPM5Value377],
        indexBFCcxPM5Param8,
      )),
      indexBFCcxPM5Value139.makeFragment([
        indexBFCcxPM5Value336,
        indexBFCcxPM5Value377,
      ])
    );
  };
  indexBFCcxPM5Value231 = {
    c: "center ",
    l: "left ",
    r: "right ",
  };
  indexBFCcxPM5Value232 = function (
    indexBFCcxPM5Param17,
    indexBFCcxPM5Param18,
  ) {
    for (
      var indexBFCcxPM5Value430 = [],
        indexBFCcxPM5Value431 = new indexBFCcxPM5Value163.MathNode(
          "mtd",
          [],
          ["mtr-glue"],
        ),
        indexBFCcxPM5Value432 = new indexBFCcxPM5Value163.MathNode(
          "mtd",
          [],
          ["mml-eqn-num"],
        ),
        indexBFCcxPM5Value433 = 0;
      indexBFCcxPM5Value433 < indexBFCcxPM5Param17.body.length;
      indexBFCcxPM5Value433++
    ) {
      for (
        var indexBFCcxPM5Value434 =
            indexBFCcxPM5Param17.body[indexBFCcxPM5Value433],
          indexBFCcxPM5Value435 = [],
          indexBFCcxPM5Value436 = 0;
        indexBFCcxPM5Value436 < indexBFCcxPM5Value434.length;
        indexBFCcxPM5Value436++
      )
        indexBFCcxPM5Value435.push(
          new indexBFCcxPM5Value163.MathNode("mtd", [
            $(
              indexBFCcxPM5Value434[indexBFCcxPM5Value436],
              indexBFCcxPM5Param18,
            ),
          ]),
        );
      indexBFCcxPM5Param17.tags &&
        indexBFCcxPM5Param17.tags[indexBFCcxPM5Value433] &&
        (indexBFCcxPM5Value435.unshift(indexBFCcxPM5Value431),
        indexBFCcxPM5Value435.push(indexBFCcxPM5Value431),
        indexBFCcxPM5Param17.leqno
          ? indexBFCcxPM5Value435.unshift(indexBFCcxPM5Value432)
          : indexBFCcxPM5Value435.push(indexBFCcxPM5Value432));
      indexBFCcxPM5Value430.push(
        new indexBFCcxPM5Value163.MathNode("mtr", indexBFCcxPM5Value435),
      );
    }
    var indexBFCcxPM5Value437 = new indexBFCcxPM5Value163.MathNode(
        "mtable",
        indexBFCcxPM5Value430,
      ),
      indexBFCcxPM5Value438 =
        indexBFCcxPM5Param17.arraystretch === 0.5
          ? 0.1
          : 0.16 +
            indexBFCcxPM5Param17.arraystretch -
            1 +
            (indexBFCcxPM5Param17.addJot ? 0.09 : 0);
    indexBFCcxPM5Value437.setAttribute(
      "rowspacing",
      indexBFCcxPM5Value69(indexBFCcxPM5Value438),
    );
    var indexBFCcxPM5Value439 = "",
      indexBFCcxPM5Value440 = "";
    if (indexBFCcxPM5Param17.cols && indexBFCcxPM5Param17.cols.length > 0) {
      var indexBFCcxPM5Value441 = indexBFCcxPM5Param17.cols,
        indexBFCcxPM5Value442 = "",
        indexBFCcxPM5Value443 = false,
        indexBFCcxPM5Value444 = 0,
        indexBFCcxPM5Value445 = indexBFCcxPM5Value441.length;
      indexBFCcxPM5Value441[0].type === "separator" &&
        ((indexBFCcxPM5Value439 += "top "), (indexBFCcxPM5Value444 = 1));
      indexBFCcxPM5Value441[indexBFCcxPM5Value441.length - 1].type ===
        "separator" &&
        ((indexBFCcxPM5Value439 += "bottom "), --indexBFCcxPM5Value445);
      for (
        var indexBFCcxPM5Value446 = indexBFCcxPM5Value444;
        indexBFCcxPM5Value446 < indexBFCcxPM5Value445;
        indexBFCcxPM5Value446++
      )
        indexBFCcxPM5Value441[indexBFCcxPM5Value446].type === "align"
          ? ((indexBFCcxPM5Value440 +=
              indexBFCcxPM5Value231[
                indexBFCcxPM5Value441[indexBFCcxPM5Value446].align
              ]),
            indexBFCcxPM5Value443 && (indexBFCcxPM5Value442 += "none "),
            (indexBFCcxPM5Value443 = true))
          : indexBFCcxPM5Value441[indexBFCcxPM5Value446].type === "separator" &&
            indexBFCcxPM5Value443 &&
            ((indexBFCcxPM5Value442 +=
              indexBFCcxPM5Value441[indexBFCcxPM5Value446].separator === "|"
                ? "solid "
                : "dashed "),
            (indexBFCcxPM5Value443 = false));
      indexBFCcxPM5Value437.setAttribute(
        "columnalign",
        indexBFCcxPM5Value440.trim(),
      );
      /[sd]/.test(indexBFCcxPM5Value442) &&
        indexBFCcxPM5Value437.setAttribute(
          "columnlines",
          indexBFCcxPM5Value442.trim(),
        );
    }
    if (indexBFCcxPM5Param17.colSeparationType === "align") {
      for (
        var indexBFCcxPM5Value447 = indexBFCcxPM5Param17.cols || [],
          indexBFCcxPM5Value448 = "",
          indexBFCcxPM5Value449 = 1;
        indexBFCcxPM5Value449 < indexBFCcxPM5Value447.length;
        indexBFCcxPM5Value449++
      )
        indexBFCcxPM5Value448 += indexBFCcxPM5Value449 % 2 ? "0em " : "1em ";
      indexBFCcxPM5Value437.setAttribute(
        "columnspacing",
        indexBFCcxPM5Value448.trim(),
      );
    } else
      indexBFCcxPM5Param17.colSeparationType === "alignat" ||
      indexBFCcxPM5Param17.colSeparationType === "gather"
        ? indexBFCcxPM5Value437.setAttribute("columnspacing", "0em")
        : indexBFCcxPM5Param17.colSeparationType === "small"
          ? indexBFCcxPM5Value437.setAttribute("columnspacing", "0.2778em")
          : indexBFCcxPM5Param17.colSeparationType === "CD"
            ? indexBFCcxPM5Value437.setAttribute("columnspacing", "0.5em")
            : indexBFCcxPM5Value437.setAttribute("columnspacing", "1em");
    var indexBFCcxPM5Value450 = "",
      indexBFCcxPM5Value451 = indexBFCcxPM5Param17.hLinesBeforeRow;
    indexBFCcxPM5Value439 += indexBFCcxPM5Value451[0].length > 0 ? "left " : "";
    indexBFCcxPM5Value439 +=
      indexBFCcxPM5Value451[indexBFCcxPM5Value451.length - 1].length > 0
        ? "right "
        : "";
    for (
      var indexBFCcxPM5Value452 = 1;
      indexBFCcxPM5Value452 < indexBFCcxPM5Value451.length - 1;
      indexBFCcxPM5Value452++
    )
      indexBFCcxPM5Value450 +=
        indexBFCcxPM5Value451[indexBFCcxPM5Value452].length === 0
          ? "none "
          : indexBFCcxPM5Value451[indexBFCcxPM5Value452][0]
            ? "dashed "
            : "solid ";
    return (
      /[sd]/.test(indexBFCcxPM5Value450) &&
        indexBFCcxPM5Value437.setAttribute(
          "rowlines",
          indexBFCcxPM5Value450.trim(),
        ),
      indexBFCcxPM5Value439 !== "" &&
        ((indexBFCcxPM5Value437 = new indexBFCcxPM5Value163.MathNode(
          "menclose",
          [indexBFCcxPM5Value437],
        )),
        indexBFCcxPM5Value437.setAttribute(
          "notation",
          indexBFCcxPM5Value439.trim(),
        )),
      indexBFCcxPM5Param17.arraystretch &&
        indexBFCcxPM5Param17.arraystretch < 1 &&
        ((indexBFCcxPM5Value437 = new indexBFCcxPM5Value163.MathNode("mstyle", [
          indexBFCcxPM5Value437,
        ])),
        indexBFCcxPM5Value437.setAttribute("scriptlevel", "1")),
      indexBFCcxPM5Value437
    );
  };
  indexBFCcxPM5Value233 = function (
    indexBFCcxPM5Param57,
    indexBFCcxPM5Param58,
  ) {
    indexBFCcxPM5Param57.envName.indexOf("ed") === -1 &&
      indexBFCcxPM5Value229(indexBFCcxPM5Param57);
    var indexBFCcxPM5Value632 = [],
      indexBFCcxPM5Value633 =
        indexBFCcxPM5Param57.envName.indexOf("at") > -1 ? "alignat" : "align",
      indexBFCcxPM5Value634 = indexBFCcxPM5Param57.envName === "split",
      indexBFCcxPM5Value635 = indexBFCcxPM5Helper55(
        indexBFCcxPM5Param57.parser,
        {
          cols: indexBFCcxPM5Value632,
          addJot: true,
          autoTag: indexBFCcxPM5Value634
            ? undefined
            : indexBFCcxPM5Helper54(indexBFCcxPM5Param57.envName),
          emptySingleRow: true,
          colSeparationType: indexBFCcxPM5Value633,
          maxNumCols: indexBFCcxPM5Value634 ? 2 : undefined,
          leqno: indexBFCcxPM5Param57.parser.settings.leqno,
        },
        "display",
      ),
      indexBFCcxPM5Value636,
      indexBFCcxPM5Value637 = 0,
      indexBFCcxPM5Value638 = {
        type: "ordgroup",
        mode: indexBFCcxPM5Param57.mode,
        body: [],
      };
    if (
      indexBFCcxPM5Param58[0] &&
      indexBFCcxPM5Param58[0].type === "ordgroup"
    ) {
      for (
        var indexBFCcxPM5Value639 = "", indexBFCcxPM5Value640 = 0;
        indexBFCcxPM5Value640 < indexBFCcxPM5Param58[0].body.length;
        indexBFCcxPM5Value640++
      ) {
        var indexBFCcxPM5Value641 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param58[0].body[indexBFCcxPM5Value640],
          "textord",
        );
        indexBFCcxPM5Value639 += indexBFCcxPM5Value641.text;
      }
      indexBFCcxPM5Value636 = Number(indexBFCcxPM5Value639);
      indexBFCcxPM5Value637 = indexBFCcxPM5Value636 * 2;
    }
    var indexBFCcxPM5Value642 = !indexBFCcxPM5Value637;
    indexBFCcxPM5Value635.body.forEach(function (item) {
      for (
        var indexBFCcxPM5Value1173 = 1;
        indexBFCcxPM5Value1173 < item.length;
        indexBFCcxPM5Value1173 += 2
      )
        indexBFCcxPM5Helper42(
          indexBFCcxPM5Helper42(item[indexBFCcxPM5Value1173], "styling")
            .body[0],
          "ordgroup",
        ).body.unshift(indexBFCcxPM5Value638);
      if (indexBFCcxPM5Value642)
        indexBFCcxPM5Value637 < item.length &&
          (indexBFCcxPM5Value637 = item.length);
      else {
        var indexBFCcxPM5Value1174 = item.length / 2;
        if (indexBFCcxPM5Value636 < indexBFCcxPM5Value1174)
          throw new indexBFCcxPM5Value14(
            "Too many math in a row: " +
              ("expected " +
                indexBFCcxPM5Value636 +
                ", but got " +
                indexBFCcxPM5Value1174),
            item[0],
          );
      }
    });
    for (
      var indexBFCcxPM5Value643 = 0;
      indexBFCcxPM5Value643 < indexBFCcxPM5Value637;
      ++indexBFCcxPM5Value643
    ) {
      var indexBFCcxPM5Value644 = "r",
        indexBFCcxPM5Value645 = 0;
      indexBFCcxPM5Value643 % 2 == 1
        ? (indexBFCcxPM5Value644 = "l")
        : indexBFCcxPM5Value643 > 0 &&
          indexBFCcxPM5Value642 &&
          (indexBFCcxPM5Value645 = 1);
      indexBFCcxPM5Value632[indexBFCcxPM5Value643] = {
        type: "align",
        align: indexBFCcxPM5Value644,
        pregap: indexBFCcxPM5Value645,
        postgap: 0,
      };
    }
    return (
      (indexBFCcxPM5Value635.colSeparationType = indexBFCcxPM5Value642
        ? "align"
        : "alignat"),
      indexBFCcxPM5Value635
    );
  };
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["array", "darray"],
    props: {
      numArgs: 1,
    },
    handler(indexBFCcxPM5Param209, indexBFCcxPM5Param210) {
      var indexBFCcxPM5Value1022 = (
          indexBFCcxPM5Helper44(indexBFCcxPM5Param210[0])
            ? [indexBFCcxPM5Param210[0]]
            : indexBFCcxPM5Helper42(indexBFCcxPM5Param210[0], "ordgroup").body
        ).map(function (item) {
          var indexBFCcxPM5Value1206 = indexBFCcxPM5Helper43(item).text;
          if ("lcr".indexOf(indexBFCcxPM5Value1206) !== -1)
            return {
              type: "align",
              align: indexBFCcxPM5Value1206,
            };
          if (indexBFCcxPM5Value1206 === "|")
            return {
              type: "separator",
              separator: "|",
            };
          if (indexBFCcxPM5Value1206 === ":")
            return {
              type: "separator",
              separator: ":",
            };
          throw new indexBFCcxPM5Value14(
            "Unknown column alignment: " + indexBFCcxPM5Value1206,
            item,
          );
        }),
        indexBFCcxPM5Value1023 = {
          cols: indexBFCcxPM5Value1022,
          hskipBeforeAndAfter: true,
          maxNumCols: indexBFCcxPM5Value1022.length,
        };
      return indexBFCcxPM5Helper55(
        indexBFCcxPM5Param209.parser,
        indexBFCcxPM5Value1023,
        indexBFCcxPM5Helper56(indexBFCcxPM5Param209.envName),
      );
    },
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: [
      "matrix",
      "pmatrix",
      "bmatrix",
      "Bmatrix",
      "vmatrix",
      "Vmatrix",
      "matrix*",
      "pmatrix*",
      "bmatrix*",
      "Bmatrix*",
      "vmatrix*",
      "Vmatrix*",
    ],
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param67) {
      var indexBFCcxPM5Value692 = {
          matrix: null,
          pmatrix: ["(", ")"],
          bmatrix: ["[", "]"],
          Bmatrix: ["\\{", "\\}"],
          vmatrix: ["|", "|"],
          Vmatrix: ["\\Vert", "\\Vert"],
        }[indexBFCcxPM5Param67.envName.replace("*", "")],
        indexBFCcxPM5Value693 = "c",
        indexBFCcxPM5Value694 = {
          hskipBeforeAndAfter: false,
          cols: [
            {
              type: "align",
              align: indexBFCcxPM5Value693,
            },
          ],
        };
      if (
        indexBFCcxPM5Param67.envName.charAt(
          indexBFCcxPM5Param67.envName.length - 1,
        ) === "*"
      ) {
        var indexBFCcxPM5Value695 = indexBFCcxPM5Param67.parser;
        if (
          (indexBFCcxPM5Value695.consumeSpaces(),
          indexBFCcxPM5Value695.fetch().text === "[")
        ) {
          if (
            (indexBFCcxPM5Value695.consume(),
            indexBFCcxPM5Value695.consumeSpaces(),
            (indexBFCcxPM5Value693 = indexBFCcxPM5Value695.fetch().text),
            "lcr".indexOf(indexBFCcxPM5Value693) === -1)
          )
            throw new indexBFCcxPM5Value14(
              "Expected l or c or r",
              indexBFCcxPM5Value695.nextToken,
            );
          indexBFCcxPM5Value695.consume();
          indexBFCcxPM5Value695.consumeSpaces();
          indexBFCcxPM5Value695.expect("]");
          indexBFCcxPM5Value695.consume();
          indexBFCcxPM5Value694.cols = [
            {
              type: "align",
              align: indexBFCcxPM5Value693,
            },
          ];
        }
      }
      var indexBFCcxPM5Value696 = indexBFCcxPM5Helper55(
          indexBFCcxPM5Param67.parser,
          indexBFCcxPM5Value694,
          indexBFCcxPM5Helper56(indexBFCcxPM5Param67.envName),
        ),
        indexBFCcxPM5Value697 = Math.max(
          0,
          ...indexBFCcxPM5Value696.body.map((item) => item.length),
        );
      return (
        (indexBFCcxPM5Value696.cols = Array(indexBFCcxPM5Value697).fill({
          type: "align",
          align: indexBFCcxPM5Value693,
        })),
        indexBFCcxPM5Value692
          ? {
              type: "leftright",
              mode: indexBFCcxPM5Param67.mode,
              body: [indexBFCcxPM5Value696],
              left: indexBFCcxPM5Value692[0],
              right: indexBFCcxPM5Value692[1],
              rightColor: undefined,
            }
          : indexBFCcxPM5Value696
      );
    },
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["smallmatrix"],
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param656) {
      var indexBFCcxPM5Value1425 = indexBFCcxPM5Helper55(
        indexBFCcxPM5Param656.parser,
        {
          arraystretch: 0.5,
        },
        "script",
      );
      return (
        (indexBFCcxPM5Value1425.colSeparationType = "small"),
        indexBFCcxPM5Value1425
      );
    },
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["subarray"],
    props: {
      numArgs: 1,
    },
    handler(indexBFCcxPM5Param176, indexBFCcxPM5Param177) {
      var indexBFCcxPM5Value963 = (
        indexBFCcxPM5Helper44(indexBFCcxPM5Param177[0])
          ? [indexBFCcxPM5Param177[0]]
          : indexBFCcxPM5Helper42(indexBFCcxPM5Param177[0], "ordgroup").body
      ).map(function (item) {
        var indexBFCcxPM5Value1377 = indexBFCcxPM5Helper43(item).text;
        if ("lc".indexOf(indexBFCcxPM5Value1377) !== -1)
          return {
            type: "align",
            align: indexBFCcxPM5Value1377,
          };
        throw new indexBFCcxPM5Value14(
          "Unknown column alignment: " + indexBFCcxPM5Value1377,
          item,
        );
      });
      if (indexBFCcxPM5Value963.length > 1)
        throw new indexBFCcxPM5Value14(
          "{subarray} can contain only one column",
        );
      var indexBFCcxPM5Value964 = {
        cols: indexBFCcxPM5Value963,
        hskipBeforeAndAfter: false,
        arraystretch: 0.5,
      };
      if (
        ((indexBFCcxPM5Value964 = indexBFCcxPM5Helper55(
          indexBFCcxPM5Param176.parser,
          indexBFCcxPM5Value964,
          "script",
        )),
        indexBFCcxPM5Value964.body.length > 0 &&
          indexBFCcxPM5Value964.body[0].length > 1)
      )
        throw new indexBFCcxPM5Value14(
          "{subarray} can contain only one column",
        );
      return indexBFCcxPM5Value964;
    },
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["cases", "dcases", "rcases", "drcases"],
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param223) {
      var indexBFCcxPM5Value1044 = indexBFCcxPM5Helper55(
        indexBFCcxPM5Param223.parser,
        {
          arraystretch: 1.2,
          cols: [
            {
              type: "align",
              align: "l",
              pregap: 0,
              postgap: 1,
            },
            {
              type: "align",
              align: "l",
              pregap: 0,
              postgap: 0,
            },
          ],
        },
        indexBFCcxPM5Helper56(indexBFCcxPM5Param223.envName),
      );
      return {
        type: "leftright",
        mode: indexBFCcxPM5Param223.mode,
        body: [indexBFCcxPM5Value1044],
        left: indexBFCcxPM5Param223.envName.indexOf("r") > -1 ? "." : "\\{",
        right: indexBFCcxPM5Param223.envName.indexOf("r") > -1 ? "\\}" : ".",
        rightColor: undefined,
      };
    },
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["align", "align*", "aligned", "split"],
    props: {
      numArgs: 0,
    },
    handler: indexBFCcxPM5Value233,
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["gathered", "gather", "gather*"],
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param349) {
      indexBFCcxPM5Value23.contains(
        ["gather", "gather*"],
        indexBFCcxPM5Param349.envName,
      ) && indexBFCcxPM5Value229(indexBFCcxPM5Param349);
      var indexBFCcxPM5Value1198 = {
        cols: [
          {
            type: "align",
            align: "c",
          },
        ],
        addJot: true,
        colSeparationType: "gather",
        autoTag: indexBFCcxPM5Helper54(indexBFCcxPM5Param349.envName),
        emptySingleRow: true,
        leqno: indexBFCcxPM5Param349.parser.settings.leqno,
      };
      return indexBFCcxPM5Helper55(
        indexBFCcxPM5Param349.parser,
        indexBFCcxPM5Value1198,
        "display",
      );
    },
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["alignat", "alignat*", "alignedat"],
    props: {
      numArgs: 1,
    },
    handler: indexBFCcxPM5Value233,
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["equation", "equation*"],
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param467) {
      indexBFCcxPM5Value229(indexBFCcxPM5Param467);
      var indexBFCcxPM5Value1310 = {
        autoTag: indexBFCcxPM5Helper54(indexBFCcxPM5Param467.envName),
        emptySingleRow: true,
        singleRow: true,
        maxNumCols: 1,
        leqno: indexBFCcxPM5Param467.parser.settings.leqno,
      };
      return indexBFCcxPM5Helper55(
        indexBFCcxPM5Param467.parser,
        indexBFCcxPM5Value1310,
        "display",
      );
    },
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper51({
    type: "array",
    names: ["CD"],
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param852) {
      return (
        indexBFCcxPM5Value229(indexBFCcxPM5Param852),
        indexBFCcxPM5Helper48(indexBFCcxPM5Param852.parser)
      );
    },
    htmlBuilder: indexBFCcxPM5Value230,
    mathmlBuilder: indexBFCcxPM5Value232,
  });
  indexBFCcxPM5Helper52("\\nonumber", "\\gdef\\@eqnsw{0}");
  indexBFCcxPM5Helper52("\\notag", "\\nonumber");
  indexBFCcxPM5Helper37({
    type: "text",
    names: ["\\hline", "\\hdashline"],
    props: {
      numArgs: 0,
      allowedInText: true,
      allowedInMath: true,
    },
    handler(indexBFCcxPM5Param740, indexBFCcxPM5Param741) {
      throw new indexBFCcxPM5Value14(
        indexBFCcxPM5Param740.funcName + " valid only within array environment",
      );
    },
  });
  indexBFCcxPM5Value234 = indexBFCcxPM5Value227;
  indexBFCcxPM5Helper37({
    type: "environment",
    names: ["\\begin", "\\end"],
    props: {
      numArgs: 1,
      argTypes: ["text"],
    },
    handler(indexBFCcxPM5Param108, indexBFCcxPM5Param109) {
      var { parser, funcName } = indexBFCcxPM5Param108,
        indexBFCcxPM5Value830 = indexBFCcxPM5Param109[0];
      if (indexBFCcxPM5Value830.type !== "ordgroup")
        throw new indexBFCcxPM5Value14(
          "Invalid environment name",
          indexBFCcxPM5Value830,
        );
      for (
        var indexBFCcxPM5Value831 = "", indexBFCcxPM5Value832 = 0;
        indexBFCcxPM5Value832 < indexBFCcxPM5Value830.body.length;
        ++indexBFCcxPM5Value832
      )
        indexBFCcxPM5Value831 += indexBFCcxPM5Helper42(
          indexBFCcxPM5Value830.body[indexBFCcxPM5Value832],
          "textord",
        ).text;
      if (funcName === "\\begin") {
        if (!indexBFCcxPM5Value234.hasOwnProperty(indexBFCcxPM5Value831))
          throw new indexBFCcxPM5Value14(
            "No such environment: " + indexBFCcxPM5Value831,
            indexBFCcxPM5Value830,
          );
        var indexBFCcxPM5Value833 =
            indexBFCcxPM5Value234[indexBFCcxPM5Value831],
          { args, optArgs } = parser.parseArguments(
            "\\begin{" + indexBFCcxPM5Value831 + "}",
            indexBFCcxPM5Value833,
          ),
          indexBFCcxPM5Value834 = {
            mode: parser.mode,
            envName: indexBFCcxPM5Value831,
            parser,
          },
          indexBFCcxPM5Value835 = indexBFCcxPM5Value833.handler(
            indexBFCcxPM5Value834,
            args,
            optArgs,
          );
        parser.expect("\\end", false);
        var indexBFCcxPM5Value836 = parser.nextToken,
          indexBFCcxPM5Value837 = indexBFCcxPM5Helper42(
            parser.parseFunction(),
            "environment",
          );
        if (indexBFCcxPM5Value837.name !== indexBFCcxPM5Value831)
          throw new indexBFCcxPM5Value14(
            "Mismatch: \\begin{" +
              indexBFCcxPM5Value831 +
              "} matched by \\end{" +
              indexBFCcxPM5Value837.name +
              "}",
            indexBFCcxPM5Value836,
          );
        return indexBFCcxPM5Value835;
      }
      return {
        type: "environment",
        mode: parser.mode,
        name: indexBFCcxPM5Value831,
        nameGroup: indexBFCcxPM5Value830,
      };
    },
  });
  indexBFCcxPM5Value235 = (indexBFCcxPM5Param751, indexBFCcxPM5Param752) => {
    var indexBFCcxPM5Value1456 = indexBFCcxPM5Param751.font,
      indexBFCcxPM5Value1457 = indexBFCcxPM5Param752.withFont(
        indexBFCcxPM5Value1456,
      );
    return indexBFCcxPM5Value159(
      indexBFCcxPM5Param751.body,
      indexBFCcxPM5Value1457,
    );
  };
  indexBFCcxPM5Value236 = (indexBFCcxPM5Param753, indexBFCcxPM5Param754) => {
    var indexBFCcxPM5Value1458 = indexBFCcxPM5Param753.font,
      indexBFCcxPM5Value1459 = indexBFCcxPM5Param754.withFont(
        indexBFCcxPM5Value1458,
      );
    return $(indexBFCcxPM5Param753.body, indexBFCcxPM5Value1459);
  };
  indexBFCcxPM5Value237 = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
    "\\bm": "\\boldsymbol",
  };
  indexBFCcxPM5Helper37({
    type: "font",
    names: [
      "\\mathrm",
      "\\mathit",
      "\\mathbf",
      "\\mathnormal",
      "\\mathsfit",
      "\\mathbb",
      "\\mathcal",
      "\\mathfrak",
      "\\mathscr",
      "\\mathsf",
      "\\mathtt",
      "\\Bbb",
      "\\bold",
      "\\frak",
    ],
    props: {
      numArgs: 1,
      allowedInArgument: true,
    },
    handler: (indexBFCcxPM5Param515, indexBFCcxPM5Param516) => {
      var { parser, funcName } = indexBFCcxPM5Param515,
        indexBFCcxPM5Value1342 = indexBFCcxPM5Value147(
          indexBFCcxPM5Param516[0],
        ),
        indexBFCcxPM5Value1343 = funcName;
      return (
        indexBFCcxPM5Value1343 in indexBFCcxPM5Value237 &&
          (indexBFCcxPM5Value1343 =
            indexBFCcxPM5Value237[indexBFCcxPM5Value1343]),
        {
          type: "font",
          mode: parser.mode,
          font: indexBFCcxPM5Value1343.slice(1),
          body: indexBFCcxPM5Value1342,
        }
      );
    },
    htmlBuilder: indexBFCcxPM5Value235,
    mathmlBuilder: indexBFCcxPM5Value236,
  });
  indexBFCcxPM5Helper37({
    type: "mclass",
    names: ["\\boldsymbol", "\\bm"],
    props: {
      numArgs: 1,
    },
    handler: (indexBFCcxPM5Param396, indexBFCcxPM5Param397) => {
      var { parser } = indexBFCcxPM5Param396,
        indexBFCcxPM5Value1256 = indexBFCcxPM5Param397[0],
        indexBFCcxPM5Value1257 = indexBFCcxPM5Value23.isCharacterBox(
          indexBFCcxPM5Value1256,
        );
      return {
        type: "mclass",
        mode: parser.mode,
        mclass: indexBFCcxPM5Value185(indexBFCcxPM5Value1256),
        body: [
          {
            type: "font",
            mode: parser.mode,
            font: "boldsymbol",
            body: indexBFCcxPM5Value1256,
          },
        ],
        isCharacterBox: indexBFCcxPM5Value1257,
      };
    },
  });
  indexBFCcxPM5Helper37({
    type: "font",
    names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
    props: {
      numArgs: 0,
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param393, indexBFCcxPM5Param394) => {
      var { parser, funcName, breakOnTokenText } = indexBFCcxPM5Param393,
        { mode } = parser,
        indexBFCcxPM5Value1253 = parser.parseExpression(true, breakOnTokenText);
      return {
        type: "font",
        mode,
        font: "math" + funcName.slice(1),
        body: {
          type: "ordgroup",
          mode: parser.mode,
          body: indexBFCcxPM5Value1253,
        },
      };
    },
    htmlBuilder: indexBFCcxPM5Value235,
    mathmlBuilder: indexBFCcxPM5Value236,
  });
  indexBFCcxPM5Value238 = (indexBFCcxPM5Param360, indexBFCcxPM5Param361) => {
    var indexBFCcxPM5Value1205 = indexBFCcxPM5Param361;
    return (
      indexBFCcxPM5Param360 === "display"
        ? (indexBFCcxPM5Value1205 =
            indexBFCcxPM5Value1205.id >= indexBFCcxPM5Value41.SCRIPT.id
              ? indexBFCcxPM5Value1205.text()
              : indexBFCcxPM5Value41.DISPLAY)
        : indexBFCcxPM5Param360 === "text" &&
            indexBFCcxPM5Value1205.size === indexBFCcxPM5Value41.DISPLAY.size
          ? (indexBFCcxPM5Value1205 = indexBFCcxPM5Value41.TEXT)
          : indexBFCcxPM5Param360 === "script"
            ? (indexBFCcxPM5Value1205 = indexBFCcxPM5Value41.SCRIPT)
            : indexBFCcxPM5Param360 === "scriptscript" &&
              (indexBFCcxPM5Value1205 = indexBFCcxPM5Value41.SCRIPTSCRIPT),
      indexBFCcxPM5Value1205
    );
  };
  indexBFCcxPM5Value239 = (indexBFCcxPM5Param11, indexBFCcxPM5Param12) => {
    var indexBFCcxPM5Value378 = indexBFCcxPM5Value238(
        indexBFCcxPM5Param11.size,
        indexBFCcxPM5Param12.style,
      ),
      indexBFCcxPM5Value379 = indexBFCcxPM5Value378.fracNum(),
      indexBFCcxPM5Value380 = indexBFCcxPM5Value378.fracDen(),
      indexBFCcxPM5Value381 = indexBFCcxPM5Param12.havingStyle(
        indexBFCcxPM5Value379,
      ),
      indexBFCcxPM5Value382 = indexBFCcxPM5Value159(
        indexBFCcxPM5Param11.numer,
        indexBFCcxPM5Value381,
        indexBFCcxPM5Param12,
      );
    if (indexBFCcxPM5Param11.continued) {
      var indexBFCcxPM5Value383 =
          8.5 / indexBFCcxPM5Param12.fontMetrics().ptPerEm,
        indexBFCcxPM5Value384 =
          3.5 / indexBFCcxPM5Param12.fontMetrics().ptPerEm;
      indexBFCcxPM5Value382.height =
        indexBFCcxPM5Value382.height < indexBFCcxPM5Value383
          ? indexBFCcxPM5Value383
          : indexBFCcxPM5Value382.height;
      indexBFCcxPM5Value382.depth =
        indexBFCcxPM5Value382.depth < indexBFCcxPM5Value384
          ? indexBFCcxPM5Value384
          : indexBFCcxPM5Value382.depth;
    }
    indexBFCcxPM5Value381 = indexBFCcxPM5Param12.havingStyle(
      indexBFCcxPM5Value380,
    );
    var indexBFCcxPM5Value385 = indexBFCcxPM5Value159(
        indexBFCcxPM5Param11.denom,
        indexBFCcxPM5Value381,
        indexBFCcxPM5Param12,
      ),
      indexBFCcxPM5Value386,
      indexBFCcxPM5Value387,
      indexBFCcxPM5Value388;
    indexBFCcxPM5Param11.hasBarLine
      ? (indexBFCcxPM5Param11.barSize
          ? ((indexBFCcxPM5Value387 = indexBFCcxPM5Value68(
              indexBFCcxPM5Param11.barSize,
              indexBFCcxPM5Param12,
            )),
            (indexBFCcxPM5Value386 = indexBFCcxPM5Value139.makeLineSpan(
              "frac-line",
              indexBFCcxPM5Param12,
              indexBFCcxPM5Value387,
            )))
          : (indexBFCcxPM5Value386 = indexBFCcxPM5Value139.makeLineSpan(
              "frac-line",
              indexBFCcxPM5Param12,
            )),
        (indexBFCcxPM5Value387 = indexBFCcxPM5Value386.height),
        (indexBFCcxPM5Value388 = indexBFCcxPM5Value386.height))
      : ((indexBFCcxPM5Value386 = null),
        (indexBFCcxPM5Value387 = 0),
        (indexBFCcxPM5Value388 =
          indexBFCcxPM5Param12.fontMetrics().defaultRuleThickness));
    var indexBFCcxPM5Value389, indexBFCcxPM5Value390, indexBFCcxPM5Value391;
    indexBFCcxPM5Value378.size === indexBFCcxPM5Value41.DISPLAY.size ||
    indexBFCcxPM5Param11.size === "display"
      ? ((indexBFCcxPM5Value389 = indexBFCcxPM5Param12.fontMetrics().num1),
        (indexBFCcxPM5Value390 =
          indexBFCcxPM5Value387 > 0
            ? 3 * indexBFCcxPM5Value388
            : 7 * indexBFCcxPM5Value388),
        (indexBFCcxPM5Value391 = indexBFCcxPM5Param12.fontMetrics().denom1))
      : (indexBFCcxPM5Value387 > 0
          ? ((indexBFCcxPM5Value389 = indexBFCcxPM5Param12.fontMetrics().num2),
            (indexBFCcxPM5Value390 = indexBFCcxPM5Value388))
          : ((indexBFCcxPM5Value389 = indexBFCcxPM5Param12.fontMetrics().num3),
            (indexBFCcxPM5Value390 = 3 * indexBFCcxPM5Value388)),
        (indexBFCcxPM5Value391 = indexBFCcxPM5Param12.fontMetrics().denom2));
    var indexBFCcxPM5Value392;
    if (indexBFCcxPM5Value386) {
      var indexBFCcxPM5Value393 = indexBFCcxPM5Param12.fontMetrics().axisHeight;
      indexBFCcxPM5Value389 -
        indexBFCcxPM5Value382.depth -
        (indexBFCcxPM5Value393 + 0.5 * indexBFCcxPM5Value387) <
        indexBFCcxPM5Value390 &&
        (indexBFCcxPM5Value389 +=
          indexBFCcxPM5Value390 -
          (indexBFCcxPM5Value389 -
            indexBFCcxPM5Value382.depth -
            (indexBFCcxPM5Value393 + 0.5 * indexBFCcxPM5Value387)));
      indexBFCcxPM5Value393 -
        0.5 * indexBFCcxPM5Value387 -
        (indexBFCcxPM5Value385.height - indexBFCcxPM5Value391) <
        indexBFCcxPM5Value390 &&
        (indexBFCcxPM5Value391 +=
          indexBFCcxPM5Value390 -
          (indexBFCcxPM5Value393 -
            0.5 * indexBFCcxPM5Value387 -
            (indexBFCcxPM5Value385.height - indexBFCcxPM5Value391)));
      var indexBFCcxPM5Value394 = -(
        indexBFCcxPM5Value393 -
        0.5 * indexBFCcxPM5Value387
      );
      indexBFCcxPM5Value392 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value385,
              shift: indexBFCcxPM5Value391,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value386,
              shift: indexBFCcxPM5Value394,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value382,
              shift: -indexBFCcxPM5Value389,
            },
          ],
        },
        indexBFCcxPM5Param12,
      );
    } else {
      var indexBFCcxPM5Value395 =
        indexBFCcxPM5Value389 -
        indexBFCcxPM5Value382.depth -
        (indexBFCcxPM5Value385.height - indexBFCcxPM5Value391);
      indexBFCcxPM5Value395 < indexBFCcxPM5Value390 &&
        ((indexBFCcxPM5Value389 +=
          0.5 * (indexBFCcxPM5Value390 - indexBFCcxPM5Value395)),
        (indexBFCcxPM5Value391 +=
          0.5 * (indexBFCcxPM5Value390 - indexBFCcxPM5Value395)));
      indexBFCcxPM5Value392 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value385,
              shift: indexBFCcxPM5Value391,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value382,
              shift: -indexBFCcxPM5Value389,
            },
          ],
        },
        indexBFCcxPM5Param12,
      );
    }
    indexBFCcxPM5Value381 = indexBFCcxPM5Param12.havingStyle(
      indexBFCcxPM5Value378,
    );
    indexBFCcxPM5Value392.height *=
      indexBFCcxPM5Value381.sizeMultiplier /
      indexBFCcxPM5Param12.sizeMultiplier;
    indexBFCcxPM5Value392.depth *=
      indexBFCcxPM5Value381.sizeMultiplier /
      indexBFCcxPM5Param12.sizeMultiplier;
    var indexBFCcxPM5Value396 =
        indexBFCcxPM5Value378.size === indexBFCcxPM5Value41.DISPLAY.size
          ? indexBFCcxPM5Param12.fontMetrics().delim1
          : indexBFCcxPM5Value378.size ===
              indexBFCcxPM5Value41.SCRIPTSCRIPT.size
            ? indexBFCcxPM5Param12
                .havingStyle(indexBFCcxPM5Value41.SCRIPT)
                .fontMetrics().delim2
            : indexBFCcxPM5Param12.fontMetrics().delim2,
      indexBFCcxPM5Value397,
      indexBFCcxPM5Value398;
    return (
      (indexBFCcxPM5Value397 =
        indexBFCcxPM5Param11.leftDelim == null
          ? indexBFCcxPM5Value158(indexBFCcxPM5Param12, ["mopen"])
          : indexBFCcxPM5Value222.customSizedDelim(
              indexBFCcxPM5Param11.leftDelim,
              indexBFCcxPM5Value396,
              true,
              indexBFCcxPM5Param12.havingStyle(indexBFCcxPM5Value378),
              indexBFCcxPM5Param11.mode,
              ["mopen"],
            )),
      (indexBFCcxPM5Value398 = indexBFCcxPM5Param11.continued
        ? indexBFCcxPM5Value139.makeSpan([])
        : indexBFCcxPM5Param11.rightDelim == null
          ? indexBFCcxPM5Value158(indexBFCcxPM5Param12, ["mclose"])
          : indexBFCcxPM5Value222.customSizedDelim(
              indexBFCcxPM5Param11.rightDelim,
              indexBFCcxPM5Value396,
              true,
              indexBFCcxPM5Param12.havingStyle(indexBFCcxPM5Value378),
              indexBFCcxPM5Param11.mode,
              ["mclose"],
            )),
      indexBFCcxPM5Value139.makeSpan(
        ["mord"].concat(
          indexBFCcxPM5Value381.sizingClasses(indexBFCcxPM5Param12),
        ),
        [
          indexBFCcxPM5Value397,
          indexBFCcxPM5Value139.makeSpan(["mfrac"], [indexBFCcxPM5Value392]),
          indexBFCcxPM5Value398,
        ],
        indexBFCcxPM5Param12,
      )
    );
  };
  indexBFCcxPM5Value240 = (indexBFCcxPM5Param92, indexBFCcxPM5Param93) => {
    var indexBFCcxPM5Value777 = new indexBFCcxPM5Value163.MathNode("mfrac", [
      $(indexBFCcxPM5Param92.numer, indexBFCcxPM5Param93),
      $(indexBFCcxPM5Param92.denom, indexBFCcxPM5Param93),
    ]);
    if (!indexBFCcxPM5Param92.hasBarLine)
      indexBFCcxPM5Value777.setAttribute("linethickness", "0px");
    else if (indexBFCcxPM5Param92.barSize) {
      var indexBFCcxPM5Value778 = indexBFCcxPM5Value68(
        indexBFCcxPM5Param92.barSize,
        indexBFCcxPM5Param93,
      );
      indexBFCcxPM5Value777.setAttribute(
        "linethickness",
        indexBFCcxPM5Value69(indexBFCcxPM5Value778),
      );
    }
    var indexBFCcxPM5Value779 = indexBFCcxPM5Value238(
      indexBFCcxPM5Param92.size,
      indexBFCcxPM5Param93.style,
    );
    if (indexBFCcxPM5Value779.size !== indexBFCcxPM5Param93.style.size) {
      indexBFCcxPM5Value777 = new indexBFCcxPM5Value163.MathNode("mstyle", [
        indexBFCcxPM5Value777,
      ]);
      var indexBFCcxPM5Value780 =
        indexBFCcxPM5Value779.size === indexBFCcxPM5Value41.DISPLAY.size
          ? "true"
          : "false";
      indexBFCcxPM5Value777.setAttribute("displaystyle", indexBFCcxPM5Value780);
      indexBFCcxPM5Value777.setAttribute("scriptlevel", "0");
    }
    if (
      indexBFCcxPM5Param92.leftDelim != null ||
      indexBFCcxPM5Param92.rightDelim != null
    ) {
      var indexBFCcxPM5Value781 = [];
      if (indexBFCcxPM5Param92.leftDelim != null) {
        var indexBFCcxPM5Value782 = new indexBFCcxPM5Value163.MathNode("mo", [
          new indexBFCcxPM5Value163.TextNode(
            indexBFCcxPM5Param92.leftDelim.replace("\\", ""),
          ),
        ]);
        indexBFCcxPM5Value782.setAttribute("fence", "true");
        indexBFCcxPM5Value781.push(indexBFCcxPM5Value782);
      }
      if (
        (indexBFCcxPM5Value781.push(indexBFCcxPM5Value777),
        indexBFCcxPM5Param92.rightDelim != null)
      ) {
        var indexBFCcxPM5Value783 = new indexBFCcxPM5Value163.MathNode("mo", [
          new indexBFCcxPM5Value163.TextNode(
            indexBFCcxPM5Param92.rightDelim.replace("\\", ""),
          ),
        ]);
        indexBFCcxPM5Value783.setAttribute("fence", "true");
        indexBFCcxPM5Value781.push(indexBFCcxPM5Value783);
      }
      return indexBFCcxPM5Value165(indexBFCcxPM5Value781);
    }
    return indexBFCcxPM5Value777;
  };
  indexBFCcxPM5Helper37({
    type: "genfrac",
    names: [
      "\\dfrac",
      "\\frac",
      "\\tfrac",
      "\\dbinom",
      "\\binom",
      "\\tbinom",
      "\\\\atopfrac",
      "\\\\bracefrac",
      "\\\\brackfrac",
    ],
    props: {
      numArgs: 2,
      allowedInArgument: true,
    },
    handler: (indexBFCcxPM5Param79, indexBFCcxPM5Param80) => {
      var { parser, funcName } = indexBFCcxPM5Param79,
        indexBFCcxPM5Value728 = indexBFCcxPM5Param80[0],
        indexBFCcxPM5Value729 = indexBFCcxPM5Param80[1],
        indexBFCcxPM5Value730,
        indexBFCcxPM5Value731 = null,
        indexBFCcxPM5Value732 = null,
        indexBFCcxPM5Value733 = "auto";
      switch (funcName) {
        case "\\dfrac":
        case "\\frac":
        case "\\tfrac":
          indexBFCcxPM5Value730 = true;
          break;
        case "\\\\atopfrac":
          indexBFCcxPM5Value730 = false;
          break;
        case "\\dbinom":
        case "\\binom":
        case "\\tbinom":
          indexBFCcxPM5Value730 = false;
          indexBFCcxPM5Value731 = "(";
          indexBFCcxPM5Value732 = ")";
          break;
        case "\\\\bracefrac":
          indexBFCcxPM5Value730 = false;
          indexBFCcxPM5Value731 = "\\{";
          indexBFCcxPM5Value732 = "\\}";
          break;
        case "\\\\brackfrac":
          indexBFCcxPM5Value730 = false;
          indexBFCcxPM5Value731 = "[";
          indexBFCcxPM5Value732 = "]";
          break;
        default:
          throw Error("Unrecognized genfrac command");
      }
      switch (funcName) {
        case "\\dfrac":
        case "\\dbinom":
          indexBFCcxPM5Value733 = "display";
          break;
        case "\\tfrac":
        case "\\tbinom":
          indexBFCcxPM5Value733 = "text";
          break;
      }
      return {
        type: "genfrac",
        mode: parser.mode,
        continued: false,
        numer: indexBFCcxPM5Value728,
        denom: indexBFCcxPM5Value729,
        hasBarLine: indexBFCcxPM5Value730,
        leftDelim: indexBFCcxPM5Value731,
        rightDelim: indexBFCcxPM5Value732,
        size: indexBFCcxPM5Value733,
        barSize: null,
      };
    },
    htmlBuilder: indexBFCcxPM5Value239,
    mathmlBuilder: indexBFCcxPM5Value240,
  });
  indexBFCcxPM5Helper37({
    type: "genfrac",
    names: ["\\cfrac"],
    props: {
      numArgs: 2,
    },
    handler: (indexBFCcxPM5Param342, indexBFCcxPM5Param343) => {
      var { parser, funcName } = indexBFCcxPM5Param342,
        indexBFCcxPM5Value1189 = indexBFCcxPM5Param343[0],
        indexBFCcxPM5Value1190 = indexBFCcxPM5Param343[1];
      return {
        type: "genfrac",
        mode: parser.mode,
        continued: true,
        numer: indexBFCcxPM5Value1189,
        denom: indexBFCcxPM5Value1190,
        hasBarLine: true,
        leftDelim: null,
        rightDelim: null,
        size: "display",
        barSize: null,
      };
    },
  });
  indexBFCcxPM5Helper37({
    type: "infix",
    names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
    props: {
      numArgs: 0,
      infix: true,
    },
    handler(indexBFCcxPM5Param183) {
      var { parser, funcName, token } = indexBFCcxPM5Param183,
        indexBFCcxPM5Value976;
      switch (funcName) {
        case "\\over":
          indexBFCcxPM5Value976 = "\\frac";
          break;
        case "\\choose":
          indexBFCcxPM5Value976 = "\\binom";
          break;
        case "\\atop":
          indexBFCcxPM5Value976 = "\\\\atopfrac";
          break;
        case "\\brace":
          indexBFCcxPM5Value976 = "\\\\bracefrac";
          break;
        case "\\brack":
          indexBFCcxPM5Value976 = "\\\\brackfrac";
          break;
        default:
          throw Error("Unrecognized infix genfrac command");
      }
      return {
        type: "infix",
        mode: parser.mode,
        replaceWith: indexBFCcxPM5Value976,
        token,
      };
    },
  });
  indexBFCcxPM5Value241 = ["display", "text", "script", "scriptscript"];
  indexBFCcxPM5Value242 = function (indexBFCcxPM5Param714) {
    var indexBFCcxPM5Value1442 = null;
    return (
      indexBFCcxPM5Param714.length > 0 &&
        ((indexBFCcxPM5Value1442 = indexBFCcxPM5Param714),
        (indexBFCcxPM5Value1442 =
          indexBFCcxPM5Value1442 === "." ? null : indexBFCcxPM5Value1442)),
      indexBFCcxPM5Value1442
    );
  };
  indexBFCcxPM5Helper37({
    type: "genfrac",
    names: ["\\genfrac"],
    props: {
      numArgs: 6,
      allowedInArgument: true,
      argTypes: ["math", "math", "size", "text", "math", "math"],
    },
    handler(indexBFCcxPM5Param113, indexBFCcxPM5Param114) {
      var { parser } = indexBFCcxPM5Param113,
        indexBFCcxPM5Value848 = indexBFCcxPM5Param114[4],
        indexBFCcxPM5Value849 = indexBFCcxPM5Param114[5],
        indexBFCcxPM5Value850 = indexBFCcxPM5Value147(indexBFCcxPM5Param114[0]),
        indexBFCcxPM5Value851 =
          indexBFCcxPM5Value850.type === "atom" &&
          indexBFCcxPM5Value850.family === "open"
            ? indexBFCcxPM5Value242(indexBFCcxPM5Value850.text)
            : null,
        indexBFCcxPM5Value852 = indexBFCcxPM5Value147(indexBFCcxPM5Param114[1]),
        indexBFCcxPM5Value853 =
          indexBFCcxPM5Value852.type === "atom" &&
          indexBFCcxPM5Value852.family === "close"
            ? indexBFCcxPM5Value242(indexBFCcxPM5Value852.text)
            : null,
        indexBFCcxPM5Value854 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param114[2],
          "size",
        ),
        indexBFCcxPM5Value855,
        indexBFCcxPM5Value856 = null;
      indexBFCcxPM5Value854.isBlank
        ? (indexBFCcxPM5Value855 = true)
        : ((indexBFCcxPM5Value856 = indexBFCcxPM5Value854.value),
          (indexBFCcxPM5Value855 = indexBFCcxPM5Value856.number > 0));
      var indexBFCcxPM5Value857 = "auto",
        indexBFCcxPM5Value858 = indexBFCcxPM5Param114[3];
      if (indexBFCcxPM5Value858.type === "ordgroup") {
        if (indexBFCcxPM5Value858.body.length > 0) {
          var indexBFCcxPM5Value859 = indexBFCcxPM5Helper42(
            indexBFCcxPM5Value858.body[0],
            "textord",
          );
          indexBFCcxPM5Value857 =
            indexBFCcxPM5Value241[Number(indexBFCcxPM5Value859.text)];
        }
      } else {
        indexBFCcxPM5Value858 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Value858,
          "textord",
        );
        indexBFCcxPM5Value857 =
          indexBFCcxPM5Value241[Number(indexBFCcxPM5Value858.text)];
      }
      return {
        type: "genfrac",
        mode: parser.mode,
        numer: indexBFCcxPM5Value848,
        denom: indexBFCcxPM5Value849,
        continued: false,
        hasBarLine: indexBFCcxPM5Value855,
        barSize: indexBFCcxPM5Value856,
        leftDelim: indexBFCcxPM5Value851,
        rightDelim: indexBFCcxPM5Value853,
        size: indexBFCcxPM5Value857,
      };
    },
    htmlBuilder: indexBFCcxPM5Value239,
    mathmlBuilder: indexBFCcxPM5Value240,
  });
  indexBFCcxPM5Helper37({
    type: "infix",
    names: ["\\above"],
    props: {
      numArgs: 1,
      argTypes: ["size"],
      infix: true,
    },
    handler(indexBFCcxPM5Param487, indexBFCcxPM5Param488) {
      var { parser, funcName, token } = indexBFCcxPM5Param487;
      return {
        type: "infix",
        mode: parser.mode,
        replaceWith: "\\\\abovefrac",
        size: indexBFCcxPM5Helper42(indexBFCcxPM5Param488[0], "size").value,
        token,
      };
    },
  });
  indexBFCcxPM5Helper37({
    type: "genfrac",
    names: ["\\\\abovefrac"],
    props: {
      numArgs: 3,
      argTypes: ["math", "size", "math"],
    },
    handler: (indexBFCcxPM5Param288, indexBFCcxPM5Param289) => {
      var { parser, funcName } = indexBFCcxPM5Param288,
        indexBFCcxPM5Value1130 = indexBFCcxPM5Param289[0],
        indexBFCcxPM5Value1131 = at(
          indexBFCcxPM5Helper42(indexBFCcxPM5Param289[1], "infix").size,
        ),
        indexBFCcxPM5Value1132 = indexBFCcxPM5Param289[2],
        indexBFCcxPM5Value1133 = indexBFCcxPM5Value1131.number > 0;
      return {
        type: "genfrac",
        mode: parser.mode,
        numer: indexBFCcxPM5Value1130,
        denom: indexBFCcxPM5Value1132,
        continued: false,
        hasBarLine: indexBFCcxPM5Value1133,
        barSize: indexBFCcxPM5Value1131,
        leftDelim: null,
        rightDelim: null,
        size: "auto",
      };
    },
    htmlBuilder: indexBFCcxPM5Value239,
    mathmlBuilder: indexBFCcxPM5Value240,
  });
  $i = (indexBFCcxPM5Param34, indexBFCcxPM5Param35) => {
    var indexBFCcxPM5Value545 = indexBFCcxPM5Param35.style,
      indexBFCcxPM5Value546,
      indexBFCcxPM5Value547;
    indexBFCcxPM5Param34.type === "supsub"
      ? ((indexBFCcxPM5Value546 = indexBFCcxPM5Param34.sup
          ? indexBFCcxPM5Value159(
              indexBFCcxPM5Param34.sup,
              indexBFCcxPM5Param35.havingStyle(indexBFCcxPM5Value545.sup()),
              indexBFCcxPM5Param35,
            )
          : indexBFCcxPM5Value159(
              indexBFCcxPM5Param34.sub,
              indexBFCcxPM5Param35.havingStyle(indexBFCcxPM5Value545.sub()),
              indexBFCcxPM5Param35,
            )),
        (indexBFCcxPM5Value547 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param34.base,
          "horizBrace",
        )))
      : (indexBFCcxPM5Value547 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param34,
          "horizBrace",
        ));
    var indexBFCcxPM5Value548 = indexBFCcxPM5Value159(
        indexBFCcxPM5Value547.base,
        indexBFCcxPM5Param35.havingBaseStyle(indexBFCcxPM5Value41.DISPLAY),
      ),
      indexBFCcxPM5Value549 = indexBFCcxPM5Value179.svgSpan(
        indexBFCcxPM5Value547,
        indexBFCcxPM5Param35,
      ),
      indexBFCcxPM5Value550;
    if (
      (indexBFCcxPM5Value547.isOver
        ? ((indexBFCcxPM5Value550 = indexBFCcxPM5Value139.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value548,
                },
                {
                  type: "kern",
                  size: 0.1,
                },
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value549,
                },
              ],
            },
            indexBFCcxPM5Param35,
          )),
          indexBFCcxPM5Value550.children[0].children[0].children[1].classes.push(
            "svg-align",
          ))
        : ((indexBFCcxPM5Value550 = indexBFCcxPM5Value139.makeVList(
            {
              positionType: "bottom",
              positionData:
                indexBFCcxPM5Value548.depth +
                0.1 +
                indexBFCcxPM5Value549.height,
              children: [
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value549,
                },
                {
                  type: "kern",
                  size: 0.1,
                },
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value548,
                },
              ],
            },
            indexBFCcxPM5Param35,
          )),
          indexBFCcxPM5Value550.children[0].children[0].children[0].classes.push(
            "svg-align",
          )),
      indexBFCcxPM5Value546)
    ) {
      var indexBFCcxPM5Value551 = indexBFCcxPM5Value139.makeSpan(
        ["mord", indexBFCcxPM5Value547.isOver ? "mover" : "munder"],
        [indexBFCcxPM5Value550],
        indexBFCcxPM5Param35,
      );
      indexBFCcxPM5Value550 = indexBFCcxPM5Value547.isOver
        ? indexBFCcxPM5Value139.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value551,
                },
                {
                  type: "kern",
                  size: 0.2,
                },
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value546,
                },
              ],
            },
            indexBFCcxPM5Param35,
          )
        : indexBFCcxPM5Value139.makeVList(
            {
              positionType: "bottom",
              positionData:
                indexBFCcxPM5Value551.depth +
                0.2 +
                indexBFCcxPM5Value546.height +
                indexBFCcxPM5Value546.depth,
              children: [
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value546,
                },
                {
                  type: "kern",
                  size: 0.2,
                },
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value551,
                },
              ],
            },
            indexBFCcxPM5Param35,
          );
    }
    return indexBFCcxPM5Value139.makeSpan(
      ["mord", indexBFCcxPM5Value547.isOver ? "mover" : "munder"],
      [indexBFCcxPM5Value550],
      indexBFCcxPM5Param35,
    );
  };
  indexBFCcxPM5Value243 = (indexBFCcxPM5Param662, indexBFCcxPM5Param663) => {
    var indexBFCcxPM5Value1428 = indexBFCcxPM5Value179.mathMLnode(
      indexBFCcxPM5Param662.label,
    );
    return new indexBFCcxPM5Value163.MathNode(
      indexBFCcxPM5Param662.isOver ? "mover" : "munder",
      [
        $(indexBFCcxPM5Param662.base, indexBFCcxPM5Param663),
        indexBFCcxPM5Value1428,
      ],
    );
  };
  indexBFCcxPM5Helper37({
    type: "horizBrace",
    names: ["\\overbrace", "\\underbrace"],
    props: {
      numArgs: 1,
    },
    handler(indexBFCcxPM5Param524, indexBFCcxPM5Param525) {
      var { parser, funcName } = indexBFCcxPM5Param524;
      return {
        type: "horizBrace",
        mode: parser.mode,
        label: funcName,
        isOver: /^\\over/.test(funcName),
        base: indexBFCcxPM5Param525[0],
      };
    },
    htmlBuilder: $i,
    mathmlBuilder: indexBFCcxPM5Value243,
  });
  indexBFCcxPM5Helper37({
    type: "href",
    names: ["\\href"],
    props: {
      numArgs: 2,
      argTypes: ["url", "original"],
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param434, indexBFCcxPM5Param435) => {
      var { parser } = indexBFCcxPM5Param434,
        indexBFCcxPM5Value1285 = indexBFCcxPM5Param435[1],
        indexBFCcxPM5Value1286 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param435[0],
          "url",
        ).url;
      return parser.settings.isTrusted({
        command: "\\href",
        url: indexBFCcxPM5Value1286,
      })
        ? {
            type: "href",
            mode: parser.mode,
            href: indexBFCcxPM5Value1286,
            body: indexBFCcxPM5Value148(indexBFCcxPM5Value1285),
          }
        : parser.formatUnsupportedCmd("\\href");
    },
    htmlBuilder: (indexBFCcxPM5Param733, indexBFCcxPM5Param734) => {
      var indexBFCcxPM5Value1452 = indexBFCcxPM5Value154(
        indexBFCcxPM5Param733.body,
        indexBFCcxPM5Param734,
        false,
      );
      return indexBFCcxPM5Value139.makeAnchor(
        indexBFCcxPM5Param733.href,
        [],
        indexBFCcxPM5Value1452,
        indexBFCcxPM5Param734,
      );
    },
    mathmlBuilder: (indexBFCcxPM5Param579, indexBFCcxPM5Param580) => {
      var indexBFCcxPM5Value1385 = indexBFCcxPM5Value168(
        indexBFCcxPM5Param579.body,
        indexBFCcxPM5Param580,
      );
      return (
        indexBFCcxPM5Value1385 instanceof indexBFCcxPM5Value160 ||
          (indexBFCcxPM5Value1385 = new indexBFCcxPM5Value160("mrow", [
            indexBFCcxPM5Value1385,
          ])),
        indexBFCcxPM5Value1385.setAttribute("href", indexBFCcxPM5Param579.href),
        indexBFCcxPM5Value1385
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "href",
    names: ["\\url"],
    props: {
      numArgs: 1,
      argTypes: ["url"],
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param232, indexBFCcxPM5Param233) => {
      var { parser } = indexBFCcxPM5Param232,
        indexBFCcxPM5Value1060 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param233[0],
          "url",
        ).url;
      if (
        !parser.settings.isTrusted({
          command: "\\url",
          url: indexBFCcxPM5Value1060,
        })
      )
        return parser.formatUnsupportedCmd("\\url");
      for (
        var indexBFCcxPM5Value1061 = [], indexBFCcxPM5Value1062 = 0;
        indexBFCcxPM5Value1062 < indexBFCcxPM5Value1060.length;
        indexBFCcxPM5Value1062++
      ) {
        var indexBFCcxPM5Value1063 =
          indexBFCcxPM5Value1060[indexBFCcxPM5Value1062];
        indexBFCcxPM5Value1063 === "~" &&
          (indexBFCcxPM5Value1063 = "\\textasciitilde");
        indexBFCcxPM5Value1061.push({
          type: "textord",
          mode: "text",
          text: indexBFCcxPM5Value1063,
        });
      }
      var indexBFCcxPM5Value1064 = {
        type: "text",
        mode: parser.mode,
        font: "\\texttt",
        body: indexBFCcxPM5Value1061,
      };
      return {
        type: "href",
        mode: parser.mode,
        href: indexBFCcxPM5Value1060,
        body: indexBFCcxPM5Value148(indexBFCcxPM5Value1064),
      };
    },
  });
  indexBFCcxPM5Helper37({
    type: "hbox",
    names: ["\\hbox"],
    props: {
      numArgs: 1,
      argTypes: ["text"],
      allowedInText: true,
      primitive: true,
    },
    handler(indexBFCcxPM5Param710, indexBFCcxPM5Param711) {
      var { parser } = indexBFCcxPM5Param710;
      return {
        type: "hbox",
        mode: parser.mode,
        body: indexBFCcxPM5Value148(indexBFCcxPM5Param711[0]),
      };
    },
    htmlBuilder(indexBFCcxPM5Param748, indexBFCcxPM5Param749) {
      var indexBFCcxPM5Value1455 = indexBFCcxPM5Value154(
        indexBFCcxPM5Param748.body,
        indexBFCcxPM5Param749,
        false,
      );
      return indexBFCcxPM5Value139.makeFragment(indexBFCcxPM5Value1455);
    },
    mathmlBuilder(indexBFCcxPM5Param785, indexBFCcxPM5Param786) {
      return new indexBFCcxPM5Value163.MathNode(
        "mrow",
        indexBFCcxPM5Value167(
          indexBFCcxPM5Param785.body,
          indexBFCcxPM5Param786,
        ),
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "html",
    names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
    props: {
      numArgs: 2,
      argTypes: ["raw", "original"],
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param77, indexBFCcxPM5Param78) => {
      var { parser, funcName, token } = indexBFCcxPM5Param77,
        indexBFCcxPM5Value721 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param78[0],
          "raw",
        ).string,
        indexBFCcxPM5Value722 = indexBFCcxPM5Param78[1];
      parser.settings.strict &&
        parser.settings.reportNonstrict(
          "htmlExtension",
          "HTML extension is disabled on strict mode",
        );
      var indexBFCcxPM5Value723,
        indexBFCcxPM5Value724 = {};
      switch (funcName) {
        case "\\htmlClass":
          indexBFCcxPM5Value724.class = indexBFCcxPM5Value721;
          indexBFCcxPM5Value723 = {
            command: "\\htmlClass",
            class: indexBFCcxPM5Value721,
          };
          break;
        case "\\htmlId":
          indexBFCcxPM5Value724.id = indexBFCcxPM5Value721;
          indexBFCcxPM5Value723 = {
            command: "\\htmlId",
            id: indexBFCcxPM5Value721,
          };
          break;
        case "\\htmlStyle":
          indexBFCcxPM5Value724.style = indexBFCcxPM5Value721;
          indexBFCcxPM5Value723 = {
            command: "\\htmlStyle",
            style: indexBFCcxPM5Value721,
          };
          break;
        case "\\htmlData":
          for (
            var indexBFCcxPM5Value725 = indexBFCcxPM5Value721.split(","),
              indexBFCcxPM5Value726 = 0;
            indexBFCcxPM5Value726 < indexBFCcxPM5Value725.length;
            indexBFCcxPM5Value726++
          ) {
            var indexBFCcxPM5Value727 =
              indexBFCcxPM5Value725[indexBFCcxPM5Value726].split("=");
            if (indexBFCcxPM5Value727.length !== 2)
              throw new indexBFCcxPM5Value14(
                "Error parsing key-value for \\htmlData",
              );
            indexBFCcxPM5Value724["data-" + indexBFCcxPM5Value727[0].trim()] =
              indexBFCcxPM5Value727[1].trim();
          }
          indexBFCcxPM5Value723 = {
            command: "\\htmlData",
            attributes: indexBFCcxPM5Value724,
          };
          break;
        default:
          throw Error("Unrecognized html command");
      }
      return parser.settings.isTrusted(indexBFCcxPM5Value723)
        ? {
            type: "html",
            mode: parser.mode,
            attributes: indexBFCcxPM5Value724,
            body: indexBFCcxPM5Value148(indexBFCcxPM5Value722),
          }
        : parser.formatUnsupportedCmd(funcName);
    },
    htmlBuilder: (indexBFCcxPM5Param345, indexBFCcxPM5Param346) => {
      var indexBFCcxPM5Value1192 = indexBFCcxPM5Value154(
          indexBFCcxPM5Param345.body,
          indexBFCcxPM5Param346,
          false,
        ),
        indexBFCcxPM5Value1193 = ["enclosing"];
      indexBFCcxPM5Param345.attributes.class &&
        indexBFCcxPM5Value1193.push(
          ...indexBFCcxPM5Param345.attributes.class.trim().split(/\s+/),
        );
      var indexBFCcxPM5Value1194 = indexBFCcxPM5Value139.makeSpan(
        indexBFCcxPM5Value1193,
        indexBFCcxPM5Value1192,
        indexBFCcxPM5Param346,
      );
      for (var indexBFCcxPM5Value1195 in indexBFCcxPM5Param345.attributes)
        indexBFCcxPM5Value1195 !== "class" &&
          indexBFCcxPM5Param345.attributes.hasOwnProperty(
            indexBFCcxPM5Value1195,
          ) &&
          indexBFCcxPM5Value1194.setAttribute(
            indexBFCcxPM5Value1195,
            indexBFCcxPM5Param345.attributes[indexBFCcxPM5Value1195],
          );
      return indexBFCcxPM5Value1194;
    },
    mathmlBuilder: (indexBFCcxPM5Param890, indexBFCcxPM5Param891) =>
      indexBFCcxPM5Value168(indexBFCcxPM5Param890.body, indexBFCcxPM5Param891),
  });
  indexBFCcxPM5Helper37({
    type: "htmlmathml",
    names: ["\\html@mathml"],
    props: {
      numArgs: 2,
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param590, indexBFCcxPM5Param591) => {
      var { parser } = indexBFCcxPM5Param590;
      return {
        type: "htmlmathml",
        mode: parser.mode,
        html: indexBFCcxPM5Value148(indexBFCcxPM5Param591[0]),
        mathml: indexBFCcxPM5Value148(indexBFCcxPM5Param591[1]),
      };
    },
    htmlBuilder: (indexBFCcxPM5Param777, indexBFCcxPM5Param778) => {
      var indexBFCcxPM5Value1463 = indexBFCcxPM5Value154(
        indexBFCcxPM5Param777.html,
        indexBFCcxPM5Param778,
        false,
      );
      return indexBFCcxPM5Value139.makeFragment(indexBFCcxPM5Value1463);
    },
    mathmlBuilder: (indexBFCcxPM5Param881, indexBFCcxPM5Param882) =>
      indexBFCcxPM5Value168(
        indexBFCcxPM5Param881.mathml,
        indexBFCcxPM5Param882,
      ),
  });
  indexBFCcxPM5Value244 = function (indexBFCcxPM5Param304) {
    if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(indexBFCcxPM5Param304))
      return {
        number: +indexBFCcxPM5Param304,
        unit: "bp",
      };
    var indexBFCcxPM5Value1151 =
      /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(indexBFCcxPM5Param304);
    if (!indexBFCcxPM5Value1151)
      throw new indexBFCcxPM5Value14(
        "Invalid size: '" + indexBFCcxPM5Param304 + "' in \\includegraphics",
      );
    var indexBFCcxPM5Value1152 = {
      number: +(indexBFCcxPM5Value1151[1] + indexBFCcxPM5Value1151[2]),
      unit: indexBFCcxPM5Value1151[3],
    };
    if (!indexBFCcxPM5Value67(indexBFCcxPM5Value1152))
      throw new indexBFCcxPM5Value14(
        "Invalid unit: '" +
          indexBFCcxPM5Value1152.unit +
          "' in \\includegraphics.",
      );
    return indexBFCcxPM5Value1152;
  };
  indexBFCcxPM5Helper37({
    type: "includegraphics",
    names: ["\\includegraphics"],
    props: {
      numArgs: 1,
      numOptionalArgs: 1,
      argTypes: ["raw", "url"],
      allowedInText: false,
    },
    handler: (
      indexBFCcxPM5Param54,
      indexBFCcxPM5Param55,
      indexBFCcxPM5Param56,
    ) => {
      var { parser } = indexBFCcxPM5Param54,
        indexBFCcxPM5Value622 = {
          number: 0,
          unit: "em",
        },
        indexBFCcxPM5Value623 = {
          number: 0.9,
          unit: "em",
        },
        indexBFCcxPM5Value624 = {
          number: 0,
          unit: "em",
        },
        indexBFCcxPM5Value625 = "";
      if (indexBFCcxPM5Param56[0])
        for (
          var indexBFCcxPM5Value626 = indexBFCcxPM5Helper42(
              indexBFCcxPM5Param56[0],
              "raw",
            ).string,
            indexBFCcxPM5Value627 = indexBFCcxPM5Value626.split(","),
            indexBFCcxPM5Value628 = 0;
          indexBFCcxPM5Value628 < indexBFCcxPM5Value627.length;
          indexBFCcxPM5Value628++
        ) {
          var indexBFCcxPM5Value629 =
            indexBFCcxPM5Value627[indexBFCcxPM5Value628].split("=");
          if (indexBFCcxPM5Value629.length === 2) {
            var indexBFCcxPM5Value630 = indexBFCcxPM5Value629[1].trim();
            switch (indexBFCcxPM5Value629[0].trim()) {
              case "alt":
                indexBFCcxPM5Value625 = indexBFCcxPM5Value630;
                break;
              case "width":
                indexBFCcxPM5Value622 = indexBFCcxPM5Value244(
                  indexBFCcxPM5Value630,
                );
                break;
              case "height":
                indexBFCcxPM5Value623 = indexBFCcxPM5Value244(
                  indexBFCcxPM5Value630,
                );
                break;
              case "totalheight":
                indexBFCcxPM5Value624 = indexBFCcxPM5Value244(
                  indexBFCcxPM5Value630,
                );
                break;
              default:
                throw new indexBFCcxPM5Value14(
                  "Invalid key: '" +
                    indexBFCcxPM5Value629[0] +
                    "' in \\includegraphics.",
                );
            }
          }
        }
      var indexBFCcxPM5Value631 = indexBFCcxPM5Helper42(
        indexBFCcxPM5Param55[0],
        "url",
      ).url;
      return (
        indexBFCcxPM5Value625 === "" &&
          ((indexBFCcxPM5Value625 = indexBFCcxPM5Value631),
          (indexBFCcxPM5Value625 = indexBFCcxPM5Value625.replace(
            /^.*[\\/]/,
            "",
          )),
          (indexBFCcxPM5Value625 = indexBFCcxPM5Value625.substring(
            0,
            indexBFCcxPM5Value625.lastIndexOf("."),
          ))),
        parser.settings.isTrusted({
          command: "\\includegraphics",
          url: indexBFCcxPM5Value631,
        })
          ? {
              type: "includegraphics",
              mode: parser.mode,
              alt: indexBFCcxPM5Value625,
              width: indexBFCcxPM5Value622,
              height: indexBFCcxPM5Value623,
              totalheight: indexBFCcxPM5Value624,
              src: indexBFCcxPM5Value631,
            }
          : parser.formatUnsupportedCmd("\\includegraphics")
      );
    },
    htmlBuilder: (indexBFCcxPM5Param314, indexBFCcxPM5Param315) => {
      var indexBFCcxPM5Value1167 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param314.height,
          indexBFCcxPM5Param315,
        ),
        indexBFCcxPM5Value1168 = 0;
      indexBFCcxPM5Param314.totalheight.number > 0 &&
        (indexBFCcxPM5Value1168 =
          indexBFCcxPM5Value68(
            indexBFCcxPM5Param314.totalheight,
            indexBFCcxPM5Param315,
          ) - indexBFCcxPM5Value1167);
      var indexBFCcxPM5Value1169 = 0;
      indexBFCcxPM5Param314.width.number > 0 &&
        (indexBFCcxPM5Value1169 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param314.width,
          indexBFCcxPM5Param315,
        ));
      var indexBFCcxPM5Value1170 = {
        height: indexBFCcxPM5Value69(
          indexBFCcxPM5Value1167 + indexBFCcxPM5Value1168,
        ),
      };
      indexBFCcxPM5Value1169 > 0 &&
        (indexBFCcxPM5Value1170.width = indexBFCcxPM5Value69(
          indexBFCcxPM5Value1169,
        ));
      indexBFCcxPM5Value1168 > 0 &&
        (indexBFCcxPM5Value1170.verticalAlign = indexBFCcxPM5Value69(
          -indexBFCcxPM5Value1168,
        ));
      var indexBFCcxPM5Value1171 = new indexBFCcxPM5Value76(
        indexBFCcxPM5Param314.src,
        indexBFCcxPM5Param314.alt,
        indexBFCcxPM5Value1170,
      );
      return (
        (indexBFCcxPM5Value1171.height = indexBFCcxPM5Value1167),
        (indexBFCcxPM5Value1171.depth = indexBFCcxPM5Value1168),
        indexBFCcxPM5Value1171
      );
    },
    mathmlBuilder: (indexBFCcxPM5Param249, indexBFCcxPM5Param250) => {
      var indexBFCcxPM5Value1086 = new indexBFCcxPM5Value163.MathNode(
        "mglyph",
        [],
      );
      indexBFCcxPM5Value1086.setAttribute("alt", indexBFCcxPM5Param249.alt);
      var indexBFCcxPM5Value1087 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param249.height,
          indexBFCcxPM5Param250,
        ),
        indexBFCcxPM5Value1088 = 0;
      if (
        (indexBFCcxPM5Param249.totalheight.number > 0 &&
          ((indexBFCcxPM5Value1088 =
            indexBFCcxPM5Value68(
              indexBFCcxPM5Param249.totalheight,
              indexBFCcxPM5Param250,
            ) - indexBFCcxPM5Value1087),
          indexBFCcxPM5Value1086.setAttribute(
            "valign",
            indexBFCcxPM5Value69(-indexBFCcxPM5Value1088),
          )),
        indexBFCcxPM5Value1086.setAttribute(
          "height",
          indexBFCcxPM5Value69(indexBFCcxPM5Value1087 + indexBFCcxPM5Value1088),
        ),
        indexBFCcxPM5Param249.width.number > 0)
      ) {
        var indexBFCcxPM5Value1089 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param249.width,
          indexBFCcxPM5Param250,
        );
        indexBFCcxPM5Value1086.setAttribute(
          "width",
          indexBFCcxPM5Value69(indexBFCcxPM5Value1089),
        );
      }
      return (
        indexBFCcxPM5Value1086.setAttribute("src", indexBFCcxPM5Param249.src),
        indexBFCcxPM5Value1086
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "kern",
    names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
    props: {
      numArgs: 1,
      argTypes: ["size"],
      primitive: true,
      allowedInText: true,
    },
    handler(indexBFCcxPM5Param117, indexBFCcxPM5Param118) {
      var { parser, funcName } = indexBFCcxPM5Param117,
        indexBFCcxPM5Value862 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param118[0],
          "size",
        );
      if (parser.settings.strict) {
        var indexBFCcxPM5Value863 = funcName[1] === "m",
          indexBFCcxPM5Value864 = indexBFCcxPM5Value862.value.unit === "mu";
        indexBFCcxPM5Value863
          ? (indexBFCcxPM5Value864 ||
              parser.settings.reportNonstrict(
                "mathVsTextUnits",
                "LaTeX's " +
                  funcName +
                  " supports only mu units, " +
                  ("not " + indexBFCcxPM5Value862.value.unit + " units"),
              ),
            parser.mode !== "math" &&
              parser.settings.reportNonstrict(
                "mathVsTextUnits",
                "LaTeX's " + funcName + " works only in math mode",
              ))
          : indexBFCcxPM5Value864 &&
            parser.settings.reportNonstrict(
              "mathVsTextUnits",
              "LaTeX's " + funcName + " doesn't support mu units",
            );
      }
      return {
        type: "kern",
        mode: parser.mode,
        dimension: indexBFCcxPM5Value862.value,
      };
    },
    htmlBuilder(indexBFCcxPM5Param814, indexBFCcxPM5Param815) {
      return indexBFCcxPM5Value139.makeGlue(
        indexBFCcxPM5Param814.dimension,
        indexBFCcxPM5Param815,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param738, indexBFCcxPM5Param739) {
      var indexBFCcxPM5Value1453 = indexBFCcxPM5Value68(
        indexBFCcxPM5Param738.dimension,
        indexBFCcxPM5Param739,
      );
      return new indexBFCcxPM5Value163.SpaceNode(indexBFCcxPM5Value1453);
    },
  });
  indexBFCcxPM5Helper37({
    type: "lap",
    names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
    props: {
      numArgs: 1,
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param621, indexBFCcxPM5Param622) => {
      var { parser, funcName } = indexBFCcxPM5Param621,
        indexBFCcxPM5Value1410 = indexBFCcxPM5Param622[0];
      return {
        type: "lap",
        mode: parser.mode,
        alignment: funcName.slice(5),
        body: indexBFCcxPM5Value1410,
      };
    },
    htmlBuilder: (indexBFCcxPM5Param200, indexBFCcxPM5Param201) => {
      var indexBFCcxPM5Value1002;
      indexBFCcxPM5Param200.alignment === "clap"
        ? ((indexBFCcxPM5Value1002 = indexBFCcxPM5Value139.makeSpan(
            [],
            [
              indexBFCcxPM5Value159(
                indexBFCcxPM5Param200.body,
                indexBFCcxPM5Param201,
              ),
            ],
          )),
          (indexBFCcxPM5Value1002 = indexBFCcxPM5Value139.makeSpan(
            ["inner"],
            [indexBFCcxPM5Value1002],
            indexBFCcxPM5Param201,
          )))
        : (indexBFCcxPM5Value1002 = indexBFCcxPM5Value139.makeSpan(
            ["inner"],
            [
              indexBFCcxPM5Value159(
                indexBFCcxPM5Param200.body,
                indexBFCcxPM5Param201,
              ),
            ],
          ));
      var indexBFCcxPM5Value1003 = indexBFCcxPM5Value139.makeSpan(["fix"], []),
        indexBFCcxPM5Value1004 = indexBFCcxPM5Value139.makeSpan(
          [indexBFCcxPM5Param200.alignment],
          [indexBFCcxPM5Value1002, indexBFCcxPM5Value1003],
          indexBFCcxPM5Param201,
        ),
        indexBFCcxPM5Value1005 = indexBFCcxPM5Value139.makeSpan(["strut"]);
      return (
        (indexBFCcxPM5Value1005.style.height = indexBFCcxPM5Value69(
          indexBFCcxPM5Value1004.height + indexBFCcxPM5Value1004.depth,
        )),
        indexBFCcxPM5Value1004.depth &&
          (indexBFCcxPM5Value1005.style.verticalAlign = indexBFCcxPM5Value69(
            -indexBFCcxPM5Value1004.depth,
          )),
        indexBFCcxPM5Value1004.children.unshift(indexBFCcxPM5Value1005),
        (indexBFCcxPM5Value1004 = indexBFCcxPM5Value139.makeSpan(
          ["thinbox"],
          [indexBFCcxPM5Value1004],
          indexBFCcxPM5Param201,
        )),
        indexBFCcxPM5Value139.makeSpan(
          ["mord", "vbox"],
          [indexBFCcxPM5Value1004],
          indexBFCcxPM5Param201,
        )
      );
    },
    mathmlBuilder: (indexBFCcxPM5Param426, indexBFCcxPM5Param427) => {
      var indexBFCcxPM5Value1279 = new indexBFCcxPM5Value163.MathNode(
        "mpadded",
        [$(indexBFCcxPM5Param426.body, indexBFCcxPM5Param427)],
      );
      if (indexBFCcxPM5Param426.alignment !== "rlap") {
        var indexBFCcxPM5Value1280 =
          indexBFCcxPM5Param426.alignment === "llap" ? "-1" : "-0.5";
        indexBFCcxPM5Value1279.setAttribute(
          "lspace",
          indexBFCcxPM5Value1280 + "width",
        );
      }
      return (
        indexBFCcxPM5Value1279.setAttribute("width", "0px"),
        indexBFCcxPM5Value1279
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "styling",
    names: ["\\(", "$"],
    props: {
      numArgs: 0,
      allowedInText: true,
      allowedInMath: false,
    },
    handler(indexBFCcxPM5Param367, indexBFCcxPM5Param368) {
      var { funcName, parser } = indexBFCcxPM5Param367,
        indexBFCcxPM5Value1218 = parser.mode;
      parser.switchMode("math");
      var indexBFCcxPM5Value1219 = funcName === "\\(" ? "\\)" : "$",
        indexBFCcxPM5Value1220 = parser.parseExpression(
          false,
          indexBFCcxPM5Value1219,
        );
      return (
        parser.expect(indexBFCcxPM5Value1219),
        parser.switchMode(indexBFCcxPM5Value1218),
        {
          type: "styling",
          mode: parser.mode,
          style: "text",
          body: indexBFCcxPM5Value1220,
        }
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "text",
    names: ["\\)", "\\]"],
    props: {
      numArgs: 0,
      allowedInText: true,
      allowedInMath: false,
    },
    handler(indexBFCcxPM5Param808, indexBFCcxPM5Param809) {
      throw new indexBFCcxPM5Value14(
        "Mismatched " + indexBFCcxPM5Param808.funcName,
      );
    },
  });
  indexBFCcxPM5Value245 = (indexBFCcxPM5Param385, indexBFCcxPM5Param386) => {
    switch (indexBFCcxPM5Param386.style.size) {
      case indexBFCcxPM5Value41.DISPLAY.size:
        return indexBFCcxPM5Param385.display;
      case indexBFCcxPM5Value41.TEXT.size:
        return indexBFCcxPM5Param385.text;
      case indexBFCcxPM5Value41.SCRIPT.size:
        return indexBFCcxPM5Param385.script;
      case indexBFCcxPM5Value41.SCRIPTSCRIPT.size:
        return indexBFCcxPM5Param385.scriptscript;
      default:
        return indexBFCcxPM5Param385.text;
    }
  };
  indexBFCcxPM5Helper37({
    type: "mathchoice",
    names: ["\\mathchoice"],
    props: {
      numArgs: 4,
      primitive: true,
    },
    handler: (indexBFCcxPM5Param493, indexBFCcxPM5Param494) => {
      var { parser } = indexBFCcxPM5Param493;
      return {
        type: "mathchoice",
        mode: parser.mode,
        display: indexBFCcxPM5Value148(indexBFCcxPM5Param494[0]),
        text: indexBFCcxPM5Value148(indexBFCcxPM5Param494[1]),
        script: indexBFCcxPM5Value148(indexBFCcxPM5Param494[2]),
        scriptscript: indexBFCcxPM5Value148(indexBFCcxPM5Param494[3]),
      };
    },
    htmlBuilder: (indexBFCcxPM5Param764, indexBFCcxPM5Param765) => {
      var indexBFCcxPM5Value1460 = indexBFCcxPM5Value154(
        indexBFCcxPM5Value245(indexBFCcxPM5Param764, indexBFCcxPM5Param765),
        indexBFCcxPM5Param765,
        false,
      );
      return indexBFCcxPM5Value139.makeFragment(indexBFCcxPM5Value1460);
    },
    mathmlBuilder: (indexBFCcxPM5Param883, indexBFCcxPM5Param884) =>
      indexBFCcxPM5Value168(
        indexBFCcxPM5Value245(indexBFCcxPM5Param883, indexBFCcxPM5Param884),
        indexBFCcxPM5Param884,
      ),
  });
  indexBFCcxPM5Value246 = (
    indexBFCcxPM5Param21,
    indexBFCcxPM5Param22,
    indexBFCcxPM5Param23,
    indexBFCcxPM5Param24,
    indexBFCcxPM5Param25,
    indexBFCcxPM5Param26,
    indexBFCcxPM5Param27,
  ) => {
    indexBFCcxPM5Param21 = indexBFCcxPM5Value139.makeSpan(
      [],
      [indexBFCcxPM5Param21],
    );
    var indexBFCcxPM5Value497 =
        indexBFCcxPM5Param23 &&
        indexBFCcxPM5Value23.isCharacterBox(indexBFCcxPM5Param23),
      indexBFCcxPM5Value498,
      indexBFCcxPM5Value499;
    if (indexBFCcxPM5Param22) {
      var indexBFCcxPM5Value500 = indexBFCcxPM5Value159(
        indexBFCcxPM5Param22,
        indexBFCcxPM5Param24.havingStyle(indexBFCcxPM5Param25.sup()),
        indexBFCcxPM5Param24,
      );
      indexBFCcxPM5Value499 = {
        elem: indexBFCcxPM5Value500,
        kern: Math.max(
          indexBFCcxPM5Param24.fontMetrics().bigOpSpacing1,
          indexBFCcxPM5Param24.fontMetrics().bigOpSpacing3 -
            indexBFCcxPM5Value500.depth,
        ),
      };
    }
    if (indexBFCcxPM5Param23) {
      var indexBFCcxPM5Value501 = indexBFCcxPM5Value159(
        indexBFCcxPM5Param23,
        indexBFCcxPM5Param24.havingStyle(indexBFCcxPM5Param25.sub()),
        indexBFCcxPM5Param24,
      );
      indexBFCcxPM5Value498 = {
        elem: indexBFCcxPM5Value501,
        kern: Math.max(
          indexBFCcxPM5Param24.fontMetrics().bigOpSpacing2,
          indexBFCcxPM5Param24.fontMetrics().bigOpSpacing4 -
            indexBFCcxPM5Value501.height,
        ),
      };
    }
    var indexBFCcxPM5Value502;
    if (indexBFCcxPM5Value499 && indexBFCcxPM5Value498) {
      var indexBFCcxPM5Value503 =
        indexBFCcxPM5Param24.fontMetrics().bigOpSpacing5 +
        indexBFCcxPM5Value498.elem.height +
        indexBFCcxPM5Value498.elem.depth +
        indexBFCcxPM5Value498.kern +
        indexBFCcxPM5Param21.depth +
        indexBFCcxPM5Param27;
      indexBFCcxPM5Value502 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "bottom",
          positionData: indexBFCcxPM5Value503,
          children: [
            {
              type: "kern",
              size: indexBFCcxPM5Param24.fontMetrics().bigOpSpacing5,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value498.elem,
              marginLeft: indexBFCcxPM5Value69(-indexBFCcxPM5Param26),
            },
            {
              type: "kern",
              size: indexBFCcxPM5Value498.kern,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Param21,
            },
            {
              type: "kern",
              size: indexBFCcxPM5Value499.kern,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value499.elem,
              marginLeft: indexBFCcxPM5Value69(indexBFCcxPM5Param26),
            },
            {
              type: "kern",
              size: indexBFCcxPM5Param24.fontMetrics().bigOpSpacing5,
            },
          ],
        },
        indexBFCcxPM5Param24,
      );
    } else if (indexBFCcxPM5Value498) {
      var indexBFCcxPM5Value504 =
        indexBFCcxPM5Param21.height - indexBFCcxPM5Param27;
      indexBFCcxPM5Value502 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "top",
          positionData: indexBFCcxPM5Value504,
          children: [
            {
              type: "kern",
              size: indexBFCcxPM5Param24.fontMetrics().bigOpSpacing5,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value498.elem,
              marginLeft: indexBFCcxPM5Value69(-indexBFCcxPM5Param26),
            },
            {
              type: "kern",
              size: indexBFCcxPM5Value498.kern,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Param21,
            },
          ],
        },
        indexBFCcxPM5Param24,
      );
    } else if (indexBFCcxPM5Value499) {
      var indexBFCcxPM5Value505 =
        indexBFCcxPM5Param21.depth + indexBFCcxPM5Param27;
      indexBFCcxPM5Value502 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "bottom",
          positionData: indexBFCcxPM5Value505,
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Param21,
            },
            {
              type: "kern",
              size: indexBFCcxPM5Value499.kern,
            },
            {
              type: "elem",
              elem: indexBFCcxPM5Value499.elem,
              marginLeft: indexBFCcxPM5Value69(indexBFCcxPM5Param26),
            },
            {
              type: "kern",
              size: indexBFCcxPM5Param24.fontMetrics().bigOpSpacing5,
            },
          ],
        },
        indexBFCcxPM5Param24,
      );
    } else return indexBFCcxPM5Param21;
    var indexBFCcxPM5Value506 = [indexBFCcxPM5Value502];
    if (
      indexBFCcxPM5Value498 &&
      indexBFCcxPM5Param26 !== 0 &&
      !indexBFCcxPM5Value497
    ) {
      var indexBFCcxPM5Value507 = indexBFCcxPM5Value139.makeSpan(
        ["mspace"],
        [],
        indexBFCcxPM5Param24,
      );
      indexBFCcxPM5Value507.style.marginRight =
        indexBFCcxPM5Value69(indexBFCcxPM5Param26);
      indexBFCcxPM5Value506.unshift(indexBFCcxPM5Value507);
    }
    return indexBFCcxPM5Value139.makeSpan(
      ["mop", "op-limits"],
      indexBFCcxPM5Value506,
      indexBFCcxPM5Param24,
    );
  };
  indexBFCcxPM5Value247 = ["\\smallint"];
  indexBFCcxPM5Value248 = (indexBFCcxPM5Param37, indexBFCcxPM5Param38) => {
    var indexBFCcxPM5Value562,
      indexBFCcxPM5Value563,
      indexBFCcxPM5Value564 = false,
      indexBFCcxPM5Value565;
    indexBFCcxPM5Param37.type === "supsub"
      ? ((indexBFCcxPM5Value562 = indexBFCcxPM5Param37.sup),
        (indexBFCcxPM5Value563 = indexBFCcxPM5Param37.sub),
        (indexBFCcxPM5Value565 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param37.base,
          "op",
        )),
        (indexBFCcxPM5Value564 = true))
      : (indexBFCcxPM5Value565 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param37,
          "op",
        ));
    var indexBFCcxPM5Value566 = indexBFCcxPM5Param38.style,
      indexBFCcxPM5Value567 = false;
    indexBFCcxPM5Value566.size === indexBFCcxPM5Value41.DISPLAY.size &&
      indexBFCcxPM5Value565.symbol &&
      !indexBFCcxPM5Value23.contains(
        indexBFCcxPM5Value247,
        indexBFCcxPM5Value565.name,
      ) &&
      (indexBFCcxPM5Value567 = true);
    var indexBFCcxPM5Value568;
    if (indexBFCcxPM5Value565.symbol) {
      var indexBFCcxPM5Value569 = indexBFCcxPM5Value567
          ? "Size2-Regular"
          : "Size1-Regular",
        indexBFCcxPM5Value570 = "";
      if (
        ((indexBFCcxPM5Value565.name === "\\oiint" ||
          indexBFCcxPM5Value565.name === "\\oiiint") &&
          ((indexBFCcxPM5Value570 = indexBFCcxPM5Value565.name.slice(1)),
          (indexBFCcxPM5Value565.name =
            indexBFCcxPM5Value570 === "oiint" ? "\\iint" : "\\iiint")),
        (indexBFCcxPM5Value568 = indexBFCcxPM5Value139.makeSymbol(
          indexBFCcxPM5Value565.name,
          indexBFCcxPM5Value569,
          "math",
          indexBFCcxPM5Param38,
          ["mop", "op-symbol", indexBFCcxPM5Value567 ? "large-op" : "small-op"],
        )),
        indexBFCcxPM5Value570.length > 0)
      ) {
        var indexBFCcxPM5Value571 = indexBFCcxPM5Value568.italic,
          indexBFCcxPM5Value572 = indexBFCcxPM5Value139.staticSvg(
            indexBFCcxPM5Value570 +
              "Size" +
              (indexBFCcxPM5Value567 ? "2" : "1"),
            indexBFCcxPM5Param38,
          );
        indexBFCcxPM5Value568 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "individualShift",
            children: [
              {
                type: "elem",
                elem: indexBFCcxPM5Value568,
                shift: 0,
              },
              {
                type: "elem",
                elem: indexBFCcxPM5Value572,
                shift: indexBFCcxPM5Value567 ? 0.08 : 0,
              },
            ],
          },
          indexBFCcxPM5Param38,
        );
        indexBFCcxPM5Value565.name = "\\" + indexBFCcxPM5Value570;
        indexBFCcxPM5Value568.classes.unshift("mop");
        indexBFCcxPM5Value568.italic = indexBFCcxPM5Value571;
      }
    } else if (indexBFCcxPM5Value565.body) {
      var indexBFCcxPM5Value573 = indexBFCcxPM5Value154(
        indexBFCcxPM5Value565.body,
        indexBFCcxPM5Param38,
        true,
      );
      indexBFCcxPM5Value573.length === 1 &&
      indexBFCcxPM5Value573[0] instanceof indexBFCcxPM5Value77
        ? ((indexBFCcxPM5Value568 = indexBFCcxPM5Value573[0]),
          (indexBFCcxPM5Value568.classes[0] = "mop"))
        : (indexBFCcxPM5Value568 = indexBFCcxPM5Value139.makeSpan(
            ["mop"],
            indexBFCcxPM5Value573,
            indexBFCcxPM5Param38,
          ));
    } else {
      for (
        var indexBFCcxPM5Value574 = [], indexBFCcxPM5Value575 = 1;
        indexBFCcxPM5Value575 < indexBFCcxPM5Value565.name.length;
        indexBFCcxPM5Value575++
      )
        indexBFCcxPM5Value574.push(
          indexBFCcxPM5Value139.mathsym(
            indexBFCcxPM5Value565.name[indexBFCcxPM5Value575],
            indexBFCcxPM5Value565.mode,
            indexBFCcxPM5Param38,
          ),
        );
      indexBFCcxPM5Value568 = indexBFCcxPM5Value139.makeSpan(
        ["mop"],
        indexBFCcxPM5Value574,
        indexBFCcxPM5Param38,
      );
    }
    var indexBFCcxPM5Value576 = 0,
      indexBFCcxPM5Value577 = 0;
    return (
      (indexBFCcxPM5Value568 instanceof indexBFCcxPM5Value77 ||
        indexBFCcxPM5Value565.name === "\\oiint" ||
        indexBFCcxPM5Value565.name === "\\oiiint") &&
        !indexBFCcxPM5Value565.suppressBaseShift &&
        ((indexBFCcxPM5Value576 =
          (indexBFCcxPM5Value568.height - indexBFCcxPM5Value568.depth) / 2 -
          indexBFCcxPM5Param38.fontMetrics().axisHeight),
        (indexBFCcxPM5Value577 = indexBFCcxPM5Value568.italic)),
      indexBFCcxPM5Value564
        ? indexBFCcxPM5Value246(
            indexBFCcxPM5Value568,
            indexBFCcxPM5Value562,
            indexBFCcxPM5Value563,
            indexBFCcxPM5Param38,
            indexBFCcxPM5Value566,
            indexBFCcxPM5Value577,
            indexBFCcxPM5Value576,
          )
        : (indexBFCcxPM5Value576 &&
            ((indexBFCcxPM5Value568.style.position = "relative"),
            (indexBFCcxPM5Value568.style.top = indexBFCcxPM5Value69(
              indexBFCcxPM5Value576,
            ))),
          indexBFCcxPM5Value568)
    );
  };
  indexBFCcxPM5Value249 = (indexBFCcxPM5Param291, indexBFCcxPM5Param292) => {
    var indexBFCcxPM5Value1134;
    if (indexBFCcxPM5Param291.symbol) {
      indexBFCcxPM5Value1134 = new indexBFCcxPM5Value160("mo", [
        indexBFCcxPM5Value164(
          indexBFCcxPM5Param291.name,
          indexBFCcxPM5Param291.mode,
        ),
      ]);
      indexBFCcxPM5Value23.contains(
        indexBFCcxPM5Value247,
        indexBFCcxPM5Param291.name,
      ) && indexBFCcxPM5Value1134.setAttribute("largeop", "false");
    } else if (indexBFCcxPM5Param291.body)
      indexBFCcxPM5Value1134 = new indexBFCcxPM5Value160(
        "mo",
        indexBFCcxPM5Value167(
          indexBFCcxPM5Param291.body,
          indexBFCcxPM5Param292,
        ),
      );
    else {
      indexBFCcxPM5Value1134 = new indexBFCcxPM5Value160("mi", [
        new indexBFCcxPM5Value161(indexBFCcxPM5Param291.name.slice(1)),
      ]);
      var indexBFCcxPM5Value1135 = new indexBFCcxPM5Value160("mo", [
        indexBFCcxPM5Value164("⁡", "text"),
      ]);
      indexBFCcxPM5Value1134 = indexBFCcxPM5Param291.parentIsSupSub
        ? new indexBFCcxPM5Value160("mrow", [
            indexBFCcxPM5Value1134,
            indexBFCcxPM5Value1135,
          ])
        : be([indexBFCcxPM5Value1134, indexBFCcxPM5Value1135]);
    }
    return indexBFCcxPM5Value1134;
  };
  indexBFCcxPM5Value250 = {
    "∏": "\\prod",
    "∐": "\\coprod",
    "∑": "\\sum",
    "⋀": "\\bigwedge",
    "⋁": "\\bigvee",
    "⋂": "\\bigcap",
    "⋃": "\\bigcup",
    "⨀": "\\bigodot",
    "⨁": "\\bigoplus",
    "⨂": "\\bigotimes",
    "⨄": "\\biguplus",
    "⨆": "\\bigsqcup",
  };
  indexBFCcxPM5Helper37({
    type: "op",
    names:
      "\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.∏.∐.∑.⋀.⋁.⋂.⋃.⨀.⨁.⨂.⨄.⨆".split(
        ".",
      ),
    props: {
      numArgs: 0,
    },
    handler: (indexBFCcxPM5Param389, indexBFCcxPM5Param390) => {
      var { parser, funcName } = indexBFCcxPM5Param389,
        indexBFCcxPM5Value1250 = funcName;
      return (
        indexBFCcxPM5Value1250.length === 1 &&
          (indexBFCcxPM5Value1250 =
            indexBFCcxPM5Value250[indexBFCcxPM5Value1250]),
        {
          type: "op",
          mode: parser.mode,
          limits: true,
          parentIsSupSub: false,
          symbol: true,
          name: indexBFCcxPM5Value1250,
        }
      );
    },
    htmlBuilder: indexBFCcxPM5Value248,
    mathmlBuilder: indexBFCcxPM5Value249,
  });
  indexBFCcxPM5Helper37({
    type: "op",
    names: ["\\mathop"],
    props: {
      numArgs: 1,
      primitive: true,
    },
    handler: (indexBFCcxPM5Param504, indexBFCcxPM5Param505) => {
      var { parser } = indexBFCcxPM5Param504,
        indexBFCcxPM5Value1333 = indexBFCcxPM5Param505[0];
      return {
        type: "op",
        mode: parser.mode,
        limits: false,
        parentIsSupSub: false,
        symbol: false,
        body: indexBFCcxPM5Value148(indexBFCcxPM5Value1333),
      };
    },
    htmlBuilder: indexBFCcxPM5Value248,
    mathmlBuilder: indexBFCcxPM5Value249,
  });
  indexBFCcxPM5Value251 = {
    "∫": "\\int",
    "∬": "\\iint",
    "∭": "\\iiint",
    "∮": "\\oint",
    "∯": "\\oiint",
    "∰": "\\oiiint",
  };
  indexBFCcxPM5Helper37({
    type: "op",
    names:
      "\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th".split(
        ".",
      ),
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param521) {
      var { parser, funcName } = indexBFCcxPM5Param521;
      return {
        type: "op",
        mode: parser.mode,
        limits: false,
        parentIsSupSub: false,
        symbol: false,
        name: funcName,
      };
    },
    htmlBuilder: indexBFCcxPM5Value248,
    mathmlBuilder: indexBFCcxPM5Value249,
  });
  indexBFCcxPM5Helper37({
    type: "op",
    names: [
      "\\det",
      "\\gcd",
      "\\inf",
      "\\lim",
      "\\max",
      "\\min",
      "\\Pr",
      "\\sup",
    ],
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param522) {
      var { parser, funcName } = indexBFCcxPM5Param522;
      return {
        type: "op",
        mode: parser.mode,
        limits: true,
        parentIsSupSub: false,
        symbol: false,
        name: funcName,
      };
    },
    htmlBuilder: indexBFCcxPM5Value248,
    mathmlBuilder: indexBFCcxPM5Value249,
  });
  indexBFCcxPM5Helper37({
    type: "op",
    names: [
      "\\int",
      "\\iint",
      "\\iiint",
      "\\oint",
      "\\oiint",
      "\\oiiint",
      "∫",
      "∬",
      "∭",
      "∮",
      "∯",
      "∰",
    ],
    props: {
      numArgs: 0,
    },
    handler(indexBFCcxPM5Param388) {
      var { parser, funcName } = indexBFCcxPM5Param388,
        indexBFCcxPM5Value1249 = funcName;
      return (
        indexBFCcxPM5Value1249.length === 1 &&
          (indexBFCcxPM5Value1249 =
            indexBFCcxPM5Value251[indexBFCcxPM5Value1249]),
        {
          type: "op",
          mode: parser.mode,
          limits: false,
          parentIsSupSub: false,
          symbol: true,
          name: indexBFCcxPM5Value1249,
        }
      );
    },
    htmlBuilder: indexBFCcxPM5Value248,
    mathmlBuilder: indexBFCcxPM5Value249,
  });
  indexBFCcxPM5Value252 = (indexBFCcxPM5Param119, indexBFCcxPM5Param120) => {
    var indexBFCcxPM5Value865,
      indexBFCcxPM5Value866,
      indexBFCcxPM5Value867 = false,
      indexBFCcxPM5Value868;
    indexBFCcxPM5Param119.type === "supsub"
      ? ((indexBFCcxPM5Value865 = indexBFCcxPM5Param119.sup),
        (indexBFCcxPM5Value866 = indexBFCcxPM5Param119.sub),
        (indexBFCcxPM5Value868 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param119.base,
          "operatorname",
        )),
        (indexBFCcxPM5Value867 = true))
      : (indexBFCcxPM5Value868 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param119,
          "operatorname",
        ));
    var indexBFCcxPM5Value869;
    if (indexBFCcxPM5Value868.body.length > 0) {
      for (
        var indexBFCcxPM5Value870 = indexBFCcxPM5Value154(
            indexBFCcxPM5Value868.body.map((item) => {
              var indexBFCcxPM5Value1386 = item.text;
              return typeof indexBFCcxPM5Value1386 == "string"
                ? {
                    type: "textord",
                    mode: item.mode,
                    text: indexBFCcxPM5Value1386,
                  }
                : item;
            }),
            indexBFCcxPM5Param120.withFont("mathrm"),
            true,
          ),
          indexBFCcxPM5Value871 = 0;
        indexBFCcxPM5Value871 < indexBFCcxPM5Value870.length;
        indexBFCcxPM5Value871++
      ) {
        var indexBFCcxPM5Value872 =
          indexBFCcxPM5Value870[indexBFCcxPM5Value871];
        indexBFCcxPM5Value872 instanceof indexBFCcxPM5Value77 &&
          (indexBFCcxPM5Value872.text = indexBFCcxPM5Value872.text
            .replace(/\u2212/, "-")
            .replace(/\u2217/, "*"));
      }
      indexBFCcxPM5Value869 = indexBFCcxPM5Value139.makeSpan(
        ["mop"],
        indexBFCcxPM5Value870,
        indexBFCcxPM5Param120,
      );
    } else
      indexBFCcxPM5Value869 = indexBFCcxPM5Value139.makeSpan(
        ["mop"],
        [],
        indexBFCcxPM5Param120,
      );
    return indexBFCcxPM5Value867
      ? indexBFCcxPM5Value246(
          indexBFCcxPM5Value869,
          indexBFCcxPM5Value865,
          indexBFCcxPM5Value866,
          indexBFCcxPM5Param120,
          indexBFCcxPM5Param120.style,
          0,
          0,
        )
      : indexBFCcxPM5Value869;
  };
  indexBFCcxPM5Value253 = (indexBFCcxPM5Param85, indexBFCcxPM5Param86) => {
    for (
      var indexBFCcxPM5Value749 = indexBFCcxPM5Value167(
          indexBFCcxPM5Param85.body,
          indexBFCcxPM5Param86.withFont("mathrm"),
        ),
        indexBFCcxPM5Value750 = true,
        indexBFCcxPM5Value751 = 0;
      indexBFCcxPM5Value751 < indexBFCcxPM5Value749.length;
      indexBFCcxPM5Value751++
    ) {
      var indexBFCcxPM5Value752 = indexBFCcxPM5Value749[indexBFCcxPM5Value751];
      if (!(indexBFCcxPM5Value752 instanceof indexBFCcxPM5Value163.SpaceNode))
        if (indexBFCcxPM5Value752 instanceof indexBFCcxPM5Value163.MathNode)
          switch (indexBFCcxPM5Value752.type) {
            case "mi":
            case "mn":
            case "ms":
            case "mspace":
            case "mtext":
              break;
            case "mo":
              var indexBFCcxPM5Value753 = indexBFCcxPM5Value752.children[0];
              indexBFCcxPM5Value752.children.length === 1 &&
              indexBFCcxPM5Value753 instanceof indexBFCcxPM5Value163.TextNode
                ? (indexBFCcxPM5Value753.text = indexBFCcxPM5Value753.text
                    .replace(/\u2212/, "-")
                    .replace(/\u2217/, "*"))
                : (indexBFCcxPM5Value750 = false);
              break;
            default:
              indexBFCcxPM5Value750 = false;
          }
        else indexBFCcxPM5Value750 = false;
    }
    if (indexBFCcxPM5Value750) {
      var indexBFCcxPM5Value754 = indexBFCcxPM5Value749
        .map((item) => item.toText())
        .join("");
      indexBFCcxPM5Value749 = [
        new indexBFCcxPM5Value163.TextNode(indexBFCcxPM5Value754),
      ];
    }
    var indexBFCcxPM5Value755 = new indexBFCcxPM5Value163.MathNode(
      "mi",
      indexBFCcxPM5Value749,
    );
    indexBFCcxPM5Value755.setAttribute("mathvariant", "normal");
    var indexBFCcxPM5Value756 = new indexBFCcxPM5Value163.MathNode("mo", [
      indexBFCcxPM5Value164("⁡", "text"),
    ]);
    return indexBFCcxPM5Param85.parentIsSupSub
      ? new indexBFCcxPM5Value163.MathNode("mrow", [
          indexBFCcxPM5Value755,
          indexBFCcxPM5Value756,
        ])
      : indexBFCcxPM5Value163.newDocumentFragment([
          indexBFCcxPM5Value755,
          indexBFCcxPM5Value756,
        ]);
  };
  indexBFCcxPM5Helper37({
    type: "operatorname",
    names: ["\\operatorname@", "\\operatornamewithlimits"],
    props: {
      numArgs: 1,
    },
    handler: (indexBFCcxPM5Param413, indexBFCcxPM5Param414) => {
      var { parser, funcName } = indexBFCcxPM5Param413,
        indexBFCcxPM5Value1271 = indexBFCcxPM5Param414[0];
      return {
        type: "operatorname",
        mode: parser.mode,
        body: indexBFCcxPM5Value148(indexBFCcxPM5Value1271),
        alwaysHandleSupSub: funcName === "\\operatornamewithlimits",
        limits: false,
        parentIsSupSub: false,
      };
    },
    htmlBuilder: indexBFCcxPM5Value252,
    mathmlBuilder: indexBFCcxPM5Value253,
  });
  indexBFCcxPM5Helper52(
    "\\operatorname",
    "\\@ifstar\\operatornamewithlimits\\operatorname@",
  );
  _e({
    type: "ordgroup",
    htmlBuilder(indexBFCcxPM5Param629, indexBFCcxPM5Param630) {
      return indexBFCcxPM5Param629.semisimple
        ? indexBFCcxPM5Value139.makeFragment(
            indexBFCcxPM5Value154(
              indexBFCcxPM5Param629.body,
              indexBFCcxPM5Param630,
              false,
            ),
          )
        : indexBFCcxPM5Value139.makeSpan(
            ["mord"],
            indexBFCcxPM5Value154(
              indexBFCcxPM5Param629.body,
              indexBFCcxPM5Param630,
              true,
            ),
            indexBFCcxPM5Param630,
          );
    },
    mathmlBuilder(indexBFCcxPM5Param840, indexBFCcxPM5Param841) {
      return indexBFCcxPM5Value168(
        indexBFCcxPM5Param840.body,
        indexBFCcxPM5Param841,
        true,
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "overline",
    names: ["\\overline"],
    props: {
      numArgs: 1,
    },
    handler(indexBFCcxPM5Param664, indexBFCcxPM5Param665) {
      var { parser } = indexBFCcxPM5Param664,
        indexBFCcxPM5Value1429 = indexBFCcxPM5Param665[0];
      return {
        type: "overline",
        mode: parser.mode,
        body: indexBFCcxPM5Value1429,
      };
    },
    htmlBuilder(indexBFCcxPM5Param218, indexBFCcxPM5Param219) {
      var indexBFCcxPM5Value1034 = indexBFCcxPM5Value159(
          indexBFCcxPM5Param218.body,
          indexBFCcxPM5Param219.havingCrampedStyle(),
        ),
        indexBFCcxPM5Value1035 = indexBFCcxPM5Value139.makeLineSpan(
          "overline-line",
          indexBFCcxPM5Param219,
        ),
        indexBFCcxPM5Value1036 =
          indexBFCcxPM5Param219.fontMetrics().defaultRuleThickness,
        indexBFCcxPM5Value1037 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "firstBaseline",
            children: [
              {
                type: "elem",
                elem: indexBFCcxPM5Value1034,
              },
              {
                type: "kern",
                size: 3 * indexBFCcxPM5Value1036,
              },
              {
                type: "elem",
                elem: indexBFCcxPM5Value1035,
              },
              {
                type: "kern",
                size: indexBFCcxPM5Value1036,
              },
            ],
          },
          indexBFCcxPM5Param219,
        );
      return indexBFCcxPM5Value139.makeSpan(
        ["mord", "overline"],
        [indexBFCcxPM5Value1037],
        indexBFCcxPM5Param219,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param489, indexBFCcxPM5Param490) {
      var indexBFCcxPM5Value1326 = new indexBFCcxPM5Value163.MathNode("mo", [
        new indexBFCcxPM5Value163.TextNode("‾"),
      ]);
      indexBFCcxPM5Value1326.setAttribute("stretchy", "true");
      var indexBFCcxPM5Value1327 = new indexBFCcxPM5Value163.MathNode("mover", [
        $(indexBFCcxPM5Param489.body, indexBFCcxPM5Param490),
        indexBFCcxPM5Value1326,
      ]);
      return (
        indexBFCcxPM5Value1327.setAttribute("accent", "true"),
        indexBFCcxPM5Value1327
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "phantom",
    names: ["\\phantom"],
    props: {
      numArgs: 1,
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param676, indexBFCcxPM5Param677) => {
      var { parser } = indexBFCcxPM5Param676,
        indexBFCcxPM5Value1433 = indexBFCcxPM5Param677[0];
      return {
        type: "phantom",
        mode: parser.mode,
        body: indexBFCcxPM5Value148(indexBFCcxPM5Value1433),
      };
    },
    htmlBuilder: (indexBFCcxPM5Param728, indexBFCcxPM5Param729) => {
      var indexBFCcxPM5Value1450 = indexBFCcxPM5Value154(
        indexBFCcxPM5Param728.body,
        indexBFCcxPM5Param729.withPhantom(),
        false,
      );
      return indexBFCcxPM5Value139.makeFragment(indexBFCcxPM5Value1450);
    },
    mathmlBuilder: (indexBFCcxPM5Param744, indexBFCcxPM5Param745) => {
      var indexBFCcxPM5Value1454 = indexBFCcxPM5Value167(
        indexBFCcxPM5Param744.body,
        indexBFCcxPM5Param745,
      );
      return new indexBFCcxPM5Value163.MathNode(
        "mphantom",
        indexBFCcxPM5Value1454,
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "hphantom",
    names: ["\\hphantom"],
    props: {
      numArgs: 1,
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param678, indexBFCcxPM5Param679) => {
      var { parser } = indexBFCcxPM5Param678,
        indexBFCcxPM5Value1434 = indexBFCcxPM5Param679[0];
      return {
        type: "hphantom",
        mode: parser.mode,
        body: indexBFCcxPM5Value1434,
      };
    },
    htmlBuilder: (indexBFCcxPM5Param247, indexBFCcxPM5Param248) => {
      var indexBFCcxPM5Value1084 = indexBFCcxPM5Value139.makeSpan(
        [],
        [
          indexBFCcxPM5Value159(
            indexBFCcxPM5Param247.body,
            indexBFCcxPM5Param248.withPhantom(),
          ),
        ],
      );
      if (
        ((indexBFCcxPM5Value1084.height = 0),
        (indexBFCcxPM5Value1084.depth = 0),
        indexBFCcxPM5Value1084.children)
      )
        for (
          var indexBFCcxPM5Value1085 = 0;
          indexBFCcxPM5Value1085 < indexBFCcxPM5Value1084.children.length;
          indexBFCcxPM5Value1085++
        ) {
          indexBFCcxPM5Value1084.children[indexBFCcxPM5Value1085].height = 0;
          indexBFCcxPM5Value1084.children[indexBFCcxPM5Value1085].depth = 0;
        }
      return (
        (indexBFCcxPM5Value1084 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "firstBaseline",
            children: [
              {
                type: "elem",
                elem: indexBFCcxPM5Value1084,
              },
            ],
          },
          indexBFCcxPM5Param248,
        )),
        indexBFCcxPM5Value139.makeSpan(
          ["mord"],
          [indexBFCcxPM5Value1084],
          indexBFCcxPM5Param248,
        )
      );
    },
    mathmlBuilder: (indexBFCcxPM5Param455, indexBFCcxPM5Param456) => {
      var indexBFCcxPM5Value1301 = indexBFCcxPM5Value167(
          indexBFCcxPM5Value148(indexBFCcxPM5Param455.body),
          indexBFCcxPM5Param456,
        ),
        indexBFCcxPM5Value1302 = new indexBFCcxPM5Value163.MathNode(
          "mphantom",
          indexBFCcxPM5Value1301,
        ),
        indexBFCcxPM5Value1303 = new indexBFCcxPM5Value163.MathNode("mpadded", [
          indexBFCcxPM5Value1302,
        ]);
      return (
        indexBFCcxPM5Value1303.setAttribute("height", "0px"),
        indexBFCcxPM5Value1303.setAttribute("depth", "0px"),
        indexBFCcxPM5Value1303
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "vphantom",
    names: ["\\vphantom"],
    props: {
      numArgs: 1,
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param680, indexBFCcxPM5Param681) => {
      var { parser } = indexBFCcxPM5Param680,
        indexBFCcxPM5Value1435 = indexBFCcxPM5Param681[0];
      return {
        type: "vphantom",
        mode: parser.mode,
        body: indexBFCcxPM5Value1435,
      };
    },
    htmlBuilder: (indexBFCcxPM5Param592, indexBFCcxPM5Param593) => {
      var indexBFCcxPM5Value1390 = indexBFCcxPM5Value139.makeSpan(
          ["inner"],
          [
            indexBFCcxPM5Value159(
              indexBFCcxPM5Param592.body,
              indexBFCcxPM5Param593.withPhantom(),
            ),
          ],
        ),
        indexBFCcxPM5Value1391 = indexBFCcxPM5Value139.makeSpan(["fix"], []);
      return indexBFCcxPM5Value139.makeSpan(
        ["mord", "rlap"],
        [indexBFCcxPM5Value1390, indexBFCcxPM5Value1391],
        indexBFCcxPM5Param593,
      );
    },
    mathmlBuilder: (indexBFCcxPM5Param571, indexBFCcxPM5Param572) => {
      var indexBFCcxPM5Value1378 = indexBFCcxPM5Value167(
          indexBFCcxPM5Value148(indexBFCcxPM5Param571.body),
          indexBFCcxPM5Param572,
        ),
        indexBFCcxPM5Value1379 = new indexBFCcxPM5Value163.MathNode(
          "mphantom",
          indexBFCcxPM5Value1378,
        ),
        indexBFCcxPM5Value1380 = new indexBFCcxPM5Value163.MathNode("mpadded", [
          indexBFCcxPM5Value1379,
        ]);
      return (
        indexBFCcxPM5Value1380.setAttribute("width", "0px"),
        indexBFCcxPM5Value1380
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "raisebox",
    names: ["\\raisebox"],
    props: {
      numArgs: 2,
      argTypes: ["size", "hbox"],
      allowedInText: true,
    },
    handler(indexBFCcxPM5Param596, indexBFCcxPM5Param597) {
      var { parser } = indexBFCcxPM5Param596,
        indexBFCcxPM5Value1392 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param597[0],
          "size",
        ).value,
        indexBFCcxPM5Value1393 = indexBFCcxPM5Param597[1];
      return {
        type: "raisebox",
        mode: parser.mode,
        dy: indexBFCcxPM5Value1392,
        body: indexBFCcxPM5Value1393,
      };
    },
    htmlBuilder(indexBFCcxPM5Param442, indexBFCcxPM5Param443) {
      var indexBFCcxPM5Value1291 = indexBFCcxPM5Value159(
          indexBFCcxPM5Param442.body,
          indexBFCcxPM5Param443,
        ),
        indexBFCcxPM5Value1292 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param442.dy,
          indexBFCcxPM5Param443,
        );
      return indexBFCcxPM5Value139.makeVList(
        {
          positionType: "shift",
          positionData: -indexBFCcxPM5Value1292,
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value1291,
            },
          ],
        },
        indexBFCcxPM5Param443,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param601, indexBFCcxPM5Param602) {
      var indexBFCcxPM5Value1396 = new indexBFCcxPM5Value163.MathNode(
          "mpadded",
          [$(indexBFCcxPM5Param601.body, indexBFCcxPM5Param602)],
        ),
        indexBFCcxPM5Value1397 =
          indexBFCcxPM5Param601.dy.number + indexBFCcxPM5Param601.dy.unit;
      return (
        indexBFCcxPM5Value1396.setAttribute("voffset", indexBFCcxPM5Value1397),
        indexBFCcxPM5Value1396
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "internal",
    names: ["\\relax"],
    props: {
      numArgs: 0,
      allowedInText: true,
      allowedInArgument: true,
    },
    handler(indexBFCcxPM5Param727) {
      var { parser } = indexBFCcxPM5Param727;
      return {
        type: "internal",
        mode: parser.mode,
      };
    },
  });
  indexBFCcxPM5Helper37({
    type: "rule",
    names: ["\\rule"],
    props: {
      numArgs: 2,
      numOptionalArgs: 1,
      allowedInText: true,
      allowedInMath: true,
      argTypes: ["size", "size", "size"],
    },
    handler(
      indexBFCcxPM5Param405,
      indexBFCcxPM5Param406,
      indexBFCcxPM5Param407,
    ) {
      var { parser } = indexBFCcxPM5Param405,
        indexBFCcxPM5Value1263 = indexBFCcxPM5Param407[0],
        indexBFCcxPM5Value1264 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param406[0],
          "size",
        ),
        indexBFCcxPM5Value1265 = indexBFCcxPM5Helper42(
          indexBFCcxPM5Param406[1],
          "size",
        );
      return {
        type: "rule",
        mode: parser.mode,
        shift:
          indexBFCcxPM5Value1263 &&
          indexBFCcxPM5Helper42(indexBFCcxPM5Value1263, "size").value,
        width: indexBFCcxPM5Value1264.value,
        height: indexBFCcxPM5Value1265.value,
      };
    },
    htmlBuilder(indexBFCcxPM5Param261, indexBFCcxPM5Param262) {
      var indexBFCcxPM5Value1099 = indexBFCcxPM5Value139.makeSpan(
          ["mord", "rule"],
          [],
          indexBFCcxPM5Param262,
        ),
        indexBFCcxPM5Value1100 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param261.width,
          indexBFCcxPM5Param262,
        ),
        indexBFCcxPM5Value1101 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param261.height,
          indexBFCcxPM5Param262,
        ),
        indexBFCcxPM5Value1102 = indexBFCcxPM5Param261.shift
          ? indexBFCcxPM5Value68(
              indexBFCcxPM5Param261.shift,
              indexBFCcxPM5Param262,
            )
          : 0;
      return (
        (indexBFCcxPM5Value1099.style.borderRightWidth = indexBFCcxPM5Value69(
          indexBFCcxPM5Value1100,
        )),
        (indexBFCcxPM5Value1099.style.borderTopWidth = indexBFCcxPM5Value69(
          indexBFCcxPM5Value1101,
        )),
        (indexBFCcxPM5Value1099.style.bottom = indexBFCcxPM5Value69(
          indexBFCcxPM5Value1102,
        )),
        (indexBFCcxPM5Value1099.width = indexBFCcxPM5Value1100),
        (indexBFCcxPM5Value1099.height =
          indexBFCcxPM5Value1101 + indexBFCcxPM5Value1102),
        (indexBFCcxPM5Value1099.depth = -indexBFCcxPM5Value1102),
        (indexBFCcxPM5Value1099.maxFontSize =
          indexBFCcxPM5Value1101 *
          1.125 *
          indexBFCcxPM5Param262.sizeMultiplier),
        indexBFCcxPM5Value1099
      );
    },
    mathmlBuilder(indexBFCcxPM5Param196, indexBFCcxPM5Param197) {
      var indexBFCcxPM5Value990 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param196.width,
          indexBFCcxPM5Param197,
        ),
        indexBFCcxPM5Value991 = indexBFCcxPM5Value68(
          indexBFCcxPM5Param196.height,
          indexBFCcxPM5Param197,
        ),
        indexBFCcxPM5Value992 = indexBFCcxPM5Param196.shift
          ? indexBFCcxPM5Value68(
              indexBFCcxPM5Param196.shift,
              indexBFCcxPM5Param197,
            )
          : 0,
        indexBFCcxPM5Value993 =
          (indexBFCcxPM5Param197.color && indexBFCcxPM5Param197.getColor()) ||
          "black",
        indexBFCcxPM5Value994 = new indexBFCcxPM5Value163.MathNode("mspace");
      indexBFCcxPM5Value994.setAttribute(
        "mathbackground",
        indexBFCcxPM5Value993,
      );
      indexBFCcxPM5Value994.setAttribute(
        "width",
        indexBFCcxPM5Value69(indexBFCcxPM5Value990),
      );
      indexBFCcxPM5Value994.setAttribute(
        "height",
        indexBFCcxPM5Value69(indexBFCcxPM5Value991),
      );
      var indexBFCcxPM5Value995 = new indexBFCcxPM5Value163.MathNode(
        "mpadded",
        [indexBFCcxPM5Value994],
      );
      return (
        indexBFCcxPM5Value992 >= 0
          ? indexBFCcxPM5Value995.setAttribute(
              "height",
              indexBFCcxPM5Value69(indexBFCcxPM5Value992),
            )
          : (indexBFCcxPM5Value995.setAttribute(
              "height",
              indexBFCcxPM5Value69(indexBFCcxPM5Value992),
            ),
            indexBFCcxPM5Value995.setAttribute(
              "depth",
              indexBFCcxPM5Value69(-indexBFCcxPM5Value992),
            )),
        indexBFCcxPM5Value995.setAttribute(
          "voffset",
          indexBFCcxPM5Value69(indexBFCcxPM5Value992),
        ),
        indexBFCcxPM5Value995
      );
    },
  });
  indexBFCcxPM5Value254 = [
    "\\tiny",
    "\\sixptsize",
    "\\scriptsize",
    "\\footnotesize",
    "\\small",
    "\\normalsize",
    "\\large",
    "\\Large",
    "\\LARGE",
    "\\huge",
    "\\Huge",
  ];
  indexBFCcxPM5Value255 = (indexBFCcxPM5Param783, indexBFCcxPM5Param784) => {
    var indexBFCcxPM5Value1465 = indexBFCcxPM5Param784.havingSize(
      indexBFCcxPM5Param783.size,
    );
    return indexBFCcxPM5Helper57(
      indexBFCcxPM5Param783.body,
      indexBFCcxPM5Value1465,
      indexBFCcxPM5Param784,
    );
  };
  indexBFCcxPM5Helper37({
    type: "sizing",
    names: indexBFCcxPM5Value254,
    props: {
      numArgs: 0,
      allowedInText: true,
    },
    handler: (indexBFCcxPM5Param476, indexBFCcxPM5Param477) => {
      var { breakOnTokenText, funcName, parser } = indexBFCcxPM5Param476,
        indexBFCcxPM5Value1317 = parser.parseExpression(
          false,
          breakOnTokenText,
        );
      return {
        type: "sizing",
        mode: parser.mode,
        size: indexBFCcxPM5Value254.indexOf(funcName) + 1,
        body: indexBFCcxPM5Value1317,
      };
    },
    htmlBuilder: indexBFCcxPM5Value255,
    mathmlBuilder: (indexBFCcxPM5Param566, indexBFCcxPM5Param567) => {
      var indexBFCcxPM5Value1373 = indexBFCcxPM5Param567.havingSize(
          indexBFCcxPM5Param566.size,
        ),
        indexBFCcxPM5Value1374 = indexBFCcxPM5Value167(
          indexBFCcxPM5Param566.body,
          indexBFCcxPM5Value1373,
        ),
        indexBFCcxPM5Value1375 = new indexBFCcxPM5Value163.MathNode(
          "mstyle",
          indexBFCcxPM5Value1374,
        );
      return (
        indexBFCcxPM5Value1375.setAttribute(
          "mathsize",
          indexBFCcxPM5Value69(indexBFCcxPM5Value1373.sizeMultiplier),
        ),
        indexBFCcxPM5Value1375
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "smash",
    names: ["\\smash"],
    props: {
      numArgs: 1,
      numOptionalArgs: 1,
      allowedInText: true,
    },
    handler: (
      indexBFCcxPM5Param206,
      indexBFCcxPM5Param207,
      indexBFCcxPM5Param208,
    ) => {
      var { parser } = indexBFCcxPM5Param206,
        indexBFCcxPM5Value1013 = false,
        indexBFCcxPM5Value1014 = false,
        indexBFCcxPM5Value1015 =
          indexBFCcxPM5Param208[0] &&
          indexBFCcxPM5Helper42(indexBFCcxPM5Param208[0], "ordgroup");
      if (indexBFCcxPM5Value1015) {
        for (
          var indexBFCcxPM5Value1016 = "", indexBFCcxPM5Value1017 = 0;
          indexBFCcxPM5Value1017 < indexBFCcxPM5Value1015.body.length;
          ++indexBFCcxPM5Value1017
        )
          if (
            ((indexBFCcxPM5Value1016 =
              indexBFCcxPM5Value1015.body[indexBFCcxPM5Value1017].text),
            indexBFCcxPM5Value1016 === "t")
          )
            indexBFCcxPM5Value1013 = true;
          else if (indexBFCcxPM5Value1016 === "b")
            indexBFCcxPM5Value1014 = true;
          else {
            indexBFCcxPM5Value1013 = false;
            indexBFCcxPM5Value1014 = false;
            break;
          }
      } else {
        indexBFCcxPM5Value1013 = true;
        indexBFCcxPM5Value1014 = true;
      }
      var indexBFCcxPM5Value1018 = indexBFCcxPM5Param207[0];
      return {
        type: "smash",
        mode: parser.mode,
        body: indexBFCcxPM5Value1018,
        smashHeight: indexBFCcxPM5Value1013,
        smashDepth: indexBFCcxPM5Value1014,
      };
    },
    htmlBuilder: (indexBFCcxPM5Param204, indexBFCcxPM5Param205) => {
      var indexBFCcxPM5Value1009 = indexBFCcxPM5Value139.makeSpan(
        [],
        [
          indexBFCcxPM5Value159(
            indexBFCcxPM5Param204.body,
            indexBFCcxPM5Param205,
          ),
        ],
      );
      if (
        !indexBFCcxPM5Param204.smashHeight &&
        !indexBFCcxPM5Param204.smashDepth
      )
        return indexBFCcxPM5Value1009;
      if (
        indexBFCcxPM5Param204.smashHeight &&
        ((indexBFCcxPM5Value1009.height = 0), indexBFCcxPM5Value1009.children)
      )
        for (
          var indexBFCcxPM5Value1010 = 0;
          indexBFCcxPM5Value1010 < indexBFCcxPM5Value1009.children.length;
          indexBFCcxPM5Value1010++
        )
          indexBFCcxPM5Value1009.children[indexBFCcxPM5Value1010].height = 0;
      if (
        indexBFCcxPM5Param204.smashDepth &&
        ((indexBFCcxPM5Value1009.depth = 0), indexBFCcxPM5Value1009.children)
      )
        for (
          var indexBFCcxPM5Value1011 = 0;
          indexBFCcxPM5Value1011 < indexBFCcxPM5Value1009.children.length;
          indexBFCcxPM5Value1011++
        )
          indexBFCcxPM5Value1009.children[indexBFCcxPM5Value1011].depth = 0;
      var indexBFCcxPM5Value1012 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "firstBaseline",
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value1009,
            },
          ],
        },
        indexBFCcxPM5Param205,
      );
      return indexBFCcxPM5Value139.makeSpan(
        ["mord"],
        [indexBFCcxPM5Value1012],
        indexBFCcxPM5Param205,
      );
    },
    mathmlBuilder: (indexBFCcxPM5Param511, indexBFCcxPM5Param512) => {
      var indexBFCcxPM5Value1341 = new indexBFCcxPM5Value163.MathNode(
        "mpadded",
        [$(indexBFCcxPM5Param511.body, indexBFCcxPM5Param512)],
      );
      return (
        indexBFCcxPM5Param511.smashHeight &&
          indexBFCcxPM5Value1341.setAttribute("height", "0px"),
        indexBFCcxPM5Param511.smashDepth &&
          indexBFCcxPM5Value1341.setAttribute("depth", "0px"),
        indexBFCcxPM5Value1341
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "sqrt",
    names: ["\\sqrt"],
    props: {
      numArgs: 1,
      numOptionalArgs: 1,
    },
    handler(
      indexBFCcxPM5Param615,
      indexBFCcxPM5Param616,
      indexBFCcxPM5Param617,
    ) {
      var { parser } = indexBFCcxPM5Param615,
        indexBFCcxPM5Value1405 = indexBFCcxPM5Param617[0],
        indexBFCcxPM5Value1406 = indexBFCcxPM5Param616[0];
      return {
        type: "sqrt",
        mode: parser.mode,
        body: indexBFCcxPM5Value1406,
        index: indexBFCcxPM5Value1405,
      };
    },
    htmlBuilder(indexBFCcxPM5Param61, indexBFCcxPM5Param62) {
      var indexBFCcxPM5Value656 = indexBFCcxPM5Value159(
        indexBFCcxPM5Param61.body,
        indexBFCcxPM5Param62.havingCrampedStyle(),
      );
      indexBFCcxPM5Value656.height === 0 &&
        (indexBFCcxPM5Value656.height =
          indexBFCcxPM5Param62.fontMetrics().xHeight);
      indexBFCcxPM5Value656 = indexBFCcxPM5Value139.wrapFragment(
        indexBFCcxPM5Value656,
        indexBFCcxPM5Param62,
      );
      var indexBFCcxPM5Value657 =
          indexBFCcxPM5Param62.fontMetrics().defaultRuleThickness,
        indexBFCcxPM5Value658 = indexBFCcxPM5Value657;
      indexBFCcxPM5Param62.style.id < indexBFCcxPM5Value41.TEXT.id &&
        (indexBFCcxPM5Value658 = indexBFCcxPM5Param62.fontMetrics().xHeight);
      var indexBFCcxPM5Value659 =
          indexBFCcxPM5Value657 + indexBFCcxPM5Value658 / 4,
        indexBFCcxPM5Value660 =
          indexBFCcxPM5Value656.height +
          indexBFCcxPM5Value656.depth +
          indexBFCcxPM5Value659 +
          indexBFCcxPM5Value657,
        { span, ruleWidth, advanceWidth } = indexBFCcxPM5Value222.sqrtImage(
          indexBFCcxPM5Value660,
          indexBFCcxPM5Param62,
        ),
        indexBFCcxPM5Value661 = span.height - ruleWidth;
      indexBFCcxPM5Value661 >
        indexBFCcxPM5Value656.height +
          indexBFCcxPM5Value656.depth +
          indexBFCcxPM5Value659 &&
        (indexBFCcxPM5Value659 =
          (indexBFCcxPM5Value659 +
            indexBFCcxPM5Value661 -
            indexBFCcxPM5Value656.height -
            indexBFCcxPM5Value656.depth) /
          2);
      var indexBFCcxPM5Value662 =
        span.height -
        indexBFCcxPM5Value656.height -
        indexBFCcxPM5Value659 -
        ruleWidth;
      indexBFCcxPM5Value656.style.paddingLeft =
        indexBFCcxPM5Value69(advanceWidth);
      var indexBFCcxPM5Value663 = indexBFCcxPM5Value139.makeVList(
        {
          positionType: "firstBaseline",
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value656,
              wrapperClasses: ["svg-align"],
            },
            {
              type: "kern",
              size: -(indexBFCcxPM5Value656.height + indexBFCcxPM5Value662),
            },
            {
              type: "elem",
              elem: span,
            },
            {
              type: "kern",
              size: ruleWidth,
            },
          ],
        },
        indexBFCcxPM5Param62,
      );
      if (indexBFCcxPM5Param61.index) {
        var indexBFCcxPM5Value664 = indexBFCcxPM5Param62.havingStyle(
            indexBFCcxPM5Value41.SCRIPTSCRIPT,
          ),
          indexBFCcxPM5Value665 = indexBFCcxPM5Value159(
            indexBFCcxPM5Param61.index,
            indexBFCcxPM5Value664,
            indexBFCcxPM5Param62,
          ),
          indexBFCcxPM5Value666 =
            0.6 * (indexBFCcxPM5Value663.height - indexBFCcxPM5Value663.depth),
          indexBFCcxPM5Value667 = indexBFCcxPM5Value139.makeVList(
            {
              positionType: "shift",
              positionData: -indexBFCcxPM5Value666,
              children: [
                {
                  type: "elem",
                  elem: indexBFCcxPM5Value665,
                },
              ],
            },
            indexBFCcxPM5Param62,
          ),
          indexBFCcxPM5Value668 = indexBFCcxPM5Value139.makeSpan(
            ["root"],
            [indexBFCcxPM5Value667],
          );
        return indexBFCcxPM5Value139.makeSpan(
          ["mord", "sqrt"],
          [indexBFCcxPM5Value668, indexBFCcxPM5Value663],
          indexBFCcxPM5Param62,
        );
      } else
        return indexBFCcxPM5Value139.makeSpan(
          ["mord", "sqrt"],
          [indexBFCcxPM5Value663],
          indexBFCcxPM5Param62,
        );
    },
    mathmlBuilder(indexBFCcxPM5Param574, indexBFCcxPM5Param575) {
      var { body, index } = indexBFCcxPM5Param574;
      return index
        ? new indexBFCcxPM5Value163.MathNode("mroot", [
            $(body, indexBFCcxPM5Param575),
            $(index, indexBFCcxPM5Param575),
          ])
        : new indexBFCcxPM5Value163.MathNode("msqrt", [
            $(body, indexBFCcxPM5Param575),
          ]);
    },
  });
  indexBFCcxPM5Value256 = {
    display: indexBFCcxPM5Value41.DISPLAY,
    text: indexBFCcxPM5Value41.TEXT,
    script: indexBFCcxPM5Value41.SCRIPT,
    scriptscript: indexBFCcxPM5Value41.SCRIPTSCRIPT,
  };
  indexBFCcxPM5Helper37({
    type: "styling",
    names: [
      "\\displaystyle",
      "\\textstyle",
      "\\scriptstyle",
      "\\scriptscriptstyle",
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      primitive: true,
    },
    handler(indexBFCcxPM5Param509, indexBFCcxPM5Param510) {
      var { breakOnTokenText, funcName, parser } = indexBFCcxPM5Param509,
        indexBFCcxPM5Value1339 = parser.parseExpression(true, breakOnTokenText),
        indexBFCcxPM5Value1340 = funcName.slice(1, funcName.length - 5);
      return {
        type: "styling",
        mode: parser.mode,
        style: indexBFCcxPM5Value1340,
        body: indexBFCcxPM5Value1339,
      };
    },
    htmlBuilder(indexBFCcxPM5Param666, indexBFCcxPM5Param667) {
      var indexBFCcxPM5Value1430 =
          indexBFCcxPM5Value256[indexBFCcxPM5Param666.style],
        indexBFCcxPM5Value1431 = indexBFCcxPM5Param667
          .havingStyle(indexBFCcxPM5Value1430)
          .withFont("");
      return indexBFCcxPM5Helper57(
        indexBFCcxPM5Param666.body,
        indexBFCcxPM5Value1431,
        indexBFCcxPM5Param667,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param266, indexBFCcxPM5Param267) {
      var indexBFCcxPM5Value1104 =
          indexBFCcxPM5Value256[indexBFCcxPM5Param266.style],
        indexBFCcxPM5Value1105 = indexBFCcxPM5Param267.havingStyle(
          indexBFCcxPM5Value1104,
        ),
        indexBFCcxPM5Value1106 = indexBFCcxPM5Value167(
          indexBFCcxPM5Param266.body,
          indexBFCcxPM5Value1105,
        ),
        indexBFCcxPM5Value1107 = new indexBFCcxPM5Value163.MathNode(
          "mstyle",
          indexBFCcxPM5Value1106,
        ),
        indexBFCcxPM5Value1108 = {
          display: ["0", "true"],
          text: ["0", "false"],
          script: ["1", "false"],
          scriptscript: ["2", "false"],
        }[indexBFCcxPM5Param266.style];
      return (
        indexBFCcxPM5Value1107.setAttribute(
          "scriptlevel",
          indexBFCcxPM5Value1108[0],
        ),
        indexBFCcxPM5Value1107.setAttribute(
          "displaystyle",
          indexBFCcxPM5Value1108[1],
        ),
        indexBFCcxPM5Value1107
      );
    },
  });
  indexBFCcxPM5Value257 = function (
    indexBFCcxPM5Param192,
    indexBFCcxPM5Param193,
  ) {
    var indexBFCcxPM5Value984 = indexBFCcxPM5Param192.base;
    return indexBFCcxPM5Value984
      ? indexBFCcxPM5Value984.type === "op"
        ? indexBFCcxPM5Value984.limits &&
          (indexBFCcxPM5Param193.style.size ===
            indexBFCcxPM5Value41.DISPLAY.size ||
            indexBFCcxPM5Value984.alwaysHandleSupSub)
          ? indexBFCcxPM5Value248
          : null
        : indexBFCcxPM5Value984.type === "operatorname"
          ? indexBFCcxPM5Value984.alwaysHandleSupSub &&
            (indexBFCcxPM5Param193.style.size ===
              indexBFCcxPM5Value41.DISPLAY.size ||
              indexBFCcxPM5Value984.limits)
            ? indexBFCcxPM5Value252
            : null
          : indexBFCcxPM5Value984.type === "accent"
            ? indexBFCcxPM5Value23.isCharacterBox(indexBFCcxPM5Value984.base)
              ? indexBFCcxPM5Value180
              : null
            : indexBFCcxPM5Value984.type === "horizBrace" &&
                !indexBFCcxPM5Param192.sub === indexBFCcxPM5Value984.isOver
              ? $i
              : null
      : null;
  };
  _e({
    type: "supsub",
    htmlBuilder(indexBFCcxPM5Param19, indexBFCcxPM5Param20) {
      var indexBFCcxPM5Value453 = indexBFCcxPM5Value257(
        indexBFCcxPM5Param19,
        indexBFCcxPM5Param20,
      );
      if (indexBFCcxPM5Value453)
        return indexBFCcxPM5Value453(
          indexBFCcxPM5Param19,
          indexBFCcxPM5Param20,
        );
      var { base, sup, sub } = indexBFCcxPM5Param19,
        indexBFCcxPM5Value454 = indexBFCcxPM5Value159(
          base,
          indexBFCcxPM5Param20,
        ),
        indexBFCcxPM5Value455,
        indexBFCcxPM5Value456,
        indexBFCcxPM5Value457 = indexBFCcxPM5Param20.fontMetrics(),
        indexBFCcxPM5Value458 = 0,
        indexBFCcxPM5Value459 = 0,
        indexBFCcxPM5Value460 =
          base && indexBFCcxPM5Value23.isCharacterBox(base);
      if (sup) {
        var indexBFCcxPM5Value461 = indexBFCcxPM5Param20.havingStyle(
          indexBFCcxPM5Param20.style.sup(),
        );
        indexBFCcxPM5Value455 = indexBFCcxPM5Value159(
          sup,
          indexBFCcxPM5Value461,
          indexBFCcxPM5Param20,
        );
        indexBFCcxPM5Value460 ||
          (indexBFCcxPM5Value458 =
            indexBFCcxPM5Value454.height -
            (indexBFCcxPM5Value461.fontMetrics().supDrop *
              indexBFCcxPM5Value461.sizeMultiplier) /
              indexBFCcxPM5Param20.sizeMultiplier);
      }
      if (sub) {
        var indexBFCcxPM5Value462 = indexBFCcxPM5Param20.havingStyle(
          indexBFCcxPM5Param20.style.sub(),
        );
        indexBFCcxPM5Value456 = indexBFCcxPM5Value159(
          sub,
          indexBFCcxPM5Value462,
          indexBFCcxPM5Param20,
        );
        indexBFCcxPM5Value460 ||
          (indexBFCcxPM5Value459 =
            indexBFCcxPM5Value454.depth +
            (indexBFCcxPM5Value462.fontMetrics().subDrop *
              indexBFCcxPM5Value462.sizeMultiplier) /
              indexBFCcxPM5Param20.sizeMultiplier);
      }
      var indexBFCcxPM5Value463 =
          indexBFCcxPM5Param20.style === indexBFCcxPM5Value41.DISPLAY
            ? indexBFCcxPM5Value457.sup1
            : indexBFCcxPM5Param20.style.cramped
              ? indexBFCcxPM5Value457.sup3
              : indexBFCcxPM5Value457.sup2,
        indexBFCcxPM5Value464 = indexBFCcxPM5Param20.sizeMultiplier,
        indexBFCcxPM5Value465 = indexBFCcxPM5Value69(
          0.5 / indexBFCcxPM5Value457.ptPerEm / indexBFCcxPM5Value464,
        ),
        indexBFCcxPM5Value466 = null;
      if (indexBFCcxPM5Value456) {
        var indexBFCcxPM5Value467 =
          indexBFCcxPM5Param19.base &&
          indexBFCcxPM5Param19.base.type === "op" &&
          indexBFCcxPM5Param19.base.name &&
          (indexBFCcxPM5Param19.base.name === "\\oiint" ||
            indexBFCcxPM5Param19.base.name === "\\oiiint");
        (indexBFCcxPM5Value454 instanceof indexBFCcxPM5Value77 ||
          indexBFCcxPM5Value467) &&
          (indexBFCcxPM5Value466 = indexBFCcxPM5Value69(
            -indexBFCcxPM5Value454.italic,
          ));
      }
      var indexBFCcxPM5Value468;
      if (indexBFCcxPM5Value455 && indexBFCcxPM5Value456) {
        indexBFCcxPM5Value458 = Math.max(
          indexBFCcxPM5Value458,
          indexBFCcxPM5Value463,
          indexBFCcxPM5Value455.depth + 0.25 * indexBFCcxPM5Value457.xHeight,
        );
        indexBFCcxPM5Value459 = Math.max(
          indexBFCcxPM5Value459,
          indexBFCcxPM5Value457.sub2,
        );
        var indexBFCcxPM5Value469 =
          4 * indexBFCcxPM5Value457.defaultRuleThickness;
        if (
          indexBFCcxPM5Value458 -
            indexBFCcxPM5Value455.depth -
            (indexBFCcxPM5Value456.height - indexBFCcxPM5Value459) <
          indexBFCcxPM5Value469
        ) {
          indexBFCcxPM5Value459 =
            indexBFCcxPM5Value469 -
            (indexBFCcxPM5Value458 - indexBFCcxPM5Value455.depth) +
            indexBFCcxPM5Value456.height;
          var indexBFCcxPM5Value470 =
            0.8 * indexBFCcxPM5Value457.xHeight -
            (indexBFCcxPM5Value458 - indexBFCcxPM5Value455.depth);
          indexBFCcxPM5Value470 > 0 &&
            ((indexBFCcxPM5Value458 += indexBFCcxPM5Value470),
            (indexBFCcxPM5Value459 -= indexBFCcxPM5Value470));
        }
        var indexBFCcxPM5Value471 = [
          {
            type: "elem",
            elem: indexBFCcxPM5Value456,
            shift: indexBFCcxPM5Value459,
            marginRight: indexBFCcxPM5Value465,
            marginLeft: indexBFCcxPM5Value466,
          },
          {
            type: "elem",
            elem: indexBFCcxPM5Value455,
            shift: -indexBFCcxPM5Value458,
            marginRight: indexBFCcxPM5Value465,
          },
        ];
        indexBFCcxPM5Value468 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "individualShift",
            children: indexBFCcxPM5Value471,
          },
          indexBFCcxPM5Param20,
        );
      } else if (indexBFCcxPM5Value456) {
        indexBFCcxPM5Value459 = Math.max(
          indexBFCcxPM5Value459,
          indexBFCcxPM5Value457.sub1,
          indexBFCcxPM5Value456.height - 0.8 * indexBFCcxPM5Value457.xHeight,
        );
        var indexBFCcxPM5Value472 = [
          {
            type: "elem",
            elem: indexBFCcxPM5Value456,
            marginLeft: indexBFCcxPM5Value466,
            marginRight: indexBFCcxPM5Value465,
          },
        ];
        indexBFCcxPM5Value468 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "shift",
            positionData: indexBFCcxPM5Value459,
            children: indexBFCcxPM5Value472,
          },
          indexBFCcxPM5Param20,
        );
      } else if (indexBFCcxPM5Value455) {
        indexBFCcxPM5Value458 = Math.max(
          indexBFCcxPM5Value458,
          indexBFCcxPM5Value463,
          indexBFCcxPM5Value455.depth + 0.25 * indexBFCcxPM5Value457.xHeight,
        );
        indexBFCcxPM5Value468 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "shift",
            positionData: -indexBFCcxPM5Value458,
            children: [
              {
                type: "elem",
                elem: indexBFCcxPM5Value455,
                marginRight: indexBFCcxPM5Value465,
              },
            ],
          },
          indexBFCcxPM5Param20,
        );
      } else throw Error("supsub must have either sup or sub.");
      var indexBFCcxPM5Value473 =
        indexBFCcxPM5Value157(indexBFCcxPM5Value454, "right") || "mord";
      return indexBFCcxPM5Value139.makeSpan(
        [indexBFCcxPM5Value473],
        [
          indexBFCcxPM5Value454,
          indexBFCcxPM5Value139.makeSpan(["msupsub"], [indexBFCcxPM5Value468]),
        ],
        indexBFCcxPM5Param20,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param43, indexBFCcxPM5Param44) {
      var indexBFCcxPM5Value587 = false,
        indexBFCcxPM5Value588,
        indexBFCcxPM5Value589;
      indexBFCcxPM5Param43.base &&
        indexBFCcxPM5Param43.base.type === "horizBrace" &&
        ((indexBFCcxPM5Value589 = !!indexBFCcxPM5Param43.sup),
        indexBFCcxPM5Value589 === indexBFCcxPM5Param43.base.isOver &&
          ((indexBFCcxPM5Value587 = true),
          (indexBFCcxPM5Value588 = indexBFCcxPM5Param43.base.isOver)));
      indexBFCcxPM5Param43.base &&
        (indexBFCcxPM5Param43.base.type === "op" ||
          indexBFCcxPM5Param43.base.type === "operatorname") &&
        (indexBFCcxPM5Param43.base.parentIsSupSub = true);
      var indexBFCcxPM5Value590 = [
        $(indexBFCcxPM5Param43.base, indexBFCcxPM5Param44),
      ];
      indexBFCcxPM5Param43.sub &&
        indexBFCcxPM5Value590.push(
          $(indexBFCcxPM5Param43.sub, indexBFCcxPM5Param44),
        );
      indexBFCcxPM5Param43.sup &&
        indexBFCcxPM5Value590.push(
          $(indexBFCcxPM5Param43.sup, indexBFCcxPM5Param44),
        );
      var indexBFCcxPM5Value591;
      if (indexBFCcxPM5Value587)
        indexBFCcxPM5Value591 = indexBFCcxPM5Value588 ? "mover" : "munder";
      else if (indexBFCcxPM5Param43.sub) {
        if (indexBFCcxPM5Param43.sup) {
          var indexBFCcxPM5Value592 = indexBFCcxPM5Param43.base;
          indexBFCcxPM5Value591 =
            (indexBFCcxPM5Value592 &&
              indexBFCcxPM5Value592.type === "op" &&
              indexBFCcxPM5Value592.limits &&
              indexBFCcxPM5Param44.style === indexBFCcxPM5Value41.DISPLAY) ||
            (indexBFCcxPM5Value592 &&
              indexBFCcxPM5Value592.type === "operatorname" &&
              indexBFCcxPM5Value592.alwaysHandleSupSub &&
              (indexBFCcxPM5Param44.style === indexBFCcxPM5Value41.DISPLAY ||
                indexBFCcxPM5Value592.limits))
              ? "munderover"
              : "msubsup";
        } else {
          var indexBFCcxPM5Value593 = indexBFCcxPM5Param43.base;
          indexBFCcxPM5Value591 =
            (indexBFCcxPM5Value593 &&
              indexBFCcxPM5Value593.type === "op" &&
              indexBFCcxPM5Value593.limits &&
              (indexBFCcxPM5Param44.style === indexBFCcxPM5Value41.DISPLAY ||
                indexBFCcxPM5Value593.alwaysHandleSupSub)) ||
            (indexBFCcxPM5Value593 &&
              indexBFCcxPM5Value593.type === "operatorname" &&
              indexBFCcxPM5Value593.alwaysHandleSupSub &&
              (indexBFCcxPM5Value593.limits ||
                indexBFCcxPM5Param44.style === indexBFCcxPM5Value41.DISPLAY))
              ? "munder"
              : "msub";
        }
      } else {
        var indexBFCcxPM5Value594 = indexBFCcxPM5Param43.base;
        indexBFCcxPM5Value591 =
          (indexBFCcxPM5Value594 &&
            indexBFCcxPM5Value594.type === "op" &&
            indexBFCcxPM5Value594.limits &&
            (indexBFCcxPM5Param44.style === indexBFCcxPM5Value41.DISPLAY ||
              indexBFCcxPM5Value594.alwaysHandleSupSub)) ||
          (indexBFCcxPM5Value594 &&
            indexBFCcxPM5Value594.type === "operatorname" &&
            indexBFCcxPM5Value594.alwaysHandleSupSub &&
            (indexBFCcxPM5Value594.limits ||
              indexBFCcxPM5Param44.style === indexBFCcxPM5Value41.DISPLAY))
            ? "mover"
            : "msup";
      }
      return new indexBFCcxPM5Value163.MathNode(
        indexBFCcxPM5Value591,
        indexBFCcxPM5Value590,
      );
    },
  });
  _e({
    type: "atom",
    htmlBuilder(indexBFCcxPM5Param762, indexBFCcxPM5Param763) {
      return indexBFCcxPM5Value139.mathsym(
        indexBFCcxPM5Param762.text,
        indexBFCcxPM5Param762.mode,
        indexBFCcxPM5Param763,
        ["m" + indexBFCcxPM5Param762.family],
      );
    },
    mathmlBuilder(indexBFCcxPM5Param279, indexBFCcxPM5Param280) {
      var indexBFCcxPM5Value1126 = new indexBFCcxPM5Value163.MathNode("mo", [
        indexBFCcxPM5Value164(
          indexBFCcxPM5Param279.text,
          indexBFCcxPM5Param279.mode,
        ),
      ]);
      if (indexBFCcxPM5Param279.family === "bin") {
        var indexBFCcxPM5Value1127 = indexBFCcxPM5Value166(
          indexBFCcxPM5Param279,
          indexBFCcxPM5Param280,
        );
        indexBFCcxPM5Value1127 === "bold-italic" &&
          indexBFCcxPM5Value1126.setAttribute(
            "mathvariant",
            indexBFCcxPM5Value1127,
          );
      } else
        indexBFCcxPM5Param279.family === "punct"
          ? indexBFCcxPM5Value1126.setAttribute("separator", "true")
          : (indexBFCcxPM5Param279.family === "open" ||
              indexBFCcxPM5Param279.family === "close") &&
            indexBFCcxPM5Value1126.setAttribute("stretchy", "false");
      return indexBFCcxPM5Value1126;
    },
  });
  indexBFCcxPM5Value258 = {
    mi: "italic",
    mn: "normal",
    mtext: "normal",
  };
  _e({
    type: "mathord",
    htmlBuilder(indexBFCcxPM5Param816, indexBFCcxPM5Param817) {
      return indexBFCcxPM5Value139.makeOrd(
        indexBFCcxPM5Param816,
        indexBFCcxPM5Param817,
        "mathord",
      );
    },
    mathmlBuilder(indexBFCcxPM5Param562, indexBFCcxPM5Param563) {
      var indexBFCcxPM5Value1368 = new indexBFCcxPM5Value163.MathNode("mi", [
          indexBFCcxPM5Value164(
            indexBFCcxPM5Param562.text,
            indexBFCcxPM5Param562.mode,
            indexBFCcxPM5Param563,
          ),
        ]),
        indexBFCcxPM5Value1369 =
          indexBFCcxPM5Value166(indexBFCcxPM5Param562, indexBFCcxPM5Param563) ||
          "italic";
      return (
        indexBFCcxPM5Value1369 !==
          indexBFCcxPM5Value258[indexBFCcxPM5Value1368.type] &&
          indexBFCcxPM5Value1368.setAttribute(
            "mathvariant",
            indexBFCcxPM5Value1369,
          ),
        indexBFCcxPM5Value1368
      );
    },
  });
  _e({
    type: "textord",
    htmlBuilder(indexBFCcxPM5Param818, indexBFCcxPM5Param819) {
      return indexBFCcxPM5Value139.makeOrd(
        indexBFCcxPM5Param818,
        indexBFCcxPM5Param819,
        "textord",
      );
    },
    mathmlBuilder(indexBFCcxPM5Param242, indexBFCcxPM5Param243) {
      var indexBFCcxPM5Value1080 = indexBFCcxPM5Value164(
          indexBFCcxPM5Param242.text,
          indexBFCcxPM5Param242.mode,
          indexBFCcxPM5Param243,
        ),
        indexBFCcxPM5Value1081 =
          indexBFCcxPM5Value166(indexBFCcxPM5Param242, indexBFCcxPM5Param243) ||
          "normal",
        indexBFCcxPM5Value1082;
      return (
        (indexBFCcxPM5Value1082 =
          indexBFCcxPM5Param242.mode === "text"
            ? new indexBFCcxPM5Value163.MathNode("mtext", [
                indexBFCcxPM5Value1080,
              ])
            : /[0-9]/.test(indexBFCcxPM5Param242.text)
              ? new indexBFCcxPM5Value163.MathNode("mn", [
                  indexBFCcxPM5Value1080,
                ])
              : indexBFCcxPM5Param242.text === "\\prime"
                ? new indexBFCcxPM5Value163.MathNode("mo", [
                    indexBFCcxPM5Value1080,
                  ])
                : new indexBFCcxPM5Value163.MathNode("mi", [
                    indexBFCcxPM5Value1080,
                  ])),
        indexBFCcxPM5Value1081 !==
          indexBFCcxPM5Value258[indexBFCcxPM5Value1082.type] &&
          indexBFCcxPM5Value1082.setAttribute(
            "mathvariant",
            indexBFCcxPM5Value1081,
          ),
        indexBFCcxPM5Value1082
      );
    },
  });
  indexBFCcxPM5Value259 = {
    "\\nobreak": "nobreak",
    "\\allowbreak": "allowbreak",
  };
  _a = {
    " ": {},
    "\\ ": {},
    "~": {
      className: "nobreak",
    },
    "\\space": {},
    "\\nobreakspace": {
      className: "nobreak",
    },
  };
  _e({
    type: "spacing",
    htmlBuilder(indexBFCcxPM5Param236, indexBFCcxPM5Param237) {
      if (_a.hasOwnProperty(indexBFCcxPM5Param236.text)) {
        var indexBFCcxPM5Value1070 =
          _a[indexBFCcxPM5Param236.text].className || "";
        if (indexBFCcxPM5Param236.mode === "text") {
          var indexBFCcxPM5Value1071 = indexBFCcxPM5Value139.makeOrd(
            indexBFCcxPM5Param236,
            indexBFCcxPM5Param237,
            "textord",
          );
          return (
            indexBFCcxPM5Value1071.classes.push(indexBFCcxPM5Value1070),
            indexBFCcxPM5Value1071
          );
        } else
          return indexBFCcxPM5Value139.makeSpan(
            ["mspace", indexBFCcxPM5Value1070],
            [
              indexBFCcxPM5Value139.mathsym(
                indexBFCcxPM5Param236.text,
                indexBFCcxPM5Param236.mode,
                indexBFCcxPM5Param237,
              ),
            ],
            indexBFCcxPM5Param237,
          );
      } else {
        if (indexBFCcxPM5Value259.hasOwnProperty(indexBFCcxPM5Param236.text))
          return indexBFCcxPM5Value139.makeSpan(
            ["mspace", indexBFCcxPM5Value259[indexBFCcxPM5Param236.text]],
            [],
            indexBFCcxPM5Param237,
          );
        throw new indexBFCcxPM5Value14(
          'Unknown type of space "' + indexBFCcxPM5Param236.text + '"',
        );
      }
    },
    mathmlBuilder(indexBFCcxPM5Param381, indexBFCcxPM5Param382) {
      var indexBFCcxPM5Value1241;
      if (_a.hasOwnProperty(indexBFCcxPM5Param381.text))
        indexBFCcxPM5Value1241 = new indexBFCcxPM5Value163.MathNode("mtext", [
          new indexBFCcxPM5Value163.TextNode("\xA0"),
        ]);
      else {
        if (indexBFCcxPM5Value259.hasOwnProperty(indexBFCcxPM5Param381.text))
          return new indexBFCcxPM5Value163.MathNode("mspace");
        throw new indexBFCcxPM5Value14(
          'Unknown type of space "' + indexBFCcxPM5Param381.text + '"',
        );
      }
      return indexBFCcxPM5Value1241;
    },
  });
  indexBFCcxPM5Value260 = () => {
    var indexBFCcxPM5Value1447 = new indexBFCcxPM5Value163.MathNode("mtd", []);
    return (
      indexBFCcxPM5Value1447.setAttribute("width", "50%"),
      indexBFCcxPM5Value1447
    );
  };
  _e({
    type: "tag",
    mathmlBuilder(indexBFCcxPM5Param391, indexBFCcxPM5Param392) {
      var indexBFCcxPM5Value1251 = new indexBFCcxPM5Value163.MathNode(
        "mtable",
        [
          new indexBFCcxPM5Value163.MathNode("mtr", [
            indexBFCcxPM5Value260(),
            new indexBFCcxPM5Value163.MathNode("mtd", [
              indexBFCcxPM5Value168(
                indexBFCcxPM5Param391.body,
                indexBFCcxPM5Param392,
              ),
            ]),
            indexBFCcxPM5Value260(),
            new indexBFCcxPM5Value163.MathNode("mtd", [
              indexBFCcxPM5Value168(
                indexBFCcxPM5Param391.tag,
                indexBFCcxPM5Param392,
              ),
            ]),
          ]),
        ],
      );
      return (
        indexBFCcxPM5Value1251.setAttribute("width", "100%"),
        indexBFCcxPM5Value1251
      );
    },
  });
  indexBFCcxPM5Value261 = {
    "\\text": undefined,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm",
  };
  indexBFCcxPM5Value262 = {
    "\\textbf": "textbf",
    "\\textmd": "textmd",
  };
  indexBFCcxPM5Value263 = {
    "\\textit": "textit",
    "\\textup": "textup",
  };
  indexBFCcxPM5Value264 = (indexBFCcxPM5Param340, indexBFCcxPM5Param341) => {
    var indexBFCcxPM5Value1186 = indexBFCcxPM5Param340.font;
    if (indexBFCcxPM5Value1186) {
      if (indexBFCcxPM5Value261[indexBFCcxPM5Value1186])
        return indexBFCcxPM5Param341.withTextFontFamily(
          indexBFCcxPM5Value261[indexBFCcxPM5Value1186],
        );
      if (indexBFCcxPM5Value262[indexBFCcxPM5Value1186])
        return indexBFCcxPM5Param341.withTextFontWeight(
          indexBFCcxPM5Value262[indexBFCcxPM5Value1186],
        );
      if (indexBFCcxPM5Value1186 === "\\emph")
        return indexBFCcxPM5Param341.fontShape === "textit"
          ? indexBFCcxPM5Param341.withTextFontShape("textup")
          : indexBFCcxPM5Param341.withTextFontShape("textit");
    } else return indexBFCcxPM5Param341;
    return indexBFCcxPM5Param341.withTextFontShape(
      indexBFCcxPM5Value263[indexBFCcxPM5Value1186],
    );
  };
  indexBFCcxPM5Helper37({
    type: "text",
    names: [
      "\\text",
      "\\textrm",
      "\\textsf",
      "\\texttt",
      "\\textnormal",
      "\\textbf",
      "\\textmd",
      "\\textit",
      "\\textup",
      "\\emph",
    ],
    props: {
      numArgs: 1,
      argTypes: ["text"],
      allowedInArgument: true,
      allowedInText: true,
    },
    handler(indexBFCcxPM5Param631, indexBFCcxPM5Param632) {
      var { parser, funcName } = indexBFCcxPM5Param631,
        indexBFCcxPM5Value1413 = indexBFCcxPM5Param632[0];
      return {
        type: "text",
        mode: parser.mode,
        body: indexBFCcxPM5Value148(indexBFCcxPM5Value1413),
        font: funcName,
      };
    },
    htmlBuilder(indexBFCcxPM5Param657, indexBFCcxPM5Param658) {
      var indexBFCcxPM5Value1426 = indexBFCcxPM5Value264(
          indexBFCcxPM5Param657,
          indexBFCcxPM5Param658,
        ),
        indexBFCcxPM5Value1427 = indexBFCcxPM5Value154(
          indexBFCcxPM5Param657.body,
          indexBFCcxPM5Value1426,
          true,
        );
      return indexBFCcxPM5Value139.makeSpan(
        ["mord", "text"],
        indexBFCcxPM5Value1427,
        indexBFCcxPM5Value1426,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param779, indexBFCcxPM5Param780) {
      var indexBFCcxPM5Value1464 = indexBFCcxPM5Value264(
        indexBFCcxPM5Param779,
        indexBFCcxPM5Param780,
      );
      return indexBFCcxPM5Value168(
        indexBFCcxPM5Param779.body,
        indexBFCcxPM5Value1464,
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "underline",
    names: ["\\underline"],
    props: {
      numArgs: 1,
      allowedInText: true,
    },
    handler(indexBFCcxPM5Param703, indexBFCcxPM5Param704) {
      var { parser } = indexBFCcxPM5Param703;
      return {
        type: "underline",
        mode: parser.mode,
        body: indexBFCcxPM5Param704[0],
      };
    },
    htmlBuilder(indexBFCcxPM5Param211, indexBFCcxPM5Param212) {
      var indexBFCcxPM5Value1024 = indexBFCcxPM5Value159(
          indexBFCcxPM5Param211.body,
          indexBFCcxPM5Param212,
        ),
        indexBFCcxPM5Value1025 = indexBFCcxPM5Value139.makeLineSpan(
          "underline-line",
          indexBFCcxPM5Param212,
        ),
        indexBFCcxPM5Value1026 =
          indexBFCcxPM5Param212.fontMetrics().defaultRuleThickness,
        indexBFCcxPM5Value1027 = indexBFCcxPM5Value139.makeVList(
          {
            positionType: "top",
            positionData: indexBFCcxPM5Value1024.height,
            children: [
              {
                type: "kern",
                size: indexBFCcxPM5Value1026,
              },
              {
                type: "elem",
                elem: indexBFCcxPM5Value1025,
              },
              {
                type: "kern",
                size: 3 * indexBFCcxPM5Value1026,
              },
              {
                type: "elem",
                elem: indexBFCcxPM5Value1024,
              },
            ],
          },
          indexBFCcxPM5Param212,
        );
      return indexBFCcxPM5Value139.makeSpan(
        ["mord", "underline"],
        [indexBFCcxPM5Value1027],
        indexBFCcxPM5Param212,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param478, indexBFCcxPM5Param479) {
      var indexBFCcxPM5Value1318 = new indexBFCcxPM5Value163.MathNode("mo", [
        new indexBFCcxPM5Value163.TextNode("‾"),
      ]);
      indexBFCcxPM5Value1318.setAttribute("stretchy", "true");
      var indexBFCcxPM5Value1319 = new indexBFCcxPM5Value163.MathNode(
        "munder",
        [
          $(indexBFCcxPM5Param478.body, indexBFCcxPM5Param479),
          indexBFCcxPM5Value1318,
        ],
      );
      return (
        indexBFCcxPM5Value1319.setAttribute("accentunder", "true"),
        indexBFCcxPM5Value1319
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "vcenter",
    names: ["\\vcenter"],
    props: {
      numArgs: 1,
      argTypes: ["original"],
      allowedInText: false,
    },
    handler(indexBFCcxPM5Param712, indexBFCcxPM5Param713) {
      var { parser } = indexBFCcxPM5Param712;
      return {
        type: "vcenter",
        mode: parser.mode,
        body: indexBFCcxPM5Param713[0],
      };
    },
    htmlBuilder(indexBFCcxPM5Param369, indexBFCcxPM5Param370) {
      var indexBFCcxPM5Value1221 = indexBFCcxPM5Value159(
          indexBFCcxPM5Param369.body,
          indexBFCcxPM5Param370,
        ),
        indexBFCcxPM5Value1222 = indexBFCcxPM5Param370.fontMetrics().axisHeight,
        indexBFCcxPM5Value1223 =
          0.5 *
          (indexBFCcxPM5Value1221.height -
            indexBFCcxPM5Value1222 -
            (indexBFCcxPM5Value1221.depth + indexBFCcxPM5Value1222));
      return indexBFCcxPM5Value139.makeVList(
        {
          positionType: "shift",
          positionData: indexBFCcxPM5Value1223,
          children: [
            {
              type: "elem",
              elem: indexBFCcxPM5Value1221,
            },
          ],
        },
        indexBFCcxPM5Param370,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param735, indexBFCcxPM5Param736) {
      return new indexBFCcxPM5Value163.MathNode(
        "mpadded",
        [$(indexBFCcxPM5Param735.body, indexBFCcxPM5Param736)],
        ["vcenter"],
      );
    },
  });
  indexBFCcxPM5Helper37({
    type: "verb",
    names: ["\\verb"],
    props: {
      numArgs: 0,
      allowedInText: true,
    },
    handler(
      indexBFCcxPM5Param682,
      indexBFCcxPM5Param683,
      indexBFCcxPM5Param684,
    ) {
      throw new indexBFCcxPM5Value14(
        "\\verb ended by end of line instead of matching delimiter",
      );
    },
    htmlBuilder(indexBFCcxPM5Param224, indexBFCcxPM5Param225) {
      for (
        var indexBFCcxPM5Value1045 = indexBFCcxPM5Value265(
            indexBFCcxPM5Param224,
          ),
          indexBFCcxPM5Value1046 = [],
          indexBFCcxPM5Value1047 = indexBFCcxPM5Param225.havingStyle(
            indexBFCcxPM5Param225.style.text(),
          ),
          indexBFCcxPM5Value1048 = 0;
        indexBFCcxPM5Value1048 < indexBFCcxPM5Value1045.length;
        indexBFCcxPM5Value1048++
      ) {
        var indexBFCcxPM5Value1049 =
          indexBFCcxPM5Value1045[indexBFCcxPM5Value1048];
        indexBFCcxPM5Value1049 === "~" &&
          (indexBFCcxPM5Value1049 = "\\textasciitilde");
        indexBFCcxPM5Value1046.push(
          indexBFCcxPM5Value139.makeSymbol(
            indexBFCcxPM5Value1049,
            "Typewriter-Regular",
            indexBFCcxPM5Param224.mode,
            indexBFCcxPM5Value1047,
            ["mord", "texttt"],
          ),
        );
      }
      return indexBFCcxPM5Value139.makeSpan(
        ["mord", "text"].concat(
          indexBFCcxPM5Value1047.sizingClasses(indexBFCcxPM5Param225),
        ),
        indexBFCcxPM5Value139.tryCombineChars(indexBFCcxPM5Value1046),
        indexBFCcxPM5Value1047,
      );
    },
    mathmlBuilder(indexBFCcxPM5Param606, indexBFCcxPM5Param607) {
      var indexBFCcxPM5Value1398 = new indexBFCcxPM5Value163.TextNode(
          indexBFCcxPM5Value265(indexBFCcxPM5Param606),
        ),
        indexBFCcxPM5Value1399 = new indexBFCcxPM5Value163.MathNode("mtext", [
          indexBFCcxPM5Value1398,
        ]);
      return (
        indexBFCcxPM5Value1399.setAttribute("mathvariant", "monospace"),
        indexBFCcxPM5Value1399
      );
    },
  });
  indexBFCcxPM5Value265 = (indexBFCcxPM5Param863) =>
    indexBFCcxPM5Param863.body.replace(
      / /g,
      indexBFCcxPM5Param863.star ? "␣" : "\xA0",
    );
  indexBFCcxPM5Value266 = indexBFCcxPM5Value144;
  indexBFCcxPM5Value267 = "[ \r\n\t]";
  indexBFCcxPM5Value268 = "\\\\[a-zA-Z@]+";
  indexBFCcxPM5Value269 = "\\\\[^\uD800-\uDFFF]";
  indexBFCcxPM5Value270 =
    "(" + indexBFCcxPM5Value268 + ")" + indexBFCcxPM5Value267 + "*";
  indexBFCcxPM5Value271 = "\\\\(\n|[ \r\t]+\n?)[ \r\t]*";
  indexBFCcxPM5Value272 = "[̀-ͯ]";
  indexBFCcxPM5Value273 = RegExp(indexBFCcxPM5Value272 + "+$");
  indexBFCcxPM5Value274 =
    "(" +
    indexBFCcxPM5Value267 +
    "+)|" +
    (indexBFCcxPM5Value271 + "|") +
    "([!-\\[\\]-‧‪-퟿豈-￿]" +
    (indexBFCcxPM5Value272 + "*") +
    "|[\uD800-\uDBFF][\uDC00-\uDFFF]" +
    (indexBFCcxPM5Value272 + "*") +
    "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" +
    ("|" + indexBFCcxPM5Value270) +
    ("|" + indexBFCcxPM5Value269 + ")");
  indexBFCcxPM5Value275 = class {
    constructor(indexBFCcxPM5Param383, indexBFCcxPM5Param384) {
      this.input = undefined;
      this.settings = undefined;
      this.tokenRegex = undefined;
      this.catcodes = undefined;
      this.input = indexBFCcxPM5Param383;
      this.settings = indexBFCcxPM5Param384;
      this.tokenRegex = new RegExp(indexBFCcxPM5Value274, "g");
      this.catcodes = {
        "%": 14,
        "~": 13,
      };
    }
    setCatcode(indexBFCcxPM5Param858, indexBFCcxPM5Param859) {
      this.catcodes[indexBFCcxPM5Param858] = indexBFCcxPM5Param859;
    }
    lex() {
      var indexBFCcxPM5Value805 = this.input,
        indexBFCcxPM5Value806 = this.tokenRegex.lastIndex;
      if (indexBFCcxPM5Value806 === indexBFCcxPM5Value805.length)
        return new indexBFCcxPM5Value13(
          "EOF",
          new indexBFCcxPM5Value12(
            this,
            indexBFCcxPM5Value806,
            indexBFCcxPM5Value806,
          ),
        );
      var indexBFCcxPM5Value807 = this.tokenRegex.exec(indexBFCcxPM5Value805);
      if (
        indexBFCcxPM5Value807 === null ||
        indexBFCcxPM5Value807.index !== indexBFCcxPM5Value806
      )
        throw new indexBFCcxPM5Value14(
          "Unexpected character: '" +
            indexBFCcxPM5Value805[indexBFCcxPM5Value806] +
            "'",
          new indexBFCcxPM5Value13(
            indexBFCcxPM5Value805[indexBFCcxPM5Value806],
            new indexBFCcxPM5Value12(
              this,
              indexBFCcxPM5Value806,
              indexBFCcxPM5Value806 + 1,
            ),
          ),
        );
      var indexBFCcxPM5Value808 =
        indexBFCcxPM5Value807[6] ||
        indexBFCcxPM5Value807[3] ||
        (indexBFCcxPM5Value807[2] ? "\\ " : " ");
      if (this.catcodes[indexBFCcxPM5Value808] === 14) {
        var indexBFCcxPM5Value809 = indexBFCcxPM5Value805.indexOf(
          "\n",
          this.tokenRegex.lastIndex,
        );
        return (
          indexBFCcxPM5Value809 === -1
            ? ((this.tokenRegex.lastIndex = indexBFCcxPM5Value805.length),
              this.settings.reportNonstrict(
                "commentAtEnd",
                "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)",
              ))
            : (this.tokenRegex.lastIndex = indexBFCcxPM5Value809 + 1),
          this.lex()
        );
      }
      return new indexBFCcxPM5Value13(
        indexBFCcxPM5Value808,
        new indexBFCcxPM5Value12(
          this,
          indexBFCcxPM5Value806,
          this.tokenRegex.lastIndex,
        ),
      );
    }
  };
  indexBFCcxPM5Value276 = class {
    constructor(indexBFCcxPM5Param419, indexBFCcxPM5Param420) {
      indexBFCcxPM5Param419 === undefined && (indexBFCcxPM5Param419 = {});
      indexBFCcxPM5Param420 === undefined && (indexBFCcxPM5Param420 = {});
      this.current = undefined;
      this.builtins = undefined;
      this.undefStack = undefined;
      this.current = indexBFCcxPM5Param420;
      this.builtins = indexBFCcxPM5Param419;
      this.undefStack = [];
    }
    beginGroup() {
      this.undefStack.push({});
    }
    endGroup() {
      if (this.undefStack.length === 0)
        throw new indexBFCcxPM5Value14(
          "Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug",
        );
      var indexBFCcxPM5Value1187 = this.undefStack.pop();
      for (var indexBFCcxPM5Value1188 in indexBFCcxPM5Value1187)
        indexBFCcxPM5Value1187.hasOwnProperty(indexBFCcxPM5Value1188) &&
          (indexBFCcxPM5Value1187[indexBFCcxPM5Value1188] == null
            ? delete this.current[indexBFCcxPM5Value1188]
            : (this.current[indexBFCcxPM5Value1188] =
                indexBFCcxPM5Value1187[indexBFCcxPM5Value1188]));
    }
    endGroups() {
      for (; this.undefStack.length > 0;) this.endGroup();
    }
    has(indexBFCcxPM5Param695) {
      return (
        this.current.hasOwnProperty(indexBFCcxPM5Param695) ||
        this.builtins.hasOwnProperty(indexBFCcxPM5Param695)
      );
    }
    get(indexBFCcxPM5Param696) {
      return this.current.hasOwnProperty(indexBFCcxPM5Param696)
        ? this.current[indexBFCcxPM5Param696]
        : this.builtins[indexBFCcxPM5Param696];
    }
    set(indexBFCcxPM5Param253, indexBFCcxPM5Param254, indexBFCcxPM5Param255) {
      if (
        (indexBFCcxPM5Param255 === undefined && (indexBFCcxPM5Param255 = false),
        indexBFCcxPM5Param255)
      ) {
        for (
          var indexBFCcxPM5Value1092 = 0;
          indexBFCcxPM5Value1092 < this.undefStack.length;
          indexBFCcxPM5Value1092++
        )
          delete this.undefStack[indexBFCcxPM5Value1092][indexBFCcxPM5Param253];
        this.undefStack.length > 0 &&
          (this.undefStack[this.undefStack.length - 1][indexBFCcxPM5Param253] =
            indexBFCcxPM5Param254);
      } else {
        var indexBFCcxPM5Value1093 =
          this.undefStack[this.undefStack.length - 1];
        indexBFCcxPM5Value1093 &&
          !indexBFCcxPM5Value1093.hasOwnProperty(indexBFCcxPM5Param253) &&
          (indexBFCcxPM5Value1093[indexBFCcxPM5Param253] =
            this.current[indexBFCcxPM5Param253]);
      }
      indexBFCcxPM5Param254 == null
        ? delete this.current[indexBFCcxPM5Param253]
        : (this.current[indexBFCcxPM5Param253] = indexBFCcxPM5Param254);
    }
  };
  indexBFCcxPM5Value277 = indexBFCcxPM5Value228;
  indexBFCcxPM5Helper52("\\noexpand", function (indexBFCcxPM5Param583) {
    var indexBFCcxPM5Value1387 = indexBFCcxPM5Param583.popToken();
    return (
      indexBFCcxPM5Param583.isExpandable(indexBFCcxPM5Value1387.text) &&
        ((indexBFCcxPM5Value1387.noexpand = true),
        (indexBFCcxPM5Value1387.treatAsRelax = true)),
      {
        tokens: [indexBFCcxPM5Value1387],
        numArgs: 0,
      }
    );
  });
  indexBFCcxPM5Helper52("\\expandafter", function (indexBFCcxPM5Param717) {
    var indexBFCcxPM5Value1444 = indexBFCcxPM5Param717.popToken();
    return (
      indexBFCcxPM5Param717.expandOnce(true),
      {
        tokens: [indexBFCcxPM5Value1444],
        numArgs: 0,
      }
    );
  });
  indexBFCcxPM5Helper52("\\@firstoftwo", function (indexBFCcxPM5Param795) {
    return {
      tokens: indexBFCcxPM5Param795.consumeArgs(2)[0],
      numArgs: 0,
    };
  });
  indexBFCcxPM5Helper52("\\@secondoftwo", function (indexBFCcxPM5Param796) {
    return {
      tokens: indexBFCcxPM5Param796.consumeArgs(2)[1],
      numArgs: 0,
    };
  });
  indexBFCcxPM5Helper52("\\@ifnextchar", function (indexBFCcxPM5Param506) {
    var indexBFCcxPM5Value1334 = indexBFCcxPM5Param506.consumeArgs(3);
    indexBFCcxPM5Param506.consumeSpaces();
    var indexBFCcxPM5Value1335 = indexBFCcxPM5Param506.future();
    return indexBFCcxPM5Value1334[0].length === 1 &&
      indexBFCcxPM5Value1334[0][0].text === indexBFCcxPM5Value1335.text
      ? {
          tokens: indexBFCcxPM5Value1334[1],
          numArgs: 0,
        }
      : {
          tokens: indexBFCcxPM5Value1334[2],
          numArgs: 0,
        };
  });
  indexBFCcxPM5Helper52("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
  indexBFCcxPM5Helper52("\\TextOrMath", function (indexBFCcxPM5Param620) {
    var indexBFCcxPM5Value1409 = indexBFCcxPM5Param620.consumeArgs(2);
    return indexBFCcxPM5Param620.mode === "text"
      ? {
          tokens: indexBFCcxPM5Value1409[0],
          numArgs: 0,
        }
      : {
          tokens: indexBFCcxPM5Value1409[1],
          numArgs: 0,
        };
  });
  indexBFCcxPM5Value278 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15,
  };
  indexBFCcxPM5Helper52("\\char", function (indexBFCcxPM5Param162) {
    var indexBFCcxPM5Value929 = indexBFCcxPM5Param162.popToken(),
      indexBFCcxPM5Value930,
      indexBFCcxPM5Value931 = "";
    if (indexBFCcxPM5Value929.text === "'") {
      indexBFCcxPM5Value930 = 8;
      indexBFCcxPM5Value929 = indexBFCcxPM5Param162.popToken();
    } else if (indexBFCcxPM5Value929.text === '"') {
      indexBFCcxPM5Value930 = 16;
      indexBFCcxPM5Value929 = indexBFCcxPM5Param162.popToken();
    } else if (indexBFCcxPM5Value929.text === "`") {
      if (
        ((indexBFCcxPM5Value929 = indexBFCcxPM5Param162.popToken()),
        indexBFCcxPM5Value929.text[0] === "\\")
      )
        indexBFCcxPM5Value931 = indexBFCcxPM5Value929.text.charCodeAt(1);
      else {
        if (indexBFCcxPM5Value929.text === "EOF")
          throw new indexBFCcxPM5Value14("\\char` missing argument");
        indexBFCcxPM5Value931 = indexBFCcxPM5Value929.text.charCodeAt(0);
      }
    } else indexBFCcxPM5Value930 = 10;
    if (indexBFCcxPM5Value930) {
      if (
        ((indexBFCcxPM5Value931 =
          indexBFCcxPM5Value278[indexBFCcxPM5Value929.text]),
        indexBFCcxPM5Value931 == null ||
          indexBFCcxPM5Value931 >= indexBFCcxPM5Value930)
      )
        throw new indexBFCcxPM5Value14(
          "Invalid base-" +
            indexBFCcxPM5Value930 +
            " digit " +
            indexBFCcxPM5Value929.text,
        );
      for (
        var indexBFCcxPM5Value932;
        (indexBFCcxPM5Value932 =
          indexBFCcxPM5Value278[indexBFCcxPM5Param162.future().text]) != null &&
        indexBFCcxPM5Value932 < indexBFCcxPM5Value930;
      ) {
        indexBFCcxPM5Value931 *= indexBFCcxPM5Value930;
        indexBFCcxPM5Value931 += indexBFCcxPM5Value932;
        indexBFCcxPM5Param162.popToken();
      }
    }
    return "\\@char{" + indexBFCcxPM5Value931 + "}";
  });
  indexBFCcxPM5Value279 = (
    indexBFCcxPM5Param94,
    indexBFCcxPM5Param95,
    indexBFCcxPM5Param96,
    indexBFCcxPM5Param97,
  ) => {
    var indexBFCcxPM5Value784 = indexBFCcxPM5Param94.consumeArg().tokens;
    if (indexBFCcxPM5Value784.length !== 1)
      throw new indexBFCcxPM5Value14(
        "\\newcommand's first argument must be a macro name",
      );
    var indexBFCcxPM5Value785 = indexBFCcxPM5Value784[0].text,
      indexBFCcxPM5Value786 = indexBFCcxPM5Param94.isDefined(
        indexBFCcxPM5Value785,
      );
    if (indexBFCcxPM5Value786 && !indexBFCcxPM5Param95)
      throw new indexBFCcxPM5Value14(
        "\\newcommand{" +
          indexBFCcxPM5Value785 +
          "} attempting to redefine " +
          (indexBFCcxPM5Value785 + "; use \\renewcommand"),
      );
    if (!indexBFCcxPM5Value786 && !indexBFCcxPM5Param96)
      throw new indexBFCcxPM5Value14(
        "\\renewcommand{" +
          indexBFCcxPM5Value785 +
          "} when command " +
          indexBFCcxPM5Value785 +
          " does not yet exist; use \\newcommand",
      );
    var indexBFCcxPM5Value787 = 0;
    if (
      ((indexBFCcxPM5Value784 = indexBFCcxPM5Param94.consumeArg().tokens),
      indexBFCcxPM5Value784.length === 1 &&
        indexBFCcxPM5Value784[0].text === "[")
    ) {
      for (
        var indexBFCcxPM5Value788 = "",
          indexBFCcxPM5Value789 = indexBFCcxPM5Param94.expandNextToken();
        indexBFCcxPM5Value789.text !== "]" &&
        indexBFCcxPM5Value789.text !== "EOF";
      ) {
        indexBFCcxPM5Value788 += indexBFCcxPM5Value789.text;
        indexBFCcxPM5Value789 = indexBFCcxPM5Param94.expandNextToken();
      }
      if (!indexBFCcxPM5Value788.match(/^\s*[0-9]+\s*$/))
        throw new indexBFCcxPM5Value14(
          "Invalid number of arguments: " + indexBFCcxPM5Value788,
        );
      indexBFCcxPM5Value787 = parseInt(indexBFCcxPM5Value788);
      indexBFCcxPM5Value784 = indexBFCcxPM5Param94.consumeArg().tokens;
    }
    return (
      (indexBFCcxPM5Value786 && indexBFCcxPM5Param97) ||
        indexBFCcxPM5Param94.macros.set(indexBFCcxPM5Value785, {
          tokens: indexBFCcxPM5Value784,
          numArgs: indexBFCcxPM5Value787,
        }),
      ""
    );
  };
  indexBFCcxPM5Helper52("\\newcommand", (indexBFCcxPM5Param887) =>
    indexBFCcxPM5Value279(indexBFCcxPM5Param887, false, true, false),
  );
  indexBFCcxPM5Helper52("\\renewcommand", (indexBFCcxPM5Param888) =>
    indexBFCcxPM5Value279(indexBFCcxPM5Param888, true, false, false),
  );
  indexBFCcxPM5Helper52("\\providecommand", (indexBFCcxPM5Param889) =>
    indexBFCcxPM5Value279(indexBFCcxPM5Param889, true, true, true),
  );
  indexBFCcxPM5Helper52("\\message", (indexBFCcxPM5Param557) => {
    var indexBFCcxPM5Value1364 = indexBFCcxPM5Param557.consumeArgs(1)[0];
    return (
      console.log(
        indexBFCcxPM5Value1364
          .reverse()
          .map((item) => item.text)
          .join(""),
      ),
      ""
    );
  });
  indexBFCcxPM5Helper52("\\errmessage", (indexBFCcxPM5Param556) => {
    var indexBFCcxPM5Value1363 = indexBFCcxPM5Param556.consumeArgs(1)[0];
    return (
      console.error(
        indexBFCcxPM5Value1363
          .reverse()
          .map((item) => item.text)
          .join(""),
      ),
      ""
    );
  });
  indexBFCcxPM5Helper52("\\show", (indexBFCcxPM5Param648) => {
    var indexBFCcxPM5Value1421 = indexBFCcxPM5Param648.popToken(),
      indexBFCcxPM5Value1422 = indexBFCcxPM5Value1421.text;
    return (
      console.log(
        indexBFCcxPM5Value1421,
        indexBFCcxPM5Param648.macros.get(indexBFCcxPM5Value1422),
        indexBFCcxPM5Value266[indexBFCcxPM5Value1422],
        indexBFCcxPM5Value83.math[indexBFCcxPM5Value1422],
        indexBFCcxPM5Value83.text[indexBFCcxPM5Value1422],
      ),
      ""
    );
  });
  indexBFCcxPM5Helper52("\\bgroup", "{");
  indexBFCcxPM5Helper52("\\egroup", "}");
  indexBFCcxPM5Helper52("~", "\\nobreakspace");
  indexBFCcxPM5Helper52("\\lq", "`");
  indexBFCcxPM5Helper52("\\rq", "'");
  indexBFCcxPM5Helper52("\\aa", "\\r a");
  indexBFCcxPM5Helper52("\\AA", "\\r A");
  indexBFCcxPM5Helper52(
    "\\textcopyright",
    "\\html@mathml{\\textcircled{c}}{\\char`©}",
  );
  indexBFCcxPM5Helper52(
    "\\copyright",
    "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}",
  );
  indexBFCcxPM5Helper52(
    "\\textregistered",
    "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}",
  );
  indexBFCcxPM5Helper52("ℬ", "\\mathscr{B}");
  indexBFCcxPM5Helper52("ℰ", "\\mathscr{E}");
  indexBFCcxPM5Helper52("ℱ", "\\mathscr{F}");
  indexBFCcxPM5Helper52("ℋ", "\\mathscr{H}");
  indexBFCcxPM5Helper52("ℐ", "\\mathscr{I}");
  indexBFCcxPM5Helper52("ℒ", "\\mathscr{L}");
  indexBFCcxPM5Helper52("ℳ", "\\mathscr{M}");
  indexBFCcxPM5Helper52("ℛ", "\\mathscr{R}");
  indexBFCcxPM5Helper52("ℭ", "\\mathfrak{C}");
  indexBFCcxPM5Helper52("ℌ", "\\mathfrak{H}");
  indexBFCcxPM5Helper52("ℨ", "\\mathfrak{Z}");
  indexBFCcxPM5Helper52("\\Bbbk", "\\Bbb{k}");
  indexBFCcxPM5Helper52("·", "\\cdotp");
  indexBFCcxPM5Helper52("\\llap", "\\mathllap{\\textrm{#1}}");
  indexBFCcxPM5Helper52("\\rlap", "\\mathrlap{\\textrm{#1}}");
  indexBFCcxPM5Helper52("\\clap", "\\mathclap{\\textrm{#1}}");
  indexBFCcxPM5Helper52("\\mathstrut", "\\vphantom{(}");
  indexBFCcxPM5Helper52("\\underbar", "\\underline{\\text{#1}}");
  indexBFCcxPM5Helper52(
    "\\not",
    '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}',
  );
  indexBFCcxPM5Helper52(
    "\\neq",
    "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}",
  );
  indexBFCcxPM5Helper52("\\ne", "\\neq");
  indexBFCcxPM5Helper52("≠", "\\neq");
  indexBFCcxPM5Helper52(
    "\\notin",
    "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}",
  );
  indexBFCcxPM5Helper52("∉", "\\notin");
  indexBFCcxPM5Helper52(
    "≘",
    "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}",
  );
  indexBFCcxPM5Helper52(
    "≙",
    "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}",
  );
  indexBFCcxPM5Helper52(
    "≚",
    "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}",
  );
  indexBFCcxPM5Helper52(
    "≛",
    "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}",
  );
  indexBFCcxPM5Helper52(
    "≝",
    "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}",
  );
  indexBFCcxPM5Helper52(
    "≞",
    "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}",
  );
  indexBFCcxPM5Helper52(
    "≟",
    "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}",
  );
  indexBFCcxPM5Helper52("⟂", "\\perp");
  indexBFCcxPM5Helper52("‼", "\\mathclose{!\\mkern-0.8mu!}");
  indexBFCcxPM5Helper52("∌", "\\notni");
  indexBFCcxPM5Helper52("⌜", "\\ulcorner");
  indexBFCcxPM5Helper52("⌝", "\\urcorner");
  indexBFCcxPM5Helper52("⌞", "\\llcorner");
  indexBFCcxPM5Helper52("⌟", "\\lrcorner");
  indexBFCcxPM5Helper52("©", "\\copyright");
  indexBFCcxPM5Helper52("®", "\\textregistered");
  indexBFCcxPM5Helper52("️", "\\textregistered");
  indexBFCcxPM5Helper52(
    "\\ulcorner",
    '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}',
  );
  indexBFCcxPM5Helper52(
    "\\urcorner",
    '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}',
  );
  indexBFCcxPM5Helper52(
    "\\llcorner",
    '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}',
  );
  indexBFCcxPM5Helper52(
    "\\lrcorner",
    '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}',
  );
  indexBFCcxPM5Helper52("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
  indexBFCcxPM5Helper52("⋮", "\\vdots");
  indexBFCcxPM5Helper52("\\varGamma", "\\mathit{\\Gamma}");
  indexBFCcxPM5Helper52("\\varDelta", "\\mathit{\\Delta}");
  indexBFCcxPM5Helper52("\\varTheta", "\\mathit{\\Theta}");
  indexBFCcxPM5Helper52("\\varLambda", "\\mathit{\\Lambda}");
  indexBFCcxPM5Helper52("\\varXi", "\\mathit{\\Xi}");
  indexBFCcxPM5Helper52("\\varPi", "\\mathit{\\Pi}");
  indexBFCcxPM5Helper52("\\varSigma", "\\mathit{\\Sigma}");
  indexBFCcxPM5Helper52("\\varUpsilon", "\\mathit{\\Upsilon}");
  indexBFCcxPM5Helper52("\\varPhi", "\\mathit{\\Phi}");
  indexBFCcxPM5Helper52("\\varPsi", "\\mathit{\\Psi}");
  indexBFCcxPM5Helper52("\\varOmega", "\\mathit{\\Omega}");
  indexBFCcxPM5Helper52("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
  indexBFCcxPM5Helper52(
    "\\colon",
    "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax",
  );
  indexBFCcxPM5Helper52("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
  indexBFCcxPM5Helper52("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
  indexBFCcxPM5Helper52("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
  indexBFCcxPM5Helper52("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
  indexBFCcxPM5Helper52(
    "\\dddot",
    "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}",
  );
  indexBFCcxPM5Helper52(
    "\\ddddot",
    "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}",
  );
  indexBFCcxPM5Value280 = {
    ",": "\\dotsc",
    "\\not": "\\dotsb",
    "+": "\\dotsb",
    "=": "\\dotsb",
    "<": "\\dotsb",
    ">": "\\dotsb",
    "-": "\\dotsb",
    "*": "\\dotsb",
    ":": "\\dotsb",
    "\\DOTSB": "\\dotsb",
    "\\coprod": "\\dotsb",
    "\\bigvee": "\\dotsb",
    "\\bigwedge": "\\dotsb",
    "\\biguplus": "\\dotsb",
    "\\bigcap": "\\dotsb",
    "\\bigcup": "\\dotsb",
    "\\prod": "\\dotsb",
    "\\sum": "\\dotsb",
    "\\bigotimes": "\\dotsb",
    "\\bigoplus": "\\dotsb",
    "\\bigodot": "\\dotsb",
    "\\bigsqcup": "\\dotsb",
    "\\And": "\\dotsb",
    "\\longrightarrow": "\\dotsb",
    "\\Longrightarrow": "\\dotsb",
    "\\longleftarrow": "\\dotsb",
    "\\Longleftarrow": "\\dotsb",
    "\\longleftrightarrow": "\\dotsb",
    "\\Longleftrightarrow": "\\dotsb",
    "\\mapsto": "\\dotsb",
    "\\longmapsto": "\\dotsb",
    "\\hookrightarrow": "\\dotsb",
    "\\doteq": "\\dotsb",
    "\\mathbin": "\\dotsb",
    "\\mathrel": "\\dotsb",
    "\\relbar": "\\dotsb",
    "\\Relbar": "\\dotsb",
    "\\xrightarrow": "\\dotsb",
    "\\xleftarrow": "\\dotsb",
    "\\DOTSI": "\\dotsi",
    "\\int": "\\dotsi",
    "\\oint": "\\dotsi",
    "\\iint": "\\dotsi",
    "\\iiint": "\\dotsi",
    "\\iiiint": "\\dotsi",
    "\\idotsint": "\\dotsi",
    "\\DOTSX": "\\dotsx",
  };
  indexBFCcxPM5Helper52("\\dots", function (indexBFCcxPM5Param408) {
    var indexBFCcxPM5Value1266 = "\\dotso",
      indexBFCcxPM5Value1267 = indexBFCcxPM5Param408.expandAfterFuture().text;
    return (
      indexBFCcxPM5Value1267 in indexBFCcxPM5Value280
        ? (indexBFCcxPM5Value1266 =
            indexBFCcxPM5Value280[indexBFCcxPM5Value1267])
        : (indexBFCcxPM5Value1267.slice(0, 4) === "\\not" ||
            (indexBFCcxPM5Value1267 in indexBFCcxPM5Value83.math &&
              indexBFCcxPM5Value23.contains(
                ["bin", "rel"],
                indexBFCcxPM5Value83.math[indexBFCcxPM5Value1267].group,
              ))) &&
          (indexBFCcxPM5Value1266 = "\\dotsb"),
      indexBFCcxPM5Value1266
    );
  });
  indexBFCcxPM5Value281 = {
    ")": true,
    "]": true,
    "\\rbrack": true,
    "\\}": true,
    "\\rbrace": true,
    "\\rangle": true,
    "\\rceil": true,
    "\\rfloor": true,
    "\\rgroup": true,
    "\\rmoustache": true,
    "\\right": true,
    "\\bigr": true,
    "\\biggr": true,
    "\\Bigr": true,
    "\\Biggr": true,
    $: true,
    ";": true,
    ".": true,
    ",": true,
  };
  indexBFCcxPM5Helper52("\\dotso", function (indexBFCcxPM5Param787) {
    return indexBFCcxPM5Param787.future().text in indexBFCcxPM5Value281
      ? "\\ldots\\,"
      : "\\ldots";
  });
  indexBFCcxPM5Helper52("\\dotsc", function (indexBFCcxPM5Param715) {
    var indexBFCcxPM5Value1443 = indexBFCcxPM5Param715.future().text;
    return indexBFCcxPM5Value1443 in indexBFCcxPM5Value281 &&
      indexBFCcxPM5Value1443 !== ","
      ? "\\ldots\\,"
      : "\\ldots";
  });
  indexBFCcxPM5Helper52("\\cdots", function (indexBFCcxPM5Param781) {
    return indexBFCcxPM5Param781.future().text in indexBFCcxPM5Value281
      ? "\\@cdots\\,"
      : "\\@cdots";
  });
  indexBFCcxPM5Helper52("\\dotsb", "\\cdots");
  indexBFCcxPM5Helper52("\\dotsm", "\\cdots");
  indexBFCcxPM5Helper52("\\dotsi", "\\!\\cdots");
  indexBFCcxPM5Helper52("\\dotsx", "\\ldots\\,");
  indexBFCcxPM5Helper52("\\DOTSI", "\\relax");
  indexBFCcxPM5Helper52("\\DOTSB", "\\relax");
  indexBFCcxPM5Helper52("\\DOTSX", "\\relax");
  indexBFCcxPM5Helper52(
    "\\tmspace",
    "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax",
  );
  indexBFCcxPM5Helper52("\\,", "\\tmspace+{3mu}{.1667em}");
  indexBFCcxPM5Helper52("\\thinspace", "\\,");
  indexBFCcxPM5Helper52("\\>", "\\mskip{4mu}");
  indexBFCcxPM5Helper52("\\:", "\\tmspace+{4mu}{.2222em}");
  indexBFCcxPM5Helper52("\\medspace", "\\:");
  indexBFCcxPM5Helper52("\\;", "\\tmspace+{5mu}{.2777em}");
  indexBFCcxPM5Helper52("\\thickspace", "\\;");
  indexBFCcxPM5Helper52("\\!", "\\tmspace-{3mu}{.1667em}");
  indexBFCcxPM5Helper52("\\negthinspace", "\\!");
  indexBFCcxPM5Helper52("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
  indexBFCcxPM5Helper52("\\negthickspace", "\\tmspace-{5mu}{.277em}");
  indexBFCcxPM5Helper52("\\enspace", "\\kern.5em ");
  indexBFCcxPM5Helper52("\\enskip", "\\hskip.5em\\relax");
  indexBFCcxPM5Helper52("\\quad", "\\hskip1em\\relax");
  indexBFCcxPM5Helper52("\\qquad", "\\hskip2em\\relax");
  indexBFCcxPM5Helper52("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
  indexBFCcxPM5Helper52("\\tag@paren", "\\tag@literal{({#1})}");
  indexBFCcxPM5Helper52("\\tag@literal", (indexBFCcxPM5Param690) => {
    if (indexBFCcxPM5Param690.macros.get("\\df@tag"))
      throw new indexBFCcxPM5Value14("Multiple \\tag");
    return "\\gdef\\df@tag{\\text{#1}}";
  });
  indexBFCcxPM5Helper52(
    "\\bmod",
    "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}",
  );
  indexBFCcxPM5Helper52(
    "\\pod",
    "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)",
  );
  indexBFCcxPM5Helper52("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
  indexBFCcxPM5Helper52(
    "\\mod",
    "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1",
  );
  indexBFCcxPM5Helper52("\\newline", "\\\\\\relax");
  indexBFCcxPM5Helper52(
    "\\TeX",
    "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}",
  );
  indexBFCcxPM5Value282 = indexBFCcxPM5Value69(
    indexBFCcxPM5Value57["Main-Regular"][84][1] -
      0.7 * indexBFCcxPM5Value57["Main-Regular"][65][1],
  );
  indexBFCcxPM5Helper52(
    "\\LaTeX",
    "\\textrm{\\html@mathml{" +
      ("L\\kern-.36em\\raisebox{" +
        indexBFCcxPM5Value282 +
        "}{\\scriptstyle A}") +
      "\\kern-.15em\\TeX}{LaTeX}}",
  );
  indexBFCcxPM5Helper52(
    "\\KaTeX",
    "\\textrm{\\html@mathml{" +
      ("K\\kern-.17em\\raisebox{" +
        indexBFCcxPM5Value282 +
        "}{\\scriptstyle A}") +
      "\\kern-.15em\\TeX}{KaTeX}}",
  );
  indexBFCcxPM5Helper52("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
  indexBFCcxPM5Helper52("\\@hspace", "\\hskip #1\\relax");
  indexBFCcxPM5Helper52("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
  indexBFCcxPM5Helper52("\\ordinarycolon", ":");
  indexBFCcxPM5Helper52("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
  indexBFCcxPM5Helper52(
    "\\dblcolon",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}',
  );
  indexBFCcxPM5Helper52(
    "\\coloneqq",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}',
  );
  indexBFCcxPM5Helper52(
    "\\Coloneqq",
    '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}',
  );
  indexBFCcxPM5Helper52(
    "\\coloneq",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}',
  );
  indexBFCcxPM5Helper52(
    "\\Coloneq",
    '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}',
  );
  indexBFCcxPM5Helper52(
    "\\eqqcolon",
    '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}',
  );
  indexBFCcxPM5Helper52(
    "\\Eqqcolon",
    '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}',
  );
  indexBFCcxPM5Helper52(
    "\\eqcolon",
    '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}',
  );
  indexBFCcxPM5Helper52(
    "\\Eqcolon",
    '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}',
  );
  indexBFCcxPM5Helper52(
    "\\colonapprox",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}',
  );
  indexBFCcxPM5Helper52(
    "\\Colonapprox",
    '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}',
  );
  indexBFCcxPM5Helper52(
    "\\colonsim",
    '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}',
  );
  indexBFCcxPM5Helper52(
    "\\Colonsim",
    '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}',
  );
  indexBFCcxPM5Helper52("∷", "\\dblcolon");
  indexBFCcxPM5Helper52("∹", "\\eqcolon");
  indexBFCcxPM5Helper52("≔", "\\coloneqq");
  indexBFCcxPM5Helper52("≕", "\\eqqcolon");
  indexBFCcxPM5Helper52("⩴", "\\Coloneqq");
  indexBFCcxPM5Helper52("\\ratio", "\\vcentcolon");
  indexBFCcxPM5Helper52("\\coloncolon", "\\dblcolon");
  indexBFCcxPM5Helper52("\\colonequals", "\\coloneqq");
  indexBFCcxPM5Helper52("\\coloncolonequals", "\\Coloneqq");
  indexBFCcxPM5Helper52("\\equalscolon", "\\eqqcolon");
  indexBFCcxPM5Helper52("\\equalscoloncolon", "\\Eqqcolon");
  indexBFCcxPM5Helper52("\\colonminus", "\\coloneq");
  indexBFCcxPM5Helper52("\\coloncolonminus", "\\Coloneq");
  indexBFCcxPM5Helper52("\\minuscolon", "\\eqcolon");
  indexBFCcxPM5Helper52("\\minuscoloncolon", "\\Eqcolon");
  indexBFCcxPM5Helper52("\\coloncolonapprox", "\\Colonapprox");
  indexBFCcxPM5Helper52("\\coloncolonsim", "\\Colonsim");
  indexBFCcxPM5Helper52(
    "\\simcolon",
    "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}",
  );
  indexBFCcxPM5Helper52(
    "\\simcoloncolon",
    "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}",
  );
  indexBFCcxPM5Helper52(
    "\\approxcolon",
    "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}",
  );
  indexBFCcxPM5Helper52(
    "\\approxcoloncolon",
    "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}",
  );
  indexBFCcxPM5Helper52(
    "\\notni",
    "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}",
  );
  indexBFCcxPM5Helper52("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
  indexBFCcxPM5Helper52("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
  indexBFCcxPM5Helper52("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
  indexBFCcxPM5Helper52("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
  indexBFCcxPM5Helper52(
    "\\varlimsup",
    "\\DOTSB\\operatorname*{\\overline{lim}}",
  );
  indexBFCcxPM5Helper52(
    "\\varliminf",
    "\\DOTSB\\operatorname*{\\underline{lim}}",
  );
  indexBFCcxPM5Helper52(
    "\\varinjlim",
    "\\DOTSB\\operatorname*{\\underrightarrow{lim}}",
  );
  indexBFCcxPM5Helper52(
    "\\varprojlim",
    "\\DOTSB\\operatorname*{\\underleftarrow{lim}}",
  );
  indexBFCcxPM5Helper52("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
  indexBFCcxPM5Helper52("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
  indexBFCcxPM5Helper52("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
  indexBFCcxPM5Helper52("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
  indexBFCcxPM5Helper52("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
  indexBFCcxPM5Helper52("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
  indexBFCcxPM5Helper52("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
  indexBFCcxPM5Helper52(
    "\\nshortparallel",
    "\\html@mathml{\\@nshortparallel}{∦}",
  );
  indexBFCcxPM5Helper52("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
  indexBFCcxPM5Helper52("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
  indexBFCcxPM5Helper52("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
  indexBFCcxPM5Helper52(
    "\\varsubsetneqq",
    "\\html@mathml{\\@varsubsetneqq}{⫋}",
  );
  indexBFCcxPM5Helper52("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
  indexBFCcxPM5Helper52(
    "\\varsupsetneqq",
    "\\html@mathml{\\@varsupsetneqq}{⫌}",
  );
  indexBFCcxPM5Helper52("\\imath", "\\html@mathml{\\@imath}{ı}");
  indexBFCcxPM5Helper52("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
  indexBFCcxPM5Helper52(
    "\\llbracket",
    "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}",
  );
  indexBFCcxPM5Helper52(
    "\\rrbracket",
    "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}",
  );
  indexBFCcxPM5Helper52("⟦", "\\llbracket");
  indexBFCcxPM5Helper52("⟧", "\\rrbracket");
  indexBFCcxPM5Helper52(
    "\\lBrace",
    "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}",
  );
  indexBFCcxPM5Helper52(
    "\\rBrace",
    "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}",
  );
  indexBFCcxPM5Helper52("⦃", "\\lBrace");
  indexBFCcxPM5Helper52("⦄", "\\rBrace");
  indexBFCcxPM5Helper52(
    "\\minuso",
    "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}",
  );
  indexBFCcxPM5Helper52("⦵", "\\minuso");
  indexBFCcxPM5Helper52("\\darr", "\\downarrow");
  indexBFCcxPM5Helper52("\\dArr", "\\Downarrow");
  indexBFCcxPM5Helper52("\\Darr", "\\Downarrow");
  indexBFCcxPM5Helper52("\\lang", "\\langle");
  indexBFCcxPM5Helper52("\\rang", "\\rangle");
  indexBFCcxPM5Helper52("\\uarr", "\\uparrow");
  indexBFCcxPM5Helper52("\\uArr", "\\Uparrow");
  indexBFCcxPM5Helper52("\\Uarr", "\\Uparrow");
  indexBFCcxPM5Helper52("\\N", "\\mathbb{N}");
  indexBFCcxPM5Helper52("\\R", "\\mathbb{R}");
  indexBFCcxPM5Helper52("\\Z", "\\mathbb{Z}");
  indexBFCcxPM5Helper52("\\alef", "\\aleph");
  indexBFCcxPM5Helper52("\\alefsym", "\\aleph");
  indexBFCcxPM5Helper52("\\Alpha", "\\mathrm{A}");
  indexBFCcxPM5Helper52("\\Beta", "\\mathrm{B}");
  indexBFCcxPM5Helper52("\\bull", "\\bullet");
  indexBFCcxPM5Helper52("\\Chi", "\\mathrm{X}");
  indexBFCcxPM5Helper52("\\clubs", "\\clubsuit");
  indexBFCcxPM5Helper52("\\cnums", "\\mathbb{C}");
  indexBFCcxPM5Helper52("\\Complex", "\\mathbb{C}");
  indexBFCcxPM5Helper52("\\Dagger", "\\ddagger");
  indexBFCcxPM5Helper52("\\diamonds", "\\diamondsuit");
  indexBFCcxPM5Helper52("\\empty", "\\emptyset");
  indexBFCcxPM5Helper52("\\Epsilon", "\\mathrm{E}");
  indexBFCcxPM5Helper52("\\Eta", "\\mathrm{H}");
  indexBFCcxPM5Helper52("\\exist", "\\exists");
  indexBFCcxPM5Helper52("\\harr", "\\leftrightarrow");
  indexBFCcxPM5Helper52("\\hArr", "\\Leftrightarrow");
  indexBFCcxPM5Helper52("\\Harr", "\\Leftrightarrow");
  indexBFCcxPM5Helper52("\\hearts", "\\heartsuit");
  indexBFCcxPM5Helper52("\\image", "\\Im");
  indexBFCcxPM5Helper52("\\infin", "\\infty");
  indexBFCcxPM5Helper52("\\Iota", "\\mathrm{I}");
  indexBFCcxPM5Helper52("\\isin", "\\in");
  indexBFCcxPM5Helper52("\\Kappa", "\\mathrm{K}");
  indexBFCcxPM5Helper52("\\larr", "\\leftarrow");
  indexBFCcxPM5Helper52("\\lArr", "\\Leftarrow");
  indexBFCcxPM5Helper52("\\Larr", "\\Leftarrow");
  indexBFCcxPM5Helper52("\\lrarr", "\\leftrightarrow");
  indexBFCcxPM5Helper52("\\lrArr", "\\Leftrightarrow");
  indexBFCcxPM5Helper52("\\Lrarr", "\\Leftrightarrow");
  indexBFCcxPM5Helper52("\\Mu", "\\mathrm{M}");
  indexBFCcxPM5Helper52("\\natnums", "\\mathbb{N}");
  indexBFCcxPM5Helper52("\\Nu", "\\mathrm{N}");
  indexBFCcxPM5Helper52("\\Omicron", "\\mathrm{O}");
  indexBFCcxPM5Helper52("\\plusmn", "\\pm");
  indexBFCcxPM5Helper52("\\rarr", "\\rightarrow");
  indexBFCcxPM5Helper52("\\rArr", "\\Rightarrow");
  indexBFCcxPM5Helper52("\\Rarr", "\\Rightarrow");
  indexBFCcxPM5Helper52("\\real", "\\Re");
  indexBFCcxPM5Helper52("\\reals", "\\mathbb{R}");
  indexBFCcxPM5Helper52("\\Reals", "\\mathbb{R}");
  indexBFCcxPM5Helper52("\\Rho", "\\mathrm{P}");
  indexBFCcxPM5Helper52("\\sdot", "\\cdot");
  indexBFCcxPM5Helper52("\\sect", "\\S");
  indexBFCcxPM5Helper52("\\spades", "\\spadesuit");
  indexBFCcxPM5Helper52("\\sub", "\\subset");
  indexBFCcxPM5Helper52("\\sube", "\\subseteq");
  indexBFCcxPM5Helper52("\\supe", "\\supseteq");
  indexBFCcxPM5Helper52("\\Tau", "\\mathrm{T}");
  indexBFCcxPM5Helper52("\\thetasym", "\\vartheta");
  indexBFCcxPM5Helper52("\\weierp", "\\wp");
  indexBFCcxPM5Helper52("\\Zeta", "\\mathrm{Z}");
  indexBFCcxPM5Helper52("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
  indexBFCcxPM5Helper52("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
  indexBFCcxPM5Helper52(
    "\\plim",
    "\\DOTSB\\mathop{\\operatorname{plim}}\\limits",
  );
  indexBFCcxPM5Helper52("\\bra", "\\mathinner{\\langle{#1}|}");
  indexBFCcxPM5Helper52("\\ket", "\\mathinner{|{#1}\\rangle}");
  indexBFCcxPM5Helper52("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
  indexBFCcxPM5Helper52("\\Bra", "\\left\\langle#1\\right|");
  indexBFCcxPM5Helper52("\\Ket", "\\left|#1\\right\\rangle");
  indexBFCcxPM5Value283 =
    (indexBFCcxPM5Param153) => (indexBFCcxPM5Param157) => {
      var indexBFCcxPM5Value917 = indexBFCcxPM5Param157.consumeArg().tokens,
        indexBFCcxPM5Value918 = indexBFCcxPM5Param157.consumeArg().tokens,
        indexBFCcxPM5Value919 = indexBFCcxPM5Param157.consumeArg().tokens,
        indexBFCcxPM5Value920 = indexBFCcxPM5Param157.consumeArg().tokens,
        indexBFCcxPM5Value921 = indexBFCcxPM5Param157.macros.get("|"),
        indexBFCcxPM5Value922 = indexBFCcxPM5Param157.macros.get("\\|");
      indexBFCcxPM5Param157.macros.beginGroup();
      var indexBFCcxPM5Value923 =
        (indexBFCcxPM5Param458) => (indexBFCcxPM5Param469) => {
          indexBFCcxPM5Param153 &&
            (indexBFCcxPM5Param469.macros.set("|", indexBFCcxPM5Value921),
            indexBFCcxPM5Value919.length &&
              indexBFCcxPM5Param469.macros.set("\\|", indexBFCcxPM5Value922));
          var indexBFCcxPM5Value1312 = indexBFCcxPM5Param458;
          return (
            !indexBFCcxPM5Param458 &&
              indexBFCcxPM5Value919.length &&
              indexBFCcxPM5Param469.future().text === "|" &&
              (indexBFCcxPM5Param469.popToken(),
              (indexBFCcxPM5Value1312 = true)),
            {
              tokens: indexBFCcxPM5Value1312
                ? indexBFCcxPM5Value919
                : indexBFCcxPM5Value918,
              numArgs: 0,
            }
          );
        };
      indexBFCcxPM5Param157.macros.set("|", indexBFCcxPM5Value923(false));
      indexBFCcxPM5Value919.length &&
        indexBFCcxPM5Param157.macros.set("\\|", indexBFCcxPM5Value923(true));
      var indexBFCcxPM5Value924 = indexBFCcxPM5Param157.consumeArg().tokens,
        indexBFCcxPM5Value925 = indexBFCcxPM5Param157.expandTokens([
          ...indexBFCcxPM5Value920,
          ...indexBFCcxPM5Value924,
          ...indexBFCcxPM5Value917,
        ]);
      return (
        indexBFCcxPM5Param157.macros.endGroup(),
        {
          tokens: indexBFCcxPM5Value925.reverse(),
          numArgs: 0,
        }
      );
    };
  indexBFCcxPM5Helper52("\\bra@ket", indexBFCcxPM5Value283(false));
  indexBFCcxPM5Helper52("\\bra@set", indexBFCcxPM5Value283(true));
  indexBFCcxPM5Helper52(
    "\\Braket",
    "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}",
  );
  indexBFCcxPM5Helper52(
    "\\Set",
    "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}",
  );
  indexBFCcxPM5Helper52("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
  indexBFCcxPM5Helper52("\\angln", "{\\angl n}");
  indexBFCcxPM5Helper52("\\blue", "\\textcolor{##6495ed}{#1}");
  indexBFCcxPM5Helper52("\\orange", "\\textcolor{##ffa500}{#1}");
  indexBFCcxPM5Helper52("\\pink", "\\textcolor{##ff00af}{#1}");
  indexBFCcxPM5Helper52("\\red", "\\textcolor{##df0030}{#1}");
  indexBFCcxPM5Helper52("\\green", "\\textcolor{##28ae7b}{#1}");
  indexBFCcxPM5Helper52("\\gray", "\\textcolor{gray}{#1}");
  indexBFCcxPM5Helper52("\\purple", "\\textcolor{##9d38bd}{#1}");
  indexBFCcxPM5Helper52("\\blueA", "\\textcolor{##ccfaff}{#1}");
  indexBFCcxPM5Helper52("\\blueB", "\\textcolor{##80f6ff}{#1}");
  indexBFCcxPM5Helper52("\\blueC", "\\textcolor{##63d9ea}{#1}");
  indexBFCcxPM5Helper52("\\blueD", "\\textcolor{##11accd}{#1}");
  indexBFCcxPM5Helper52("\\blueE", "\\textcolor{##0c7f99}{#1}");
  indexBFCcxPM5Helper52("\\tealA", "\\textcolor{##94fff5}{#1}");
  indexBFCcxPM5Helper52("\\tealB", "\\textcolor{##26edd5}{#1}");
  indexBFCcxPM5Helper52("\\tealC", "\\textcolor{##01d1c1}{#1}");
  indexBFCcxPM5Helper52("\\tealD", "\\textcolor{##01a995}{#1}");
  indexBFCcxPM5Helper52("\\tealE", "\\textcolor{##208170}{#1}");
  indexBFCcxPM5Helper52("\\greenA", "\\textcolor{##b6ffb0}{#1}");
  indexBFCcxPM5Helper52("\\greenB", "\\textcolor{##8af281}{#1}");
  indexBFCcxPM5Helper52("\\greenC", "\\textcolor{##74cf70}{#1}");
  indexBFCcxPM5Helper52("\\greenD", "\\textcolor{##1fab54}{#1}");
  indexBFCcxPM5Helper52("\\greenE", "\\textcolor{##0d923f}{#1}");
  indexBFCcxPM5Helper52("\\goldA", "\\textcolor{##ffd0a9}{#1}");
  indexBFCcxPM5Helper52("\\goldB", "\\textcolor{##ffbb71}{#1}");
  indexBFCcxPM5Helper52("\\goldC", "\\textcolor{##ff9c39}{#1}");
  indexBFCcxPM5Helper52("\\goldD", "\\textcolor{##e07d10}{#1}");
  indexBFCcxPM5Helper52("\\goldE", "\\textcolor{##a75a05}{#1}");
  indexBFCcxPM5Helper52("\\redA", "\\textcolor{##fca9a9}{#1}");
  indexBFCcxPM5Helper52("\\redB", "\\textcolor{##ff8482}{#1}");
  indexBFCcxPM5Helper52("\\redC", "\\textcolor{##f9685d}{#1}");
  indexBFCcxPM5Helper52("\\redD", "\\textcolor{##e84d39}{#1}");
  indexBFCcxPM5Helper52("\\redE", "\\textcolor{##bc2612}{#1}");
  indexBFCcxPM5Helper52("\\maroonA", "\\textcolor{##ffbde0}{#1}");
  indexBFCcxPM5Helper52("\\maroonB", "\\textcolor{##ff92c6}{#1}");
  indexBFCcxPM5Helper52("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
  indexBFCcxPM5Helper52("\\maroonD", "\\textcolor{##ca337c}{#1}");
  indexBFCcxPM5Helper52("\\maroonE", "\\textcolor{##9e034e}{#1}");
  indexBFCcxPM5Helper52("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
  indexBFCcxPM5Helper52("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
  indexBFCcxPM5Helper52("\\purpleC", "\\textcolor{##aa87ff}{#1}");
  indexBFCcxPM5Helper52("\\purpleD", "\\textcolor{##7854ab}{#1}");
  indexBFCcxPM5Helper52("\\purpleE", "\\textcolor{##543b78}{#1}");
  indexBFCcxPM5Helper52("\\mintA", "\\textcolor{##f5f9e8}{#1}");
  indexBFCcxPM5Helper52("\\mintB", "\\textcolor{##edf2df}{#1}");
  indexBFCcxPM5Helper52("\\mintC", "\\textcolor{##e0e5cc}{#1}");
  indexBFCcxPM5Helper52("\\grayA", "\\textcolor{##f6f7f7}{#1}");
  indexBFCcxPM5Helper52("\\grayB", "\\textcolor{##f0f1f2}{#1}");
  indexBFCcxPM5Helper52("\\grayC", "\\textcolor{##e3e5e6}{#1}");
  indexBFCcxPM5Helper52("\\grayD", "\\textcolor{##d6d8da}{#1}");
  indexBFCcxPM5Helper52("\\grayE", "\\textcolor{##babec2}{#1}");
  indexBFCcxPM5Helper52("\\grayF", "\\textcolor{##888d93}{#1}");
  indexBFCcxPM5Helper52("\\grayG", "\\textcolor{##626569}{#1}");
  indexBFCcxPM5Helper52("\\grayH", "\\textcolor{##3b3e40}{#1}");
  indexBFCcxPM5Helper52("\\grayI", "\\textcolor{##21242c}{#1}");
  indexBFCcxPM5Helper52("\\kaBlue", "\\textcolor{##314453}{#1}");
  indexBFCcxPM5Helper52("\\kaGreen", "\\textcolor{##71B307}{#1}");
  indexBFCcxPM5Value284 = {
    "^": true,
    _: true,
    "\\limits": true,
    "\\nolimits": true,
  };
  indexBFCcxPM5Value285 = class {
    constructor(
      indexBFCcxPM5Param293,
      indexBFCcxPM5Param294,
      indexBFCcxPM5Param295,
    ) {
      this.settings = undefined;
      this.expansionCount = undefined;
      this.lexer = undefined;
      this.macros = undefined;
      this.stack = undefined;
      this.mode = undefined;
      this.settings = indexBFCcxPM5Param294;
      this.expansionCount = 0;
      this.feed(indexBFCcxPM5Param293);
      this.macros = new indexBFCcxPM5Value276(
        indexBFCcxPM5Value277,
        indexBFCcxPM5Param294.macros,
      );
      this.mode = indexBFCcxPM5Param295;
      this.stack = [];
    }
    feed(indexBFCcxPM5Param839) {
      this.lexer = new indexBFCcxPM5Value275(
        indexBFCcxPM5Param839,
        this.settings,
      );
    }
    switchMode(indexBFCcxPM5Param868) {
      this.mode = indexBFCcxPM5Param868;
    }
    beginGroup() {
      this.macros.beginGroup();
    }
    endGroup() {
      this.macros.endGroup();
    }
    endGroups() {
      this.macros.endGroups();
    }
    future() {
      return (
        this.stack.length === 0 && this.pushToken(this.lexer.lex()),
        this.stack[this.stack.length - 1]
      );
    }
    popToken() {
      return (this.future(), this.stack.pop());
    }
    pushToken(indexBFCcxPM5Param864) {
      this.stack.push(indexBFCcxPM5Param864);
    }
    pushTokens(indexBFCcxPM5Param860) {
      this.stack.push(...indexBFCcxPM5Param860);
    }
    scanArgument(indexBFCcxPM5Param290) {
      var start, end, tokens;
      if (indexBFCcxPM5Param290) {
        if ((this.consumeSpaces(), this.future().text !== "[")) return null;
        start = this.popToken();
        ({ tokens, end } = this.consumeArg(["]"]));
      } else ({ tokens, start, end } = this.consumeArg());
      return (
        this.pushToken(new indexBFCcxPM5Value13("EOF", end.loc)),
        this.pushTokens(tokens),
        start.range(end, "")
      );
    }
    consumeSpaces() {
      for (; this.future().text === " ";) this.stack.pop();
    }
    consumeArg(indexBFCcxPM5Param98) {
      var indexBFCcxPM5Value790 = [],
        indexBFCcxPM5Value791 =
          indexBFCcxPM5Param98 && indexBFCcxPM5Param98.length > 0;
      indexBFCcxPM5Value791 || this.consumeSpaces();
      var indexBFCcxPM5Value792 = this.future(),
        indexBFCcxPM5Value793,
        indexBFCcxPM5Value794 = 0,
        indexBFCcxPM5Value795 = 0;
      do {
        if (
          ((indexBFCcxPM5Value793 = this.popToken()),
          indexBFCcxPM5Value790.push(indexBFCcxPM5Value793),
          indexBFCcxPM5Value793.text === "{")
        )
          ++indexBFCcxPM5Value794;
        else if (indexBFCcxPM5Value793.text === "}") {
          if ((--indexBFCcxPM5Value794, indexBFCcxPM5Value794 === -1))
            throw new indexBFCcxPM5Value14("Extra }", indexBFCcxPM5Value793);
        } else if (indexBFCcxPM5Value793.text === "EOF")
          throw new indexBFCcxPM5Value14(
            "Unexpected end of input in a macro argument, expected '" +
              (indexBFCcxPM5Param98 && indexBFCcxPM5Value791
                ? indexBFCcxPM5Param98[indexBFCcxPM5Value795]
                : "}") +
              "'",
            indexBFCcxPM5Value793,
          );
        if (indexBFCcxPM5Param98 && indexBFCcxPM5Value791)
          if (
            (indexBFCcxPM5Value794 === 0 ||
              (indexBFCcxPM5Value794 === 1 &&
                indexBFCcxPM5Param98[indexBFCcxPM5Value795] === "{")) &&
            indexBFCcxPM5Value793.text ===
              indexBFCcxPM5Param98[indexBFCcxPM5Value795]
          ) {
            if (
              (++indexBFCcxPM5Value795,
              indexBFCcxPM5Value795 === indexBFCcxPM5Param98.length)
            ) {
              indexBFCcxPM5Value790.splice(
                -indexBFCcxPM5Value795,
                indexBFCcxPM5Value795,
              );
              break;
            }
          } else indexBFCcxPM5Value795 = 0;
      } while (indexBFCcxPM5Value794 !== 0 || indexBFCcxPM5Value791);
      return (
        indexBFCcxPM5Value792.text === "{" &&
          indexBFCcxPM5Value790[indexBFCcxPM5Value790.length - 1].text ===
            "}" &&
          (indexBFCcxPM5Value790.pop(), indexBFCcxPM5Value790.shift()),
        indexBFCcxPM5Value790.reverse(),
        {
          tokens: indexBFCcxPM5Value790,
          start: indexBFCcxPM5Value792,
          end: indexBFCcxPM5Value793,
        }
      );
    }
    consumeArgs(indexBFCcxPM5Param234, indexBFCcxPM5Param235) {
      if (indexBFCcxPM5Param235) {
        if (indexBFCcxPM5Param235.length !== indexBFCcxPM5Param234 + 1)
          throw new indexBFCcxPM5Value14(
            "The length of delimiters doesn't match the number of args!",
          );
        for (
          var indexBFCcxPM5Value1065 = indexBFCcxPM5Param235[0],
            indexBFCcxPM5Value1066 = 0;
          indexBFCcxPM5Value1066 < indexBFCcxPM5Value1065.length;
          indexBFCcxPM5Value1066++
        ) {
          var indexBFCcxPM5Value1067 = this.popToken();
          if (
            indexBFCcxPM5Value1065[indexBFCcxPM5Value1066] !==
            indexBFCcxPM5Value1067.text
          )
            throw new indexBFCcxPM5Value14(
              "Use of the macro doesn't match its definition",
              indexBFCcxPM5Value1067,
            );
        }
      }
      for (
        var indexBFCcxPM5Value1068 = [], indexBFCcxPM5Value1069 = 0;
        indexBFCcxPM5Value1069 < indexBFCcxPM5Param234;
        indexBFCcxPM5Value1069++
      )
        indexBFCcxPM5Value1068.push(
          this.consumeArg(
            indexBFCcxPM5Param235 &&
              indexBFCcxPM5Param235[indexBFCcxPM5Value1069 + 1],
          ).tokens,
        );
      return indexBFCcxPM5Value1068;
    }
    countExpansion(indexBFCcxPM5Param452) {
      if (
        ((this.expansionCount += indexBFCcxPM5Param452),
        this.expansionCount > this.settings.maxExpand)
      )
        throw new indexBFCcxPM5Value14(
          "Too many expansions: infinite loop or need to increase maxExpand setting",
        );
    }
    expandOnce(indexBFCcxPM5Param101) {
      var indexBFCcxPM5Value810 = this.popToken(),
        indexBFCcxPM5Value811 = indexBFCcxPM5Value810.text,
        indexBFCcxPM5Value812 = indexBFCcxPM5Value810.noexpand
          ? null
          : this._getExpansion(indexBFCcxPM5Value811);
      if (
        indexBFCcxPM5Value812 == null ||
        (indexBFCcxPM5Param101 && indexBFCcxPM5Value812.unexpandable)
      ) {
        if (
          indexBFCcxPM5Param101 &&
          indexBFCcxPM5Value812 == null &&
          indexBFCcxPM5Value811[0] === "\\" &&
          !this.isDefined(indexBFCcxPM5Value811)
        )
          throw new indexBFCcxPM5Value14(
            "Undefined control sequence: " + indexBFCcxPM5Value811,
          );
        return (this.pushToken(indexBFCcxPM5Value810), false);
      }
      this.countExpansion(1);
      var indexBFCcxPM5Value813 = indexBFCcxPM5Value812.tokens,
        indexBFCcxPM5Value814 = this.consumeArgs(
          indexBFCcxPM5Value812.numArgs,
          indexBFCcxPM5Value812.delimiters,
        );
      if (indexBFCcxPM5Value812.numArgs) {
        indexBFCcxPM5Value813 = indexBFCcxPM5Value813.slice();
        for (
          var indexBFCcxPM5Value815 = indexBFCcxPM5Value813.length - 1;
          indexBFCcxPM5Value815 >= 0;
          --indexBFCcxPM5Value815
        ) {
          var indexBFCcxPM5Value816 =
            indexBFCcxPM5Value813[indexBFCcxPM5Value815];
          if (indexBFCcxPM5Value816.text === "#") {
            if (indexBFCcxPM5Value815 === 0)
              throw new indexBFCcxPM5Value14(
                "Incomplete placeholder at end of macro body",
                indexBFCcxPM5Value816,
              );
            if (
              ((indexBFCcxPM5Value816 =
                indexBFCcxPM5Value813[--indexBFCcxPM5Value815]),
              indexBFCcxPM5Value816.text === "#")
            )
              indexBFCcxPM5Value813.splice(indexBFCcxPM5Value815 + 1, 1);
            else if (/^[1-9]$/.test(indexBFCcxPM5Value816.text))
              indexBFCcxPM5Value813.splice(
                indexBFCcxPM5Value815,
                2,
                ...indexBFCcxPM5Value814[indexBFCcxPM5Value816.text - 1],
              );
            else
              throw new indexBFCcxPM5Value14(
                "Not a valid argument number",
                indexBFCcxPM5Value816,
              );
          }
        }
      }
      return (
        this.pushTokens(indexBFCcxPM5Value813),
        indexBFCcxPM5Value813.length
      );
    }
    expandAfterFuture() {
      return (this.expandOnce(), this.future());
    }
    expandNextToken() {
      for (;;)
        if (this.expandOnce() === false) {
          var indexBFCcxPM5Value1347 = this.stack.pop();
          return (
            indexBFCcxPM5Value1347.treatAsRelax &&
              (indexBFCcxPM5Value1347.text = "\\relax"),
            indexBFCcxPM5Value1347
          );
        }
      throw Error();
    }
    expandMacro(indexBFCcxPM5Param730) {
      return this.macros.has(indexBFCcxPM5Param730)
        ? this.expandTokens([new indexBFCcxPM5Value13(indexBFCcxPM5Param730)])
        : undefined;
    }
    expandTokens(indexBFCcxPM5Param366) {
      var indexBFCcxPM5Value1213 = [],
        indexBFCcxPM5Value1214 = this.stack.length;
      for (
        this.pushTokens(indexBFCcxPM5Param366);
        this.stack.length > indexBFCcxPM5Value1214;
      )
        if (this.expandOnce(true) === false) {
          var indexBFCcxPM5Value1215 = this.stack.pop();
          indexBFCcxPM5Value1215.treatAsRelax &&=
            ((indexBFCcxPM5Value1215.noexpand = false), false);
          indexBFCcxPM5Value1213.push(indexBFCcxPM5Value1215);
        }
      return (
        this.countExpansion(indexBFCcxPM5Value1213.length),
        indexBFCcxPM5Value1213
      );
    }
    expandMacroAsText(indexBFCcxPM5Param705) {
      var indexBFCcxPM5Value1439 = this.expandMacro(indexBFCcxPM5Param705);
      return (
        indexBFCcxPM5Value1439 &&
        indexBFCcxPM5Value1439.map((item) => item.text).join("")
      );
    }
    _getExpansion(indexBFCcxPM5Param168) {
      var indexBFCcxPM5Value938 = this.macros.get(indexBFCcxPM5Param168);
      if (indexBFCcxPM5Value938 == null) return indexBFCcxPM5Value938;
      if (indexBFCcxPM5Param168.length === 1) {
        var indexBFCcxPM5Value939 = this.lexer.catcodes[indexBFCcxPM5Param168];
        if (indexBFCcxPM5Value939 != null && indexBFCcxPM5Value939 !== 13)
          return;
      }
      var indexBFCcxPM5Value940 =
        typeof indexBFCcxPM5Value938 == "function"
          ? indexBFCcxPM5Value938(this)
          : indexBFCcxPM5Value938;
      if (typeof indexBFCcxPM5Value940 == "string") {
        var indexBFCcxPM5Value941 = 0;
        if (indexBFCcxPM5Value940.indexOf("#") !== -1)
          for (
            var indexBFCcxPM5Value942 = indexBFCcxPM5Value940.replace(
              /##/g,
              "",
            );
            indexBFCcxPM5Value942.indexOf("#" + (indexBFCcxPM5Value941 + 1)) !==
            -1;
          )
            ++indexBFCcxPM5Value941;
        for (
          var indexBFCcxPM5Value943 = new indexBFCcxPM5Value275(
              indexBFCcxPM5Value940,
              this.settings,
            ),
            indexBFCcxPM5Value944 = [],
            indexBFCcxPM5Value945 = indexBFCcxPM5Value943.lex();
          indexBFCcxPM5Value945.text !== "EOF";
        ) {
          indexBFCcxPM5Value944.push(indexBFCcxPM5Value945);
          indexBFCcxPM5Value945 = indexBFCcxPM5Value943.lex();
        }
        return (
          indexBFCcxPM5Value944.reverse(),
          {
            tokens: indexBFCcxPM5Value944,
            numArgs: indexBFCcxPM5Value941,
          }
        );
      }
      return indexBFCcxPM5Value940;
    }
    isDefined(indexBFCcxPM5Param541) {
      return (
        this.macros.has(indexBFCcxPM5Param541) ||
        indexBFCcxPM5Value266.hasOwnProperty(indexBFCcxPM5Param541) ||
        indexBFCcxPM5Value83.math.hasOwnProperty(indexBFCcxPM5Param541) ||
        indexBFCcxPM5Value83.text.hasOwnProperty(indexBFCcxPM5Param541) ||
        indexBFCcxPM5Value284.hasOwnProperty(indexBFCcxPM5Param541)
      );
    }
    isExpandable(indexBFCcxPM5Param548) {
      var indexBFCcxPM5Value1355 = this.macros.get(indexBFCcxPM5Param548);
      return indexBFCcxPM5Value1355 == null
        ? indexBFCcxPM5Value266.hasOwnProperty(indexBFCcxPM5Param548) &&
            !indexBFCcxPM5Value266[indexBFCcxPM5Param548].primitive
        : typeof indexBFCcxPM5Value1355 == "string" ||
            typeof indexBFCcxPM5Value1355 == "function" ||
            !indexBFCcxPM5Value1355.unexpandable;
    }
  };
  indexBFCcxPM5Value286 = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/;
  indexBFCcxPM5Value287 = Object.freeze({
    "₊": "+",
    "₋": "-",
    "₌": "=",
    "₍": "(",
    "₎": ")",
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
    ₐ: "a",
    ₑ: "e",
    ₕ: "h",
    ᵢ: "i",
    ⱼ: "j",
    ₖ: "k",
    ₗ: "l",
    ₘ: "m",
    ₙ: "n",
    ₒ: "o",
    ₚ: "p",
    ᵣ: "r",
    ₛ: "s",
    ₜ: "t",
    ᵤ: "u",
    ᵥ: "v",
    ₓ: "x",
    ᵦ: "β",
    ᵧ: "γ",
    ᵨ: "ρ",
    ᵩ: "ϕ",
    ᵪ: "χ",
    "⁺": "+",
    "⁻": "-",
    "⁼": "=",
    "⁽": "(",
    "⁾": ")",
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    ᴬ: "A",
    ᴮ: "B",
    ᴰ: "D",
    ᴱ: "E",
    ᴳ: "G",
    ᴴ: "H",
    ᴵ: "I",
    ᴶ: "J",
    ᴷ: "K",
    ᴸ: "L",
    ᴹ: "M",
    ᴺ: "N",
    ᴼ: "O",
    ᴾ: "P",
    ᴿ: "R",
    ᵀ: "T",
    ᵁ: "U",
    ⱽ: "V",
    ᵂ: "W",
    ᵃ: "a",
    ᵇ: "b",
    ᶜ: "c",
    ᵈ: "d",
    ᵉ: "e",
    ᶠ: "f",
    ᵍ: "g",
    ʰ: "h",
    ⁱ: "i",
    ʲ: "j",
    ᵏ: "k",
    ˡ: "l",
    ᵐ: "m",
    ⁿ: "n",
    ᵒ: "o",
    ᵖ: "p",
    ʳ: "r",
    ˢ: "s",
    ᵗ: "t",
    ᵘ: "u",
    ᵛ: "v",
    ʷ: "w",
    ˣ: "x",
    ʸ: "y",
    ᶻ: "z",
    ᵝ: "β",
    ᵞ: "γ",
    ᵟ: "δ",
    ᵠ: "ϕ",
    ᵡ: "χ",
    ᶿ: "θ",
  });
  indexBFCcxPM5Value288 = {
    "́": {
      text: "\\'",
      math: "\\acute",
    },
    "̀": {
      text: "\\`",
      math: "\\grave",
    },
    "̈": {
      text: '\\"',
      math: "\\ddot",
    },
    "̃": {
      text: "\\~",
      math: "\\tilde",
    },
    "̄": {
      text: "\\=",
      math: "\\bar",
    },
    "̆": {
      text: "\\u",
      math: "\\breve",
    },
    "̌": {
      text: "\\v",
      math: "\\check",
    },
    "̂": {
      text: "\\^",
      math: "\\hat",
    },
    "̇": {
      text: "\\.",
      math: "\\dot",
    },
    "̊": {
      text: "\\r",
      math: "\\mathring",
    },
    "̋": {
      text: "\\H",
    },
    "̧": {
      text: "\\c",
    },
  };
  indexBFCcxPM5Value289 = {
    á: "á",
    à: "à",
    ä: "ä",
    ǟ: "ǟ",
    ã: "ã",
    ā: "ā",
    ă: "ă",
    ắ: "ắ",
    ằ: "ằ",
    ẵ: "ẵ",
    ǎ: "ǎ",
    â: "â",
    ấ: "ấ",
    ầ: "ầ",
    ẫ: "ẫ",
    ȧ: "ȧ",
    ǡ: "ǡ",
    å: "å",
    ǻ: "ǻ",
    ḃ: "ḃ",
    ć: "ć",
    ḉ: "ḉ",
    č: "č",
    ĉ: "ĉ",
    ċ: "ċ",
    ç: "ç",
    ď: "ď",
    ḋ: "ḋ",
    ḑ: "ḑ",
    é: "é",
    è: "è",
    ë: "ë",
    ẽ: "ẽ",
    ē: "ē",
    ḗ: "ḗ",
    ḕ: "ḕ",
    ĕ: "ĕ",
    ḝ: "ḝ",
    ě: "ě",
    ê: "ê",
    ế: "ế",
    ề: "ề",
    ễ: "ễ",
    ė: "ė",
    ȩ: "ȩ",
    ḟ: "ḟ",
    ǵ: "ǵ",
    ḡ: "ḡ",
    ğ: "ğ",
    ǧ: "ǧ",
    ĝ: "ĝ",
    ġ: "ġ",
    ģ: "ģ",
    ḧ: "ḧ",
    ȟ: "ȟ",
    ĥ: "ĥ",
    ḣ: "ḣ",
    ḩ: "ḩ",
    í: "í",
    ì: "ì",
    ï: "ï",
    ḯ: "ḯ",
    ĩ: "ĩ",
    ī: "ī",
    ĭ: "ĭ",
    ǐ: "ǐ",
    î: "î",
    ǰ: "ǰ",
    ĵ: "ĵ",
    ḱ: "ḱ",
    ǩ: "ǩ",
    ķ: "ķ",
    ĺ: "ĺ",
    ľ: "ľ",
    ļ: "ļ",
    ḿ: "ḿ",
    ṁ: "ṁ",
    ń: "ń",
    ǹ: "ǹ",
    ñ: "ñ",
    ň: "ň",
    ṅ: "ṅ",
    ņ: "ņ",
    ó: "ó",
    ò: "ò",
    ö: "ö",
    ȫ: "ȫ",
    õ: "õ",
    ṍ: "ṍ",
    ṏ: "ṏ",
    ȭ: "ȭ",
    ō: "ō",
    ṓ: "ṓ",
    ṑ: "ṑ",
    ŏ: "ŏ",
    ǒ: "ǒ",
    ô: "ô",
    ố: "ố",
    ồ: "ồ",
    ỗ: "ỗ",
    ȯ: "ȯ",
    ȱ: "ȱ",
    ő: "ő",
    ṕ: "ṕ",
    ṗ: "ṗ",
    ŕ: "ŕ",
    ř: "ř",
    ṙ: "ṙ",
    ŗ: "ŗ",
    ś: "ś",
    ṥ: "ṥ",
    š: "š",
    ṧ: "ṧ",
    ŝ: "ŝ",
    ṡ: "ṡ",
    ş: "ş",
    ẗ: "ẗ",
    ť: "ť",
    ṫ: "ṫ",
    ţ: "ţ",
    ú: "ú",
    ù: "ù",
    ü: "ü",
    ǘ: "ǘ",
    ǜ: "ǜ",
    ǖ: "ǖ",
    ǚ: "ǚ",
    ũ: "ũ",
    ṹ: "ṹ",
    ū: "ū",
    ṻ: "ṻ",
    ŭ: "ŭ",
    ǔ: "ǔ",
    û: "û",
    ů: "ů",
    ű: "ű",
    ṽ: "ṽ",
    ẃ: "ẃ",
    ẁ: "ẁ",
    ẅ: "ẅ",
    ŵ: "ŵ",
    ẇ: "ẇ",
    ẘ: "ẘ",
    ẍ: "ẍ",
    ẋ: "ẋ",
    ý: "ý",
    ỳ: "ỳ",
    ÿ: "ÿ",
    ỹ: "ỹ",
    ȳ: "ȳ",
    ŷ: "ŷ",
    ẏ: "ẏ",
    ẙ: "ẙ",
    ź: "ź",
    ž: "ž",
    ẑ: "ẑ",
    ż: "ż",
    Á: "Á",
    À: "À",
    Ä: "Ä",
    Ǟ: "Ǟ",
    Ã: "Ã",
    Ā: "Ā",
    Ă: "Ă",
    Ắ: "Ắ",
    Ằ: "Ằ",
    Ẵ: "Ẵ",
    Ǎ: "Ǎ",
    Â: "Â",
    Ấ: "Ấ",
    Ầ: "Ầ",
    Ẫ: "Ẫ",
    Ȧ: "Ȧ",
    Ǡ: "Ǡ",
    Å: "Å",
    Ǻ: "Ǻ",
    Ḃ: "Ḃ",
    Ć: "Ć",
    Ḉ: "Ḉ",
    Č: "Č",
    Ĉ: "Ĉ",
    Ċ: "Ċ",
    Ç: "Ç",
    Ď: "Ď",
    Ḋ: "Ḋ",
    Ḑ: "Ḑ",
    É: "É",
    È: "È",
    Ë: "Ë",
    Ẽ: "Ẽ",
    Ē: "Ē",
    Ḗ: "Ḗ",
    Ḕ: "Ḕ",
    Ĕ: "Ĕ",
    Ḝ: "Ḝ",
    Ě: "Ě",
    Ê: "Ê",
    Ế: "Ế",
    Ề: "Ề",
    Ễ: "Ễ",
    Ė: "Ė",
    Ȩ: "Ȩ",
    Ḟ: "Ḟ",
    Ǵ: "Ǵ",
    Ḡ: "Ḡ",
    Ğ: "Ğ",
    Ǧ: "Ǧ",
    Ĝ: "Ĝ",
    Ġ: "Ġ",
    Ģ: "Ģ",
    Ḧ: "Ḧ",
    Ȟ: "Ȟ",
    Ĥ: "Ĥ",
    Ḣ: "Ḣ",
    Ḩ: "Ḩ",
    Í: "Í",
    Ì: "Ì",
    Ï: "Ï",
    Ḯ: "Ḯ",
    Ĩ: "Ĩ",
    Ī: "Ī",
    Ĭ: "Ĭ",
    Ǐ: "Ǐ",
    Î: "Î",
    İ: "İ",
    Ĵ: "Ĵ",
    Ḱ: "Ḱ",
    Ǩ: "Ǩ",
    Ķ: "Ķ",
    Ĺ: "Ĺ",
    Ľ: "Ľ",
    Ļ: "Ļ",
    Ḿ: "Ḿ",
    Ṁ: "Ṁ",
    Ń: "Ń",
    Ǹ: "Ǹ",
    Ñ: "Ñ",
    Ň: "Ň",
    Ṅ: "Ṅ",
    Ņ: "Ņ",
    Ó: "Ó",
    Ò: "Ò",
    Ö: "Ö",
    Ȫ: "Ȫ",
    Õ: "Õ",
    Ṍ: "Ṍ",
    Ṏ: "Ṏ",
    Ȭ: "Ȭ",
    Ō: "Ō",
    Ṓ: "Ṓ",
    Ṑ: "Ṑ",
    Ŏ: "Ŏ",
    Ǒ: "Ǒ",
    Ô: "Ô",
    Ố: "Ố",
    Ồ: "Ồ",
    Ỗ: "Ỗ",
    Ȯ: "Ȯ",
    Ȱ: "Ȱ",
    Ő: "Ő",
    Ṕ: "Ṕ",
    Ṗ: "Ṗ",
    Ŕ: "Ŕ",
    Ř: "Ř",
    Ṙ: "Ṙ",
    Ŗ: "Ŗ",
    Ś: "Ś",
    Ṥ: "Ṥ",
    Š: "Š",
    Ṧ: "Ṧ",
    Ŝ: "Ŝ",
    Ṡ: "Ṡ",
    Ş: "Ş",
    Ť: "Ť",
    Ṫ: "Ṫ",
    Ţ: "Ţ",
    Ú: "Ú",
    Ù: "Ù",
    Ü: "Ü",
    Ǘ: "Ǘ",
    Ǜ: "Ǜ",
    Ǖ: "Ǖ",
    Ǚ: "Ǚ",
    Ũ: "Ũ",
    Ṹ: "Ṹ",
    Ū: "Ū",
    Ṻ: "Ṻ",
    Ŭ: "Ŭ",
    Ǔ: "Ǔ",
    Û: "Û",
    Ů: "Ů",
    Ű: "Ű",
    Ṽ: "Ṽ",
    Ẃ: "Ẃ",
    Ẁ: "Ẁ",
    Ẅ: "Ẅ",
    Ŵ: "Ŵ",
    Ẇ: "Ẇ",
    Ẍ: "Ẍ",
    Ẋ: "Ẋ",
    Ý: "Ý",
    Ỳ: "Ỳ",
    Ÿ: "Ÿ",
    Ỹ: "Ỹ",
    Ȳ: "Ȳ",
    Ŷ: "Ŷ",
    Ẏ: "Ẏ",
    Ź: "Ź",
    Ž: "Ž",
    Ẑ: "Ẑ",
    Ż: "Ż",
    ά: "ά",
    ὰ: "ὰ",
    ᾱ: "ᾱ",
    ᾰ: "ᾰ",
    έ: "έ",
    ὲ: "ὲ",
    ή: "ή",
    ὴ: "ὴ",
    ί: "ί",
    ὶ: "ὶ",
    ϊ: "ϊ",
    ΐ: "ΐ",
    ῒ: "ῒ",
    ῑ: "ῑ",
    ῐ: "ῐ",
    ό: "ό",
    ὸ: "ὸ",
    ύ: "ύ",
    ὺ: "ὺ",
    ϋ: "ϋ",
    ΰ: "ΰ",
    ῢ: "ῢ",
    ῡ: "ῡ",
    ῠ: "ῠ",
    ώ: "ώ",
    ὼ: "ὼ",
    Ύ: "Ύ",
    Ὺ: "Ὺ",
    Ϋ: "Ϋ",
    Ῡ: "Ῡ",
    Ῠ: "Ῠ",
    Ώ: "Ώ",
    Ὼ: "Ὼ",
  };
  indexBFCcxPM5Value290 = class IndexBFCcxPM5Class1 {
    constructor(indexBFCcxPM5Param358, indexBFCcxPM5Param359) {
      this.mode = undefined;
      this.gullet = undefined;
      this.settings = undefined;
      this.leftrightDepth = undefined;
      this.nextToken = undefined;
      this.mode = "math";
      this.gullet = new indexBFCcxPM5Value285(
        indexBFCcxPM5Param358,
        indexBFCcxPM5Param359,
        this.mode,
      );
      this.settings = indexBFCcxPM5Param359;
      this.leftrightDepth = 0;
    }
    expect(indexBFCcxPM5Param491, indexBFCcxPM5Param492) {
      if (
        (indexBFCcxPM5Param492 === undefined && (indexBFCcxPM5Param492 = true),
        this.fetch().text !== indexBFCcxPM5Param491)
      )
        throw new indexBFCcxPM5Value14(
          "Expected '" +
            indexBFCcxPM5Param491 +
            "', got '" +
            this.fetch().text +
            "'",
          this.fetch(),
        );
      indexBFCcxPM5Param492 && this.consume();
    }
    consume() {
      this.nextToken = null;
    }
    fetch() {
      return (
        (this.nextToken ??= this.gullet.expandNextToken()),
        this.nextToken
      );
    }
    switchMode(indexBFCcxPM5Param797) {
      this.mode = indexBFCcxPM5Param797;
      this.gullet.switchMode(indexBFCcxPM5Param797);
    }
    parse() {
      this.settings.globalGroup || this.gullet.beginGroup();
      this.settings.colorIsTextColor &&
        this.gullet.macros.set("\\color", "\\textcolor");
      try {
        var indexBFCcxPM5Value1120 = this.parseExpression(false);
        return (
          this.expect("EOF"),
          this.settings.globalGroup || this.gullet.endGroup(),
          indexBFCcxPM5Value1120
        );
      } finally {
        this.gullet.endGroups();
      }
    }
    subparse(indexBFCcxPM5Param464) {
      var indexBFCcxPM5Value1306 = this.nextToken;
      this.consume();
      this.gullet.pushToken(new indexBFCcxPM5Value13("}"));
      this.gullet.pushTokens(indexBFCcxPM5Param464);
      var indexBFCcxPM5Value1307 = this.parseExpression(false);
      return (
        this.expect("}"),
        (this.nextToken = indexBFCcxPM5Value1306),
        indexBFCcxPM5Value1307
      );
    }
    parseExpression(indexBFCcxPM5Param202, indexBFCcxPM5Param203) {
      for (var indexBFCcxPM5Value1006 = []; ;) {
        this.mode === "math" && this.consumeSpaces();
        var indexBFCcxPM5Value1007 = this.fetch();
        if (
          IndexBFCcxPM5Class1.endOfExpression.indexOf(
            indexBFCcxPM5Value1007.text,
          ) !== -1 ||
          (indexBFCcxPM5Param203 &&
            indexBFCcxPM5Value1007.text === indexBFCcxPM5Param203) ||
          (indexBFCcxPM5Param202 &&
            indexBFCcxPM5Value266[indexBFCcxPM5Value1007.text] &&
            indexBFCcxPM5Value266[indexBFCcxPM5Value1007.text].infix)
        )
          break;
        var indexBFCcxPM5Value1008 = this.parseAtom(indexBFCcxPM5Param203);
        if (indexBFCcxPM5Value1008) {
          if (indexBFCcxPM5Value1008.type === "internal") continue;
        } else break;
        indexBFCcxPM5Value1006.push(indexBFCcxPM5Value1008);
      }
      return (
        this.mode === "text" && this.formLigatures(indexBFCcxPM5Value1006),
        this.handleInfixNodes(indexBFCcxPM5Value1006)
      );
    }
    handleInfixNodes(indexBFCcxPM5Param107) {
      for (
        var indexBFCcxPM5Value822 = -1,
          indexBFCcxPM5Value823,
          indexBFCcxPM5Value824 = 0;
        indexBFCcxPM5Value824 < indexBFCcxPM5Param107.length;
        indexBFCcxPM5Value824++
      )
        if (indexBFCcxPM5Param107[indexBFCcxPM5Value824].type === "infix") {
          if (indexBFCcxPM5Value822 !== -1)
            throw new indexBFCcxPM5Value14(
              "only one infix operator per group",
              indexBFCcxPM5Param107[indexBFCcxPM5Value824].token,
            );
          indexBFCcxPM5Value822 = indexBFCcxPM5Value824;
          indexBFCcxPM5Value823 =
            indexBFCcxPM5Param107[indexBFCcxPM5Value824].replaceWith;
        }
      if (indexBFCcxPM5Value822 !== -1 && indexBFCcxPM5Value823) {
        var indexBFCcxPM5Value825,
          indexBFCcxPM5Value826,
          indexBFCcxPM5Value827 = indexBFCcxPM5Param107.slice(
            0,
            indexBFCcxPM5Value822,
          ),
          indexBFCcxPM5Value828 = indexBFCcxPM5Param107.slice(
            indexBFCcxPM5Value822 + 1,
          );
        indexBFCcxPM5Value825 =
          indexBFCcxPM5Value827.length === 1 &&
          indexBFCcxPM5Value827[0].type === "ordgroup"
            ? indexBFCcxPM5Value827[0]
            : {
                type: "ordgroup",
                mode: this.mode,
                body: indexBFCcxPM5Value827,
              };
        indexBFCcxPM5Value826 =
          indexBFCcxPM5Value828.length === 1 &&
          indexBFCcxPM5Value828[0].type === "ordgroup"
            ? indexBFCcxPM5Value828[0]
            : {
                type: "ordgroup",
                mode: this.mode,
                body: indexBFCcxPM5Value828,
              };
        var indexBFCcxPM5Value829;
        return (
          (indexBFCcxPM5Value829 =
            indexBFCcxPM5Value823 === "\\\\abovefrac"
              ? this.callFunction(
                  indexBFCcxPM5Value823,
                  [
                    indexBFCcxPM5Value825,
                    indexBFCcxPM5Param107[indexBFCcxPM5Value822],
                    indexBFCcxPM5Value826,
                  ],
                  [],
                )
              : this.callFunction(
                  indexBFCcxPM5Value823,
                  [indexBFCcxPM5Value825, indexBFCcxPM5Value826],
                  [],
                )),
          [indexBFCcxPM5Value829]
        );
      } else return indexBFCcxPM5Param107;
    }
    handleSupSubscript(indexBFCcxPM5Param409) {
      var indexBFCcxPM5Value1268 = this.fetch(),
        indexBFCcxPM5Value1269 = indexBFCcxPM5Value1268.text;
      this.consume();
      this.consumeSpaces();
      var indexBFCcxPM5Value1270;
      do indexBFCcxPM5Value1270 = this.parseGroup(indexBFCcxPM5Param409);
      while (indexBFCcxPM5Value1270?.type === "internal");
      if (!indexBFCcxPM5Value1270)
        throw new indexBFCcxPM5Value14(
          "Expected group after '" + indexBFCcxPM5Value1269 + "'",
          indexBFCcxPM5Value1268,
        );
      return indexBFCcxPM5Value1270;
    }
    formatUnsupportedCmd(indexBFCcxPM5Param362) {
      for (
        var indexBFCcxPM5Value1207 = [], indexBFCcxPM5Value1208 = 0;
        indexBFCcxPM5Value1208 < indexBFCcxPM5Param362.length;
        indexBFCcxPM5Value1208++
      )
        indexBFCcxPM5Value1207.push({
          type: "textord",
          mode: "text",
          text: indexBFCcxPM5Param362[indexBFCcxPM5Value1208],
        });
      var indexBFCcxPM5Value1209 = {
        type: "text",
        mode: this.mode,
        body: indexBFCcxPM5Value1207,
      };
      return {
        type: "color",
        mode: this.mode,
        color: this.settings.errorColor,
        body: [indexBFCcxPM5Value1209],
      };
    }
    parseAtom(indexBFCcxPM5Param36) {
      var indexBFCcxPM5Value552 = this.parseGroup("atom", indexBFCcxPM5Param36);
      if (indexBFCcxPM5Value552?.type === "internal" || this.mode === "text")
        return indexBFCcxPM5Value552;
      for (var indexBFCcxPM5Value553, indexBFCcxPM5Value554; ;) {
        this.consumeSpaces();
        var indexBFCcxPM5Value555 = this.fetch();
        if (
          indexBFCcxPM5Value555.text === "\\limits" ||
          indexBFCcxPM5Value555.text === "\\nolimits"
        ) {
          if (indexBFCcxPM5Value552 && indexBFCcxPM5Value552.type === "op") {
            indexBFCcxPM5Value552.limits =
              indexBFCcxPM5Value555.text === "\\limits";
            indexBFCcxPM5Value552.alwaysHandleSupSub = true;
          } else if (
            indexBFCcxPM5Value552 &&
            indexBFCcxPM5Value552.type === "operatorname"
          )
            indexBFCcxPM5Value552.alwaysHandleSupSub &&
              (indexBFCcxPM5Value552.limits =
                indexBFCcxPM5Value555.text === "\\limits");
          else
            throw new indexBFCcxPM5Value14(
              "Limit controls must follow a math operator",
              indexBFCcxPM5Value555,
            );
          this.consume();
        } else if (indexBFCcxPM5Value555.text === "^") {
          if (indexBFCcxPM5Value553)
            throw new indexBFCcxPM5Value14(
              "Double superscript",
              indexBFCcxPM5Value555,
            );
          indexBFCcxPM5Value553 = this.handleSupSubscript("superscript");
        } else if (indexBFCcxPM5Value555.text === "_") {
          if (indexBFCcxPM5Value554)
            throw new indexBFCcxPM5Value14(
              "Double subscript",
              indexBFCcxPM5Value555,
            );
          indexBFCcxPM5Value554 = this.handleSupSubscript("subscript");
        } else if (indexBFCcxPM5Value555.text === "'") {
          if (indexBFCcxPM5Value553)
            throw new indexBFCcxPM5Value14(
              "Double superscript",
              indexBFCcxPM5Value555,
            );
          var indexBFCcxPM5Value556 = {
              type: "textord",
              mode: this.mode,
              text: "\\prime",
            },
            indexBFCcxPM5Value557 = [indexBFCcxPM5Value556];
          for (this.consume(); this.fetch().text === "'";) {
            indexBFCcxPM5Value557.push(indexBFCcxPM5Value556);
            this.consume();
          }
          this.fetch().text === "^" &&
            indexBFCcxPM5Value557.push(this.handleSupSubscript("superscript"));
          indexBFCcxPM5Value553 = {
            type: "ordgroup",
            mode: this.mode,
            body: indexBFCcxPM5Value557,
          };
        } else if (indexBFCcxPM5Value287[indexBFCcxPM5Value555.text]) {
          var indexBFCcxPM5Value558 = indexBFCcxPM5Value286.test(
              indexBFCcxPM5Value555.text,
            ),
            indexBFCcxPM5Value559 = [];
          for (
            indexBFCcxPM5Value559.push(
              new indexBFCcxPM5Value13(
                indexBFCcxPM5Value287[indexBFCcxPM5Value555.text],
              ),
            ),
              this.consume();
            ;
          ) {
            var indexBFCcxPM5Value560 = this.fetch().text;
            if (
              !indexBFCcxPM5Value287[indexBFCcxPM5Value560] ||
              indexBFCcxPM5Value286.test(indexBFCcxPM5Value560) !==
                indexBFCcxPM5Value558
            )
              break;
            indexBFCcxPM5Value559.unshift(
              new indexBFCcxPM5Value13(
                indexBFCcxPM5Value287[indexBFCcxPM5Value560],
              ),
            );
            this.consume();
          }
          var indexBFCcxPM5Value561 = this.subparse(indexBFCcxPM5Value559);
          indexBFCcxPM5Value558
            ? (indexBFCcxPM5Value554 = {
                type: "ordgroup",
                mode: "math",
                body: indexBFCcxPM5Value561,
              })
            : (indexBFCcxPM5Value553 = {
                type: "ordgroup",
                mode: "math",
                body: indexBFCcxPM5Value561,
              });
        } else break;
      }
      return indexBFCcxPM5Value553 || indexBFCcxPM5Value554
        ? {
            type: "supsub",
            mode: this.mode,
            base: indexBFCcxPM5Value552,
            sup: indexBFCcxPM5Value553,
            sub: indexBFCcxPM5Value554,
          }
        : indexBFCcxPM5Value552;
    }
    parseFunction(indexBFCcxPM5Param158, indexBFCcxPM5Param159) {
      var indexBFCcxPM5Value926 = this.fetch(),
        indexBFCcxPM5Value927 = indexBFCcxPM5Value926.text,
        indexBFCcxPM5Value928 = indexBFCcxPM5Value266[indexBFCcxPM5Value927];
      if (!indexBFCcxPM5Value928) return null;
      if (
        (this.consume(),
        indexBFCcxPM5Param159 &&
          indexBFCcxPM5Param159 !== "atom" &&
          !indexBFCcxPM5Value928.allowedInArgument)
      )
        throw new indexBFCcxPM5Value14(
          "Got function '" +
            indexBFCcxPM5Value927 +
            "' with no arguments" +
            (indexBFCcxPM5Param159 ? " as " + indexBFCcxPM5Param159 : ""),
          indexBFCcxPM5Value926,
        );
      if (this.mode === "text" && !indexBFCcxPM5Value928.allowedInText)
        throw new indexBFCcxPM5Value14(
          "Can't use function '" + indexBFCcxPM5Value927 + "' in text mode",
          indexBFCcxPM5Value926,
        );
      if (this.mode === "math" && indexBFCcxPM5Value928.allowedInMath === false)
        throw new indexBFCcxPM5Value14(
          "Can't use function '" + indexBFCcxPM5Value927 + "' in math mode",
          indexBFCcxPM5Value926,
        );
      var { args, optArgs } = this.parseArguments(
        indexBFCcxPM5Value927,
        indexBFCcxPM5Value928,
      );
      return this.callFunction(
        indexBFCcxPM5Value927,
        args,
        optArgs,
        indexBFCcxPM5Value926,
        indexBFCcxPM5Param158,
      );
    }
    callFunction(
      indexBFCcxPM5Param497,
      indexBFCcxPM5Param498,
      indexBFCcxPM5Param499,
      indexBFCcxPM5Param500,
      indexBFCcxPM5Param501,
    ) {
      var indexBFCcxPM5Value1330 = {
          funcName: indexBFCcxPM5Param497,
          parser: this,
          token: indexBFCcxPM5Param500,
          breakOnTokenText: indexBFCcxPM5Param501,
        },
        indexBFCcxPM5Value1331 = indexBFCcxPM5Value266[indexBFCcxPM5Param497];
      if (indexBFCcxPM5Value1331 && indexBFCcxPM5Value1331.handler)
        return indexBFCcxPM5Value1331.handler(
          indexBFCcxPM5Value1330,
          indexBFCcxPM5Param498,
          indexBFCcxPM5Param499,
        );
      throw new indexBFCcxPM5Value14(
        "No function handler for " + indexBFCcxPM5Param497,
      );
    }
    parseArguments(indexBFCcxPM5Param173, indexBFCcxPM5Param174) {
      var indexBFCcxPM5Value954 =
        indexBFCcxPM5Param174.numArgs + indexBFCcxPM5Param174.numOptionalArgs;
      if (indexBFCcxPM5Value954 === 0)
        return {
          args: [],
          optArgs: [],
        };
      for (
        var indexBFCcxPM5Value955 = [],
          indexBFCcxPM5Value956 = [],
          indexBFCcxPM5Value957 = 0;
        indexBFCcxPM5Value957 < indexBFCcxPM5Value954;
        indexBFCcxPM5Value957++
      ) {
        var indexBFCcxPM5Value958 =
            indexBFCcxPM5Param174.argTypes &&
            indexBFCcxPM5Param174.argTypes[indexBFCcxPM5Value957],
          indexBFCcxPM5Value959 =
            indexBFCcxPM5Value957 < indexBFCcxPM5Param174.numOptionalArgs;
        ((indexBFCcxPM5Param174.primitive && indexBFCcxPM5Value958 == null) ||
          (indexBFCcxPM5Param174.type === "sqrt" &&
            indexBFCcxPM5Value957 === 1 &&
            indexBFCcxPM5Value956[0] == null)) &&
          (indexBFCcxPM5Value958 = "primitive");
        var indexBFCcxPM5Value960 = this.parseGroupOfType(
          "argument to '" + indexBFCcxPM5Param173 + "'",
          indexBFCcxPM5Value958,
          indexBFCcxPM5Value959,
        );
        if (indexBFCcxPM5Value959)
          indexBFCcxPM5Value956.push(indexBFCcxPM5Value960);
        else if (indexBFCcxPM5Value960 != null)
          indexBFCcxPM5Value955.push(indexBFCcxPM5Value960);
        else
          throw new indexBFCcxPM5Value14(
            "Null argument, please report this as a bug",
          );
      }
      return {
        args: indexBFCcxPM5Value955,
        optArgs: indexBFCcxPM5Value956,
      };
    }
    parseGroupOfType(
      indexBFCcxPM5Param82,
      indexBFCcxPM5Param83,
      indexBFCcxPM5Param84,
    ) {
      switch (indexBFCcxPM5Param83) {
        case "color":
          return this.parseColorGroup(indexBFCcxPM5Param84);
        case "size":
          return this.parseSizeGroup(indexBFCcxPM5Param84);
        case "url":
          return this.parseUrlGroup(indexBFCcxPM5Param84);
        case "math":
        case "text":
          return this.parseArgumentGroup(
            indexBFCcxPM5Param84,
            indexBFCcxPM5Param83,
          );
        case "hbox":
          var indexBFCcxPM5Value746 = this.parseArgumentGroup(
            indexBFCcxPM5Param84,
            "text",
          );
          return indexBFCcxPM5Value746 == null
            ? null
            : {
                type: "styling",
                mode: indexBFCcxPM5Value746.mode,
                body: [indexBFCcxPM5Value746],
                style: "text",
              };
        case "raw":
          var indexBFCcxPM5Value747 = this.parseStringGroup(
            "raw",
            indexBFCcxPM5Param84,
          );
          return indexBFCcxPM5Value747 == null
            ? null
            : {
                type: "raw",
                mode: "text",
                string: indexBFCcxPM5Value747.text,
              };
        case "primitive":
          if (indexBFCcxPM5Param84)
            throw new indexBFCcxPM5Value14(
              "A primitive argument cannot be optional",
            );
          var indexBFCcxPM5Value748 = this.parseGroup(indexBFCcxPM5Param82);
          if (indexBFCcxPM5Value748 == null)
            throw new indexBFCcxPM5Value14(
              "Expected group as " + indexBFCcxPM5Param82,
              this.fetch(),
            );
          return indexBFCcxPM5Value748;
        case "original":
        case null:
        case undefined:
          return this.parseArgumentGroup(indexBFCcxPM5Param84);
        default:
          throw new indexBFCcxPM5Value14(
            "Unknown group type as " + indexBFCcxPM5Param82,
            this.fetch(),
          );
      }
    }
    consumeSpaces() {
      for (; this.fetch().text === " ";) this.consume();
    }
    parseStringGroup(indexBFCcxPM5Param453, indexBFCcxPM5Param454) {
      var indexBFCcxPM5Value1298 = this.gullet.scanArgument(
        indexBFCcxPM5Param454,
      );
      if (indexBFCcxPM5Value1298 == null) return null;
      for (
        var indexBFCcxPM5Value1299 = "", indexBFCcxPM5Value1300;
        (indexBFCcxPM5Value1300 = this.fetch()).text !== "EOF";
      ) {
        indexBFCcxPM5Value1299 += indexBFCcxPM5Value1300.text;
        this.consume();
      }
      return (
        this.consume(),
        (indexBFCcxPM5Value1298.text = indexBFCcxPM5Value1299),
        indexBFCcxPM5Value1298
      );
    }
    parseRegexGroup(indexBFCcxPM5Param379, indexBFCcxPM5Param380) {
      for (
        var indexBFCcxPM5Value1237 = this.fetch(),
          indexBFCcxPM5Value1238 = indexBFCcxPM5Value1237,
          indexBFCcxPM5Value1239 = "",
          indexBFCcxPM5Value1240;
        (indexBFCcxPM5Value1240 = this.fetch()).text !== "EOF" &&
        indexBFCcxPM5Param379.test(
          indexBFCcxPM5Value1239 + indexBFCcxPM5Value1240.text,
        );
      ) {
        indexBFCcxPM5Value1238 = indexBFCcxPM5Value1240;
        indexBFCcxPM5Value1239 += indexBFCcxPM5Value1238.text;
        this.consume();
      }
      if (indexBFCcxPM5Value1239 === "")
        throw new indexBFCcxPM5Value14(
          "Invalid " +
            indexBFCcxPM5Param380 +
            ": '" +
            indexBFCcxPM5Value1237.text +
            "'",
          indexBFCcxPM5Value1237,
        );
      return indexBFCcxPM5Value1237.range(
        indexBFCcxPM5Value1238,
        indexBFCcxPM5Value1239,
      );
    }
    parseColorGroup(indexBFCcxPM5Param309) {
      var indexBFCcxPM5Value1164 = this.parseStringGroup(
        "color",
        indexBFCcxPM5Param309,
      );
      if (indexBFCcxPM5Value1164 == null) return null;
      var indexBFCcxPM5Value1165 =
        /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(
          indexBFCcxPM5Value1164.text,
        );
      if (!indexBFCcxPM5Value1165)
        throw new indexBFCcxPM5Value14(
          "Invalid color: '" + indexBFCcxPM5Value1164.text + "'",
          indexBFCcxPM5Value1164,
        );
      var indexBFCcxPM5Value1166 = indexBFCcxPM5Value1165[0];
      return (
        /^[0-9a-f]{6}$/i.test(indexBFCcxPM5Value1166) &&
          (indexBFCcxPM5Value1166 = "#" + indexBFCcxPM5Value1166),
        {
          type: "color-token",
          mode: this.mode,
          color: indexBFCcxPM5Value1166,
        }
      );
    }
    parseSizeGroup(indexBFCcxPM5Param140) {
      var indexBFCcxPM5Value889,
        indexBFCcxPM5Value890 = false;
      if (
        (this.gullet.consumeSpaces(),
        (indexBFCcxPM5Value889 =
          !indexBFCcxPM5Param140 && this.gullet.future().text !== "{"
            ? this.parseRegexGroup(
                /^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,
                "size",
              )
            : this.parseStringGroup("size", indexBFCcxPM5Param140)),
        !indexBFCcxPM5Value889)
      )
        return null;
      !indexBFCcxPM5Param140 &&
        indexBFCcxPM5Value889.text.length === 0 &&
        ((indexBFCcxPM5Value889.text = "0pt"), (indexBFCcxPM5Value890 = true));
      var indexBFCcxPM5Value891 =
        /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(
          indexBFCcxPM5Value889.text,
        );
      if (!indexBFCcxPM5Value891)
        throw new indexBFCcxPM5Value14(
          "Invalid size: '" + indexBFCcxPM5Value889.text + "'",
          indexBFCcxPM5Value889,
        );
      var indexBFCcxPM5Value892 = {
        number: +(indexBFCcxPM5Value891[1] + indexBFCcxPM5Value891[2]),
        unit: indexBFCcxPM5Value891[3],
      };
      if (!indexBFCcxPM5Value67(indexBFCcxPM5Value892))
        throw new indexBFCcxPM5Value14(
          "Invalid unit: '" + indexBFCcxPM5Value892.unit + "'",
          indexBFCcxPM5Value889,
        );
      return {
        type: "size",
        mode: this.mode,
        value: indexBFCcxPM5Value892,
        isBlank: indexBFCcxPM5Value890,
      };
    }
    parseUrlGroup(indexBFCcxPM5Param277) {
      this.gullet.lexer.setCatcode("%", 13);
      this.gullet.lexer.setCatcode("~", 12);
      var indexBFCcxPM5Value1121 = this.parseStringGroup(
        "url",
        indexBFCcxPM5Param277,
      );
      if (
        (this.gullet.lexer.setCatcode("%", 14),
        this.gullet.lexer.setCatcode("~", 13),
        indexBFCcxPM5Value1121 == null)
      )
        return null;
      var indexBFCcxPM5Value1122 = indexBFCcxPM5Value1121.text.replace(
        /\\([#$%&~_^{}])/g,
        "$1",
      );
      return {
        type: "url",
        mode: this.mode,
        url: indexBFCcxPM5Value1122,
      };
    }
    parseArgumentGroup(indexBFCcxPM5Param302, indexBFCcxPM5Param303) {
      var indexBFCcxPM5Value1147 = this.gullet.scanArgument(
        indexBFCcxPM5Param302,
      );
      if (indexBFCcxPM5Value1147 == null) return null;
      var indexBFCcxPM5Value1148 = this.mode;
      indexBFCcxPM5Param303 && this.switchMode(indexBFCcxPM5Param303);
      this.gullet.beginGroup();
      var indexBFCcxPM5Value1149 = this.parseExpression(false, "EOF");
      this.expect("EOF");
      this.gullet.endGroup();
      var indexBFCcxPM5Value1150 = {
        type: "ordgroup",
        mode: this.mode,
        loc: indexBFCcxPM5Value1147.loc,
        body: indexBFCcxPM5Value1149,
      };
      return (
        indexBFCcxPM5Param303 && this.switchMode(indexBFCcxPM5Value1148),
        indexBFCcxPM5Value1150
      );
    }
    parseGroup(indexBFCcxPM5Param111, indexBFCcxPM5Param112) {
      var indexBFCcxPM5Value842 = this.fetch(),
        indexBFCcxPM5Value843 = indexBFCcxPM5Value842.text,
        indexBFCcxPM5Value844;
      if (
        indexBFCcxPM5Value843 === "{" ||
        indexBFCcxPM5Value843 === "\\begingroup"
      ) {
        this.consume();
        var indexBFCcxPM5Value845 =
          indexBFCcxPM5Value843 === "{" ? "}" : "\\endgroup";
        this.gullet.beginGroup();
        var indexBFCcxPM5Value846 = this.parseExpression(
            false,
            indexBFCcxPM5Value845,
          ),
          indexBFCcxPM5Value847 = this.fetch();
        this.expect(indexBFCcxPM5Value845);
        this.gullet.endGroup();
        indexBFCcxPM5Value844 = {
          type: "ordgroup",
          mode: this.mode,
          loc: indexBFCcxPM5Value12.range(
            indexBFCcxPM5Value842,
            indexBFCcxPM5Value847,
          ),
          body: indexBFCcxPM5Value846,
          semisimple: indexBFCcxPM5Value843 === "\\begingroup" || undefined,
        };
      } else if (
        ((indexBFCcxPM5Value844 =
          this.parseFunction(indexBFCcxPM5Param112, indexBFCcxPM5Param111) ||
          this.parseSymbol()),
        indexBFCcxPM5Value844 == null &&
          indexBFCcxPM5Value843[0] === "\\" &&
          !indexBFCcxPM5Value284.hasOwnProperty(indexBFCcxPM5Value843))
      ) {
        if (this.settings.throwOnError)
          throw new indexBFCcxPM5Value14(
            "Undefined control sequence: " + indexBFCcxPM5Value843,
            indexBFCcxPM5Value842,
          );
        indexBFCcxPM5Value844 = this.formatUnsupportedCmd(
          indexBFCcxPM5Value843,
        );
        this.consume();
      }
      return indexBFCcxPM5Value844;
    }
    formLigatures(indexBFCcxPM5Param110) {
      for (
        var indexBFCcxPM5Value838 = indexBFCcxPM5Param110.length - 1,
          indexBFCcxPM5Value839 = 0;
        indexBFCcxPM5Value839 < indexBFCcxPM5Value838;
        ++indexBFCcxPM5Value839
      ) {
        var indexBFCcxPM5Value840 =
            indexBFCcxPM5Param110[indexBFCcxPM5Value839],
          indexBFCcxPM5Value841 = indexBFCcxPM5Value840.text;
        indexBFCcxPM5Value841 === "-" &&
          indexBFCcxPM5Param110[indexBFCcxPM5Value839 + 1].text === "-" &&
          (indexBFCcxPM5Value839 + 1 < indexBFCcxPM5Value838 &&
          indexBFCcxPM5Param110[indexBFCcxPM5Value839 + 2].text === "-"
            ? (indexBFCcxPM5Param110.splice(indexBFCcxPM5Value839, 3, {
                type: "textord",
                mode: "text",
                loc: indexBFCcxPM5Value12.range(
                  indexBFCcxPM5Value840,
                  indexBFCcxPM5Param110[indexBFCcxPM5Value839 + 2],
                ),
                text: "---",
              }),
              (indexBFCcxPM5Value838 -= 2))
            : (indexBFCcxPM5Param110.splice(indexBFCcxPM5Value839, 2, {
                type: "textord",
                mode: "text",
                loc: indexBFCcxPM5Value12.range(
                  indexBFCcxPM5Value840,
                  indexBFCcxPM5Param110[indexBFCcxPM5Value839 + 1],
                ),
                text: "--",
              }),
              --indexBFCcxPM5Value838));
        (indexBFCcxPM5Value841 === "'" || indexBFCcxPM5Value841 === "`") &&
          indexBFCcxPM5Param110[indexBFCcxPM5Value839 + 1].text ===
            indexBFCcxPM5Value841 &&
          (indexBFCcxPM5Param110.splice(indexBFCcxPM5Value839, 2, {
            type: "textord",
            mode: "text",
            loc: indexBFCcxPM5Value12.range(
              indexBFCcxPM5Value840,
              indexBFCcxPM5Param110[indexBFCcxPM5Value839 + 1],
            ),
            text: indexBFCcxPM5Value841 + indexBFCcxPM5Value841,
          }),
          --indexBFCcxPM5Value838);
      }
    }
    parseSymbol() {
      var indexBFCcxPM5Value417 = this.fetch(),
        indexBFCcxPM5Value418 = indexBFCcxPM5Value417.text;
      if (/^\\verb[^a-zA-Z]/.test(indexBFCcxPM5Value418)) {
        this.consume();
        var indexBFCcxPM5Value419 = indexBFCcxPM5Value418.slice(5),
          indexBFCcxPM5Value420 = indexBFCcxPM5Value419.charAt(0) === "*";
        if (
          (indexBFCcxPM5Value420 &&
            (indexBFCcxPM5Value419 = indexBFCcxPM5Value419.slice(1)),
          indexBFCcxPM5Value419.length < 2 ||
            indexBFCcxPM5Value419.charAt(0) !== indexBFCcxPM5Value419.slice(-1))
        )
          throw new indexBFCcxPM5Value14(
            "\\verb assertion failed --\n                    please report what input caused this bug",
          );
        return (
          (indexBFCcxPM5Value419 = indexBFCcxPM5Value419.slice(1, -1)),
          {
            type: "verb",
            mode: "text",
            body: indexBFCcxPM5Value419,
            star: indexBFCcxPM5Value420,
          }
        );
      }
      indexBFCcxPM5Value289.hasOwnProperty(indexBFCcxPM5Value418[0]) &&
        !indexBFCcxPM5Value83[this.mode][indexBFCcxPM5Value418[0]] &&
        (this.settings.strict &&
          this.mode === "math" &&
          this.settings.reportNonstrict(
            "unicodeTextInMathMode",
            'Accented Unicode text character "' +
              indexBFCcxPM5Value418[0] +
              '" used in math mode',
            indexBFCcxPM5Value417,
          ),
        (indexBFCcxPM5Value418 =
          indexBFCcxPM5Value289[indexBFCcxPM5Value418[0]] +
          indexBFCcxPM5Value418.slice(1)));
      var indexBFCcxPM5Value421 = indexBFCcxPM5Value273.exec(
        indexBFCcxPM5Value418,
      );
      indexBFCcxPM5Value421 &&
        ((indexBFCcxPM5Value418 = indexBFCcxPM5Value418.substring(
          0,
          indexBFCcxPM5Value421.index,
        )),
        indexBFCcxPM5Value418 === "i"
          ? (indexBFCcxPM5Value418 = "ı")
          : indexBFCcxPM5Value418 === "j" && (indexBFCcxPM5Value418 = "ȷ"));
      var indexBFCcxPM5Value422;
      if (indexBFCcxPM5Value83[this.mode][indexBFCcxPM5Value418]) {
        this.settings.strict &&
          this.mode === "math" &&
          indexBFCcxPM5Value113.indexOf(indexBFCcxPM5Value418) >= 0 &&
          this.settings.reportNonstrict(
            "unicodeTextInMathMode",
            'Latin-1/Unicode text character "' +
              indexBFCcxPM5Value418[0] +
              '" used in math mode',
            indexBFCcxPM5Value417,
          );
        var indexBFCcxPM5Value423 =
            indexBFCcxPM5Value83[this.mode][indexBFCcxPM5Value418].group,
          indexBFCcxPM5Value424 = indexBFCcxPM5Value12.range(
            indexBFCcxPM5Value417,
          ),
          indexBFCcxPM5Value425;
        if (indexBFCcxPM5Value81.hasOwnProperty(indexBFCcxPM5Value423)) {
          var indexBFCcxPM5Value426 = indexBFCcxPM5Value423;
          indexBFCcxPM5Value425 = {
            type: "atom",
            mode: this.mode,
            family: indexBFCcxPM5Value426,
            loc: indexBFCcxPM5Value424,
            text: indexBFCcxPM5Value418,
          };
        } else
          indexBFCcxPM5Value425 = {
            type: indexBFCcxPM5Value423,
            mode: this.mode,
            loc: indexBFCcxPM5Value424,
            text: indexBFCcxPM5Value418,
          };
        indexBFCcxPM5Value422 = indexBFCcxPM5Value425;
      } else if (indexBFCcxPM5Value418.charCodeAt(0) >= 128) {
        this.settings.strict &&
          (indexBFCcxPM5Helper30(indexBFCcxPM5Value418.charCodeAt(0))
            ? this.mode === "math" &&
              this.settings.reportNonstrict(
                "unicodeTextInMathMode",
                'Unicode text character "' +
                  indexBFCcxPM5Value418[0] +
                  '" used in math mode',
                indexBFCcxPM5Value417,
              )
            : this.settings.reportNonstrict(
                "unknownSymbol",
                'Unrecognized Unicode character "' +
                  indexBFCcxPM5Value418[0] +
                  '"' +
                  (" (" + indexBFCcxPM5Value418.charCodeAt(0) + ")"),
                indexBFCcxPM5Value417,
              ));
        indexBFCcxPM5Value422 = {
          type: "textord",
          mode: "text",
          loc: indexBFCcxPM5Value12.range(indexBFCcxPM5Value417),
          text: indexBFCcxPM5Value418,
        };
      } else return null;
      if ((this.consume(), indexBFCcxPM5Value421))
        for (
          var indexBFCcxPM5Value427 = 0;
          indexBFCcxPM5Value427 < indexBFCcxPM5Value421[0].length;
          indexBFCcxPM5Value427++
        ) {
          var indexBFCcxPM5Value428 =
            indexBFCcxPM5Value421[0][indexBFCcxPM5Value427];
          if (!indexBFCcxPM5Value288[indexBFCcxPM5Value428])
            throw new indexBFCcxPM5Value14(
              "Unknown accent ' " + indexBFCcxPM5Value428 + "'",
              indexBFCcxPM5Value417,
            );
          var indexBFCcxPM5Value429 =
            indexBFCcxPM5Value288[indexBFCcxPM5Value428][this.mode] ||
            indexBFCcxPM5Value288[indexBFCcxPM5Value428].text;
          if (!indexBFCcxPM5Value429)
            throw new indexBFCcxPM5Value14(
              "Accent " +
                indexBFCcxPM5Value428 +
                " unsupported in " +
                this.mode +
                " mode",
              indexBFCcxPM5Value417,
            );
          indexBFCcxPM5Value422 = {
            type: "accent",
            mode: this.mode,
            loc: indexBFCcxPM5Value12.range(indexBFCcxPM5Value417),
            label: indexBFCcxPM5Value429,
            isStretchy: false,
            isShifty: true,
            base: indexBFCcxPM5Value422,
          };
        }
      return indexBFCcxPM5Value422;
    }
  };
  indexBFCcxPM5Value290.endOfExpression = [
    "}",
    "\\endgroup",
    "\\end",
    "\\right",
    "&",
  ];
  indexBFCcxPM5Value291 = function (
    indexBFCcxPM5Param169,
    indexBFCcxPM5Param170,
  ) {
    if (!(
      typeof indexBFCcxPM5Param169 == "string" ||
      indexBFCcxPM5Param169 instanceof String
    ))
      throw TypeError("KaTeX can only parse string typed expression");
    var indexBFCcxPM5Value946 = new indexBFCcxPM5Value290(
      indexBFCcxPM5Param169,
      indexBFCcxPM5Param170,
    );
    delete indexBFCcxPM5Value946.gullet.macros.current["\\df@tag"];
    var indexBFCcxPM5Value947 = indexBFCcxPM5Value946.parse();
    if (
      (delete indexBFCcxPM5Value946.gullet.macros.current["\\current@color"],
      delete indexBFCcxPM5Value946.gullet.macros.current["\\color"],
      indexBFCcxPM5Value946.gullet.macros.get("\\df@tag"))
    ) {
      if (!indexBFCcxPM5Param170.displayMode)
        throw new indexBFCcxPM5Value14("\\tag works only in display equations");
      indexBFCcxPM5Value947 = [
        {
          type: "tag",
          mode: "text",
          body: indexBFCcxPM5Value947,
          tag: indexBFCcxPM5Value946.subparse([
            new indexBFCcxPM5Value13("\\df@tag"),
          ]),
        },
      ];
    }
    return indexBFCcxPM5Value947;
  };
  indexBFCcxPM5Value292 = function (
    indexBFCcxPM5Param718,
    indexBFCcxPM5Param719,
    indexBFCcxPM5Param720,
  ) {
    indexBFCcxPM5Param719.textContent = "";
    var indexBFCcxPM5Value1445 = indexBFCcxPM5Value295(
      indexBFCcxPM5Param718,
      indexBFCcxPM5Param720,
    ).toNode();
    indexBFCcxPM5Param719.appendChild(indexBFCcxPM5Value1445);
  };
  typeof document < "u" &&
    document.compatMode !== "CSS1Compat" &&
    (typeof console < "u" &&
      console.warn(
        "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.",
      ),
    (indexBFCcxPM5Value292 = function () {
      throw new indexBFCcxPM5Value14("KaTeX doesn't work in quirks mode.");
    }));
  indexBFCcxPM5Value293 = function (
    indexBFCcxPM5Param853,
    indexBFCcxPM5Param854,
  ) {
    return indexBFCcxPM5Value295(
      indexBFCcxPM5Param853,
      indexBFCcxPM5Param854,
    ).toMarkup();
  };
  indexBFCcxPM5Value294 = function (
    indexBFCcxPM5Param861,
    indexBFCcxPM5Param862,
  ) {
    return indexBFCcxPM5Value291(
      indexBFCcxPM5Param861,
      new indexBFCcxPM5Value25(indexBFCcxPM5Param862),
    );
  };
  $a = function (
    indexBFCcxPM5Param439,
    indexBFCcxPM5Param440,
    indexBFCcxPM5Param441,
  ) {
    if (
      indexBFCcxPM5Param441.throwOnError ||
      !(indexBFCcxPM5Param439 instanceof indexBFCcxPM5Value14)
    )
      throw indexBFCcxPM5Param439;
    var indexBFCcxPM5Value1290 = indexBFCcxPM5Value139.makeSpan(
      ["katex-error"],
      [new indexBFCcxPM5Value77(indexBFCcxPM5Param440)],
    );
    return (
      indexBFCcxPM5Value1290.setAttribute(
        "title",
        indexBFCcxPM5Param439.toString(),
      ),
      indexBFCcxPM5Value1290.setAttribute(
        "style",
        "color:" + indexBFCcxPM5Param441.errorColor,
      ),
      indexBFCcxPM5Value1290
    );
  };
  indexBFCcxPM5Value295 = function (
    indexBFCcxPM5Param638,
    indexBFCcxPM5Param639,
  ) {
    var indexBFCcxPM5Value1417 = new indexBFCcxPM5Value25(
      indexBFCcxPM5Param639,
    );
    try {
      return indexBFCcxPM5Value171(
        indexBFCcxPM5Value291(indexBFCcxPM5Param638, indexBFCcxPM5Value1417),
        indexBFCcxPM5Param638,
        indexBFCcxPM5Value1417,
      );
    } catch (indexBFCcxPM5Value1469) {
      return $a(
        indexBFCcxPM5Value1469,
        indexBFCcxPM5Param638,
        indexBFCcxPM5Value1417,
      );
    }
  };
  to = function (indexBFCcxPM5Param640, indexBFCcxPM5Param641) {
    var indexBFCcxPM5Value1418 = new indexBFCcxPM5Value25(
      indexBFCcxPM5Param641,
    );
    try {
      return indexBFCcxPM5Value172(
        indexBFCcxPM5Value291(indexBFCcxPM5Param640, indexBFCcxPM5Value1418),
        indexBFCcxPM5Param640,
        indexBFCcxPM5Value1418,
      );
    } catch (indexBFCcxPM5Value1470) {
      return $a(
        indexBFCcxPM5Value1470,
        indexBFCcxPM5Param640,
        indexBFCcxPM5Value1418,
      );
    }
  };
  no = {
    version: "0.16.22",
    render: indexBFCcxPM5Value292,
    renderToString: indexBFCcxPM5Value293,
    ParseError: indexBFCcxPM5Value14,
    SETTINGS_SCHEMA: indexBFCcxPM5Value24,
    __parse: indexBFCcxPM5Value294,
    __renderToDomTree: indexBFCcxPM5Value295,
    __renderToHTMLTree: to,
    __setFontMetrics: indexBFCcxPM5Helper31,
    __defineSymbol: indexBFCcxPM5Helper36,
    __defineFunction: indexBFCcxPM5Helper37,
    __defineMacro: indexBFCcxPM5Helper52,
    __domTree: {
      Span: indexBFCcxPM5Value74,
      Anchor: indexBFCcxPM5Value75,
      SymbolNode: indexBFCcxPM5Value77,
      SvgNode: indexBFCcxPM5Value78,
      PathNode: indexBFCcxPM5Value79,
      LineNode: indexBFCcxPM5Value80,
    },
  };
  indexBFCcxPM5Value296 = {};
  indexBFCcxPM5Value297 = [];
})();
