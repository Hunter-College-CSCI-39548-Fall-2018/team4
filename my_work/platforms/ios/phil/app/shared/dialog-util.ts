import * as dialogsModule from "ui/dialogs";

export function alert(message: string) {
    return dialogsModule.alert({
        title: "MTA",
        okButtonText: "OK",
        message: message
    });
}
