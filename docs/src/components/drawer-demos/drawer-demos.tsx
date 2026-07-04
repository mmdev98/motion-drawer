"use client";

import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/button";
import { DrawerProps } from "motion-drawer";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { Drawer, DrawerActions, DrawerBody, DrawerHeader } from "motion-drawer";
import useBreakpoint from "@/hooks/use-breakpoint";

const comments = [
  {
    id: 1,
    author: "Sarah Wilson",
    content: "Love the new updates! The animations are so smooth 🚀",
  },
  {
    id: 2,
    author: "Mike Johnson",
    content:
      "Great work on this! Looking forward to using it in my next project 👍",
  },
  {
    id: 3,
    author: "Emily Chen",
    content: "The integration with other libraries is seamless! Well done 🎉",
  },
  {
    id: 4,
    author: "David Rodriguez",
    content:
      "The documentation is super clear and helpful. Makes implementation a breeze 📚",
  },
  {
    id: 5,
    author: "Alex Thompson",
    content:
      "Been using this in production for a month now. Rock solid performance! 💪",
  },
  {
    id: 6,
    author: "Lisa Park",
    content: "The customization options are exactly what I needed. Thanks! ✨",
  },
  {
    id: 7,
    author: "Chris Martinez",
    content:
      "Responsive design works perfectly across all devices. Great job! 📱",
  },
  {
    id: 8,
    author: "Sophie Anderson",
    content: "The spring animations make the interactions feel so natural 🌟",
  },
  {
    id: 9,
    author: "James Lee",
    content:
      "Best drawer implementation I've used so far. Keep up the good work! 🏆",
  },
  {
    id: 10,
    author: "Nina Patel",
    content:
      "Love how lightweight it is while still maintaining all the features 🎯",
  },
];

type DrawerHighOrderProps = {
  className?: string;
  getDrawerProps: (props: { isDesktop: boolean }) => DrawerProps<"div">;
  children?: React.ReactNode;
};

function DrawerHighOrder(props: DrawerHighOrderProps) {
  const { className, getDrawerProps, children } = props;

  const isDesktop = useBreakpoint("lg");
  const [open, setOpen] = useState(false);

  const { className: drawerClassName, ...drawerProps } = getDrawerProps({
    isDesktop,
  });

  return (
    <div
      className={cn(
        "flex-col gap-3 w-full h-80 border p-4 flex justify-center bg-bg-50 rounded-xl items-center",
        className,
      )}
    >
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        Open Drawer
      </Button>
      <AnimatePresence>
        {open && (
          <Dialog open onClose={setOpen} className="fixed z-50">
            <DialogPanel
              as={Drawer}
              className={cn(
                "z-2 border lg:max-w-96 bg-white dark:bg-[#1F1F1FFF]",
                (drawerProps.padding || drawerProps.offset)
                  ? "w-[calc(100%-2rem)]"
                  : "w-full",
                {
                  "rounded-t-xl": !!drawerProps.padding,
                  "rounded-b-xl": !!drawerProps.offset,
                },
                drawerClassName,
              )}
              defaultOpen={open}
              onOpenChange={setOpen}
              {...drawerProps}
            >
              {children ? (
                children
              ) : (
                <>
                  <DrawerHeader className="flex items-center justify-between p-4 select-none border-b dark:border-neutral-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
                      <div>
                        <h3 className="font-semibold dark:text-neutral-100">
                          Motion Drawer
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          Just now
                        </p>
                      </div>
                    </div>
                    <button className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </button>
                  </DrawerHeader>
                  <DrawerBody className="p-4 space-y-4 select-none">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium dark:text-neutral-100">
                            {comment.author}
                          </p>
                          <p className="text-neutral-600 dark:text-neutral-300">
                            {comment.content}
                          </p>
                          <div className="flex gap-4 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <button className="hover:text-neutral-900 dark:hover:text-neutral-100">
                              Like
                            </button>
                            <button className="hover:text-neutral-900 dark:hover:text-neutral-100">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </DrawerBody>
                  <DrawerActions className="flex items-center gap-3 border-t dark:border-neutral-800 p-4 select-none">
                    <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="flex-1 bg-transparent outline-none dark:text-neutral-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
                    />
                    <button className="text-blue-500 dark:text-blue-400 font-semibold hover:text-blue-600 dark:hover:text-blue-300">
                      Post
                    </button>
                  </DrawerActions>
                </>
              )}
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
    </div>
  );
}

export function Default() {
  return (
    <DrawerHighOrder
      className="mt-4"
      getDrawerProps={({ isDesktop }) => ({
        className: isDesktop ? "lg:max-w-96" : "w-full",
      })}
    />
  );
}

export function WithSpace() {
  return (
    <DrawerHighOrder
      className="mt-4"
      getDrawerProps={({ isDesktop }) => ({
        offset: 16,
        padding: 16,
        borderRadius: null,
        className: isDesktop ? "lg:max-w-96" : "w-[calc(100%-2rem)]",
      })}
    />
  );
}

export function WithSnapPoints() {
  return (
    <DrawerHighOrder
      className="mt-4"
      getDrawerProps={({ isDesktop }) => ({
        snapPoints: ["390px", "auto"],
        offset: 16,
        padding: 16,
        borderRadius: null,
        className: isDesktop ? "lg:max-w-96" : "w-[calc(100%-2rem)]",
      })}
    />
  );
}

export function DefaultWithSnapPoint() {
  return (
    <DrawerHighOrder
      className="mt-4"
      getDrawerProps={({ isDesktop }) => ({
        snapPoints: ["390px", "auto"],
        className: isDesktop ? "lg:max-w-96" : "w-full",
      })}
    />
  );
}

export function WithVerticalScroll() {
  return (
    <DrawerHighOrder
      className="mt-4"
      getDrawerProps={({ isDesktop }) => ({
        snapPoints: ["400px", "auto"],
        className: isDesktop ? "lg:max-w-96" : "w-full",
      })}
    >
      <DrawerHeader className="p-4 border-b dark:border-neutral-800 select-none">
        <h3 className="font-semibold dark:text-neutral-100 text-lg">
          Vertical Scrolling
        </h3>
      </DrawerHeader>
      <DrawerBody className="p-4 space-y-4 select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 border dark:border-neutral-700"
          >
            <h4 className="font-medium dark:text-neutral-200">Item {i + 1}</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              This is a scrollable item to demonstrate vertical content scrolling
              within the drawer.
            </p>
          </div>
        ))}
      </DrawerBody>
    </DrawerHighOrder>
  );
}

