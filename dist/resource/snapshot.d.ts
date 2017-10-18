import { Api } from '../util/api';
export interface SnapshotListArgs {
    ids?: Array<string>;
    users?: Array<number>;
    ref?: string;
}
export interface User {
}
export interface SnapshotIOSVersion {
    min: string;
    max: string;
    eq: string;
}
export interface SnapshotAndroidVersion {
    min: string;
    max: string;
    eq: string;
}
export interface Snapshot {
    id: string;
    note: string;
    sha: string;
    ref: string;
    ref_type: string;
    state: string;
    user: User;
    ios_version: SnapshotIOSVersion;
    android_version: SnapshotAndroidVersion;
    created: string;
    short_sha: string;
}
export declare class SnapshotsResource {
    private _base;
    constructor(api: Api);
    del(appId: string, pk: string): Promise<Snapshot>;
    get(appId: string, pk: string): Promise<Snapshot>;
    getUrl(appId: string, pk: string): Promise<any>;
    list(appId: string, params?: SnapshotListArgs): Promise<Array<Snapshot>>;
    patch(appId: string, pk: string, body: Snapshot): Promise<Snapshot>;
    post(appId: string, body: Snapshot): Promise<Snapshot>;
}
