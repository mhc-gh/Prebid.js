// jshint esversion: 6, es3: false, node: true
'use strict';

<<<<<<< HEAD
import {
  registerBidder
} from '../src/adapters/bidderFactory.js';
import {
  NATIVE, BANNER, VIDEO
} from '../src/mediaTypes.js';
import { mergeDeep, _map, deepAccess, parseSizesInput, deepSetValue } from '../src/utils.js';
=======
import { registerBidder } from '../src/adapters/bidderFactory.js';
import { NATIVE, BANNER, VIDEO } from '../src/mediaTypes.js';
import {
  mergeDeep,
  _map,
  deepAccess,
  parseSizesInput,
  deepSetValue,
  formatQS,
} from '../src/utils.js';
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
import { config } from '../src/config.js';
import { Renderer } from '../src/Renderer.js';

const { getConfig } = config;

const BIDDER_CODE = 'dianomi';
const GVLID = 885;
<<<<<<< HEAD
const BIDDER_ALIAS = [
  { code: 'dia', gvlid: GVLID }
];
const NATIVE_ASSET_IDS = { 0: 'title', 2: 'icon', 3: 'image', 5: 'sponsoredBy', 4: 'body', 1: 'cta' };
const NATIVE_PARAMS = {
  title: {
    id: 0,
    name: 'title'
=======
const BIDDER_ALIAS = [{ code: 'dia', gvlid: GVLID }];
const NATIVE_ASSET_IDS = {
  0: 'title',
  2: 'icon',
  3: 'image',
  5: 'sponsoredBy',
  4: 'body',
  1: 'cta',
};
const NATIVE_PARAMS = {
  title: {
    id: 0,
    name: 'title',
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
  },
  icon: {
    id: 2,
    type: 1,
<<<<<<< HEAD
    name: 'img'
=======
    name: 'img',
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
  },
  image: {
    id: 3,
    type: 3,
<<<<<<< HEAD
    name: 'img'
=======
    name: 'img',
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
  },
  sponsoredBy: {
    id: 5,
    name: 'data',
<<<<<<< HEAD
    type: 1
=======
    type: 1,
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
  },
  body: {
    id: 4,
    name: 'data',
<<<<<<< HEAD
    type: 2
=======
    type: 2,
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
  },
  cta: {
    id: 1,
    type: 12,
<<<<<<< HEAD
    name: 'data'
  }
};
const OUTSTREAM_RENDERER_URL = 'https://s2.adform.net/banners/scripts/video/outstream/render.js';
=======
    name: 'data',
  },
};
let endpoint = 'www-prebid.dianomi.com';

const OUTSTREAM_RENDERER_URL = (hostname) => `https://${hostname}/prebid/outstream/renderer.js`;
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8