export function WithHorizontalScroll() {
  return (
    <DrawerHighOrder
      className="mt-4"
      getDrawerProps={({ isDesktop }) => ({
        className: isDesktop ? "lg:max-w-96" : "w-full",
      })}
    >
      <DrawerHeader className="p-4 border-b dark:border-neutral-800 select-none">
        <h3 className="font-semibold dark:text-neutral-100 text-lg">
          Horizontal Scrolling
        </h3>
      </DrawerHeader>
      <DrawerBody className="p-4 space-y-6 select-none">
        <div>
          <h4 className="font-medium mb-3 dark:text-neutral-200">
            Horizontal Categories
          </h4>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {["Technology", "Design", "Product", "Engineering", "Marketing", "Sales", "Support", "Legal"].map(
              (cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 whitespace-nowrap border border-blue-200 dark:border-blue-800"
                >
                  {cat}
                </button>
              ),
            )}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-3 dark:text-neutral-200">
            Horizontal Cards
          </h4>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[200px] p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border dark:border-neutral-700"
              >
                <div className="w-full h-24 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-3" />
                <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-700 rounded mb-2" />
                <div className="h-4 w-1/2 bg-neutral-200 dark:bg-neutral-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </DrawerBody>
    </DrawerHighOrder>
  );
}

export function WithNestedScroll() {
  return (
    <DrawerHighOrder
      className="mt-4"
      getDrawerProps={({ isDesktop }) => ({
        snapPoints: ["500px", "auto"],
        className: isDesktop ? "lg:max-w-96" : "w-full",
      })}
    >
      <DrawerHeader className="p-4 border-b dark:border-neutral-800 select-none">
        <h3 className="font-semibold dark:text-neutral-100 text-lg">
          Nested Scrolling
        </h3>
      </DrawerHeader>
      <DrawerBody className="p-4 space-y-6 select-none">
        <p className="text-neutral-600 dark:text-neutral-400">
          This example shows a scrollable area inside a scrollable drawer.
        </p>
        <div className="h-64 border-2 border-dashed dark:border-neutral-700 rounded-xl overflow-hidden flex flex-col">
          <div className="p-2 bg-neutral-100 dark:bg-neutral-800 border-b dark:border-neutral-700 text-xs font-bold uppercase tracking-wider text-neutral-500">
            Nested Scrollable Area
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm dark:text-neutral-300">
                  Inner scrollable line {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border dark:border-neutral-700"
            >
              Outer content {i + 1}
            </div>
          ))}
        </div>
      </DrawerBody>
    </DrawerHighOrder>
  );
}

export function WithPaddingAndScroll() {
  return (
    <DrawerHighOrder
      className="mt-4"
      getDrawerProps={({ isDesktop }) => ({
        padding: 20,
        offset: 20,
        snapPoints: ["400px", "auto"],
        className: isDesktop ? "lg:max-w-96" : "w-[calc(100%-2rem)]",
      })}
    >
      <DrawerHeader className="p-4 border-b dark:border-neutral-800 select-none">
        <h3 className="font-semibold dark:text-neutral-100 text-lg">
          Padding & Offset Scroll
        </h3>
      </DrawerHeader>
      <DrawerBody className="p-4 space-y-4 select-none">
        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-sm">
          Testing scrolling with 20px padding and 20px offset. This creates a
          &#34;floating&#34; drawer effect.
        </div>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 border dark:border-neutral-700"
          >
            <p className="dark:text-neutral-300 text-sm">Scrollable content block {i + 1}</p>
          </div>
        ))}
      </DrawerBody>
    </DrawerHighOrder>
  );
}
