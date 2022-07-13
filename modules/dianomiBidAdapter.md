# Overview

```
Module Name: Dianomi Bidder Adapter
Module Type: Bidder Adapter
<<<<<<< HEAD
Maintainer: prebid-maintainer@dianomi.com
=======
Maintainer: eng@dianomi.com
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
```

# Description

<<<<<<< HEAD
Module that connects to Dianomi's demand sources

# Test Parameters
```
    var adUnits = [
        {
            code: 'test-div',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250]],  // a display size
=======
Module that connects to Dianomi's demand sources. Both Native and Banner formats supported. Using oRTB standard.

# Test Parameters

```js
    var adUnits = [
        {
            code: 'test-div-1',
            mediaTypes: {
                native: {
                    rendererUrl: "https://dev.dianomi.com/chris/prebid/dianomiRenderer.js",
                    image: {
                        required: true,
                        sizes: [360, 360]
                    },
                    title: {
                        required: true,
                        len: 800
                    },
                    sponsoredBy: {
                        required: true
                    },
                    clickUrl: {
                        required: true
                    },
                    privacyLink: {
                        required: false
                    },
                    body: {
                        required: false
                    },
                    icon: {
                        required: false,
                        sizes: [75, 75]
                    },
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
                }
            },
            bids: [
                {
<<<<<<< HEAD
                    bidder: "example",
                    params: {
                        placement: '12345'
=======
                    bidder: "dianomi",
                    params: {
                        smartadId: 12345   // required, provided by Account Manager
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
                    }
                }
            ]
        },{
<<<<<<< HEAD
            code: 'test-div',
            mediaTypes: {
                banner: {
                    sizes: [[320, 50]],   // a mobile size
=======
            code: 'test-div-2',
            mediaTypes: {
                banner: {
                    sizes: [750, 650],   // a below-article size
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
                }
            },
            bids: [
                {
<<<<<<< HEAD
                    bidder: "example",
                    params: {
                        placement: 67890
=======
                    bidder: "dianomi",
                    params: {
                        smartadId: 23456,  // required provided by Account Manager
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
                    }
                }
            ]
        }
    ];
```