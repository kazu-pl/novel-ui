import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import { ArgType } from "../../types/storybookArgs";

import Modal, { ModalProps } from "../../src/modals/Modal";
import { useState } from "react";
import Button from "../../src/buttons/Button";
import Box from "@mui/material/Box";

export default {
  title: "Modal/BasicModal",
  component: Modal,
  argTypes: {} as ArgType<ModalProps>,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  open: true,
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      condimentum lacus non diam ultricies eleifend. Curabitur hendrerit tortor
      nec nisl dictum, vitae tristique ante luctus. Nunc dapibus nunc et tortor
      euismod eleifend. Sed vel tincidunt ipsum. Vestibulum commodo molestie
      convallis. Vestibulum a fringilla urna. Curabitur rhoncus consequat
      scelerisque. Praesent in arcu magna. Mauris ac gravida magna. Fusce
      blandit, sapien id luctus porttitor, quam urna vehicula felis, sit amet
      ultricies nisi eros sed arcu. Integer fermentum dolor nisi, eu viverra
      velit fermentum eget. Nullam tristique quam at nulla mollis iaculis. In
      mollis porta nulla ac fringilla. Nulla condimentum urna convallis, auctor
      dui non, elementum nulla. Maecenas sit amet fermentum orci.
    </>
  ),
  headlineText: "headlineText",
  headlineTextColor: "primary",
  footerContent: (
    <>
      <Box mr={2}>
        <Button variant="text" color="inherit">
          close
        </Button>
      </Box>
      <Button variant="contained">Confirm</Button>
    </>
  ),
} as ModalProps;

const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 5000);
  });

export const ModalWithAsyncAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isActionInProgress, setIsActionInProgress] = useState(false);

  const handleActionBtnClick = async () => {
    setIsActionInProgress(true);
    try {
      await fetchData();
      setIsActionInProgress(false);
    } catch (err) {
      setIsActionInProgress(false);
    }
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} variant="contained">
        Toggle Modal
      </Button>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        headlineText="headlineText"
        footerContent={
          <>
            <Box mr={2}>
              <Button
                variant="text"
                color="inherit"
                onClick={() => setIsModalOpen(false)}
              >
                close
              </Button>
            </Box>
            <Button
              variant="contained"
              onClickPromise={handleActionBtnClick}
              isLoading={isActionInProgress}
            >
              Confirm
            </Button>
          </>
        }
      >
        <>
          If you click on action btn, close modal and wait until promise is
          resolved it will lead to memory leak (you can check error in console).
          If you want to use async actions use ActionModal - it has all logic
          needed to handle async actions without react errors. This is because
          loading state of action button is being kept outside the Modal
          component.
        </>
      </Modal>
    </>
  );
};
