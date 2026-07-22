export type MessageDescriptor = {
  defaultMessage: string;
  description?: string;
  id: string;
};

export type ServiceTier = {
  description?: string | MessageDescriptor;
  id: string;
  name: string;
  [key: string]: unknown;
};

export type ModelOption = {
  defaultServiceTier?: string | null;
  model?: string | null;
  serviceTiers?: readonly ServiceTier[] | null;
  [key: string]: unknown;
};
