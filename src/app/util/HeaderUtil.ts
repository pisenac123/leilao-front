import { HttpHeaders } from "@angular/common/http";

export class HeaderUtil {
    public static SelectedHTTPHeader(): any {
        const headerOptions = {
            headers: new HttpHeaders({
                'Authorization' : 'poGpTSXYo0Hiir0G'
            }),
        };

        return headerOptions;
    }

    public static SelectedHTTPHeaderFormData(): any {
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'multipart/form-data'
            }),
        };

        return headerOptions;
    }
}
