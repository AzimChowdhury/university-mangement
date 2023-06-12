import { Model } from 'mongoose';

export type IAF = {
  title: string;
};

export type AFModel = Model<IAF, Record<string, unknown>>;

export type IAFFilters = {
  searchTerm?: string;
};
