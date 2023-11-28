import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { snapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import {download} from '../assets/download.png'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { AIPicker, ColorPicker, FilePicker, CustomButton, Tab } from '../components'



const Customizer = () => {
  return (
    <AnimatePresence>

    </AnimatePresence>
  )
}

export default Customizer