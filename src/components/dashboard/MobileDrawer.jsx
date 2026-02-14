"use client";

import { Drawer, Portal } from "@chakra-ui/react";

export default function MobileDrawer({ open, setOpen, children }) {
  return (
    <>
      <Drawer.Root
        open={open}
        placement="left"
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content
              w="240px"
              transition="all 0.3s ease"
              _open={{
                transform: "translateX(0)",
                opacity: 1,
              }}
              _closed={{
                transform: "translateX(-20px)",
                opacity: 0,
              }}
            >
              <Drawer.Body p="0">{children}</Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}
