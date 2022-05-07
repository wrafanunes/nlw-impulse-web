import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'

import '../global.css'
import { WidgetForm } from "./WidgetForm"

export function Widget() {
    return (
        <Popover className="div">
            <Popover.Panel><WidgetForm></WidgetForm></Popover.Panel>

            <Popover.Button className="button group">
                <ChatTeardropDots className="chatTearDrops"></ChatTeardropDots>
                <span className="span1">
                    <span>Parecer</span>
                </span>
            </Popover.Button>
        </Popover>
    )
}