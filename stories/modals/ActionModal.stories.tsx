import { Meta, Story } from "@storybook/react/types-6-0";

import { ArgType } from "../../types/storybookArgs";

import ActionModal, { ActionModalProps } from "../../src/modals/ActionModal";
import { useState } from "react";
import Button from "../../src/buttons/Button";

export default {
  title: "Modal/ActionModal",
  component: ActionModal,
  argTypes: {
    headlineText: {
      variant: "string",
      control: {
        type: "text",
      },
    },
  } as ArgType<ActionModalProps>,
} as Meta;

const Template: Story<ActionModalProps> = (args) => <ActionModal {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  open: true,
  onClose: () => console.log("close"),
  onActionBtnClick: () => console.log("click"),
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      condimentum lacus non diam ultricies eleifend. Curabitur hendrerit tortor
      nec nisl dictum, vitae tristique ante luctus.
    </>
  ),
} as ActionModalProps;

const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 5000);
  });

export const ActionModalAsync = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActionBtnClick = async () => {
    try {
      await fetchData();
      setIsModalOpen(false);
    } catch (err) {}
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} variant="contained">
        Toggle Modal
      </Button>

      <ActionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onActionBtnClick={() => console.log("Normal Click")}
        onActionBtnClickPromise={handleActionBtnClick}
      >
        <>
          Action modal does not make any memory leak because all logic is being
          kept inside of the component and not outside. Action Modal also sets
          basic props so its better to ise Action Modal instead of Modal itself.
          Modal is like low-level version - better for customizations and Action
          Modal is higher-level version of Modal.
        </>
      </ActionModal>
    </>
  );
};
