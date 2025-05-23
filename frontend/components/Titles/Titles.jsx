import React from "react";
import styles from "./Titles.module.scss";

export const Text = ({ as: Tag = "p", className, children, ...props }) => {
const componentClass = {
  h1: styles.heading_h1,
  h2: styles.heading_h2,
  h3: styles.heading_h3,
  h4: styles.heading_h4,
  h5: styles.heading_h5,
  h6: styles.heading_h6,
}

  return (
    <Tag className={`${className} ${componentClass[Tag]}`} {...props}>
      {children}
    </Tag>
  );
};

// Example usage:
// <Text as="h1" className="text-red-500">Hello World</Text>

export default Text;