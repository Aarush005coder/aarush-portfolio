import { LuLanguages, LuArrowRight, LuSparkles, LuMic, LuFileText } from "react-icons/lu";

export default function QuillMockup({ mockup }) {
  return (
    <div className="mock-wrap">
      <div className="mock-card">
        <div className="mock-head">
          <span className="mock-logo"><LuLanguages className="ic ic-sm" /></span>
          <div>
            <b>{mockup.appName}</b>
            <small>{mockup.appTag}</small>
          </div>
        </div>

        <div className="q-lang">
          <span className="pill pill--green">English</span>
          <LuArrowRight className="ic ic-xs" />
          <span className="pill pill--yellow">हिन्दी</span>
          <span className="q-auto"><LuSparkles className="ic ic-xs" /> auto-detect</span>
        </div>

        <div className="q-panes">
          <div className="q-pane">
            <span className="q-line w80" /><span className="q-line w60" />
            <span className="q-line w70" /><span className="q-line w40" />
          </div>
          <div className="q-pane q-pane--out">
            <span className="q-line w70" /><span className="q-line w80" />
            <span className="q-line w50" /><span className="q-line w60" />
          </div>
        </div>

        <div className="q-tools">
          <span className="chip chip--sm"><LuFileText className="ic ic-xs" /> PDF</span>
          <span className="chip chip--sm"><LuFileText className="ic ic-xs" /> Word / Excel</span>
          <span className="chip chip--sm"><LuMic className="ic ic-xs" /> Speech</span>
        </div>
      </div>
    </div>
  );
}