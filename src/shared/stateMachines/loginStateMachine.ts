import { assign, createMachine, DoneInvokeEvent } from "xstate";
import Router from "next/router";

import fetcher from "../../lib/fetchJson";

interface Context {
  error: string;
}

type Event = DoneInvokeEvent<any>;

export const loginStateMachine = createMachine<Context, Event>(
  {
    id: "login-state-machine",
    initial: "idle",
    context: {
      error: null,
    },
    predictableActionArguments: true,
    states: {
      idle: {
        on: {
          OPEN_MODAL: { target: "open_modal" },
        },
      },

      open_modal: {
        on: {
          SIGN_IN: { target: "authenticating" },
          DISMISS: { target: "idle" },
        },
      },

      authenticating: {
        entry: ["clearError"],
        invoke: {
          src: "signIn",
          onDone: { target: "after_sign_in" },
          onError: {
            target: "open_modal",
            actions: ["onError"],
          },
        },
      },

      after_sign_in: {
        entry: "afterSignIn",
        always: { target: "idle" },
      },
    },
  },
  {
    guards: {},
    actions: {
      onError: assign({ error: (_, event) => event.data.message }),
      clearError: assign({ error: "" }),
      afterSignIn: () => {
        Router.reload();
      },
    },
    services: {
      signIn: async (_, event) =>
        fetcher("/api/login", {
          method: "post",
          body: JSON.stringify(event.data),
        }),
    },
  }
);
