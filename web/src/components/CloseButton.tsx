import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

import '../global.css'

export function CloseButton() {
    return (
        <Popover.Button title="Fechar formulário">
            <X className="x" weight="bold"/>
        </Popover.Button>
    )
}