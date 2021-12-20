import { MatSnackBar } from "@angular/material/snack-bar";

export class SnackBarUtil {

    public static exibirSnackBar(snackBar: MatSnackBar, message: any, typeMessage: any){
       snackBar.open(message,'', { duration: 3000, panelClass: [typeMessage] });
    }

}