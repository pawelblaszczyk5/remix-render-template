import type { EntryContext } from 'remix';

import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) => {
  // eslint-disable-next-line testing-library/render-result-naming-convention  -- fake positive with Testing Library
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
};

export default handleRequest;
