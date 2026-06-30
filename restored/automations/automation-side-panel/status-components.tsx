// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { ReactElement, ReactNode } from "react";
import { useIntl } from "../../vendor/react-intl";
import { classNames } from "../../utils/class-names";
import { Badge } from "../../utils/badge";

export function AutomationStatusBadge({
  status,
}: {
  status: string;
}): ReactElement {
  const intl = useIntl();
  let dotClassName = "";
  let label = "";
  switch (status) {
    case "ACTIVE":
      dotClassName = "bg-token-charts-green";
      label = intl.formatMessage({
        id: "inbox.automations.status.active",
        defaultMessage: "Active",
        description: "Label for active automation status",
      });
      break;
    case "PAUSED":
      dotClassName = "bg-token-charts-orange";
      label = intl.formatMessage({
        id: "inbox.automations.status.paused",
        defaultMessage: "Paused",
        description: "Label for paused automation status",
      });
      break;
    case "DELETED":
      dotClassName = "bg-token-charts-red";
      label = intl.formatMessage({
        id: "inbox.automations.status.deleted",
        defaultMessage: "Deleted",
        description: "Label for deleted automation status",
      });
      break;
  }
  return (
    <Badge className="gap-2 rounded-full px-2.5 py-1 text-base">
      <span className={classNames("size-2 rounded-full", dotClassName)} />
      {label}
    </Badge>
  );
}

export function AutomationDetailPill({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <Badge className="rounded-full px-2.5 py-1 text-base">{children}</Badge>
  );
}
