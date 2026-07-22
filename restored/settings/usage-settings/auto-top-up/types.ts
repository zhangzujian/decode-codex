// Restored from ref/webview/assets/usage-settings-D_gEzTFv.js
// Typed inputs shared by the credits balance section and auto top-up dialog.

export interface AutoTopUpMutation {
  isPending: boolean;
  mutate: (...args: any[]) => void;
  mutateAsync: (...args: any[]) => Promise<any>;
}

export interface AutoTopUpServerState {
  isEnabled: boolean;
  rechargeTarget?: string | null;
  rechargeThreshold?: string | null;
}

export interface AutoTopUpProps {
  creditDetails?: any;
  disableAutoTopUpMutation: AutoTopUpMutation;
  enableAutoTopUpMutation: AutoTopUpMutation;
  serverState: AutoTopUpServerState;
  updateAutoTopUpMutation: AutoTopUpMutation;
}

export interface AutoTopUpDialogProps extends AutoTopUpProps {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}
