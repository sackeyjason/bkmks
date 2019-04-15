# Technical design document

This app stores a list of links in the browser's local storage.

Users can add more links with the form at the top of the page.

There is a check for valid link formatting. Only valid links can be added, but the status of their page is not checked. Validation checks for the http or https protocol, and a string with a dot. It rejects FTP and other protocols.

The UI shows 20 links per page, and pagination controls for moving between pages. 

New links are added to the top of the link. Links can't be rearranged or removed.
