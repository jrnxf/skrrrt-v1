import axios from 'axios'
import asyncDebounce from 'debounce-async'
import React, { useEffect, useState } from 'react'
import { Edit } from '@/components'
import { useFormContext } from 'react-hook-form'
import { CSSTransition } from 'react-transition-group'
import { GlobeIcon } from '@heroicons/react/outline'

export const GoogleLocationSuggest = ({ label, name }) => {
  const [show, setShow] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const { register, unregister, setValue, watch } = useFormContext()

  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  const resolveCity = async ({ place_id }) => {
    const response = await axios.get(`/api/locations/place/${place_id}`)
    setValue(name, JSON.stringify(response.data))
    setSuggestions([])
    setShow(false)
  }

  /**
   * NOTE: even if the value is falsy I still want to send it to the debounce function so that it is registered
   * and will override any prior truthy values caught inside the debounce timer since the debounced method will
   * fire with whatever last made it into the cycle. that being said, I know the value is null so I can immediately
   * set suggestions to an empty array as done below. The debounced method will fire with a falsy value as its last entry
   * but nothing will change visually since I already set the suggestions to an empty array.
   */
  const updateSuggestions = (e) => {
    const { value } = e.target
    debouncedUpdateSuggestions(value)

    if (!value) {
      setSuggestions([])
    }
  }

  const debouncedUpdateSuggestions = asyncDebounce(async (value) => {
    if (value) {
      const response = await axios.get(`/api/locations/city/${value}`)
      setSuggestions(response.data)
    } else {
      setSuggestions([])
    }
  }, 300)

  const displayValue = JSON.parse(watch(name) || null)?.formatted_address || ''
  return (
    <>
      <div>
        <label htmlFor={name} className="text-sm label">
          {label}
        </label>
        <div className="flex flex-row items-center h-12 px-2 py-1 rounded-md shadow-sm bg-nord6 dark:bg-nord0">
          <input {...register(name)} name={name} type="text" className="hidden" />

          <button
            type="button"
            className="mr-2 rounded-md keyboard-focus-visible"
            onClick={() => setShow(true)}
          >
            <GlobeIcon className="w-6 h-6" />
          </button>

          {displayValue && (
            <div className="flex items-center mr-2 text-xl" tabIndex={-1}>
              {displayValue}
            </div>
          )}
        </div>
      </div>

      <CSSTransition in={show} timeout={300} classNames="modal" unmountOnExit>
        <div className="modal-container">
          <div className="relative w-full max-w-3xl max-h-screen px-8 mx-auto my-6">
            <div className="relative flex flex-col w-full px-4 py-2 border-0 rounded-md shadow-sm outline-none bg-primary focus:outline-none">
              <div className="w-full mb-2">
                {label && (
                  <label htmlFor={name} className="label text-sm">
                    {label}
                  </label>
                )}
                <input
                  className="w-full p-3 text-xl border-0 rounded-md shadow-sm outline-none bg-nord6 dark:bg-nord0 focus:outline-none focus-visible:ring-3 focus-visible:ring-nord15 focus-visible:ring-opacity-50"
                  name={name}
                  id={name}
                  onChange={updateSuggestions}
                  autoFocus
                  type="text"
                  defaultValue={displayValue}
                />
                {suggestions?.length > 0 && (
                  <ul className="w-full mt-2">
                    {suggestions.map((s: any, idx) => (
                      <li
                        key={idx}
                        role="button"
                        className={`p-1 text-sm rounded-sm cursor-pointer keyboard-focus-visible`}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            resolveCity(s)
                          }
                        }}
                        onClick={() => {
                          resolveCity(s)
                        }}
                        tabIndex={0} // makes the item tabbable w/o affecting normal flow
                      >
                        {s.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-col items-end justify-center">
                <div className="mb-1">
                  <button
                    className="text-nord6 btn bg-nord11"
                    type="button"
                    onClick={() => {
                      setValue(name, null)
                      setShow(false)
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="ml-2 text-nord6 btn bg-nord7"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="mt-1 font-semibold tracking-normal normal-case text-sm">
                  Powered by Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition in={show} timeout={300} classNames="translucent-bg" unmountOnExit>
        <div className="translucent-overlay" />
      </CSSTransition>
    </>
  )
}
