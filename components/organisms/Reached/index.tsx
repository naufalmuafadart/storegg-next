import ReachedItem from './ReachedItem';
import Separator from './Separator';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem num="290M+" info="Players Top Up" />
          <Separator />
          <ReachedItem num="12.500" info="Games Available" />
          <Separator />
          <ReachedItem num="99,9%" info="Happy Players" />
          <Separator />
          <ReachedItem num="4.7" info="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
