export type ID = string;

export interface Options {
  interval?: string | number;
  repeat: boolean;
  timeout?: number;
  retries: number;
}

export interface Timestamps {
  createdAt: Date;
  startedAt?: Date;
  finishedAt?: Date;
}
