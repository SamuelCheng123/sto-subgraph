import {Transfer} from "../generated/schema"
import { UpdateTransfer } from "module";

export function handleUpdateTransfer(event: UpdateTransfer):void{
    let transfer = Transfer.load(
        event.transaction.hash.toHex()
    )
    if(transfer == null){
        transfer = new Transfer(
            event.transaction.hash.toHex()
        )
    }
    transfer.block = event.block.number
    transfer.tokenAddress = event.params._tokenAddress.toHex()
    transfer.from = event.params._from.toHex()
    transfer.to = event.params._to.toHex()
    transfer.amount = event.params._amount.value

    transfer.save()



}