import ScrollReveal from "../animations/ScrollReveal";

const ApprovalBadges = () => {
  return (
    <section className="section section-muted">
      <div className="container">
        <ScrollReveal>
          <div className="approval-badges">
            <div className="badge-card">
              <div className="badge-mark">K Rend</div>
              <span>Approved Applicator</span>
            </div>
            <div className="badge-card">
              <div className="badge-mark">Weber</div>
              <span>Approved Applicator</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ApprovalBadges;
