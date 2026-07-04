"use client";

import { AnimatePresence, motion } from "motion/react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Drawer, DrawerActions, DrawerBody, DrawerHeader } from "motion-drawer";
import { useState } from "react";

export function MyDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer</button>
      <AnimatePresence>
        {open && (
          <Dialog open onClose={setOpen} className="fixed z-50">
            <DialogPanel
              as={Drawer}
              className="z-2 w-[calc(100%-2rem)] border lg:max-w-96 bg-white dark:bg-neutral-800"
              defaultOpen={open}
              onOpenChange={setOpen}
              snapPoints={["400px", "auto"]}
              borderRadius={16}
            >
              <DrawerHeader className="flex items-center justify-center pt-6 p-4 select-none">
                Header
                <div className="bg-bg-200 w-6 h-1 rounded-full absolute top-2" />
              </DrawerHeader>
              <DrawerBody className="select-none p-6 space-y-6">
                <div className="flex items-center flex-col gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <div className="w-6 h-6 bg-blue-500 rounded-full" />
                  </div>
                  <h3 className="text-xl font-semibold">Motion Drawer</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  A headless drawer with smooth animations and easily integrates
                  with any headless libraries such as Headless UI, React Aria,
                  Radix UI, and more.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-xl transition-colors">
                    <div className="p-2.5 bg-amber-500/10 rounded-xl shadow-sm">
                      <div className="w-5 h-5 bg-amber-500 rounded-full shadow-inner" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px] mb-1">
                        Flexible Snap Points
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Support for pixels, percentages and auto heights
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl transition-colors">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl shadow-sm">
                      <div className="w-5 h-5 bg-blue-500 rounded-full shadow-inner" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px] mb-1">
                        Smooth Animations
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Fluid motion with spring-based physics
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl transition-colors">
                    <div className="p-2.5 bg-cyan-500/10 rounded-xl shadow-sm">
                      <div className="w-5 h-5 bg-cyan-500 rounded-full shadow-inner" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px] mb-1">
                        Library Agnostic
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Works with Headless UI, React Aria, Radix and more
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <div className="w-6 h-6 bg-blue-500 rounded-full" />
                  </div>
                  <h3 className="text-xl font-semibold">Motion Drawer</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  A headless drawer with smooth animations and easily integrates
                  with any headless libraries such as Headless UI, React Aria,
                  Radix UI, and more.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-xl transition-colors">
                    <div className="p-2.5 bg-amber-500/10 rounded-xl shadow-sm">
                      <div className="w-5 h-5 bg-amber-500 rounded-full shadow-inner" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px] mb-1">
                        Flexible Snap Points
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Support for pixels, percentages and auto heights
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl transition-colors">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl shadow-sm">
                      <div className="w-5 h-5 bg-blue-500 rounded-full shadow-inner" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px] mb-1">
                        Smooth Animations
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Fluid motion with spring-based physics
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl transition-colors">
                    <div className="p-2.5 bg-cyan-500/10 rounded-xl shadow-sm">
                      <div className="w-5 h-5 bg-cyan-500 rounded-full shadow-inner" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px] mb-1">
                        Library Agnostic
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Works with Headless UI, React Aria, Radix and more
                      </p>
                    </div>
                  </div>
                </div>
              </DrawerBody>
              <DrawerActions className="flex gap-2 items-center justify-center border-t select-none p-4 pb-6">
                <button className="w-full" onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button className="w-full" onClick={() => setOpen(false)}>
                  OK
                </button>
              </DrawerActions>
            </DialogPanel>
            {/* Backdrop */}
            <DialogBackdrop
              as={motion.div}
              className="fixed inset-0 z-1 bg-black/25 backdrop-blur-xs"
              onClick={() => setOpen(false)}
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                },
                closed: {
                  opacity: 0,
                },
              }}
            />
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
