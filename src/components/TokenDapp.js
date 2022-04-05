import { useState } from "react"

import { truncateAddress } from "../services/address.service"
import {
  getErc20TokenAddress,
  mintToken,
  transfer,
} from "../services/token.service"
import {execute} from "skia-wallet";
import styles from "../styles/Home.module.css"

export const TokenDapp = () => {
  const [contractAddress, setContractAddress] = useState("0x07394cbe418daa16e42b87ba67372d4ab4a5df0b05c6e554d158458ce245bc10")
  const [mintAmount, setMintAmount] = useState("10")
  const [transferTo, setTransferTo] = useState("")
  const [transferAmount, setTransferAmount] = useState("1")
  
  const handleMintSubmit = (e) => {
    e.preventDefault()
    if (typeof(window) == 'object') {
      execute(contractAddress, "mint", mintAmount, window.location.href )
    }
  }

  const handleTransferSubmit = (e) => {
    e.preventDefault()
      console.log("Transfer", transferAmount, transferTo)
      if (typeof(window) == 'object') {
      const arr = new Array(transferTo, transferAmount);
      const sArr = JSON.stringify(arr)
      execute(contractAddress, "transfer", sArr, window.location.href )
      }
  }

  return (
    <>
      <div className="columns">
        <form onSubmit={handleMintSubmit}>
          <h2 className={styles.title}>Mint token</h2>

          <label htmlFor="mint-amount">Amount</label>
          <input
            type="text"
            id="mint-amount"
            name="fname"
            value={mintAmount}
            onChange={(e) => setMintAmount(e.target.value)}
          />

          <input type="submit" value="Mint" />
        </form>

        <form onSubmit={handleTransferSubmit}>
          <h2 className={styles.title}>Transfer token</h2>

          <label htmlFor="transfer-to">To</label>
          <input
            type="text"
            id="transfer-to"
            name="fname"
            value={transferTo}
            onChange={(e) => setTransferTo(e.target.value)}
          />

          <label htmlFor="transfer-amount">Amount</label>
          <input
            type="text"
            id="transfer-amount"
            name="fname"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
          />
          <br />
          <input type="submit" value="Transfer" />
        </form>
      </div>
    </>
  )
}
