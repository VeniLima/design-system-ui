import { styled } from "./styles";
import { ComponentProps } from "react";

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
  border: 0,
  fontWeight: "bold",
  color: "$white",

  variants: {
    variant: {
      small: {
        fontSize: 12,
        padding: "$2 $4",
      },
      big: {
        fontSize: 16,
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    variant: "small",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;
