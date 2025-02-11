import { fn } from "@storybook/test";
import Card from "./Card";

export default {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  // Exclude action handlers from stories
  excludeStories: /.*Data$/,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Exploring the Mountains",
  description: "A journey through the beautiful mountain landscapes.",
  image:
    "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  author: "John Doe",
  date: "Feb 12, 2025",
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: "A Blog Without an Image",
  description: "This blog post does not have an image but still looks great.",
  author: "Jane Smith",
  date: "Jan 5, 2025",
};
