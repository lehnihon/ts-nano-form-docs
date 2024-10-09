import Highlight from "@/components/Highlight";
import React from "react";
import { SubTitleText, Text, TitleText } from "@/components/typograph";
import { maskCode, maskStoreCode } from "./codes";

export default function Mask() {
  return (
    <>
      <section id="mask">
        <TitleText>Mask</TitleText>
        <Text>There are some ready-to-use standard rules:</Text>
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li className="text-muted-foreground">0 = any digit</li>
          <li className="text-muted-foreground">A = any alphanumeric</li>
          <li className="text-muted-foreground">S = any letter</li>
          <li className="text-muted-foreground">
            X = any letter and transform to uppercase
          </li>
          <li className="text-muted-foreground">x = any letter and</li>
          <li className="text-muted-foreground">
            Z = any alphanumeric and transform to uppercase
          </li>
          <li className="text-muted-foreground">
            z = any alphanumeric and transform to lowercase
          </li>
        </ul>
        <div className="mb-4">
          <Text className="mb-4">
            To use the mask without selecting a field, use mask, unmask methods.
            These values ​​are not put in a store.
          </Text>
          <Highlight code={maskCode} />
        </div>
        <div>
          <SubTitleText>Store Mask</SubTitleText>
          <Text className="mb-2">
            If is necessary to validate these values, put a masked value in a
            store, use the setMasked methods.
          </Text>
          <Text className="mb-2">
            There are also getMasked and getMoneyMasked which returns a masked
            value without changing the store.
          </Text>
          <Text className="mb-4">
            Be careful when using the getUnmasked method, if the value is money
            use getMoneyUnmasked to add the decimal values.
          </Text>
          <Highlight code={maskStoreCode} />
        </div>
      </section>
    </>
  );
}
