import Alert from "./Alert";

export default {
  component: Alert,
  title: "Components/Alert",
  tags: ["autodocs"],
};

const Template = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  message: "Something went wrong!",
  variant: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "This is a warning alert!",
  variant: "warning",
};

export const Success = Template.bind({});
Success.args = {
  message: "Operation successful!",
  variant: "success",
};

export const Info = Template.bind({});
Info.args = {
  message: "Here's some important information!",
  variant: "info",
};

export const Neutral = Template.bind({});
Neutral.args = {
  message: "This is a neutral alert.",
  variant: "neutral",
};
