# jodash

~~~ts
export declare function downloadFile(blob: BlobPart, flieName?: string): void;

export declare function getCanConvertNumber(value: any): boolean;

export declare function changeTo1000comma(value: string | number): string;
export declare function getNumberAfterRemoveComma(value: string | number): number;
export declare function ellipsis(strFull: string, cutoffLength: number, strAdd?: string): string;
export declare function decodeHTMLEntities(docu: Document, text: string): string;
export declare function make00(value: string | number): string;

export declare function makeQueryStringByObject(obj: any): string;

export declare function getLastDateOfMonth( year: number, month: number ): number {
~~~

```
yarn install
```

```
yarn build
```

```
npm publish
```