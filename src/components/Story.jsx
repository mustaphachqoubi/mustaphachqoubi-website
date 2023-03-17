import React from 'react'

const Story = () => {

    const storyLines = ['line one', 'line two', 'line three', 'line four', 'line five', 'line six', 'line seven',]
  return (
    <>
    {
        storyLines.map((line, index) => <h1 key={index}>{line}</h1>)
    }
    </>
  )
}

export default Story