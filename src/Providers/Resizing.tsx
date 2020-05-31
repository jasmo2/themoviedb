import React, { useEffect, useState, useContext } from 'react'
import { debounce } from 'lodash'

type ValueType = {
  resizing: boolean
  width: number
}

const defaultValue: ValueType = {
  resizing: false,
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
}

const WindowEventsContext = React.createContext(defaultValue)

export default function WindowEvents({ children }: { children: any }) {
  const [value, setValue] = useState(defaultValue)

  const updateValue = (resizing: boolean) => {
    const { innerWidth: width } = window

    setValue((prevState) => {
      return {
        ...prevState,
        resizing,
        width,
      }
    })
  }

  const onResize = () => {
    const { resizing } = value
    if (!resizing) {
      updateValue(!resizing)
    }
    onResizeEnd()
  }

  const onResizeEnd = debounce(() => {
    const resizing = false
    updateValue(resizing)
  }, 50)

  useEffect(() => {
    updateValue(false)
    window.addEventListener('resize', onResize, {
      passive: true,
    })
    return () => {
      window.removeEventListener('resize', onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <WindowEventsContext.Provider value={value}>
      {children}
    </WindowEventsContext.Provider>
  )
}

export const useWindowEvents = () => useContext(WindowEventsContext)