export const spec = {
  code: BIDDER_CODE,
  aliases: BIDDER_ALIAS,
  gvlid: GVLID,
<<<<<<< HEAD
  supportedMediaTypes: [ NATIVE, BANNER, VIDEO ],
  isBidRequestValid: (bid) => {
    const params = bid.params || {};
    const { smartadId } = params;
    return !!(smartadId);
=======
  supportedMediaTypes: [NATIVE, BANNER, VIDEO],
  isBidRequestValid: (bid) => {
    const params = bid.params || {};
    const { smartadId } = params;
    return !!smartadId;
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
  },
  buildRequests: (validBidRequests, bidderRequest) => {
    let app, site;

<<<<<<< HEAD
    const commonFpd = getConfig('ortb2') || {};
=======
    const commonFpd = bidderRequest.ortb2 || {};
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
    let { user } = commonFpd;

    if (typeof getConfig('app') === 'object') {
      app = getConfig('app') || {};
      if (commonFpd.app) {
        mergeDeep(app, commonFpd.app);
      }
    } else {
      site = getConfig('site') || {};
      if (commonFpd.site) {
        mergeDeep(site, commonFpd.site);
      }

      if (!site.page) {
<<<<<<< HEAD
        site.page = bidderRequest.refererInfo.referer;
=======
        site.page = bidderRequest.refererInfo.page;
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
      }
    }

    const device = getConfig('device') || {};
    device.w = device.w || window.innerWidth;
    device.h = device.h || window.innerHeight;
    device.ua = device.ua || navigator.userAgent;

<<<<<<< HEAD
    const endpoint = setOnAny(validBidRequests, 'params.endpoint') || 'dev-prebid.dianomi.net';

    const pt = setOnAny(validBidRequests, 'params.pt') || setOnAny(validBidRequests, 'params.priceType') || 'net';
    const tid = validBidRequests[0].transactionId;
    const test = setOnAny(validBidRequests, 'params.test');
    const currency = getConfig('currency.adServerCurrency');
    const cur = currency && [ currency ];
=======
    const paramsEndpoint = setOnAny(validBidRequests, 'params.endpoint');

    if (paramsEndpoint) {
      endpoint = paramsEndpoint;
    }

    const pt =
      setOnAny(validBidRequests, 'params.pt') ||
      setOnAny(validBidRequests, 'params.priceType') ||
      'net';
    const tid = validBidRequests[0].transactionId;
    const currency = getConfig('currency.adServerCurrency');
    const cur = currency && [currency];
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
    const eids = setOnAny(validBidRequests, 'userIdAsEids');
    const schain = setOnAny(validBidRequests, 'schain');

    const imp = validBidRequests.map((bid, id) => {
      bid.netRevenue = pt;

<<<<<<< HEAD
      const floorInfo = bid.getFloor ? bid.getFloor({
        currency: currency || 'USD'
      }) : {};
=======
      const floorInfo = bid.getFloor
        ? bid.getFloor({
          currency: currency || 'USD',
        })
        : {};
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
      const bidfloor = floorInfo.floor;
      const bidfloorcur = floorInfo.currency;
      const { smartadId } = bid.params;

      const imp = {
        id: id + 1,
        tagid: smartadId,
        bidfloor,
        bidfloorcur,
        ext: {
          bidder: {
<<<<<<< HEAD
          }
        }
=======
            smartadId: smartadId,
          },
        },
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
      };

      const assets = _map(bid.nativeParams, (bidParams, key) => {
        const props = NATIVE_PARAMS[key];
        const asset = {
          required: bidParams.required & 1,
        };
        if (props) {
          asset.id = props.id;
          let wmin, hmin, w, h;
          let aRatios = bidParams.aspect_ratios;

          if (aRatios && aRatios[0]) {
            aRatios = aRatios[0];
            wmin = aRatios.min_width || 0;
<<<<<<< HEAD
            hmin = aRatios.ratio_height * wmin / aRatios.ratio_width | 0;
=======
            hmin = ((aRatios.ratio_height * wmin) / aRatios.ratio_width) | 0;
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
          }

          if (bidParams.sizes) {
            const sizes = flatten(bidParams.sizes);
            w = sizes[0];
            h = sizes[1];
          }

          asset[props.name] = {
            len: bidParams.len,
            type: props.type,
            wmin,
            hmin,
            w,
<<<<<<< HEAD
            h
=======
            h,
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
          };

          return asset;
        }
      }).filter(Boolean);

      if (assets.length) {
        imp.native = {
<<<<<<< HEAD
          request: {
            assets
          }
=======
          assets,
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
        };
      }

      const bannerParams = deepAccess(bid, 'mediaTypes.banner');

      if (bannerParams && bannerParams.sizes) {
        const sizes = parseSizesInput(bannerParams.sizes);
<<<<<<< HEAD
        const format = sizes.map(size => {
          const [ width, height ] = size.split('x');
=======
        const format = sizes.map((size) => {
          const [width, height] = size.split('x');
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
          const w = parseInt(width, 10);
          const h = parseInt(height, 10);
          return { w, h };
        });

        imp.banner = {
<<<<<<< HEAD
          format
=======
          format,
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
        };
      }

      const videoParams = deepAccess(bid, 'mediaTypes.video');
      if (videoParams) {
        imp.video = videoParams;
      }

      return imp;
    });

    const request = {
      id: bidderRequest.auctionId,
      site,
      app,
      user,
      device,
      source: { tid, fd: 1 },
      ext: { pt },
      cur,
<<<<<<< HEAD
      imp
    };

    if (test) {
      request.is_debug = !!test;
      request.test = 1;
    }
=======
      imp,
    };

>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
    if (deepAccess(bidderRequest, 'gdprConsent.gdprApplies') !== undefined) {
      deepSetValue(request, 'user.ext.consent', bidderRequest.gdprConsent.consentString);
      deepSetValue(request, 'regs.ext.gdpr', bidderRequest.gdprConsent.gdprApplies & 1);
    }

    if (bidderRequest.uspConsent) {
      deepSetValue(request, 'regs.ext.us_privacy', bidderRequest.uspConsent);
    }

    if (eids) {
      deepSetValue(request, 'user.ext.eids', eids);
    }

    if (schain) {
      deepSetValue(request, 'source.ext.schain', schain);
    }

    return {
      method: 'POST',
      url: 'https://' + endpoint + '/cgi-bin/smartads_prebid.pl',
      data: JSON.stringify(request),
<<<<<<< HEAD
 //     options: {
 //       contentType: 'application/json'
 //     },
      bids: validBidRequests
    };
  },
  interpretResponse: function(serverResponse, { bids }) {
    if (!serverResponse.body) {
=======
      bids: validBidRequests,
    };
  },
  interpretResponse: function (serverResponse, { bids }) {
    if (!serverResponse.body || serverResponse?.body?.nbr) {
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
      return;
    }
    const { seatbid, cur } = serverResponse.body;

<<<<<<< HEAD
    const bidResponses = flatten(seatbid.map(seat => seat.bid)).reduce((result, bid) => {
=======
    const bidResponses = flatten(seatbid.map((seat) => seat.bid)).reduce((result, bid) => {
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
      result[bid.impid - 1] = bid;
      return result;
    }, []);

<<<<<<< HEAD
    return bids.map((bid, id) => {
      const bidResponse = bidResponses[id];
      if (bidResponse) {
        const mediaType = deepAccess(bidResponse, 'ext.prebid.type');
        const result = {
          requestId: bid.bidId,
          cpm: bidResponse.price,
          creativeId: bidResponse.crid,
          ttl: 360,
          netRevenue: bid.netRevenue === 'net',
          currency: cur,
          mediaType,
          width: bidResponse.w,
          height: bidResponse.h,
          dealId: bidResponse.dealid,
          meta: {
            mediaType,
            advertiserDomains: bidResponse.adomain
          }
        };

        if (bidResponse.native) {
          result.native = parseNative(bidResponse);
        } else {
          result[ mediaType === VIDEO ? 'vastXml' : 'ad' ] = bidResponse.adm;
        }

        if (!bid.renderer && mediaType === VIDEO && deepAccess(bid, 'mediaTypes.video.context') === 'outstream') {
          result.renderer = Renderer.install({id: bid.bidId, url: OUTSTREAM_RENDERER_URL, adUnitCode: bid.adUnitCode});
          result.renderer.setRender(renderer);
        }

        return result;
      }
    }).filter(Boolean);
  }
=======
    return bids
      .map((bid, id) => {
        const bidResponse = bidResponses[id];
        if (bidResponse) {
          const mediaType = deepAccess(bidResponse, 'ext.prebid.type');
          const result = {
            requestId: bid.bidId,
            cpm: bidResponse.price,
            creativeId: bidResponse.crid,
            ttl: 360,
            netRevenue: bid.netRevenue === 'net',
            currency: cur,
            mediaType,
            width: bidResponse.w,
            height: bidResponse.h,
            dealId: bidResponse.dealid,
            meta: {
              mediaType,
              advertiserDomains: bidResponse.adomain,
            },
          };

          if (bidResponse.native) {
            result.native = parseNative(bidResponse);
          } else {
            result[mediaType === VIDEO ? 'vastXml' : 'ad'] = bidResponse.adm;
          }

          if (
            !bid.renderer &&
            mediaType === VIDEO &&
            deepAccess(bid, 'mediaTypes.video.context') === 'outstream'
          ) {
            result.renderer = Renderer.install({
              id: bid.bidId,
              url: OUTSTREAM_RENDERER_URL(endpoint),
              adUnitCode: bid.adUnitCode,
            });
            result.renderer.setRender(renderer);
          }

          return result;
        }
      })
      .filter(Boolean);
  },
  getUserSyncs: (syncOptions, responses, gdprConsent, uspConsent) => {
    if (syncOptions.iframeEnabled) {
      // data is only assigned if params are available to pass to syncEndpoint
      const params = {};

      if (gdprConsent) {
        if (typeof gdprConsent.gdprApplies === 'boolean') {
          params['gdpr'] = Number(gdprConsent.gdprApplies);
        }
        if (typeof gdprConsent.consentString === 'string') {
          params['gdpr_consent'] = gdprConsent.consentString;
        }
      }

      if (uspConsent) {
        params['us_privacy'] = encodeURIComponent(uspConsent);
      }

      return {
        type: 'iframe',
        url: `https://${endpoint}/prebid/usersync/index.html?${formatQS(params)}`,
      };
    }
  },
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
};

registerBidder(spec);

function parseNative(bid) {
  const { assets, link, imptrackers, jstracker } = bid.native;
  const result = {
    clickUrl: link.url,
    clickTrackers: link.clicktrackers || undefined,
    impressionTrackers: imptrackers || undefined,
<<<<<<< HEAD
    javascriptTrackers: jstracker ? [ jstracker ] : undefined
  };
  assets.forEach(asset => {
    const kind = NATIVE_ASSET_IDS[asset.id];
    const content = kind && asset[NATIVE_PARAMS[kind].name];
    if (content) {
      result[kind] = content.text || content.value || { url: content.url, width: content.w, height: content.h };
=======
    javascriptTrackers: jstracker ? [jstracker] : undefined,
  };
  assets.forEach((asset) => {
    const kind = NATIVE_ASSET_IDS[asset.id];
    const content = kind && asset[NATIVE_PARAMS[kind].name];
    if (content) {
      result[kind] = content.text ||
        content.value || {
        url: content.url,
        width: content.w,
        height: content.h,
      };
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
    }
  });

  return result;
}

function setOnAny(collection, key) {
  for (let i = 0, result; i < collection.length; i++) {
    result = deepAccess(collection[i], key);
    if (result) {
      return result;
    }
  }
}

function flatten(arr) {
  return [].concat(...arr);
}

function renderer(bid) {
  bid.renderer.push(() => {
<<<<<<< HEAD
    window.Adform.renderOutstream(bid);
=======
    window.Dianomi.renderOutstream(bid);
>>>>>>> be0e69bd968e55f96bde6f7467b12d56b7d529a8
  });
}
