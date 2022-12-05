import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import { Fragment } from 'react';
import Buttton from '../../components/UI/Button';
import ErrorAlert from '../../components/UI/ErrorAlert';

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Loading...</p>;
        </ErrorAlert>

        <div className="center">
          <Buttton link="/events">Show All Events</Buttton>
        </div>
      </Fragment>
    );
  }

  const [filteredYear, filteredMonth] = filteredData;
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter, please adjust your values</p>;
        </ErrorAlert>
        <div className="center">
          <Buttton link="/events">Show All Events</Buttton>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No events found for the chosen filter!</p>;
      </ErrorAlert>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
