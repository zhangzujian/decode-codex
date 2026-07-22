import type React from "react";
import type {
  LoadPdfJsRuntime,
  PdfDocumentProxyLike,
  PdfPageProxyLike,
} from "../pdf-document-loader";

export interface PdfObjectReference {
  gen: number;
  num: number;
}

export type PdfDestination = readonly unknown[];

export interface PdfAnnotationLinkNavigation {
  onExternalLink?: (url: string, event: MouseEvent) => void;
  onPageChange?: (pageNumber: number) => void;
}

export interface PdfAnnotationDocument extends PdfDocumentProxyLike {
  cachedPageNumber(reference: PdfObjectReference): number | null | undefined;
  getDestination(destinationName: string): Promise<PdfDestination | null>;
  getPageIndex(reference: PdfObjectReference): Promise<number>;
}

export interface PdfAnnotationPage extends PdfPageProxyLike {
  getAnnotations(): Promise<unknown[]>;
}

export interface PdfAnnotationLayerProps {
  deferMs: number;
  linkNavigation?: PdfAnnotationLinkNavigation | null;
  loadPdfJs: LoadPdfJsRuntime;
  page: PdfAnnotationPage;
  pageSelector: string;
  pdfDocument: PdfAnnotationDocument;
  scrollRootRef: React.MutableRefObject<HTMLElement | null>;
}
