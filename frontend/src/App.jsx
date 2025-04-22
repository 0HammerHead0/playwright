import React, { useState } from "react";

const codeSnippets = {
  1: [
    "function sum(a, b) {",
    "  return a + b;",
    "}",
    "console.log(sum(2, 3));",
  ],
  2: ["let arr = [1, 2, 3];", "arr.forEach(x => console.log(x));"],
  3: [
    "const greet = (name) => {",
    "  return `Hello, ${name}`;",
    "};",
    "console.log(greet('React'));",
  ],
};

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (id) => {
    setSelectedEvent(id);
  };

  const closePanel = () => setSelectedEvent(null);

  return (
    <>
      <div
        id="app-container"
        className="relative h-screen bg-gray-100 overflow-hidden"
      >
        <div
          id="toast-root"
          data-testid="toast-root"
          className="OverlayContexts-module_toastRoot--YGOAd app-content-enter-done"
        ></div>

        <div
          id="overlay-root"
          data-testid="overlay-root"
          className="OverlayContexts-module_overlayRoot--VyWTj csq-reskin"
        >
          {/* Event List */}
          <div className="flex flex-col p-6 space-y-4 w-1/2">
            {[1, 2, 3].map((eventId) => (
              <div
                key={eventId}
                onClick={() => handleEventClick(eventId)}
                className="cursor-pointer p-4 border rounded bg-white hover:bg-gray-200"
              >
                Event #{eventId}
              </div>
            ))}
          </div>

          {/* Side Panel */}
          <section
            data-testid="side-panel-container"
            className={`Overlay-module_overlayContent--hKcBa SidePanel-module_sidePanelContainer--D12Kc ResizableSidePanel-module_sidePanelContainer--BUHEL side-panel-animate-enter-done fixed top-0 transition-all duration-300 ease-in-out bg-white h-full overflow-auto ${
              selectedEvent ? "right-0 w-[700px]" : "-right-[800px] w-[700px]"
            }`}
            style={{ zIndex: 100 }}
          >
            <div
              className="ResizableSidePanel-module_resizeablePanel--Dt311"
              style={{
                position: "relative",
                userSelect: "auto",
                width: "100%",
                height: "100%",
                maxWidth: "2158px",
                minWidth: "625px",
                boxSizing: "border-box",
                flexShrink: 0,
              }}
            >
              <div className="SidePanel-module_headerContainer--rXSPN SidePanel-module_contentHasScrolled--uI9ne"></div>
              <div className="SidePanel-module_content--edBHV p-4">
                <div data-testid="event-detail-view">
                  <div className="card-layout callout-card callout-card-variant-warning inactive-event-callout-card mb-4"></div>
                  <div className="EventDefinitionDetailView-module_summaryAnalysisContainer--ElsFr mb-4"></div>

                  <div className="event-definition-edit-criteria-view">
                    <div className="card-layout symbol-criteria">
                      <div
                        id="definition-criteria-view"
                        className="card-header mb-2"
                      ></div>

                      <div
                        id="marionette-view-rffdo"
                        className="marionette-view edit-event-criteria-vie"
                      >
                        <div className="symbol-criteria new-event-define-view">
                          <div className="event-clause-region mb-2"></div>

                          <div className="restrictions-region last-non-empty-child">
                            <div className="restrictions-view">
                              <div className="clauses">
                                <div className="set-properties-region last-non-empty-child">
                                  <div className="set-properties-view">
                                    <div className="snapshot-properties-title mb-2"></div>

                                    <div
                                      className="set-properties-container"
                                      data-rv-hide="model:isFetchingIsJSSnapshotDisabled"
                                    >
                                      <div className="snapshot-properties-description mb-2"></div>

                                      <div className="data">
                                        <div className="set-properties">
                                          <div className="set-property-clause-view">
                                            <div
                                              className="set-property-clause-view-container wrapped-components"
                                              rv-class-wrapped-components="model:shouldWrapComponents"
                                              rv-class-hidden="model:shouldHideClause"
                                            >
                                              <ul className="components grid">
                                                <li className="first-non-empty-child"></li>
                                                <li className="set-property-type-region"></li>
                                                <li className="last-non-empty-child">
                                                  <label className="block font-semibold mb-1">
                                                    JavaScript expression
                                                  </label>

                                                  <textarea
                                                    data-testid="property-target"
                                                    className="property-target javascript-snapshot-input hidden"
                                                    disabled
                                                    style={{
                                                      height: "12px",
                                                      display: "none",
                                                    }}
                                                  ></textarea>

                                                  <div className="CodeMirror cm-s-default CodeMirror-disabled code-block bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                                                    <pre>
                                                      {codeSnippets[
                                                        selectedEvent
                                                      ]?.map((line, index) => (
                                                        <div
                                                          key={index}
                                                          className="flex"
                                                        >
                                                          <span className="text-gray-400 w-6 text-right pr-2">
                                                            {index + 1}
                                                          </span>
                                                          <span>
                                                            {line
                                                              .split(" ")
                                                              .map(
                                                                (word, i) => (
                                                                  <span
                                                                    key={i}
                                                                    className="inline-block mr-1"
                                                                  >
                                                                    {word}
                                                                  </span>
                                                                )
                                                              )}
                                                          </span>
                                                        </div>
                                                      ))}
                                                    </pre>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <button
                                        onClick={closePanel}
                                        className="mt-6 text-blue-500 hover:underline"
                                      >
                                        Close Panel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* END content */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
