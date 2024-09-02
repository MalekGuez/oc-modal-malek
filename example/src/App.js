import React from 'react'

import OCModalMalek from 'oc-modal-malek'
import 'oc-modal-malek/dist/index.css'

const App = () => {
  return <OCModalMalek isOpen={true} onClose={() => console.log("closed")} text="Merci de votre inscription !"/>
}

export default App
