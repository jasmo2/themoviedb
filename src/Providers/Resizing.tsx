import React, { useEffect, useState, useContext, useCallback } from 'react'
import { debounce } from 'lodash'

type ValueType = {
  width: number
}

const defaultValue: ValueType = {
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
}

const WindowEventsContext = React.createContext(defaultValue)

export default function WindowEvents({ children }: { children: any }) {
  const [value, setValue] = useState(defaultValue)

  const updateValue = () => {
    const { innerWidth: width } = window

    setValue((prevState) => {
      return {
        ...prevState,
        width,
      }
    })
  }

  const onResize = useCallback(
    debounce(() => {
      updateValue()
    }, 50),
    []
  )

  useEffect(() => {
    window.addEventListener('resize', onResize, {
      passive: true,
    })
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return (
    <WindowEventsContext.Provider value={value}>
      {children}
    </WindowEventsContext.Provider>
  )
}

export const useWindowEvents = () => useContext(WindowEventsContext)
