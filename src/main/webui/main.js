import './style.css'
import '@material-tailwind/html/scripts/ripple.js'
import { setupSelectAll, setupDeselectParent } from './utils.js'

setupSelectAll(document.getElementById('checkbox-transactions'), 'transactionCheck')
setupDeselectParent('transactionCheck', 'checkbox-transactions')
