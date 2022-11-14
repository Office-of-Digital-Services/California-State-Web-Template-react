import React from 'react'

const StepList = () => {
  return (
    <ol class="cagov-step-list">
      <li>
        <strong>Give your steps a clear, concise title</strong>
        <br />
        <span class="cagov-step-list-content">
          The step list is a good fit for lengthy content. Use this space to discuss the step or identify the milestone. If there is information that your visitor must know before completing this step, you can talk about that here too.
        </span>
      </li>
      <li>
        <strong>Make your steps actionable</strong>
        <br />
        <span class="cagov-step-list-content">
          Be sure to tell your visitor exactly what they have to do to complete the step. If the process is not fully fleshed out, then this component may not be the best fit for your content.
        </span>
      </li>
      <li>
        <strong>Conclude the process</strong>
        <br />
        <span class="cagov-step-list-content">
          All good things must come to an end. Tell your reader how to complete their task. If needed, you can link to additional information in the step list content.
        </span>
      </li>
    </ol>
  )
}

export default StepList