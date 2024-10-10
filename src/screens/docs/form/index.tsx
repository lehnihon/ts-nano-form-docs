import Highlight from "@/components/Highlight";
import React from "react";
import { SubTitleText, Text, TitleText } from "@/components/typograph";
import { fieldCode, formCode, submitCode } from "./codes";

export default function Form() {
  return (
    <>
      <section id="form" className="max-w-4xl">
        <TitleText>Form</TitleText>
        <Text className="mb-2">
          Form combines the functionalities of input masking, field validation,
          and form submission. Designed to build forms that ensure data is
          inputted in the correct format, validated in real-time, and submitted
          seamlessly.
        </Text>
        <Text className="mb-4">
          Each form field can be masked, ensuring that the user inputs data in a
          specific format (e.g., phone numbers, dates, credit card numbers), and
          once validated, the entire form or individual fields can be submitted
          to an API or backend.
        </Text>
        <div>
          <Highlight code={formCode} />
        </div>
      </section>
      <section id="field" className="max-w-4xl">
        <SubTitleText>Field</SubTitleText>
        <Text className="mb-2">
          Field is a key functionality of a Ts Nano Form designed to manage form
          fields. This feature allows you to select a specific field, apply
          masks, and handle its submission.
        </Text>
        <Text className="mb-2">
          It is particularly useful in situations where individual fields need
          to be masked independently, or when building dynamic forms with
          complex field interactions.
        </Text>
        <Text className="mb-4">
          Along with validation, allows to customize how errors are handled and
          displayed. This ensures that the library integrates smoothly into any
          design or UX requirements. You can choose whether to display error
          messages inline, in tooltips, or handle them programmatically.
        </Text>
        <div>
          <Highlight code={fieldCode} />
        </div>
      </section>
      <section id="submit" className="max-w-4xl">
        <SubTitleText>Submit</SubTitleText>
        <Text className="mb-2">
          Handle the validation and submission of form fields through a fetcher.
          This functionality simplifies the process of validating multiple form
          fields and submitting the validated data to an external service or
          backend API using the fetch API or a custom HTTP client.
        </Text>
        <Text className="mb-4">
          Ensures that form fields are validated before submission. Each field
          can have custom or predefined validation rules.
        </Text>
        <div>
          <Highlight code={submitCode} />
        </div>
      </section>
    </>
  );
}
