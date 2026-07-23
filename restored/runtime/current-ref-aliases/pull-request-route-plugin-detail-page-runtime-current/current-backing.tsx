// Restored from ref/webview/assets/app-initial~avatarOverlayCompositionSurface~app-main~pull-request-route~plugin-detail-page~~hj7snlk9-AhvxeLxv.js
// Flat generated current-build implementation used by the positional adapter.
import { createLazyEsmInitializer } from "../rolldown-runtime";
import {
  currentReactAliasLowerdLowern,
  currentReactAliasLowerzLowert,
} from "../app-initial-react-runtime";
import {
  currentQueryRpcAliasUpperBLowera,
  currentQueryRpcAliasUpperCLowern,
  currentQueryRpcAliasUpperHLowera,
  currentQueryRpcAliasUpperILowera,
  currentQueryRpcAliasUpperLLowera,
  currentQueryRpcAliasDollarLowern,
  currentQueryRpcAliasUpperRLowera,
  currentQueryRpcAliasUpperULowera,
  currentQueryRpcAliasUpperVLowera,
  currentQueryRpcAliasLowerw,
  currentQueryRpcAliasLowerwLowern,
  currentQueryRpcAliasLowerzLowera,
} from "../app-initial-query-rpc-runtime";
import {
  extendClassPrototype,
  initTslibObjectHelpers,
  appendArraySlice,
  assignObjectProperties,
} from "../../package-adapters/react-intl-current/entry";
import {
  pluginDetailRuntimeMember0013,
  pluginDetailRuntimeMember0033,
} from "../plugin-detail-runtime-current";
import {
  businessCheckoutSharedMember0514,
  businessCheckoutSharedMember0531,
  businessCheckoutSharedMember0600,
  businessCheckoutSharedMember0736,
  businessCheckoutSharedMember0769,
  businessCheckoutSharedMember0786,
  businessCheckoutSharedMember0820,
  businessCheckoutSharedInitializer0837,
} from "../business-checkout-shared-current";
import {
  settingsCommandSharedRuntimeVariant18PullMember0013,
  settingsCommandSharedRuntimeVariant18PullMember0024,
  settingsCommandSharedRuntimeVariant18PullMember0028,
  settingsCommandSharedRuntimeVariant18PullMember0031,
} from "../settings-command-shared-runtime-variant-18-pull-current";
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value1,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9B,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value2,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value4 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value2 =
        ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param239,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param240,
          ) {
            if (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param240 ===
              0
            )
              throw Error("Can't create weekday with n == 0");
            this.weekday =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param239;
            this.n =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param240;
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111.fromStr =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param343,
              ) {
                return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value2.indexOf(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param343,
                  ),
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111.prototype.nth =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param293,
              ) {
                return this.n ===
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param293
                  ? this
                  : new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111(
                      this.weekday,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param293,
                    );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111.prototype.equals =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param294,
              ) {
                return (
                  this.weekday ===
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param294.weekday &&
                  this.n ===
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param294.n
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111.prototype.toString =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value483 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value2[
                    this.weekday
                  ];
                return (
                  this.n &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value483 =
                      (this.n > 0 ? "+" : "") +
                      String(this.n) +
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value483),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value483
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111.prototype.getJsWeekday =
              function () {
                return this.weekday === 6 ? 0 : this.weekday + 1;
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper111
          );
        })();
    });
export const appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9X =
  createLazyEsmInitializer(() => {
    currentReactAliasLowerdLowern();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value1 =
      currentReactAliasLowerzLowert();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9B =
      (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param29,
      ) => (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param29}
        >
          <path
            d="M8 4.2168C8.24838 4.21697 8.44922 4.41857 8.44922 4.66699V7.8623C8.44911 8.06977 8.36732 8.26924 8.2207 8.41602L6.65137 9.98535C6.4756 10.1607 6.19025 10.161 6.01465 9.98535C5.83909 9.80975 5.83934 9.52439 6.01465 9.34863L7.5498 7.81348V4.66699C7.5498 4.41862 7.75168 4.21704 8 4.2168Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1.5498C11.5622 1.5498 14.4502 4.43776 14.4502 8C14.4502 11.5622 11.5622 14.4502 8 14.4502C4.43776 14.4502 1.5498 11.5622 1.5498 8C1.5498 4.43776 4.43776 1.5498 8 1.5498ZM8 2.4502C4.93482 2.4502 2.4502 4.93482 2.4502 8C2.4502 11.0652 4.93482 13.5498 8 13.5498C11.0652 13.5498 13.5498 11.0652 13.5498 8C13.5498 4.93482 11.0652 2.4502 8 2.4502Z"
            fill="currentColor"
          />
        </svg>
      );
  });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper1(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param162,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param163,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param164,
) {
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param164 ===
    undefined &&
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param164 =
      " ");
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value458 =
    String(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param162,
    );
  return (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param163 >>= 0),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value458.length >
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param163
      ? String(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value458,
        )
      : ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param163 -=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value458.length),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param163 >
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param164.length &&
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param164 +=
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param164,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param163 /
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param164.length,
            )),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param164.slice(
          0,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param163,
        ) +
          String(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value458,
          ))
  );
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6,
  _e,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value10,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value11,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12,
  be,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value4();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param381,
        ) {
          return (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param381 !=
            null
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param359,
        ) {
          return (
            typeof appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param359 ==
            "number"
          );
        };
      _e = function (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param313,
      ) {
        return (
          typeof appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param313 ==
            "string" &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value2.includes(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param313,
          )
        );
      };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7 =
        Array.isArray;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param199,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param200,
        ) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param200 ===
            undefined &&
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param200 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param199);
          arguments.length === 1 &&
            ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param200 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param199),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param199 = 0));
          for (
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value489 =
                [],
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value490 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param199;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value490 <
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param200;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value490++
          )
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value489.push(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value490,
            );
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value489;
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param197,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param198,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value487 = 0,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value488 =
              [];
          if (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param197,
            )
          )
            for (
              ;
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value487 <
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param198;
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value487++
            )
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value488[
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value487
              ] = [].concat(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param197,
              );
          else
            for (
              ;
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value487 <
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param198;
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value487++
            )
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value488[
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value487
              ] =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param197;
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value488;
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value10 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param376,
        ) {
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param376,
          )
            ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param376
            : [
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param376,
              ];
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value11 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param256,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param257,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param258,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value518 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param256.split(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param257,
            );
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param258
            ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value518
                .slice(
                  0,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param258,
                )
                .concat([
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value518
                    .slice(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param258,
                    )
                    .join(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param257,
                    ),
                ])
            : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value518;
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param300,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param301,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value533 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param300 %
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param301;
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value533 *
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param301 <
            0
            ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value533 +
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param301
            : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value533;
        };
      be = function (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param308,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param309,
      ) {
        return {
          div: Math.floor(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param308 /
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param309,
          ),
          mod: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param308,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param309,
          ),
        };
      };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param352,
        ) {
          return (
            !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param352,
            ) ||
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param352.length ===
              0
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param384,
        ) {
          return !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param384,
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param339,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param340,
        ) {
          return (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param339,
            ) &&
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param339.indexOf(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param340,
            ) !== -1
          );
        };
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value18,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value19,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value20,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value21,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value22,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value23,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value24,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value25,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value26,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value27,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value28,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value29,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value30,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value31,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value32,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value33,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value34,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value35,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value36,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value37,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value38,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param174,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param175,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param176,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param177,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param178,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param179,
        ) {
          return (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param177 ===
              undefined &&
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param177 = 0),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param178 ===
              undefined &&
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param178 = 0),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param179 ===
              undefined &&
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param179 = 0),
            new Date(
              Date.UTC(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param174,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param175 -
                  1,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param176,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param177,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param178,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param179,
              ),
            )
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value18 =
        [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value19 = 86400000;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value20 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17(
          1970,
          1,
          1,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value21 =
        [6, 0, 1, 2, 3, 4, 5];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value22 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param304,
        ) {
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param304 %
              4 ==
              0 &&
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param304 %
                100 !=
                0) ||
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param304 %
              400 ==
              0
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value23 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param371,
        ) {
          return (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param371 instanceof
            Date
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value24 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param344,
        ) {
          return (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value23(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param344,
            ) &&
            !isNaN(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param344.getTime(),
            )
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value25 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param272,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param273,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value528 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param272.getTime() -
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param273.getTime();
          return Math.round(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value528 /
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value19,
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value26 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param382,
        ) {
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value25(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param382,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value20,
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value27 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param334,
        ) {
          return new Date(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value20.getTime() +
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param334 *
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value19,
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value28 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param260,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value519 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param260.getUTCMonth();
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value519 ===
            1 &&
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value22(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param260.getUTCFullYear(),
            )
            ? 29
            : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value18[
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value519
              ];
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value29 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param372,
        ) {
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value21[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param372.getUTCDay()
          ];
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value30 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param297,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param298,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value532 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param297,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param298 +
                1,
              1,
            );
          return [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value29(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value532,
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value28(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value532,
            ),
          ];
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value31 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param117,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param118,
        ) {
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param118 ||=
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param117),
            new Date(
              Date.UTC(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param117.getUTCFullYear(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param117.getUTCMonth(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param117.getUTCDate(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param118.getHours(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param118.getMinutes(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param118.getSeconds(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param118.getMilliseconds(),
              ),
            )
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value32 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param358,
        ) {
          return new Date(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param358.getTime(),
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value33 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param270,
        ) {
          for (
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value523 =
                [],
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value524 = 0;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value524 <
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param270.length;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value524++
          )
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value523.push(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value32(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param270[
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value524
                ],
              ),
            );
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value523;
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value34 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param264,
        ) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param264.sort(
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param328,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param329,
            ) {
              return (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param328.getTime() -
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param329.getTime()
              );
            },
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value35 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param98,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param99,
        ) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param99 ===
            undefined &&
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param99 = true);
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value381 =
            new Date(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param98,
            );
          return [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper1(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value381
                .getUTCFullYear()
                .toString(),
              4,
              "0",
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper1(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value381.getUTCMonth() +
                1,
              2,
              "0",
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper1(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value381.getUTCDate(),
              2,
              "0",
            ),
            "T",
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper1(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value381.getUTCHours(),
              2,
              "0",
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper1(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value381.getUTCMinutes(),
              2,
              "0",
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper1(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value381.getUTCSeconds(),
              2,
              "0",
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param99
              ? "Z"
              : "",
          ].join("");
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value36 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param96,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value378 =
            /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param96,
            );
          if (
            !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value378
          )
            throw Error(
              `Invalid UNTIL value: ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param96}`,
            );
          return new Date(
            Date.UTC(
              parseInt(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value378[1],
                10,
              ),
              parseInt(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value378[2],
                10,
              ) - 1,
              parseInt(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value378[3],
                10,
              ),
              parseInt(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value378[5],
                10,
              ) || 0,
              parseInt(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value378[6],
                10,
              ) || 0,
              parseInt(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value378[7],
                10,
              ) || 0,
            ),
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value37 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param254,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param255,
        ) {
          return (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param254
              .toLocaleString("sv-SE", {
                timeZone:
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param255,
              })
              .replace(" ", "T") + "Z"
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value38 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param168,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param169,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value465 =
              Intl.DateTimeFormat().resolvedOptions().timeZone,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value466 =
              new Date(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value37(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param168,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value465,
                ),
              ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value467 =
              new Date(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value37(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param168,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param169 ??
                    "UTC",
                ),
              ).getTime() -
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value466.getTime();
          return new Date(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param168.getTime() -
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value467,
          );
        };
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value40,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value41 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value40 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper107(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param51,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52,
          ) {
            this.minDate = null;
            this.maxDate = null;
            this._result = [];
            this.total = 0;
            this.method =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param51;
            this.args =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param51 ===
            "between"
              ? ((this.maxDate =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.inc
                    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.before
                    : new Date(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.before.getTime() -
                          1,
                      )),
                (this.minDate =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.inc
                    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.after
                    : new Date(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.after.getTime() +
                          1,
                      )))
              : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param51 ===
                  "before"
                ? (this.maxDate =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.inc
                      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.dt
                      : new Date(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.dt.getTime() -
                            1,
                        ))
                : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param51 ===
                    "after" &&
                  (this.minDate =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.inc
                      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.dt
                      : new Date(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param52.dt.getTime() +
                            1,
                        ));
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper107.prototype.accept =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param95,
              ) {
                ++this.total;
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value376 =
                    this.minDate &&
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param95 <
                      this.minDate,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value377 =
                    this.maxDate &&
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param95 >
                      this.maxDate;
                if (this.method === "between") {
                  if (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value376
                  )
                    return true;
                  if (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value377
                  )
                    return false;
                } else if (this.method === "before") {
                  if (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value377
                  )
                    return false;
                } else if (this.method === "after")
                  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value376
                    ? true
                    : (this.add(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param95,
                      ),
                      false);
                return this.add(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param95,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper107.prototype.add =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param341,
              ) {
                return (
                  this._result.push(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param341,
                  ),
                  true
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper107.prototype.getValue =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value457 =
                  this._result;
                switch (this.method) {
                  case "all":
                  case "between":
                    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value457;
                  default:
                    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value457.length
                      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value457[
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value457.length -
                            1
                        ]
                      : null;
                }
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper107.prototype.clone =
              function () {
                return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper107(
                  this.method,
                  this.args,
                );
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper107
          );
        })();
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value42,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value43 =
    createLazyEsmInitializer(() => {
      initTslibObjectHelpers();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value41();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value42 =
        (function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param109,
        ) {
          extendClassPrototype(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper113,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param109,
          );
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper113(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param261,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param262,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param263,
          ) {
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value520 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param109.call(
                this,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param261,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param262,
              ) || this;
            return (
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value520.iterator =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param263),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value520
            );
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper113.prototype.add =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param241,
              ) {
                return this.iterator(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param241,
                  this._result.length,
                )
                  ? (this._result.push(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param241,
                    ),
                    true)
                  : false;
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper113
          );
        })(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value40,
        );
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value44,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value45 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value44 =
        {
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          tokens: {
            SKIP: /^[ \r\n\t]+|^\.$/,
            number: /^[1-9][0-9]*/,
            numberAsText: /^(one|two|three)/i,
            every: /^every/i,
            "day(s)": /^days?/i,
            "weekday(s)": /^weekdays?/i,
            "week(s)": /^weeks?/i,
            "hour(s)": /^hours?/i,
            "minute(s)": /^minutes?/i,
            "month(s)": /^months?/i,
            "year(s)": /^years?/i,
            on: /^(on|in)/i,
            at: /^(at)/i,
            the: /^the/i,
            first: /^first/i,
            second: /^second/i,
            third: /^third/i,
            nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
            last: /^last/i,
            for: /^for/i,
            "time(s)": /^times?/i,
            until: /^(un)?til/i,
            monday: /^mo(n(day)?)?/i,
            tuesday: /^tu(e(s(day)?)?)?/i,
            wednesday: /^we(d(n(esday)?)?)?/i,
            thursday: /^th(u(r(sday)?)?)?/i,
            friday: /^fr(i(day)?)?/i,
            saturday: /^sa(t(urday)?)?/i,
            sunday: /^su(n(day)?)?/i,
            january: /^jan(uary)?/i,
            february: /^feb(ruary)?/i,
            march: /^mar(ch)?/i,
            april: /^apr(il)?/i,
            may: /^may/i,
            june: /^june?/i,
            july: /^july?/i,
            august: /^aug(ust)?/i,
            september: /^sep(t(ember)?)?/i,
            october: /^oct(ober)?/i,
            november: /^nov(ember)?/i,
            december: /^dec(ember)?/i,
            comma: /^(,\s*|(and|or)\s*)+/i,
          },
        };
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value46,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value47,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value48,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value50 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value45();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value46 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param356,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param357,
        ) {
          return (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param356.indexOf(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param357,
            ) !== -1
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value47 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param379,
        ) {
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param379.toString();
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value48 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param353,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param354,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param355,
        ) {
          return `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param354} ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param355}, ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param353}`;
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param8,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param9,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param10,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param11,
          ) {
            if (
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param9 ===
                undefined &&
                (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param9 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value47),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param10 ===
                undefined &&
                (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param10 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value44),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param11 ===
                undefined &&
                (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param11 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value48),
              (this.text = []),
              (this.language =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param10 ||
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value44),
              (this.gettext =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param9),
              (this.dateFormatter =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param11),
              (this.rrule =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param8),
              (this.options =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param8.options),
              (this.origOptions =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param8.origOptions),
              this.origOptions.bymonthday)
            ) {
              var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value138 =
                  [].concat(this.options.bymonthday),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value139 =
                  [].concat(this.options.bynmonthday);
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value138.sort(
                function (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param360,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param361,
                ) {
                  return (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param360 -
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param361
                  );
                },
              );
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value139.sort(
                function (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param347,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param348,
                ) {
                  return (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param348 -
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param347
                  );
                },
              );
              this.bymonthday =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value138.concat(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value139,
                );
              this.bymonthday.length || (this.bymonthday = null);
            }
            if (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
                this.origOptions.byweekday,
              )
            ) {
              var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value140 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
                    this.origOptions.byweekday,
                  )
                    ? this.origOptions.byweekday
                    : [this.origOptions.byweekday],
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141 =
                  String(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value140,
                  );
              this.byweekday = {
                allWeeks:
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value140.filter(
                    function (item) {
                      return !item.n;
                    },
                  ),
                someWeeks:
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value140.filter(
                    function (item) {
                      return !!item.n;
                    },
                  ),
                isWeekdays:
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "MO",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "TU",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "WE",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "TH",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "FR",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "SA",
                  ) === -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "SU",
                  ) === -1,
                isEveryDay:
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "MO",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "TU",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "WE",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "TH",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "FR",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "SA",
                  ) !== -1 &&
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value141.indexOf(
                    "SU",
                  ) !== -1,
              };
              var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value142 =
                function (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param322,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param323,
                ) {
                  return (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param322.weekday -
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param323.weekday
                  );
                };
              this.byweekday.allWeeks.sort(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value142,
              );
              this.byweekday.someWeeks.sort(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value142,
              );
              this.byweekday.allWeeks.length ||
                (this.byweekday.allWeeks = null);
              this.byweekday.someWeeks.length ||
                (this.byweekday.someWeeks = null);
            } else this.byweekday = null;
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.isFullyConvertible =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param97,
              ) {
                if (
                  !(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param97
                      .options.freq in
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.IMPLEMENTED
                  ) ||
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param97
                    .origOptions.until &&
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param97
                      .origOptions.count)
                )
                  return false;
                for (var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value380 in appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param97.origOptions) {
                  if (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value46(
                      ["dtstart", "tzid", "wkst", "freq"],
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value380,
                    )
                  )
                    return true;
                  if (
                    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value46(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93
                        .IMPLEMENTED[
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param97
                          .options.freq
                      ],
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value380,
                    )
                  )
                    return false;
                }
                return true;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.isFullyConvertible =
              function () {
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.isFullyConvertible(
                  this.rrule,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.toString =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value240 =
                  this.gettext;
                if (
                  !(
                    this.options.freq in
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.IMPLEMENTED
                  )
                )
                  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value240(
                    "RRule error: Unable to fully convert this rrule to text",
                  );
                if (
                  ((this.text = [
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value240(
                      "every",
                    ),
                  ]),
                  this[
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96
                      .FREQUENCIES[this.options.freq]
                  ](),
                  this.options.until)
                ) {
                  this.add(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value240(
                      "until",
                    ),
                  );
                  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value241 =
                    this.options.until;
                  this.add(
                    this.dateFormatter(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value241.getUTCFullYear(),
                      this.language.monthNames[
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value241.getUTCMonth()
                      ],
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value241.getUTCDate(),
                    ),
                  );
                } else
                  this.options.count &&
                    this.add(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value240(
                        "for",
                      ),
                    )
                      .add(this.options.count.toString())
                      .add(
                        this.plural(this.options.count)
                          ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value240(
                              "times",
                            )
                          : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value240(
                              "time",
                            ),
                      );
                return (
                  this.isFullyConvertible() ||
                    this.add(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value240(
                        "(~ approximate)",
                      ),
                    ),
                  this.text.join("")
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.HOURLY =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value428 =
                  this.gettext;
                this.options.interval !== 1 &&
                  this.add(this.options.interval.toString());
                this.add(
                  this.plural(this.options.interval)
                    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value428(
                        "hours",
                      )
                    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value428(
                        "hour",
                      ),
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.MINUTELY =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value426 =
                  this.gettext;
                this.options.interval !== 1 &&
                  this.add(this.options.interval.toString());
                this.add(
                  this.plural(this.options.interval)
                    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value426(
                        "minutes",
                      )
                    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value426(
                        "minute",
                      ),
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.DAILY =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value285 =
                  this.gettext;
                this.options.interval !== 1 &&
                  this.add(this.options.interval.toString());
                this.byweekday && this.byweekday.isWeekdays
                  ? this.add(
                      this.plural(this.options.interval)
                        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value285(
                            "weekdays",
                          )
                        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value285(
                            "weekday",
                          ),
                    )
                  : this.add(
                      this.plural(this.options.interval)
                        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value285(
                            "days",
                          )
                        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value285(
                            "day",
                          ),
                    );
                this.origOptions.bymonth &&
                  (this.add(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value285(
                      "in",
                    ),
                  ),
                  this._bymonth());
                this.bymonthday
                  ? this._bymonthday()
                  : this.byweekday
                    ? this._byweekday()
                    : this.origOptions.byhour && this._byhour();
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.WEEKLY =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220 =
                  this.gettext;
                this.options.interval !== 1 &&
                  this.add(this.options.interval.toString()).add(
                    this.plural(this.options.interval)
                      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                          "weeks",
                        )
                      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                          "week",
                        ),
                  );
                this.byweekday && this.byweekday.isWeekdays
                  ? this.options.interval === 1
                    ? this.add(
                        this.plural(this.options.interval)
                          ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                              "weekdays",
                            )
                          : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                              "weekday",
                            ),
                      )
                    : this.add(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                          "on",
                        ),
                      ).add(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                          "weekdays",
                        ),
                      )
                  : this.byweekday && this.byweekday.isEveryDay
                    ? this.add(
                        this.plural(this.options.interval)
                          ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                              "days",
                            )
                          : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                              "day",
                            ),
                      )
                    : (this.options.interval === 1 &&
                        this.add(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                            "week",
                          ),
                        ),
                      this.origOptions.bymonth &&
                        (this.add(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value220(
                            "in",
                          ),
                        ),
                        this._bymonth()),
                      this.bymonthday
                        ? this._bymonthday()
                        : this.byweekday && this._byweekday(),
                      this.origOptions.byhour && this._byhour());
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.MONTHLY =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value284 =
                  this.gettext;
                this.origOptions.bymonth
                  ? (this.options.interval !== 1 &&
                      (this.add(this.options.interval.toString()).add(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value284(
                          "months",
                        ),
                      ),
                      this.plural(this.options.interval) &&
                        this.add(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value284(
                            "in",
                          ),
                        )),
                    this._bymonth())
                  : (this.options.interval !== 1 &&
                      this.add(this.options.interval.toString()),
                    this.add(
                      this.plural(this.options.interval)
                        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value284(
                            "months",
                          )
                        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value284(
                            "month",
                          ),
                    ));
                this.bymonthday
                  ? this._bymonthday()
                  : this.byweekday && this.byweekday.isWeekdays
                    ? this.add(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value284(
                          "on",
                        ),
                      ).add(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value284(
                          "weekdays",
                        ),
                      )
                    : this.byweekday && this._byweekday();
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.YEARLY =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239 =
                  this.gettext;
                this.origOptions.bymonth
                  ? (this.options.interval !== 1 &&
                      (this.add(this.options.interval.toString()),
                      this.add(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                          "years",
                        ),
                      )),
                    this._bymonth())
                  : (this.options.interval !== 1 &&
                      this.add(this.options.interval.toString()),
                    this.add(
                      this.plural(this.options.interval)
                        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                            "years",
                          )
                        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                            "year",
                          ),
                    ));
                this.bymonthday
                  ? this._bymonthday()
                  : this.byweekday && this._byweekday();
                this.options.byyearday &&
                  this.add(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                      "on the",
                    ),
                  )
                    .add(
                      this.list(
                        this.options.byyearday,
                        this.nth,
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                          "and",
                        ),
                      ),
                    )
                    .add(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                        "day",
                      ),
                    );
                this.options.byweekno &&
                  this.add(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                      "in",
                    ),
                  )
                    .add(
                      this.plural(this.options.byweekno.length)
                        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                            "weeks",
                          )
                        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                            "week",
                          ),
                    )
                    .add(
                      this.list(
                        this.options.byweekno,
                        undefined,
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value239(
                          "and",
                        ),
                      ),
                    );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype._bymonthday =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value334 =
                  this.gettext;
                this.byweekday && this.byweekday.allWeeks
                  ? this.add(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value334(
                        "on",
                      ),
                    )
                      .add(
                        this.list(
                          this.byweekday.allWeeks,
                          this.weekdaytext,
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value334(
                            "or",
                          ),
                        ),
                      )
                      .add(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value334(
                          "the",
                        ),
                      )
                      .add(
                        this.list(
                          this.bymonthday,
                          this.nth,
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value334(
                            "or",
                          ),
                        ),
                      )
                  : this.add(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value334(
                        "on the",
                      ),
                    ).add(
                      this.list(
                        this.bymonthday,
                        this.nth,
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value334(
                          "and",
                        ),
                      ),
                    );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype._byweekday =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value333 =
                  this.gettext;
                this.byweekday.allWeeks &&
                  !this.byweekday.isWeekdays &&
                  this.add(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value333(
                      "on",
                    ),
                  ).add(this.list(this.byweekday.allWeeks, this.weekdaytext));
                this.byweekday.someWeeks &&
                  (this.byweekday.allWeeks &&
                    this.add(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value333(
                        "and",
                      ),
                    ),
                  this.add(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value333(
                      "on the",
                    ),
                  ).add(
                    this.list(
                      this.byweekday.someWeeks,
                      this.weekdaytext,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value333(
                        "and",
                      ),
                    ),
                  ));
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype._byhour =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value495 =
                  this.gettext;
                this.add(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value495(
                    "at",
                  ),
                ).add(
                  this.list(
                    this.origOptions.byhour,
                    undefined,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value495(
                      "and",
                    ),
                  ),
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype._bymonth =
              function () {
                this.add(
                  this.list(
                    this.options.bymonth,
                    this.monthtext,
                    this.gettext("and"),
                  ),
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.nth =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param53,
              ) {
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param53 =
                  parseInt(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param53.toString(),
                    10,
                  );
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value304,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value305 =
                    this.gettext;
                if (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param53 ===
                  -1
                )
                  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value305(
                    "last",
                  );
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value306 =
                  Math.abs(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param53,
                  );
                switch (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value306
                ) {
                  case 1:
                  case 21:
                  case 31:
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value304 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value306 +
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value305(
                        "st",
                      );
                    break;
                  case 2:
                  case 22:
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value304 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value306 +
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value305(
                        "nd",
                      );
                    break;
                  case 3:
                  case 23:
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value304 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value306 +
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value305(
                        "rd",
                      );
                    break;
                  default:
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value304 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value306 +
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value305(
                        "th",
                      );
                }
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param53 <
                  0
                  ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value304 +
                      " " +
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value305(
                        "last",
                      )
                  : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value304;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.monthtext =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param312,
              ) {
                return this.language.monthNames[
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param312 -
                    1
                ];
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.weekdaytext =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param214,
              ) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value499 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param214,
                  )
                    ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param214 +
                        1) %
                      7
                    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param214.getJsWeekday();
                return (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param214.n
                    ? this.nth(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param214.n,
                      ) + " "
                    : "") +
                  this.language.dayNames[
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value499
                  ]
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.plural =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param362,
              ) {
                return (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param362 %
                    100 !=
                  1
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.add =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param287,
              ) {
                return (
                  this.text.push(" "),
                  this.text.push(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param287,
                  ),
                  this
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93.prototype.list =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param57,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param58,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param59,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param60,
              ) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value315 =
                  this;
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param60 ===
                  undefined &&
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param60 =
                    ",");
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param57,
                ) ||
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param57 =
                    [
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param57,
                    ]);
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value316 =
                  function (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param159,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param160,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param161,
                  ) {
                    for (
                      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value455 =
                          "",
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value456 = 0;
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value456 <
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param159.length;
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value456++
                    ) {
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value456 !==
                        0 &&
                        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value456 ===
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param159.length -
                          1
                          ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value455 +=
                              " " +
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param161 +
                              " ")
                          : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value455 +=
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param160 +
                              " "));
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value455 +=
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param159[
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value456
                        ];
                    }
                    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value455;
                  };
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param58 ||=
                  function (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param349,
                  ) {
                    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param349.toString();
                  };
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value317 =
                  function (
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param342,
                  ) {
                    return (
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param58 &&
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param58.call(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value315,
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param342,
                      )
                    );
                  };
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param59
                  ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value316(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param57.map(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value317,
                      ),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param60,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param59,
                    )
                  : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param57
                      .map(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value317,
                      )
                      .join(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param60 +
                          " ",
                      );
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper93
          );
        })();
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper2(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param1,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param2,
) {
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param2 ===
    undefined &&
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param2 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value44);
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128 =
      {},
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129 =
      new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value51(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param2.tokens,
      );
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.start(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param1,
    )
  )
    return null;
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper94(),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128
  );
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper94() {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.expect(
      "every",
    );
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value143 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.acceptNumber();
    if (
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value143 &&
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.interval =
          parseInt(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value143[0],
            10,
          )),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.isDone())
    )
      throw Error("Unexpected end");
    switch (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol
    ) {
      case "day(s)":
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.DAILY;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol() &&
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper96(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101());
        break;
      case "weekday(s)":
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekday =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MO,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.TU,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WE,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.TH,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.FR,
          ];
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper96();
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101();
        break;
      case "week(s)":
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol() &&
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper95(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper96(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101());
        break;
      case "hour(s)":
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol() &&
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper95(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101());
        break;
      case "minute(s)":
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MINUTELY;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol() &&
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper95(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101());
        break;
      case "month(s)":
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MONTHLY;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol() &&
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper95(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101());
        break;
      case "year(s)":
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.YEARLY;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol() &&
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper95(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101());
        break;
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        if (
          ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekday =
            [
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96[
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol
                  .substr(0, 2)
                  .toUpperCase()
              ],
            ]),
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol())
        )
          return;
        for (
          ;
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
            "comma",
          );
        ) {
          if (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.isDone()
          )
            throw Error("Unexpected end");
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value144 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper98();
          if (
            !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value144
          )
            throw Error(
              "Unexpected symbol " +
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol +
                ", expected weekday",
            );
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekday.push(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value144
            ],
          );
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
        }
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper96();
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper100();
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101();
        break;
      case "january":
      case "february":
      case "march":
      case "april":
      case "may":
      case "june":
      case "july":
      case "august":
      case "september":
      case "october":
      case "november":
      case "december":
        if (
          ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.freq =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.YEARLY),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.bymonth =
            [
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper97(),
            ]),
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol())
        )
          return;
        for (
          ;
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
            "comma",
          );
        ) {
          if (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.isDone()
          )
            throw Error("Unexpected end");
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value145 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper97();
          if (
            !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value145
          )
            throw Error(
              "Unexpected symbol " +
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol +
                ", expected month",
            );
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.bymonth.push(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value145,
          );
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
        }
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper95();
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101();
        break;
      default:
        throw Error("Unknown symbol");
    }
  }
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper95() {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value189 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
          "on",
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value190 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
          "the",
        );
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value189 ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value190
    )
      do {
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value191 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper99(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value192 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper98(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value193 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper97();
        if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value191
        )
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value192
            ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol(),
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekday ||=
                []),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekday.push(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96[
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value192
                ].nth(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value191,
                ),
              ))
            : ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.bymonthday ||=
                []),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.bymonthday.push(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value191,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
                "day(s)",
              ));
        else if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value192
        ) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekday ||=
            [];
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekday.push(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value192
            ],
          );
        } else if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol ===
          "weekday(s)"
        ) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekday ||=
            [
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MO,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.TU,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WE,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.TH,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.FR,
            ];
        } else if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol ===
          "week(s)"
        ) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value194 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.acceptNumber();
          if (
            !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value194
          )
            throw Error(
              "Unexpected symbol " +
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol +
                ", expected week number",
            );
          for (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekno =
              [
                parseInt(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value194[0],
                  10,
                ),
              ];
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
              "comma",
            );
          ) {
            if (
              ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value194 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.acceptNumber()),
              !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value194)
            )
              throw Error(
                "Unexpected symbol " +
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol +
                  "; expected monthday",
              );
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byweekno.push(
              parseInt(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value194[0],
                10,
              ),
            );
          }
        } else if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value193
        ) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.bymonth ||=
            [];
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.bymonth.push(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value193,
          );
        } else return;
      } while (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
          "comma",
        ) ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
          "the",
        ) ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
          "on",
        )
      );
  }
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper96() {
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
        "at",
      )
    )
      do {
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value371 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.acceptNumber();
        if (
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value371
        )
          throw Error(
            "Unexpected symbol " +
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol +
              ", expected hour",
          );
        for (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byhour =
            [
              parseInt(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value371[0],
                10,
              ),
            ];
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
            "comma",
          );
        ) {
          if (
            ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value371 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.acceptNumber()),
            !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value371)
          )
            throw Error(
              "Unexpected symbol " +
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol +
                "; expected hour",
            );
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.byhour.push(
            parseInt(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value371[0],
              10,
            ),
          );
        }
      } while (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
          "comma",
        ) ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
          "at",
        )
      );
  }
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper97() {
    switch (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol
    ) {
      case "january":
        return 1;
      case "february":
        return 2;
      case "march":
        return 3;
      case "april":
        return 4;
      case "may":
        return 5;
      case "june":
        return 6;
      case "july":
        return 7;
      case "august":
        return 8;
      case "september":
        return 9;
      case "october":
        return 10;
      case "november":
        return 11;
      case "december":
        return 12;
      default:
        return false;
    }
  }
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper98() {
    switch (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol
    ) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol
          .substr(0, 2)
          .toUpperCase();
      default:
        return false;
    }
  }
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper99() {
    switch (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol
    ) {
      case "last":
        return (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol(),
          -1
        );
      case "first":
        return (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol(),
          1
        );
      case "second":
        return (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
            "last",
          )
            ? -2
            : 2
        );
      case "third":
        return (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
            "last",
          )
            ? -3
            : 3
        );
      case "nth":
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value344 =
          parseInt(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129
              .value[1],
            10,
          );
        if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value344 <
            -366 ||
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value344 >
            366
        )
          throw Error(
            "Nth out of range: " +
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value344,
          );
        return (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
            "last",
          )
            ? -appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value344
            : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value344
        );
      default:
        return false;
    }
  }
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper100() {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
      "on",
    );
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
      "the",
    );
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value416 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper99();
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value416
    )
      for (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.bymonthday =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value416,
          ],
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
          "comma",
        );
      ) {
        if (
          ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value416 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper99()),
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value416)
        )
          throw Error(
            "Unexpected symbol " +
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol +
              "; expected monthday",
          );
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.bymonthday.push(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value416,
        );
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.nextSymbol();
      }
  }
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper101() {
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.symbol ===
      "until"
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value427 =
        Date.parse(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.text,
        );
      if (
        !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value427
      )
        throw Error(
          "Cannot parse until date:" +
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.text,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.until =
        new Date(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value427,
        );
    } else
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.accept(
        "for",
      ) &&
        ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value128.count =
          parseInt(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129
              .value[0],
            10,
          )),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value129.expect(
          "number",
        ));
  }
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value51,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value52 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value45();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value51 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper106(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param324,
          ) {
            this.done = true;
            this.rules =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param324;
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper106.prototype.start =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param275,
              ) {
                return (
                  (this.text =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param275),
                  (this.done = false),
                  this.nextSymbol()
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper106.prototype.isDone =
              function () {
                return this.done && this.symbol === null;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper106.prototype.nextSymbol =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value251;
                this.symbol = null;
                this.value = null;
                do {
                  if (this.done) return false;
                  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value252 =
                    undefined;
                  for (var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value253 in ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250 =
                    null),
                  this.rules)) {
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value252 =
                      this.rules[
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value253
                      ];
                    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value254 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value252.exec(
                        this.text,
                      );
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value254 &&
                      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250 ===
                        null ||
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value254[0]
                          .length >
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250[0]
                            .length) &&
                      ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250 =
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value254),
                      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value251 =
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value253));
                  }
                  if (
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250 !=
                      null &&
                      ((this.text = this.text.substr(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250[0]
                          .length,
                      )),
                      this.text === "" && (this.done = true)),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250 ==
                      null)
                  ) {
                    this.done = true;
                    this.symbol = null;
                    this.value = null;
                    return;
                  }
                } while (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value251 ===
                  "SKIP"
                );
                return (
                  (this.symbol =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value251),
                  (this.value =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value250),
                  true
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper106.prototype.accept =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param147,
              ) {
                if (
                  this.symbol ===
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param147
                ) {
                  if (this.value) {
                    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value432 =
                      this.value;
                    return (
                      this.nextSymbol(),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value432
                    );
                  }
                  return (this.nextSymbol(), true);
                }
                return false;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper106.prototype.acceptNumber =
              function () {
                return this.accept("number");
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper106.prototype.expect =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param247,
              ) {
                if (
                  this.accept(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param247,
                  )
                )
                  return true;
                throw Error(
                  "expected " +
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param247 +
                    " but found " +
                    this.symbol,
                );
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper106
          );
        })();
    });
function $e(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param389,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param389 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.HOURLY
  );
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54 =
    createLazyEsmInitializer(() => {
      (function (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132,
      ) {
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132[
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132.YEARLY = 0)
        ] = "YEARLY";
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132[
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132.MONTHLY = 1)
        ] = "MONTHLY";
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132[
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132.WEEKLY = 2)
        ] = "WEEKLY";
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132[
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132.DAILY = 3)
        ] = "DAILY";
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132[
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132.HOURLY = 4)
        ] = "HOURLY";
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132[
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132.MINUTELY = 5)
        ] = "MINUTELY";
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132[
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param132.SECONDLY = 6)
        ] = "SECONDLY";
      })(
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53 ||=
          {}),
      );
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value55,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value56,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value57,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value58,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value59 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value50();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value52();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value45();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value55 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param285,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param286,
        ) {
          return (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param286 ===
              undefined &&
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param286 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value44),
            new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper2(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param285,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param286,
              ) || undefined,
            )
          );
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value56 =
        ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49.IMPLEMENTED =
        [];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49.IMPLEMENTED[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.HOURLY
      ] =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value56;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49.IMPLEMENTED[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.MINUTELY
      ] =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value56;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49.IMPLEMENTED[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.DAILY
      ] = ["byhour"].concat(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value56,
      );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49.IMPLEMENTED[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.WEEKLY
      ] =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value56;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49.IMPLEMENTED[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.MONTHLY
      ] =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value56;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49.IMPLEMENTED[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.YEARLY
      ] = ["byweekno", "byyearday"].concat(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value56,
      );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value57 =
        function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param314,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param315,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param316,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param317,
        ) {
          return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param314,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param315,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param316,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param317,
          ).toString();
        };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value58 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value49.isFullyConvertible;
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value60,
  at,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value61 =
    createLazyEsmInitializer(() => {
      initTslibObjectHelpers();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value60 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper112(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param215,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param216,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param217,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param218,
          ) {
            this.hour =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param215;
            this.minute =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param216;
            this.second =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param217;
            this.millisecond =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param218 ||
              0;
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper112.prototype.getHours =
              function () {
                return this.hour;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper112.prototype.getMinutes =
              function () {
                return this.minute;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper112.prototype.getSeconds =
              function () {
                return this.second;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper112.prototype.getMilliseconds =
              function () {
                return this.millisecond;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper112.prototype.getTime =
              function () {
                return (
                  (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1e3 +
                  this.millisecond
                );
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper112
          );
        })();
      at = (function (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param3,
      ) {
        extendClassPrototype(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param3,
        );
        function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param223,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param224,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param225,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param226,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param227,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param228,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param229,
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value504 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param3.call(
              this,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param226,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param227,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param228,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param229,
            ) || this;
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value504.year =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param223),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value504.month =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param224),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value504.day =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param225),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value504
          );
        }
        return (
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.fromDate =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param135,
            ) {
              return new this(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param135.getUTCFullYear(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param135.getUTCMonth() +
                  1,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param135.getUTCDate(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param135.getUTCHours(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param135.getUTCMinutes(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param135.getUTCSeconds(),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param135.valueOf() %
                  1e3,
              );
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.getWeekday =
            function () {
              return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value29(
                new Date(this.getTime()),
              );
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.getTime =
            function () {
              return new Date(
                Date.UTC(
                  this.year,
                  this.month - 1,
                  this.day,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
                ),
              ).getTime();
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.getDay =
            function () {
              return this.day;
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.getMonth =
            function () {
              return this.month;
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.getYear =
            function () {
              return this.year;
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.addYears =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param375,
            ) {
              this.year +=
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param375;
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.addMonths =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param127,
            ) {
              if (
                ((this.month +=
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param127),
                this.month > 12)
              ) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value411 =
                    Math.floor(this.month / 12),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value412 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
                      this.month,
                      12,
                    );
                this.month =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value412;
                this.year +=
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value411;
                this.month === 0 && ((this.month = 12), --this.year);
              }
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.addWeekly =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param171,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param172,
            ) {
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param172 >
              this.getWeekday()
                ? (this.day +=
                    -(
                      this.getWeekday() +
                      1 +
                      (6 -
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param172)
                    ) +
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param171 *
                      7)
                : (this.day +=
                    -(
                      this.getWeekday() -
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param172
                    ) +
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param171 *
                      7);
              this.fixDay();
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.addDaily =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param325,
            ) {
              this.day +=
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param325;
              this.fixDay();
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.addHours =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param106,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param107,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param108,
            ) {
              for (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param107 &&
                (this.hour +=
                  Math.floor(
                    (23 - this.hour) /
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param106,
                  ) *
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param106);
                ;
              ) {
                this.hour +=
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param106;
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value389 =
                    be(this.hour, 24),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value390 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value389.div,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value391 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value389.mod;
                if (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value390 &&
                    ((this.hour =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value391),
                    this.addDaily(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value390,
                    )),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param108,
                  ) ||
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param108,
                      this.hour,
                    ))
                )
                  break;
              }
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.addMinutes =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param72,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param73,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param74,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param75,
            ) {
              for (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param73 &&
                (this.minute +=
                  Math.floor(
                    (1439 - (this.hour * 60 + this.minute)) /
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param72,
                  ) *
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param72);
                ;
              ) {
                this.minute +=
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param72;
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value339 =
                    be(this.minute, 60),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value340 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value339.div,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value341 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value339.mod;
                if (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value340 &&
                    ((this.minute =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value341),
                    this.addHours(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value340,
                      false,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param74,
                    )),
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param74,
                  ) ||
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param74,
                      this.hour,
                    )) &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param75,
                    ) ||
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param75,
                        this.minute,
                      )))
                )
                  break;
              }
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.addSeconds =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param44,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param45,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param46,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param47,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param48,
            ) {
              for (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param45 &&
                (this.second +=
                  Math.floor(
                    (86399 -
                      (this.hour * 3600 + this.minute * 60 + this.second)) /
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param44,
                  ) *
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param44);
                ;
              ) {
                this.second +=
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param44;
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value301 =
                    be(this.second, 60),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value302 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value301.div,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value303 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value301.mod;
                if (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value302 &&
                    ((this.second =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value303),
                    this.addMinutes(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value302,
                      false,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param46,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param47,
                    )),
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param46,
                  ) ||
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param46,
                      this.hour,
                    )) &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param47,
                    ) ||
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param47,
                        this.minute,
                      )) &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param48,
                    ) ||
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param48,
                        this.second,
                      )))
                )
                  break;
              }
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.fixDay =
            function () {
              if (!(this.day <= 28)) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value356 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value30(
                    this.year,
                    this.month - 1,
                  )[1];
                if (
                  !(
                    this.day <=
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value356
                  )
                )
                  for (
                    ;
                    this.day >
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value356;
                  ) {
                    if (
                      ((this.day -=
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value356),
                      ++this.month,
                      this.month === 13 &&
                        ((this.month = 1), ++this.year, this.year > 9999))
                    )
                      return;
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value356 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value30(
                        this.year,
                        this.month - 1,
                      )[1];
                  }
              }
            }),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103.prototype.add =
            function (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param42,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param43,
            ) {
              var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value291 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param42.freq,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value292 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param42.interval,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value293 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param42.wkst,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value294 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param42.byhour,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value295 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param42.byminute,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value296 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param42.bysecond;
              switch (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value291
              ) {
                case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.YEARLY:
                  return this.addYears(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value292,
                  );
                case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.MONTHLY:
                  return this.addMonths(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value292,
                  );
                case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.WEEKLY:
                  return this.addWeekly(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value292,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value293,
                  );
                case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.DAILY:
                  return this.addDaily(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value292,
                  );
                case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.HOURLY:
                  return this.addHours(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value292,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param43,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value294,
                  );
                case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.MINUTELY:
                  return this.addMinutes(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value292,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param43,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value294,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value295,
                  );
                case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.SECONDLY:
                  return this.addSeconds(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value292,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param43,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value294,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value295,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value296,
                  );
              }
            }),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper103
        );
      })(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value60,
      );
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper3(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param154,
) {
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value437 =
        [],
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value438 =
        Object.keys(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param154,
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value439 = 0,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value440 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value438;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value439 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value440.length;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value439++
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value441 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value440[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value439
      ];
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value95,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value441,
    ) ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value437.push(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value441,
      );
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value23(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param154[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value441
      ],
    ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value24(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param154[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value441
        ],
      ) &&
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value437.push(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value441,
      );
  }
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value437.length
  )
    throw Error(
      "Invalid options: " +
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value437.join(
          ", ",
        ),
    );
  return assignObjectProperties(
    {},
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param154,
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper4(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param5,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130 =
    assignObjectProperties(
      assignObjectProperties({}, on),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper3(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param5,
      ),
    );
  if (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byeaster,
    ) &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.YEARLY),
    !(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq,
      ) &&
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96
        .FREQUENCIES[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
          .freq
      ]
    ))
  )
    throw Error(
      `Invalid frequency: ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq} ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param5.freq}`,
    );
  if (
    ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.dtstart ||=
      new Date(new Date().setMilliseconds(0))),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.wkst,
    )
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.wkst,
        ) ||
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.wkst =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.wkst.weekday)
      : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.wkst =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MO.weekday),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysetpos,
    ))
  ) {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysetpos,
    ) &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysetpos =
        [
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysetpos,
        ]);
    for (
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131 = 0;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131 <
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
        .bysetpos.length;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131++
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
          .bysetpos[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131
        ];
      if (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132 ===
          0 ||
        !(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132 >=
            -366 &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132 <=
            366
        )
      )
        throw Error(
          "bysetpos must be between 1 and 366, or between -366 and -1",
        );
    }
  }
  if (!(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekno ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekno,
    ) ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byyearday,
    ) ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday,
    ) ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday,
    ) ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byeaster,
    )
  ))
    switch (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq
    ) {
      case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.YEARLY:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonth ||=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.dtstart.getUTCMonth() +
          1;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.dtstart.getUTCDate();
        break;
      case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MONTHLY:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.dtstart.getUTCDate();
        break;
      case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value29(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.dtstart,
            ),
          ];
        break;
    }
  if (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonth,
    ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonth,
      ) &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonth =
        [
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonth,
        ]),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byyearday,
    ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byyearday,
      ) &&
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byyearday,
      ) &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byyearday =
        [
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byyearday,
        ]),
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday,
    ))
  ) {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday =
      [];
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynmonthday =
      [];
  } else if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday,
    )
  ) {
    for (
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value133 =
          [],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value134 =
          [],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131 = 0;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131 <
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
        .bymonthday.length;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131++
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
          .bymonthday[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131
        ];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132 >
      0
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value133.push(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132,
          )
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132 <
            0 &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value134.push(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value132,
          );
    }
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value133;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynmonthday =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value134;
  } else
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday <
    0
      ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynmonthday =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday,
          ]),
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday =
          []))
      : ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynmonthday =
          []),
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bymonthday,
          ]));
  if (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekno,
    ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekno,
      ) &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekno =
        [
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekno,
        ]),
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday,
    ))
  )
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynweekday =
      null;
  else if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday,
    )
  ) {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday =
      [
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday,
      ];
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynweekday =
      null;
  } else if (
    _e(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday,
    )
  ) {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday =
      [
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3.fromStr(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday,
        ).weekday,
      ];
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynweekday =
      null;
  } else if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday instanceof
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3
  )
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
      .byweekday.n ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq >
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MONTHLY
      ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
              .byweekday.weekday,
          ]),
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynweekday =
          null))
      : ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynweekday =
          [
            [
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
                .byweekday.weekday,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
                .byweekday.n,
            ],
          ]),
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday =
          null));
  else {
    for (
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value135 =
          [],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value136 =
          [],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131 = 0;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131 <
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
        .byweekday.length;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131++
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130
          .byweekday[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value131
        ];
      if (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137,
        )
      ) {
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value135.push(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137,
        );
        continue;
      } else if (
        _e(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137,
        )
      ) {
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value135.push(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3.fromStr(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137,
          ).weekday,
        );
        continue;
      }
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137.n ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq >
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MONTHLY
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value135.push(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137.weekday,
          )
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value136.push(
            [
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137.weekday,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value137.n,
            ],
          );
    }
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byweekday =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value135,
      )
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value135
        : null;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bynweekday =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value136,
      )
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value136
        : null;
  }
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byhour,
    )
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byhour,
        ) &&
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byhour =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byhour,
          ])
      : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byhour =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq <
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY
            ? [
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.dtstart.getUTCHours(),
              ]
            : null),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byminute,
    )
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byminute,
        ) &&
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byminute =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byminute,
          ])
      : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.byminute =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq <
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MINUTELY
            ? [
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.dtstart.getUTCMinutes(),
              ]
            : null),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysecond,
    )
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysecond,
        ) &&
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysecond =
          [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysecond,
          ])
      : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.bysecond =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.freq <
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.SECONDLY
            ? [
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130.dtstart.getUTCSeconds(),
              ]
            : null),
    {
      parsedOptions:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value130,
    }
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper5(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param133,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value417 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param133.dtstart.getTime() %
    1e3;
  if (
    !$e(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param133.freq,
    )
  )
    return [];
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value418 =
    [];
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param133.byhour.forEach(
      function (item) {
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param133.byminute.forEach(
          function (_item) {
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param133.bysecond.forEach(
              function (__item) {
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value418.push(
                  new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value60(
                    item,
                    _item,
                    __item,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value417,
                  ),
                );
              },
            );
          },
        );
      },
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value418
  );
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value62 =
  createLazyEsmInitializer(() => {
    initTslibObjectHelpers();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value4();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value61();
  });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper6(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param220,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value502 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param220
      .split("\n")
      .map(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper8,
      )
      .filter(function (item) {
        return item !== null;
      });
  return assignObjectProperties(
    assignObjectProperties(
      {},
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value502[0],
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value502[1],
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper7(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param185,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value477 =
      {},
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value478 =
      /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param185,
      );
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value478
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value477;
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value479 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value478[1],
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value480 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value478[2];
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value479 &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value477.tzid =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value479),
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value477.dtstart =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value36(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value480,
      )),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value477
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper8(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110,
) {
  if (
    ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110.replace(
        /^\s+|\s+$/,
        "",
      )),
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110.length)
  )
    return null;
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value392 =
    /^([A-Z]+?)[:;]/.exec(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110.toUpperCase(),
    );
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value392
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper9(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110,
    );
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value393 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value392[1];
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value393.toUpperCase()
  ) {
    case "RRULE":
    case "EXRULE":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper9(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110,
      );
    case "DTSTART":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper7(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110,
      );
    default:
      throw Error(
        `Unsupported RFC prop ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value393} in ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param110}`,
      );
  }
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper9(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param18,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper7(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param18.replace(
        /^RRULE:/i,
        "",
      ),
    );
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param18
      .replace(/^(?:RRULE|EXRULE):/i, "")
      .split(";")
      .forEach(function (item) {
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value226 =
            item.split("="),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value227 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value226[0],
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value228 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value226[1];
        switch (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value227.toUpperCase()
        ) {
          case "FREQ":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188.freq =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53[
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value228.toUpperCase()
              ];
            break;
          case "WKST":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188.wkst =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94[
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value228.toUpperCase()
              ];
            break;
          case "COUNT":
          case "INTERVAL":
          case "BYSETPOS":
          case "BYMONTH":
          case "BYMONTHDAY":
          case "BYYEARDAY":
          case "BYWEEKNO":
          case "BYHOUR":
          case "BYMINUTE":
          case "BYSECOND":
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value229 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper10(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value228,
                ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value230 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value227.toLowerCase();
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value230
            ] =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value229;
            break;
          case "BYWEEKDAY":
          case "BYDAY":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188.byweekday =
              _t(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value228,
              );
            break;
          case "DTSTART":
          case "TZID":
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value231 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper7(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param18,
              );
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188.tzid =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value231.tzid;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188.dtstart =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value231.dtstart;
            break;
          case "UNTIL":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188.until =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value36(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value228,
              );
            break;
          case "BYEASTER":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188.byeaster =
              Number(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value228,
              );
            break;
          default:
            throw Error(
              "Unknown RRULE property '" +
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value227 +
                "'",
            );
        }
      }),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value188
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper10(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param310,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param310.indexOf(
    ",",
  ) === -1
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper11(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param310,
      )
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param310
        .split(",")
        .map(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper11,
        );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper11(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param346,
) {
  return /^[+-]?\d+$/.test(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param346,
  )
    ? Number(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param346,
      )
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param346;
}
function _t(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param131,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param131
    .split(",")
    .map(function (item) {
      if (item.length === 2)
        return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94[
          item
        ];
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value444 =
        item.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
      if (
        !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value444 ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value444.length <
          3
      )
        throw SyntaxError(`Invalid weekday string: ${item}`);
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value445 =
          Number(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value444[1],
          ),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value446 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value444[2]
          ].weekday;
      return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value446,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value445,
      );
    });
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value63 =
    createLazyEsmInitializer(() => {
      initTslibObjectHelpers();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value4();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value64,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value65 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value64 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper110(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param202,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param203,
          ) {
            if (
              isNaN(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param202.getTime(),
              )
            )
              throw RangeError("Invalid date passed to DateWithZone");
            this.date =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param202;
            this.tzid =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param203;
          }
          return (
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper110.prototype,
              "isUTC",
              {
                get: function () {
                  return !this.tzid || this.tzid.toUpperCase() === "UTC";
                },
                enumerable: false,
                configurable: true,
              },
            ),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper110.prototype.toString =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value507 =
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value35(
                    this.date.getTime(),
                    this.isUTC,
                  );
                return this.isUTC
                  ? `:${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value507}`
                  : `;TZID=${this.tzid}:${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value507}`;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper110.prototype.getTime =
              function () {
                return this.date.getTime();
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper110.prototype.rezonedDate =
              function () {
                return this.isUTC
                  ? this.date
                  : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value38(
                      this.date,
                      this.tzid,
                    );
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper110
          );
        })();
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper12(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param16,
) {
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value174 =
        [],
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value175 =
        "",
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value176 =
        Object.keys(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param16,
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value177 =
        Object.keys(on),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value178 = 0;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value178 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value176.length;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value178++
  )
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value176[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value178
      ] !== "tzid" &&
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value177,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value176[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value178
        ],
      )
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value179 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value176[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value178
          ].toUpperCase(),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param16[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value176[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value178
            ]
          ],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181 =
          "";
      if (!(
        !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
        ) ||
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
        ) &&
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180.length)
      )) {
        switch (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value179
        ) {
          case "FREQ":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96
                .FREQUENCIES[
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param16
                  .freq
              ];
            break;
          case "WKST":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value6(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
              )
                ? new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
                  ).toString()
                : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180.toString();
            break;
          case "BYWEEKDAY":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value179 =
              "BYDAY";
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value10(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
              )
                .map(function (item) {
                  return item instanceof
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3
                    ? item
                    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
                          item,
                        )
                      ? new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
                          item[0],
                          item[1],
                        )
                      : new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
                          item,
                        );
                })
                .toString();
            break;
          case "DTSTART":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value175 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper13(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param16.tzid,
              );
            break;
          case "UNTIL":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value35(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
                !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param16.tzid,
              );
            break;
          default:
            if (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
              )
            ) {
              for (
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value182 =
                    [],
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value183 = 0;
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value183 <
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180.length;
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value183++
              )
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value182[
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value183
                ] = String(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180[
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value183
                  ],
                );
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value182.toString();
            } else
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181 =
                String(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value180,
                );
        }
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181 &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value174.push(
            [
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value179,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value181,
            ],
          );
      }
    }
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value184 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value174
        .map(function (item) {
          return `${item[0]}=${item[1].toString()}`;
        })
        .join(";"),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value185 =
      "";
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value184 !==
      "" &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value185 = `RRULE:${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value184}`),
    [
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value175,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value185,
    ]
      .filter(function (item) {
        return !!item;
      })
      .join("\n")
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper13(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param302,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param303,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param302
    ? "DTSTART" +
        new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value64(
          new Date(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param302,
          ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param303,
        ).toString()
    : "";
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value66 =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value4();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value65();
  });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper14(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param136,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param137,
) {
  return Array.isArray(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param136,
  )
    ? !Array.isArray(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param137,
      ) ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param136.length !==
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param137.length
      ? false
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param136.every(
          function (item, index) {
            return (
              item.getTime() ===
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param137[
                index
              ].getTime()
            );
          },
        )
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param136 instanceof
        Date
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param137 instanceof
          Date &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param136.getTime() ===
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param137.getTime()
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param136 ===
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param137;
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value67,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value68 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value41();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value67 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper108() {
            this.all = false;
            this.before = [];
            this.after = [];
            this.between = [];
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper108.prototype._cacheAdd =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param210,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param211,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param212,
              ) {
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param211 &&=
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param211 instanceof
                  Date
                    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value32(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param211,
                      )
                    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value33(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param211,
                      );
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param210 ===
                "all"
                  ? (this.all =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param211)
                  : ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param212._value =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param211),
                    this[
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param210
                    ].push(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param212,
                    ));
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper108.prototype._cacheGet =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param30,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param31,
              ) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243 = false,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value244 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param31
                      ? Object.keys(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param31,
                        )
                      : [],
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value245 =
                    function (
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param182,
                    ) {
                      for (
                        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value471 = 0;
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value471 <
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value244.length;
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value471++
                      ) {
                        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value472 =
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value244[
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value471
                          ];
                        if (
                          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper14(
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param31[
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value472
                            ],
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param182[
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value472
                            ],
                          )
                        )
                          return true;
                      }
                      return false;
                    },
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value246 =
                    this[
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param30
                    ];
                if (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param30 ===
                  "all"
                )
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243 =
                    this.all;
                else if (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value246,
                  )
                )
                  for (
                    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value247 = 0;
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value247 <
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value246.length;
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value247++
                  ) {
                    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value248 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value246[
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value247
                      ];
                    if (!(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value244.length &&
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value245(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value248,
                      )
                    )) {
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243 =
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value248._value;
                      break;
                    }
                  }
                if (
                  !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243 &&
                  this.all
                ) {
                  for (
                    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value249 =
                        new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value40(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param30,
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param31,
                        ),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value247 = 0;
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value247 <
                      this.all.length &&
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value249.accept(
                      this.all[
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value247
                      ],
                    );
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value247++
                  );
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value249.getValue();
                  this._cacheAdd(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param30,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param31,
                  );
                }
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value7(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243,
                )
                  ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value33(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243,
                    )
                  : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243 instanceof
                      Date
                    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value32(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243,
                      )
                    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value243;
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper108
          );
        })();
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value69,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value70,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value71,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value72,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value75,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value76,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value77,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value78,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value81,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value82,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value83,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value84,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value85,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value86 =
    createLazyEsmInitializer(() => {
      initTslibObjectHelpers();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value69 =
        appendArraySlice(
          appendArraySlice(
            appendArraySlice(
              appendArraySlice(
                appendArraySlice(
                  appendArraySlice(
                    appendArraySlice(
                      appendArraySlice(
                        appendArraySlice(
                          appendArraySlice(
                            appendArraySlice(
                              appendArraySlice(
                                appendArraySlice(
                                  [],
                                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                                    1,
                                    31,
                                  ),
                                  true,
                                ),
                                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                                  2,
                                  28,
                                ),
                                true,
                              ),
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                                3,
                                31,
                              ),
                              true,
                            ),
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                              4,
                              30,
                            ),
                            true,
                          ),
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                            5,
                            31,
                          ),
                          true,
                        ),
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                          6,
                          30,
                        ),
                        true,
                      ),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                        7,
                        31,
                      ),
                      true,
                    ),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                      8,
                      31,
                    ),
                    true,
                  ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                    9,
                    30,
                  ),
                  true,
                ),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                  10,
                  31,
                ),
                true,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                11,
                30,
              ),
              true,
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
              12,
              31,
            ),
            true,
          ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
            1,
            7,
          ),
          true,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value70 =
        appendArraySlice(
          appendArraySlice(
            appendArraySlice(
              appendArraySlice(
                appendArraySlice(
                  appendArraySlice(
                    appendArraySlice(
                      appendArraySlice(
                        appendArraySlice(
                          appendArraySlice(
                            appendArraySlice(
                              appendArraySlice(
                                appendArraySlice(
                                  [],
                                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                                    1,
                                    31,
                                  ),
                                  true,
                                ),
                                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                                  2,
                                  29,
                                ),
                                true,
                              ),
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                                3,
                                31,
                              ),
                              true,
                            ),
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                              4,
                              30,
                            ),
                            true,
                          ),
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                            5,
                            31,
                          ),
                          true,
                        ),
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                          6,
                          30,
                        ),
                        true,
                      ),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                        7,
                        31,
                      ),
                      true,
                    ),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                      8,
                      31,
                    ),
                    true,
                  ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                    9,
                    30,
                  ),
                  true,
                ),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                  10,
                  31,
                ),
                true,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                11,
                30,
              ),
              true,
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
              12,
              31,
            ),
            true,
          ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
            1,
            7,
          ),
          true,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value71 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
          1,
          29,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value72 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
          1,
          30,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
          1,
          31,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
          1,
          32,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value75 =
        appendArraySlice(
          appendArraySlice(
            appendArraySlice(
              appendArraySlice(
                appendArraySlice(
                  appendArraySlice(
                    appendArraySlice(
                      appendArraySlice(
                        appendArraySlice(
                          appendArraySlice(
                            appendArraySlice(
                              appendArraySlice(
                                appendArraySlice(
                                  [],
                                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                                  true,
                                ),
                                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value72,
                                true,
                              ),
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                              true,
                            ),
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
                            true,
                          ),
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                          true,
                        ),
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
                        true,
                      ),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                      true,
                    ),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                    true,
                  ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
                  true,
                ),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                true,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
              true,
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
            true,
          ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74.slice(
            0,
            7,
          ),
          true,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value76 =
        appendArraySlice(
          appendArraySlice(
            appendArraySlice(
              appendArraySlice(
                appendArraySlice(
                  appendArraySlice(
                    appendArraySlice(
                      appendArraySlice(
                        appendArraySlice(
                          appendArraySlice(
                            appendArraySlice(
                              appendArraySlice(
                                appendArraySlice(
                                  [],
                                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                                  true,
                                ),
                                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value71,
                                true,
                              ),
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                              true,
                            ),
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
                            true,
                          ),
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                          true,
                        ),
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
                        true,
                      ),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                      true,
                    ),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                    true,
                  ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
                  true,
                ),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
                true,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value73,
              true,
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74,
            true,
          ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value74.slice(
            0,
            7,
          ),
          true,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value77 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
          -28,
          0,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value78 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
          -29,
          0,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
          -30,
          0,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
          -31,
          0,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value81 =
        appendArraySlice(
          appendArraySlice(
            appendArraySlice(
              appendArraySlice(
                appendArraySlice(
                  appendArraySlice(
                    appendArraySlice(
                      appendArraySlice(
                        appendArraySlice(
                          appendArraySlice(
                            appendArraySlice(
                              appendArraySlice(
                                appendArraySlice(
                                  [],
                                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                                  true,
                                ),
                                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value78,
                                true,
                              ),
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                              true,
                            ),
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
                            true,
                          ),
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                          true,
                        ),
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
                        true,
                      ),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                      true,
                    ),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                    true,
                  ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
                  true,
                ),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                true,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
              true,
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
            true,
          ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80.slice(
            0,
            7,
          ),
          true,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value82 =
        appendArraySlice(
          appendArraySlice(
            appendArraySlice(
              appendArraySlice(
                appendArraySlice(
                  appendArraySlice(
                    appendArraySlice(
                      appendArraySlice(
                        appendArraySlice(
                          appendArraySlice(
                            appendArraySlice(
                              appendArraySlice(
                                appendArraySlice(
                                  [],
                                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                                  true,
                                ),
                                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value77,
                                true,
                              ),
                              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                              true,
                            ),
                            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
                            true,
                          ),
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                          true,
                        ),
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
                        true,
                      ),
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                      true,
                    ),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                    true,
                  ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
                  true,
                ),
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
                true,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value79,
              true,
            ),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80,
            true,
          ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value80.slice(
            0,
            7,
          ),
          true,
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value83 =
        [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value84 =
        [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value85 =
        (function () {
          for (
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value526 =
                [],
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value527 = 0;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value527 <
            55;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value527++
          )
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value526 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value526.concat(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
                  7,
                ),
              );
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value526;
        })();
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper15(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param14,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value153 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param14,
        1,
        1,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value154 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value22(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param14,
      )
        ? 366
        : 365,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value155 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value22(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param14 +
          1,
      )
        ? 366
        : 365,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value156 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value26(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value153,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value157 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value29(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value153,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158 =
      assignObjectProperties(
        assignObjectProperties(
          {
            yearlen:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value154,
            nextyearlen:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value155,
            yearordinal:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value156,
            yearweekday:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value157,
          },
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper16(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param14,
          ),
        ),
        {
          wnomask: null,
        },
      );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.byweekno,
    )
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158;
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158.wnomask =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
      0,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value154 +
        7,
    );
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value159,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value160,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161 =
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value159 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
          7 -
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value157 +
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.wkst,
          7,
        ));
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161 >=
  4
    ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161 = 0),
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value160 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158.yearlen +
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value157 -
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.wkst,
          7,
        )))
    : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value160 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value154 -
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161);
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value162 =
        Math.floor(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value160 /
            7,
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value163 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value160,
          7,
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value164 =
        Math.floor(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value162 +
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value163 /
              4,
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value165 = 0;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value165 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15
      .byweekno.length;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value165++
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value166 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15
        .byweekno[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value165
      ];
    if (
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value166 <
        0 &&
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value166 +=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value164 +
          1),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value166 >
        0 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value166 <=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value164)
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 =
        undefined;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value166 >
      1
        ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161 +
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value166 -
              1) *
              7),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161 !==
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value159 &&
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 -=
              7 -
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value159))
        : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161);
      for (
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value168 = 0;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value168 <
          7 &&
        ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158.wnomask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167
        ] = 1),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167++,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158
          .wdaymask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167
        ] !==
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.wkst);
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value168++
      );
    }
  }
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.byweekno,
      1,
    )
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161 +
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value164 *
        7;
    if (
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161 !==
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value159 &&
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 -=
          7 -
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value159),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 <
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value154)
    )
      for (
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value165 = 0;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value165 <
          7 &&
        ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158.wnomask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167
        ] = 1),
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 += 1),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158
          .wdaymask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167
        ] !==
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.wkst);
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value165++
      );
  }
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value169 =
      undefined;
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.byweekno,
        -1,
      )
    )
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value169 =
        -1;
    else {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value170 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value29(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param14 -
                1,
              1,
              1,
            ),
          ),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value171 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
            7 -
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value170.valueOf() +
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.wkst,
            7,
          ),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value172 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value22(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param14 -
              1,
          )
            ? 366
            : 365,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value173 =
          undefined;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value171 >=
      4
        ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value171 = 0),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value173 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value172 +
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value170 -
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.wkst,
              7,
            )))
        : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value173 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value154 -
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161);
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value169 =
        Math.floor(
          52 +
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value173,
              7,
            ) /
              4,
        );
    }
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param15.byweekno,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value169,
      )
    )
      for (
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 = 0;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167 <
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value161;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167++
      )
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158.wnomask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value167
        ] = 1;
  }
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value158;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper16(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param122,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value407 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value22(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param122,
      )
        ? 366
        : 365,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value408 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value29(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param122,
          1,
          1,
        ),
      );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value407 ===
    365
    ? {
        mmask:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value69,
        mdaymask:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value76,
        nmdaymask:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value82,
        wdaymask:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value85.slice(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value408,
          ),
        mrange:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value84,
      }
    : {
        mmask:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value70,
        mdaymask:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value75,
        nmdaymask:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value81,
        wdaymask:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value85.slice(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value408,
          ),
        mrange:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value83,
      };
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value87 =
  createLazyEsmInitializer(() => {
    initTslibObjectHelpers();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value86();
  });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper17(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param36,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param37,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param38,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param39,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param40,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param41,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value273 =
      {
        lastyear:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param36,
        lastmonth:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param37,
        nwdaymask: [],
      },
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value274 =
      [];
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param41.freq ===
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.YEARLY
  ) {
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param41.bymonth,
      )
    )
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value274 =
        [
          [
            0,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param38,
          ],
        ];
    else
      for (
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value275 = 0;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value275 <
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param41
          .bymonth.length;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value275++
      ) {
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param37 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param41
            .bymonth[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value275
          ];
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value274.push(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param39.slice(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param37 -
              1,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param37 +
              1,
          ),
        );
      }
  } else
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param41.freq ===
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MONTHLY &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value274 =
        [
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param39.slice(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param37 -
              1,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param37 +
              1,
          ),
        ]);
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value13(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value274,
    )
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value273;
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value273.nwdaymask =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
      0,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param38,
    );
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value275 = 0;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value275 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value274.length;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value275++
  )
    for (
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value276 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value274[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value275
          ],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value277 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value276[0],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value278 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value276[1] -
          1,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value279 = 0;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value279 <
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param41
        .bynweekday.length;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value279++
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280 =
          undefined,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value281 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param41
            .bynweekday[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value279
          ],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value282 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value281[0],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value283 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value281[1];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value283 <
      0
        ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value278 +
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value283 +
              1) *
              7),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280 -=
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param40[
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280
              ] -
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value282,
              7,
            )))
        : ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value277 +
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value283 -
              1) *
              7),
          (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280 +=
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
              7 -
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param40[
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280
                ] +
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value282,
              7,
            )));
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value277 <=
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280 <=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value278 &&
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value273.nwdaymask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value280
        ] = 1);
    }
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value273;
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value88 =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
  });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper18(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param67,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param68,
) {
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param68 ===
    undefined &&
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param68 = 0);
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value318 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param67 %
      19,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value319 =
      Math.floor(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param67 /
          100,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value320 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param67 %
      100,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value321 =
      Math.floor(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value319 /
          4,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value322 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value319 %
      4,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value323 =
      Math.floor(
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value319 +
          8) /
          25,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value324 =
      Math.floor(
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value319 -
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value323 +
          1) /
          3,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value325 =
      Math.floor(
        19 *
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value318 +
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value319 -
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value321 -
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value324 +
          15,
      ) % 30,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value326 =
      Math.floor(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value320 /
          4,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value327 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value320 %
      4,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value328 =
      Math.floor(
        32 +
          2 *
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value322 +
          2 *
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value326 -
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value325 -
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value327,
      ) % 7,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value329 =
      Math.floor(
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value318 +
          11 *
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value325 +
          22 *
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value328) /
          451,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value330 =
      Math.floor(
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value325 +
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value328 -
          7 *
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value329 +
          114) /
          31,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value331 =
      ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value325 +
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value328 -
        7 *
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value329 +
        114) %
        31) +
      1,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value332 =
      Date.UTC(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param67,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value330 -
          1,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value331 +
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param68,
      );
  return [
    Math.ceil(
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value332 -
        Date.UTC(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param67,
          0,
          1,
        )) /
        86400000,
    ),
  ];
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value89 =
    createLazyEsmInitializer(() => {}),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value90,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value91 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value87();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value88();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value89();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value61();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value90 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param377,
          ) {
            this.options =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param377;
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.rebuild =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param88,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param89,
              ) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value360 =
                  this.options;
                if (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param88 !==
                    this.lastyear &&
                    (this.yearinfo =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper15(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param88,
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value360,
                      )),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value360.bynweekday,
                  ) &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param89 !==
                      this.lastmonth ||
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param88 !==
                        this.lastyear))
                ) {
                  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value361 =
                      this.yearinfo,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value362 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value361.yearlen,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value363 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value361.mrange,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value364 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value361.wdaymask;
                  this.monthinfo =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper17(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param88,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param89,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value362,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value363,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value364,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value360,
                    );
                }
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value360.byeaster,
                ) &&
                  (this.eastermask =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper18(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param88,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value360.byeaster,
                    ));
              }),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "lastyear",
              {
                get: function () {
                  return this.monthinfo ? this.monthinfo.lastyear : null;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "lastmonth",
              {
                get: function () {
                  return this.monthinfo ? this.monthinfo.lastmonth : null;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "yearlen",
              {
                get: function () {
                  return this.yearinfo.yearlen;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "yearordinal",
              {
                get: function () {
                  return this.yearinfo.yearordinal;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "mrange",
              {
                get: function () {
                  return this.yearinfo.mrange;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "wdaymask",
              {
                get: function () {
                  return this.yearinfo.wdaymask;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "mmask",
              {
                get: function () {
                  return this.yearinfo.mmask;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "wnomask",
              {
                get: function () {
                  return this.yearinfo.wnomask;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "nwdaymask",
              {
                get: function () {
                  return this.monthinfo ? this.monthinfo.nwdaymask : [];
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "nextyearlen",
              {
                get: function () {
                  return this.yearinfo.nextyearlen;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "mdaymask",
              {
                get: function () {
                  return this.yearinfo.mdaymask;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            Object.defineProperty(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype,
              "nmdaymask",
              {
                get: function () {
                  return this.yearinfo.nmdaymask;
                },
                enumerable: false,
                configurable: true,
              },
            ),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.ydayset =
              function () {
                return [
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value8(
                    this.yearlen,
                  ),
                  0,
                  this.yearlen,
                ];
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.mdayset =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param138,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param139,
              ) {
                for (
                  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value419 =
                      this.mrange[
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param139 -
                          1
                      ],
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value420 =
                      this.mrange[
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param139
                      ],
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value421 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                        null,
                        this.yearlen,
                      ),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value422 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value419;
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value422 <
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value420;
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value422++
                )
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value421[
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value422
                  ] =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value422;
                return [
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value421,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value419,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value420,
                ];
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.wdayset =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param119,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param120,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param121,
              ) {
                for (
                  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value401 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                        null,
                        this.yearlen + 7,
                      ),
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value402 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value26(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param119,
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param120,
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param121,
                        ),
                      ) - this.yearordinal,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value403 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value402,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value404 = 0;
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value404 <
                    7 &&
                  ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value401[
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value402
                  ] =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value402),
                  ++appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value402,
                  this.wdaymask[
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value402
                  ] !== this.options.wkst);
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value404++
                );
                return [
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value401,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value403,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value402,
                ];
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.ddayset =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param204,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param205,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param206,
              ) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value496 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value9(
                      null,
                      this.yearlen,
                    ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value497 =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value26(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value17(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param204,
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param205,
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param206,
                      ),
                    ) - this.yearordinal;
                return (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value496[
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value497
                  ] =
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value497),
                  [
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value496,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value497,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value497 +
                      1,
                  ]
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.htimeset =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param141,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param142,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param143,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param144,
              ) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value423 =
                    this,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value424 =
                    [];
                return (
                  this.options.byminute.forEach(function (item) {
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value424 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value424.concat(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value423.mtimeset(
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param141,
                          item,
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param143,
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param144,
                        ),
                      );
                  }),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value34(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value424,
                  ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value424
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.mtimeset =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param193,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param194,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param195,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param196,
              ) {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value486 =
                  this.options.bysecond.map(function (item) {
                    return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value60(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param193,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param194,
                      item,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param196,
                    );
                  });
                return (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value34(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value486,
                  ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value486
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.stimeset =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param318,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param319,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param320,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param321,
              ) {
                return [
                  new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value60(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param318,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param319,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param320,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param321,
                  ),
                ];
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.getdayset =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param94,
              ) {
                switch (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param94
                ) {
                  case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.YEARLY:
                    return this.ydayset.bind(this);
                  case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.MONTHLY:
                    return this.mdayset.bind(this);
                  case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.WEEKLY:
                    return this.wdayset.bind(this);
                  case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.DAILY:
                    return this.ddayset.bind(this);
                  default:
                    return this.ddayset.bind(this);
                }
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102.prototype.gettimeset =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param134,
              ) {
                switch (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param134
                ) {
                  case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.HOURLY:
                    return this.htimeset.bind(this);
                  case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.MINUTELY:
                    return this.mtimeset.bind(this);
                  case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.SECONDLY:
                    return this.stimeset.bind(this);
                }
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper102
          );
        })();
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper19(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param78,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param79,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param80,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param81,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param82,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param83,
) {
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value345 =
        [],
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value346 = 0;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value346 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param78.length;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value346++
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value347 =
        undefined,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value348 =
        undefined,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value349 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param78[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value346
        ];
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value349 <
    0
      ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value347 =
          Math.floor(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value349 /
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param79.length,
          )),
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value348 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value349,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param79.length,
          )))
      : ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value347 =
          Math.floor(
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value349 -
              1) /
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param79.length,
          )),
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value348 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value12(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value349 -
              1,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param79.length,
          )));
    for (
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value350 =
          [],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value351 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param80;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value351 <
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param81;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value351++
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value352 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param83[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value351
        ];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value352,
      ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value350.push(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value352,
        );
    }
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value353 =
      undefined;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value353 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value347 <
      0
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value350.slice(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value347,
          )[0]
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value350[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value347
          ];
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value354 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param79[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value348
        ],
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value355 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value31(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value27(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param82.yearordinal +
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value353,
          ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value354,
        );
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value345,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value355,
    ) ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value345.push(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value355,
      );
  }
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value34(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value345,
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value345
  );
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value92 =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
  });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper20(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value195 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20.dtstart,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value196 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20.freq,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value197 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20.interval,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value198 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20.until,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value199 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20.bysetpos,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value200 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20.count;
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value200 ===
      0 ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value197 ===
      0
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper22(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19,
    );
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201 =
      at.fromDate(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value195,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202 =
      new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value90(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20,
      );
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202.rebuild(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.year,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.month,
  );
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value203 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper24(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20,
      );
    ;
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value204 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202.getdayset(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value196,
        )(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.year,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.month,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.day,
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value205 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value204[0],
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value206 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value204[1],
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value207 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value204[2],
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value208 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper23(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value205,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value206,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value207,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20,
        );
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value199,
      )
    )
      for (
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value209 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper19(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value199,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value203,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value206,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value207,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value205,
            ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value210 = 0;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value210 <
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value209.length;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value210++
      ) {
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value211 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value209[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value210
          ];
        if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value198 &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value211 >
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value198
        )
          return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper22(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19,
          );
        if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value211 >=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value195
        ) {
          var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value212 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper21(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value211,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20,
            );
          if (
            !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19.accept(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value212,
            ) ||
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value200 &&
              (--appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value200,
              !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value200))
          )
            return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper22(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19,
            );
        }
      }
    else
      for (
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value210 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value206;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value210 <
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value207;
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value210++
      ) {
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value213 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value205[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value210
          ];
        if (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value5(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value213,
          )
        )
          for (
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value214 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value27(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202.yearordinal +
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value213,
                ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value215 = 0;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value215 <
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value203.length;
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value215++
          ) {
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value216 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value203[
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value215
                ],
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value211 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value31(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value214,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value216,
                );
            if (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value198 &&
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value211 >
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value198
            )
              return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper22(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19,
              );
            if (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value211 >=
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value195
            ) {
              var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value212 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper21(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value211,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20,
                );
              if (
                !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19.accept(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value212,
                ) ||
                (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value200 &&
                  (--appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value200,
                  !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value200))
              )
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper22(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19,
                );
            }
          }
      }
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20.interval ===
        0 ||
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.add(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param20,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value208,
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.year >
        9999)
    )
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper22(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param19,
      );
    $e(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value196,
    ) ||
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value203 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202.gettimeset(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value196,
        )(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.hour,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.minute,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.second,
          0,
        ));
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value202.rebuild(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.year,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value201.month,
    );
  }
}
function $t(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param56,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value307 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param56.bymonth,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value308 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param56.byweekno,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value309 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param56.byweekday,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value310 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param56.byeaster,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value311 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param56.bymonthday,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value312 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param56.bynmonthday,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value313 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param56.byyearday;
  return (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value307,
    ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value307,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54
          .mmask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55
        ],
      )) ||
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value308,
    ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54
        .wnomask[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55
      ]) ||
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value309,
    ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value309,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54
          .wdaymask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55
        ],
      )) ||
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54.nwdaymask,
    ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54
        .nwdaymask[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55
      ]) ||
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value310 !==
      null &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54.eastermask,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55,
      )) ||
    ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value311,
    ) ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value312,
      )) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value311,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54
          .mdaymask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55
        ],
      ) &&
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value312,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54
          .nmdaymask[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55
        ],
      )) ||
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value313,
    ) &&
      ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55 <
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54.yearlen &&
        !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value313,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55 +
            1,
        ) &&
        !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value313,
          -appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54.yearlen +
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55,
        )) ||
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55 >=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54.yearlen &&
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value313,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55 +
              1 -
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54.yearlen,
          ) &&
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value313,
            -appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54.nextyearlen +
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param55 -
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param54.yearlen,
          ))))
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper21(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param350,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param351,
) {
  return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value64(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param350,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param351.tzid,
  ).rezonedDate();
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper22(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param390,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param390.getValue();
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper23(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param234,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param235,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param236,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param237,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param238,
) {
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value508 = false,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value509 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param235;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value509 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param236;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value509++
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value510 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param234[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value509
      ];
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value508 =
      $t(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param237,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value510,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param238,
      );
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value508 &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param234[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value510
      ] = null);
  }
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value508;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper24(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param112,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param113,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param114,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value395 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param114.freq,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value396 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param114.byhour,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value397 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param114.byminute,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value398 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param114.bysecond;
  return $e(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value395,
  )
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper5(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param114,
      )
    : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value395 >=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value396,
          ) &&
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value396,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param113.hour,
          )) ||
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value395 >=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MINUTELY &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value397,
          ) &&
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value397,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param113.minute,
          )) ||
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value395 >=
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.SECONDLY &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value14(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value398,
          ) &&
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value398,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param113.second,
          ))
      ? []
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param112.gettimeset(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value395,
        )(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param113.hour,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param113.minute,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param113.second,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param113.millisecond,
        );
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value93 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value91();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value62();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value65();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value92();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value61();
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94,
  on,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value95,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value41();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value43();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value59();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value62();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value63();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value66();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value68();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value4();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value93();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94 =
        {
          MO: new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
            0,
          ),
          TU: new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
            1,
          ),
          WE: new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
            2,
          ),
          TH: new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
            3,
          ),
          FR: new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
            4,
          ),
          SA: new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
            5,
          ),
          SU: new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value3(
            6,
          ),
        };
      on = {
        freq: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.YEARLY,
        dtstart: null,
        interval: 1,
        wkst: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94.MO,
        count: null,
        until: null,
        tzid: null,
        bysetpos: null,
        bymonth: null,
        bymonthday: null,
        bynmonthday: null,
        byyearday: null,
        byweekno: null,
        byweekday: null,
        bynweekday: null,
        byhour: null,
        byminute: null,
        bysecond: null,
        byeaster: null,
      };
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value95 =
        Object.keys(on);
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96 =
        (function () {
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param157,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param158,
          ) {
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param157 ===
              undefined &&
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param157 =
                {});
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param158 ===
              undefined &&
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param158 = false);
            this._cache =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param158
                ? null
                : new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value67();
            this.origOptions =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper3(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param157,
              );
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value451 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper4(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param157,
              ).parsedOptions;
            this.options =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value451;
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.parseText =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param365,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param366,
              ) {
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper2(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param365,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param366,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.fromText =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param367,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param368,
              ) {
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value55(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param367,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param368,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.fromString =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param311,
              ) {
                return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.parseString(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param311,
                  ) || undefined,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype._iter =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param345,
              ) {
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper20(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param345,
                  this.options,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype._cacheGet =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param283,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param284,
              ) {
                return this._cache
                  ? this._cache._cacheGet(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param283,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param284,
                    )
                  : false;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype._cacheAdd =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param279,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param280,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param281,
              ) {
                if (this._cache)
                  return this._cache._cacheAdd(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param279,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param280,
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param281,
                  );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.all =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param145,
              ) {
                if (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param145
                )
                  return this._iter(
                    new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value42(
                      "all",
                      {},
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param145,
                    ),
                  );
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value425 =
                  this._cacheGet("all");
                return (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value425 ===
                    false &&
                    ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value425 =
                      this._iter(
                        new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value40(
                          "all",
                          {},
                        ),
                      )),
                    this._cacheAdd(
                      "all",
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value425,
                    )),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value425
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.between =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param84,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param85,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param86,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param87,
              ) {
                if (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param86 ===
                    undefined &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param86 = false),
                  !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value24(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param84,
                  ) ||
                    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value24(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param85,
                    ))
                )
                  throw Error("Invalid date passed in to RRule.between");
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value358 =
                  {
                    before:
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param85,
                    after:
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param84,
                    inc: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param86,
                  };
                if (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param87
                )
                  return this._iter(
                    new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value42(
                      "between",
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value358,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param87,
                    ),
                  );
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value359 =
                  this._cacheGet(
                    "between",
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value358,
                  );
                return (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value359 ===
                    false &&
                    ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value359 =
                      this._iter(
                        new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value40(
                          "between",
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value358,
                        ),
                      )),
                    this._cacheAdd(
                      "between",
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value359,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value358,
                    )),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value359
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.before =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param100,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param101,
              ) {
                if (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param101 ===
                    undefined &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param101 = false),
                  !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value24(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param100,
                  ))
                )
                  throw Error("Invalid date passed in to RRule.before");
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value382 =
                    {
                      dt: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param100,
                      inc: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param101,
                    },
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value383 =
                    this._cacheGet(
                      "before",
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value382,
                    );
                return (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value383 ===
                    false &&
                    ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value383 =
                      this._iter(
                        new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value40(
                          "before",
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value382,
                        ),
                      )),
                    this._cacheAdd(
                      "before",
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value383,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value382,
                    )),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value383
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.after =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param104,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param105,
              ) {
                if (
                  (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param105 ===
                    undefined &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param105 = false),
                  !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value24(
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param104,
                  ))
                )
                  throw Error("Invalid date passed in to RRule.after");
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value387 =
                    {
                      dt: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param104,
                      inc: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param105,
                    },
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value388 =
                    this._cacheGet(
                      "after",
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value387,
                    );
                return (
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value388 ===
                    false &&
                    ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value388 =
                      this._iter(
                        new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value40(
                          "after",
                          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value387,
                        ),
                      )),
                    this._cacheAdd(
                      "after",
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value388,
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value387,
                    )),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value388
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.count =
              function () {
                return this.all().length;
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.toString =
              function () {
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper12(
                  this.origOptions,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.toText =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param335,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param336,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param337,
              ) {
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value57(
                  this,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param335,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param336,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param337,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.isFullyConvertibleToText =
              function () {
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value58(
                  this,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.prototype.clone =
              function () {
                return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104(
                  this.origOptions,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.FREQUENCIES =
              [
                "YEARLY",
                "MONTHLY",
                "WEEKLY",
                "DAILY",
                "HOURLY",
                "MINUTELY",
                "SECONDLY",
              ]),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.YEARLY =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.YEARLY),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.MONTHLY =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.MONTHLY),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.WEEKLY =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.WEEKLY),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.DAILY =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.DAILY),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.HOURLY =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.HOURLY),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.MINUTELY =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.MINUTELY),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.SECONDLY =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value53.SECONDLY),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.MO =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94.MO),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.TU =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94.TU),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.WE =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94.WE),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.TH =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94.TH),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.FR =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94.FR),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.SA =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94.SA),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.SU =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value94.SU),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.parseString =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper6),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104.optionsToString =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper12),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper104
          );
        })();
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper25(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param22,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param23,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param24,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param25,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param26,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value221 =
      {},
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value222 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21.accept;
  function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper109(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param243,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param244,
  ) {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param23.forEach(
      function (item) {
        item
          .between(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param243,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param244,
            true,
          )
          .forEach(function (_item) {
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value221[
              Number(_item)
            ] = true;
          });
      },
    );
  }
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param25.forEach(
    function (item) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value535 =
        new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value64(
          item,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param26,
        ).rezonedDate();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value221[
        Number(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value535,
        )
      ] = true;
    },
  );
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21.accept =
    function (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param181,
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value470 =
        Number(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param181,
        );
      return isNaN(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value470,
      )
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value222.call(
            this,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param181,
          )
        : !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value221[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value470
            ] &&
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper109(
              new Date(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value470 -
                  1,
              ),
              new Date(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value470 +
                  1,
              ),
            ),
            !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value221[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value470
            ])
          ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value221[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value470
            ] = true),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value222.call(
              this,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param181,
            ))
          : true;
    };
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21.method ===
    "between" &&
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper109(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21
        .args.after,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21
        .args.before,
    ),
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21.accept =
      function (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param271,
      ) {
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value525 =
          Number(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param271,
          );
        return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value221[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value525
        ]
          ? true
          : ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value221[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value525
            ] = true),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value222.call(
              this,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param271,
            ));
      }));
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value223 = 0;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value223 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param24.length;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value223++
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value224 =
      new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value64(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param24[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value223
        ],
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param26,
      ).rezonedDate();
    if (
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21.accept(
        new Date(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value224.getTime(),
        ),
      )
    )
      break;
  }
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param22.forEach(
    function (item) {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper20(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21,
        item.options,
      );
    },
  );
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value225 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21._result;
  switch (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value34(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value225,
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param21.method)
  ) {
    case "all":
    case "between":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value225;
    case "before":
      return (
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value225.length &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value225[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value225.length -
              1
          ]) ||
        null
      );
    default:
      return (
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value225.length &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value225[0]) ||
        null
      );
  }
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value98 =
  createLazyEsmInitializer(() => {
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value65();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value93();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
  });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper26(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param27,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param28,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value232 =
      [],
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value233 =
      [],
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value234 =
      [],
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value235 =
      [],
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value236 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper7(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param27,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value237 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value236.dtstart,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value238 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value236.tzid;
  return (
    _n(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param27,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param28.unfold,
    ).forEach(function (item) {
      if (item) {
        var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value258 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper32(
              item,
            ),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value259 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value258.name,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value260 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value258.parms,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value261 =
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value258.value;
        switch (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value259.toUpperCase()
        ) {
          case "RRULE":
            if (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value260.length
            )
              throw Error(
                `unsupported RRULE parm: ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value260.join(",")}`,
              );
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value232.push(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper6(
                item,
              ),
            );
            break;
          case "RDATE":
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value262 =
              (/RDATE(?:;TZID=([^:=]+))?/i.exec(item) ?? [])[1];
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value262 &&
              !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value238 &&
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value238 =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value262);
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value233 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value233.concat(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper34(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value261,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value260,
                ),
              );
            break;
          case "EXRULE":
            if (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value260.length
            )
              throw Error(
                `unsupported EXRULE parm: ${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value260.join(",")}`,
              );
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value234.push(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper6(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value261,
              ),
            );
            break;
          case "EXDATE":
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value235 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value235.concat(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper34(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value261,
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value260,
                ),
              );
            break;
          case "DTSTART":
            break;
          default:
            throw Error(
              "unsupported property: " +
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value259,
            );
        }
      }
    }),
    {
      dtstart:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value237,
      tzid: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value238,
      rrulevals:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value232,
      rdatevals:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value233,
      exrulevals:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value234,
      exdatevals:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value235,
    }
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper27(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param34,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value263 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper26(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param34,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value264 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value263.rrulevals,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value265 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value263.rdatevals,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value266 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value263.exrulevals,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value267 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value263.exdatevals,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value268 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value263.dtstart,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value269 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value263.tzid,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value270 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.cache ===
      false;
  if (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.compatible &&
      ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.forceset = true),
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.unfold = true)),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.forceset ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value264.length >
        1 ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value265.length ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value266.length ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value267.length)
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271 =
      new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value101(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value270,
      );
    return (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271.dtstart(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value268,
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271.tzid(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value269 ||
          undefined,
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value264.forEach(
        function (item) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271.rrule(
            new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper29(
                item,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value268,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value269,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value270,
            ),
          );
        },
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value265.forEach(
        function (item) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271.rdate(
            item,
          );
        },
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value266.forEach(
        function (item) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271.exrule(
            new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper29(
                item,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value268,
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value269,
              ),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value270,
            ),
          );
        },
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value267.forEach(
        function (item) {
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271.exdate(
            item,
          );
        },
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.compatible &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.dtstart &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271.rdate(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value268,
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value271
    );
  }
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value272 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value264[0] ||
    {};
  return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper29(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value272,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value272.dtstart ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.dtstart ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value268,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value272.tzid ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param35.tzid ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value269,
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value270,
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper28(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param326,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param327,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param327 ===
      undefined &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param327 =
        {}),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper27(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param326,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper30(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param327,
      ),
    )
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper29(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param330,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param331,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param332,
) {
  return assignObjectProperties(
    assignObjectProperties(
      {},
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param330,
    ),
    {
      dtstart:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param331,
      tzid: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param332,
    },
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper30(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param165,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value459 =
      [],
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value460 =
      Object.keys(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param165,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value461 =
      Object.keys(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value99,
      );
  if (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value460.forEach(
      function (item) {
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value461,
          item,
        ) ||
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value459.push(
            item,
          );
      },
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value459.length)
  )
    throw Error(
      "Invalid options: " +
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value459.join(
          ", ",
        ),
    );
  return assignObjectProperties(
    assignObjectProperties(
      {},
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value99,
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param165,
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper31(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param242,
) {
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param242.indexOf(
      ":",
    ) === -1
  )
    return {
      name: "RRULE",
      value:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param242,
    };
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value511 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value11(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param242,
      ":",
      1,
    );
  return {
    name: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value511[0],
    value:
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value511[1],
  };
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper32(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param183,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value473 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper31(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param183,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value474 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value473.name,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value475 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value473.value,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value476 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value474.split(
        ";",
      );
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value476
  )
    throw Error("empty property name");
  return {
    name: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value476[0].toUpperCase(),
    parms:
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value476.slice(
        1,
      ),
    value:
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value475,
  };
}
function _n(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param102,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param103,
) {
  if (
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param103 ===
      undefined &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param103 = false),
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param102 &&=
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param102.trim()),
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param102)
  )
    throw Error("Invalid empty string");
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param103
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param102.split(
      /\s/,
    );
  for (
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value384 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param102.split(
          "\n",
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385 = 0;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value384.length;
  ) {
    var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value386 =
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value384[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385
      ] =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value384[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385
        ].replace(/\s+$/g, ""));
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value386
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385 >
          0 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value386[0] ===
          " "
        ? ((appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value384[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385 -
              1
          ] +=
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value386.slice(
              1,
            )),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value384.splice(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385,
            1,
          ))
        : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385 += 1)
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value384.splice(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value385,
          1,
        );
  }
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value384;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper33(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param230,
) {
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param230.forEach(
    function (item) {
      if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(item))
        throw Error("unsupported RDATE/EXDATE parm: " + item);
    },
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper34(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param265,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param266,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper33(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param266,
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param265
      .split(",")
      .map(function (item) {
        return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value36(
          item,
        );
      })
  );
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value99,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value100 =
    createLazyEsmInitializer(() => {
      initTslibObjectHelpers();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value102();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value63();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value99 =
        {
          dtstart: null,
          cache: false,
          unfold: false,
          forceset: false,
          compatible: false,
          tzid: null,
        };
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper35(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param148,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value433 =
    this;
  return function (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param173,
  ) {
    if (
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param173 !==
        undefined &&
        (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value433[
          `_${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param148}`
        ] =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param173),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value433[
        `_${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param148}`
      ] !== undefined)
    )
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value433[
        `_${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param148}`
      ];
    for (
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value468 = 0;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value468 <
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value433
        ._rrule.length;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value468++
    ) {
      var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value469 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value433
          ._rrule[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value468
        ].origOptions[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param148
        ];
      if (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value469
      )
        return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value469;
    }
  };
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper36(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param245,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param246,
) {
  if (
    !(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param245 instanceof
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96
    )
  )
    throw TypeError(
      String(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param245,
      ) + " is not RRule instance",
    );
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param246.map(
      String,
    ),
    String(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param245,
    ),
  ) ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param246.push(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param245,
    );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper37(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param221,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param222,
) {
  if (
    !(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param221 instanceof
      Date
    )
  )
    throw TypeError(
      String(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param221,
      ) + " is not Date instance",
    );
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value15(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param222.map(
      Number,
    ),
    Number(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param221,
    ),
  ) ||
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param222.push(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param221,
    ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value34(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param222,
    ));
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper38(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param187,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param188,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param189,
) {
  var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value482 =
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param189 ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param189.toUpperCase() ===
      "UTC";
  return `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value482 ? `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param187}:` : `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param187};TZID=${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param189}:`}${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param188
    .map(function (item) {
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value35(
        item.valueOf(),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value482,
      );
    })
    .join(",")}`;
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value101,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value102 =
    createLazyEsmInitializer(() => {
      initTslibObjectHelpers();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value16();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value98();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value100();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value66();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value101 =
        (function (
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param4,
        ) {
          extendClassPrototype(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param4,
          );
          function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param111,
          ) {
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param111 ===
              undefined &&
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param111 = false);
            var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394 =
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param4.call(
                this,
                {},
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param111,
              ) || this;
            return (
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394.dtstart =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper35.apply(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394,
                  ["dtstart"],
                )),
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394.tzid =
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper35.apply(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394,
                  ["tzid"],
                )),
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394._rrule =
                []),
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394._rdate =
                []),
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394._exrule =
                []),
              (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394._exdate =
                []),
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value394
            );
          }
          return (
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype._iter =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param180,
              ) {
                return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper25(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param180,
                  this._rrule,
                  this._exrule,
                  this._rdate,
                  this._exdate,
                  this.tzid(),
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.rrule =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param369,
              ) {
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper36(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param369,
                  this._rrule,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.exrule =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param363,
              ) {
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper36(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param363,
                  this._exrule,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.rdate =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param370,
              ) {
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper37(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param370,
                  this._rdate,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.exdate =
              function (
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param364,
              ) {
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper37(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param364,
                  this._exdate,
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.rrules =
              function () {
                return this._rrule.map(function (item) {
                  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper28(
                    item.toString(),
                  );
                });
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.exrules =
              function () {
                return this._exrule.map(function (item) {
                  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper28(
                    item.toString(),
                  );
                });
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.rdates =
              function () {
                return this._rdate.map(function (item) {
                  return new Date(item.getTime());
                });
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.exdates =
              function () {
                return this._exdate.map(function (item) {
                  return new Date(item.getTime());
                });
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.valueOf =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242 =
                  [];
                return (
                  !this._rrule.length &&
                    this._dtstart &&
                    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242.concat(
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper12(
                          {
                            dtstart: this._dtstart,
                          },
                        ),
                      )),
                  this._rrule.forEach(function (item) {
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242.concat(
                        item.toString().split("\n"),
                      );
                  }),
                  this._exrule.forEach(function (item) {
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242 =
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242.concat(
                        item
                          .toString()
                          .split("\n")
                          .map(function (_item) {
                            return _item.replace(/^RRULE:/, "EXRULE:");
                          })
                          .filter(function (_item) {
                            return !/^DTSTART/.test(_item);
                          }),
                      );
                  }),
                  this._rdate.length &&
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242.push(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper38(
                        "RDATE",
                        this._rdate,
                        this.tzid(),
                      ),
                    ),
                  this._exdate.length &&
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242.push(
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper38(
                        "EXDATE",
                        this._exdate,
                        this.tzid(),
                      ),
                    ),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value242
                );
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.toString =
              function () {
                return this.valueOf().join("\n");
              }),
            (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105.prototype.clone =
              function () {
                var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value335 =
                  new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105(
                    !!this._cache,
                  );
                return (
                  this._rrule.forEach(function (item) {
                    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value335.rrule(
                      item.clone(),
                    );
                  }),
                  this._exrule.forEach(function (item) {
                    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value335.exrule(
                      item.clone(),
                    );
                  }),
                  this._rdate.forEach(function (item) {
                    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value335.rdate(
                      new Date(item.getTime()),
                    );
                  }),
                  this._exdate.forEach(function (item) {
                    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value335.exdate(
                      new Date(item.getTime()),
                    );
                  }),
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value335
                );
              }),
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper105
          );
        })(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96,
        );
    }),
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value103 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value97();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value102();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value100();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value54();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value4();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value39();
    });
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Underscore({
  marketplaceName,
  marketplacePath,
  plugin,
}) {
  return {
    id: plugin.id,
    isAvailable: plugin.installed && plugin.enabled,
    isRemoteCatalogEntry:
      marketplacePath == null && plugin.source.type === "remote",
    marketplaceName,
    name: plugin.name,
    remotePluginId: plugin.remotePluginId,
  };
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9V({
  apps,
  catalogSkills,
  mcpServerStatuses,
  plugins,
  skills,
  toolCalls,
}) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value146 =
      new Map(),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value147 =
      {
        skill: new Set(),
        connector: new Set(),
        plugin: new Set(),
      },
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value148 =
      (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param276,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param277,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param278,
      ) => {
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value146.set(
          `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param276}\0${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param277}\0${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param278}`,
          {
            capabilityType:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param276,
            origin:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param277,
            catalogId:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param278,
          },
        );
      },
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value149 =
      (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param392,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param393,
      ) => {
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value147[
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param392
        ].add(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param393,
        );
      };
  for (let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357 of skills) {
    if (
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value149(
        "skill",
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.privateIdentity,
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.isSystem ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.pluginId ==
          null)
    )
      continue;
    let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value365 =
        catalogSkills?.some(
          (
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param383,
          ) =>
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param383.privateIdentity ===
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.privateIdentity,
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value366 =
        plugins?.find(
          ({ id, marketplaceName, name }) =>
            marketplaceName ===
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.pluginMarketplaceName &&
            (name ===
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.pluginId ||
              id ===
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.pluginId),
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value367 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper40(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value366,
        );
    if (
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value365 ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value366 ==
        null ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value367 ==
        null
    ) {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value149(
        "plugin",
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper43(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value366,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.pluginId,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value357.pluginMarketplaceName,
        ),
      );
      continue;
    }
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value148(
      "plugin",
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value367,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper42(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value366,
      ),
    );
  }
  for (let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314 of toolCalls) {
    if (
      settingsCommandSharedRuntimeVariant18PullMember0013(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.server,
      )
    ) {
      let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value452 =
          settingsCommandSharedRuntimeVariant18PullMember0024({
            mcpServerStatuses,
            server:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.server,
            tool: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.tool,
          }),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value453 =
          apps?.find(
            (
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param396,
            ) =>
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param396.id ===
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value452,
          ),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value454 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper39(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value453,
          );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value452 !=
        null &&
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value454 !=
        null
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value148(
            "connector",
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value454,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value452,
          )
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value149(
            "connector",
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value452 ??
              `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.server}\0${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.tool}`,
          );
    } else
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.pluginId ??
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value149(
          "connector",
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.server,
        );
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.pluginId !=
      null
    ) {
      let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value442 =
          plugins?.find(
            ({ id, remotePluginId }) =>
              id ===
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.pluginId ||
              remotePluginId ===
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.pluginId,
          ),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value443 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper40(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value442,
          );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value442 !=
        null &&
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value443 !=
        null
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value148(
            "plugin",
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value443,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper42(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value442,
            ),
          )
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value149(
            "plugin",
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper43(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value442,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value314.pluginId,
              null,
            ),
          );
    }
  }
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value150 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value105
        .filter(
          (item) =>
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value147[
              item
            ].size > 0,
        )
        .map((item) => ({
          capabilityType: item,
          origin: "custom",
          customDistinctCount:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value147[
              item
            ].size,
        })),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value151 =
      Array.from(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value146.values(),
      ).sort(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper44,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value152 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value104 -
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value150.length;
  return {
    capabilities: [
      ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value151.slice(
        0,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value152,
      ),
      ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value150,
    ].sort(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper44,
    ),
    capabilitiesTruncated:
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value151.length >
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value152,
  };
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper39(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param170,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param170?.appMetadata?.firstPartyType?.trim() ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param170?.distributionChannel ===
      "DEFAULT_OAI_CATALOG"
    ? "firstParty"
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param170?.distributionChannel ===
        "ECOSYSTEM_DIRECTORY"
      ? "marketplace"
      : null;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper40(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param333,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param333 ==
    null ||
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param333.isAvailable
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper41(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param333,
      );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper41(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140 ==
    null
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140.id ===
          `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140.name}@${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140.marketplaceName}` &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value109.has(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140.id,
        )
      ? "firstParty"
      : !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140.isRemoteCatalogEntry ||
          !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value108.has(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140.marketplaceName,
          )
        ? null
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value107.has(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param140.marketplaceName,
            )
          ? "firstParty"
          : "marketplace";
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper42(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param299,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param299.isRemoteCatalogEntry
    ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param299.remotePluginId ??
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param299.id)
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param299.id;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper43(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param290,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param291,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param292,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param290?.id ??
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param292 ==
      null ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param291.includes(
      "@",
    )
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param291
      : `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param291}@${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param292}`)
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper44(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param115,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param116,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value399 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value105.indexOf(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param115.capabilityType,
    ) -
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value105.indexOf(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param116.capabilityType,
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value399 !==
    0
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value399;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value400 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value106.indexOf(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param115.origin,
    ) -
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value106.indexOf(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param116.origin,
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value400 ===
    0
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param115.origin ===
        "custom" ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param116.origin ===
        "custom" ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param115.catalogId ===
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param116.catalogId
      ? 0
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param115.catalogId <
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param116.catalogId
        ? -1
        : 1
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value400;
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value104,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value105,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value106,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value107,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value108,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value109,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Y =
    createLazyEsmInitializer(() => {
      currentQueryRpcAliasLowerw();
      settingsCommandSharedRuntimeVariant18PullMember0031();
      settingsCommandSharedRuntimeVariant18PullMember0028();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value104 = 100;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value105 =
        ["skill", "connector", "plugin"];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value106 =
        ["firstParty", "marketplace", "custom"];
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value107 =
        new Set([
          "codex-official",
          currentQueryRpcAliasUpperULowera,
          "openai-primary-runtime",
        ]);
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value108 =
        new Set([
          ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value107,
          currentQueryRpcAliasUpperCLowern,
          currentQueryRpcAliasLowerwLowern,
        ]);
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value109 =
        new Set([
          ...[
            currentQueryRpcAliasUpperILowera,
            currentQueryRpcAliasUpperLLowera,
            currentQueryRpcAliasUpperRLowera,
            currentQueryRpcAliasLowerzLowera,
            currentQueryRpcAliasUpperBLowera,
            currentQueryRpcAliasUpperVLowera,
            currentQueryRpcAliasUpperHLowera,
            "chrome",
            "chrome-dev",
          ].map((item) => `${item}@${currentQueryRpcAliasUpperULowera}`),
          "documents@openai-primary-runtime",
          "pdf@openai-primary-runtime",
          "presentations@openai-primary-runtime",
          "spreadsheets@openai-primary-runtime",
        ]);
    });
async function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper45(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param90,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param91,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value368 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param90 ==
    null
      ? null
      : currentQueryRpcAliasDollarLowern(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param90,
        );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value368 ==
    null
  )
    return {};
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value369 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param91?.find(
        ({ id }) =>
          id ===
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value368.pluginId,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value370 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper41(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value369,
      );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value370 ==
    null
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper46(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value368,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value369 ==
          null
          ? businessCheckoutSharedMember0769.CODEX_AUTOMATION_CAPABILITY_ORIGIN_UNSPECIFIED
          : businessCheckoutSharedMember0769.CODEX_AUTOMATION_CAPABILITY_ORIGIN_CUSTOM,
      )
    : {
        pluginSource: {
          origin:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value110[
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value370
            ],
          pluginId:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value368.pluginId,
          scheduledTaskKey:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value368.scheduledTaskKey,
        },
      };
}
async function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper46(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param125,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param126,
) {
  try {
    let [
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value434,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value435,
    ] = await Promise.all([
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper47(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param125.pluginId,
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper47(
        `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param125.pluginId}\0${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param125.scheduledTaskKey}`,
      ),
    ]);
    return {
      pluginSource: {
        origin:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param126,
        pluginId: `sha256:${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value434}`,
        scheduledTaskKey: `sha256:${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value435}`,
      },
    };
  } catch {
    return {};
  }
}
async function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper47(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param186,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value481 =
    await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param186,
      ),
    );
  return Array.from(
    new Uint8Array(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value481,
    ),
    (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param388,
    ) =>
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param388
        .toString(16)
        .padStart(2, "0"),
  ).join("");
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value110,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value111 =
    createLazyEsmInitializer(() => {
      businessCheckoutSharedInitializer0837();
      currentQueryRpcAliasLowerw();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Y();
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value110 =
        {
          firstParty:
            businessCheckoutSharedMember0769.CODEX_AUTOMATION_CAPABILITY_ORIGIN_FIRST_PARTY,
          marketplace:
            businessCheckoutSharedMember0769.CODEX_AUTOMATION_CAPABILITY_ORIGIN_MARKETPLACE,
        };
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper48(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param251,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value513 =
    new Map(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112.map(
        (item, index) => [item, index],
      ),
    );
  return [
    ...new Set(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param251,
    ),
  ].sort(
    (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param385,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param386,
    ) =>
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value513.get(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param385,
      ) ?? 0) -
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value513.get(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param386,
      ) ?? 0),
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper49(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param155,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param156,
) {
  let [
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value447,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value448,
    ] =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param155.split(
        ":",
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value449 =
      Number(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value447,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value450 =
      Number(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value448,
      );
  return !Number.isFinite(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value449,
  ) ||
    !Number.isFinite(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value450,
    )
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param156.formatTime(
        new Date(
          2024,
          0,
          1,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value449,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value450,
        ),
        {
          hour: "numeric",
          minute: "2-digit",
        },
      );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper50(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param12,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param13,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param12
  ) {
    case "SU":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param13.formatMessage(
        {
          id: "settings.automations.scheduleSummary.sundaysLabel",
          defaultMessage: "Sundays",
          description: "Plural Sunday label for schedule summaries",
        },
      );
    case "MO":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param13.formatMessage(
        {
          id: "settings.automations.scheduleSummary.mondaysLabel",
          defaultMessage: "Mondays",
          description: "Plural Monday label for schedule summaries",
        },
      );
    case "TU":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param13.formatMessage(
        {
          id: "settings.automations.scheduleSummary.tuesdaysLabel",
          defaultMessage: "Tuesdays",
          description: "Plural Tuesday label for schedule summaries",
        },
      );
    case "WE":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param13.formatMessage(
        {
          id: "settings.automations.scheduleSummary.wednesdaysLabel",
          defaultMessage: "Wednesdays",
          description: "Plural Wednesday label for schedule summaries",
        },
      );
    case "TH":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param13.formatMessage(
        {
          id: "settings.automations.scheduleSummary.thursdaysLabel",
          defaultMessage: "Thursdays",
          description: "Plural Thursday label for schedule summaries",
        },
      );
    case "FR":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param13.formatMessage(
        {
          id: "settings.automations.scheduleSummary.fridaysLabel",
          defaultMessage: "Fridays",
          description: "Plural Friday label for schedule summaries",
        },
      );
    case "SA":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param13.formatMessage(
        {
          id: "settings.automations.scheduleSummary.saturdaysLabel",
          defaultMessage: "Saturdays",
          description: "Plural Saturday label for schedule summaries",
        },
      );
  }
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper51(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param62,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param63,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param64,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param65,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param66,
) {
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param64
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param63.formatMessage(
      {
        id: "settings.automations.scheduleSummary.weekdaysLabel",
        defaultMessage: "weekdays",
        description: "Weekday label for schedule summaries",
      },
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param65
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param63.formatMessage(
      {
        id: "settings.automations.scheduleSummary.weekendsLabel",
        defaultMessage: "weekends",
        description: "Weekend label for schedule summaries",
      },
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param66 ===
      "long" &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param62.length ===
      1
  ) {
    let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value537 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param62[0];
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value537
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper50(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value537,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param63,
        )
      : null;
  }
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param62.length >
    2 &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper58(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param62,
    )
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper57(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param62,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param63,
      )
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper53(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param62,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param63,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param62.length >
          2
          ? "short"
          : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param66,
      );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param295,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param296,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param295.length ===
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param296.length
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param296.every(
        (item) =>
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param295.includes(
            item,
          ),
      )
    : false;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper53(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param207,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param208,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param209,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value498 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param207.map(
      (item) =>
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param209 ===
        "short"
          ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper56(
              item,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param208,
            )
          : $n(
              item,
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param208,
              "long",
            ),
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value498.length ===
    0
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param208.formatList(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value498,
        {
          type: "conjunction",
        },
      );
}
function $n(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param305,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param306,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param307,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value534 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper54(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param305,
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param306.formatDate(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value534,
    {
      weekday:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param307,
    },
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper54(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param338,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value536 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper55(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param338,
    );
  return new Date(
    2024,
    0,
    7 +
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value536,
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper55(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param391,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112.indexOf(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param391,
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper56(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param231,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param232,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value505 =
      $n(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param231,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param232,
        "short",
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value506 =
      $n(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param231,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param232,
        "long",
      );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value505.length >=
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value506.length
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param232.formatDate(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper54(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param231,
        ),
        {
          weekday: "narrow",
        },
      )
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value505;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper57(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param128,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param129,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value413 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper48(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param128,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value414 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value413[0],
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value415 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value413[
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value413.length -
          1
      ];
  return !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value414 ||
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value415
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param129.formatMessage(
        {
          id: "settings.automations.scheduleSummary.weekdaysLabel",
          defaultMessage: "weekdays",
          description: "Weekday label for schedule summaries",
        },
      )
    : `${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper56(appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value414, appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param129)}-${appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper56(appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value415, appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param129)}`;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper58(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param166,
) {
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param166.length <
    2
  )
    return false;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value462 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper48(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param166,
    );
  for (
    let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value500 = 1;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value500 <
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value462.length;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value500 += 1
  ) {
    let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value516 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112.indexOf(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value462[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value500 -
              1
          ] ?? "",
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value517 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112.indexOf(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value462[
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value500
          ] ?? "",
        );
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value516 <
        0 ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value517 <
        0 ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value517 !==
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value516 +
          1
    )
      return false;
  }
  return true;
}
var appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value113 =
    createLazyEsmInitializer(() => {
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112 =
        ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    });
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9A() {
  return {
    mode: "daily",
    intervalHours: 24,
    intervalMinutes: null,
    weekdays: $,
    time: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value115,
    customRrule: "",
  };
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9I() {
  return {
    ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9A(),
    mode: "hourly",
    intervalHours: 1,
    intervalMinutes: 30,
    weekdays: $,
    customRrule: "",
  };
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9G(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param146,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value429 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9A(),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value430 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper67(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param146,
      );
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value430
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value429;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value431 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper70(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value430,
    );
  return {
    ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value429,
    mode: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value431,
    intervalHours:
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value430.interval,
    intervalMinutes: null,
    weekdays:
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value430.weekdays,
    time: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value430.time,
    customRrule:
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value431 ===
      "custom"
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value430.rruleText
        : "",
  };
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9H(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param93,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value373 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9I(),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value374 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper67(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param93,
      );
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value374
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value373;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value375 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper65(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value374,
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value375 ==
    null
  ) {
    let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value464 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper70(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value374,
      );
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value464 ===
      "daily" ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value464 ===
        "weekdays" ||
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value464 ===
        "weekly"
      ? {
          ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value373,
          mode: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value464,
          weekdays:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value374.weekdays,
          time: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value374.time,
        }
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value464 ===
          "custom"
        ? {
            ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value373,
            mode: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value464,
            customRrule:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value374.rruleText,
          }
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value373;
  }
  return {
    ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value373,
    intervalHours: Math.max(
      1,
      Math.round(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value375 /
          60,
      ),
    ),
    intervalMinutes:
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value375,
  };
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper59(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param253,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value514 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper67(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param253,
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value514 ==
    null
  )
    return {};
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value515 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper75(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value514.freq,
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value515 ==
    null
    ? {}
    : {
        scheduleFreq:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value515,
      };
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9L(
  event,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value297 =
      event.reasoningEffort == null
        ? undefined
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper73(
            event.reasoningEffort,
          ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value298 =
      {
        kind: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper71(
          event.kind,
        ),
        ...("status" in event
          ? {
              status:
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper72(
                  event.status,
                ),
            }
          : {}),
        ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper59(
          event.rrule,
        ),
        hasModel: event.model != null,
        reasoningEffort:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value297,
      };
  if (event.kind !== "cron")
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value298;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value299 =
      "projectId" in event
        ? event.projectId == null
          ? 0
          : 1
        : event.target?.type === "project"
          ? 1
          : event.target?.type === "projectless"
            ? 0
            : event.cwds.length,
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value300 =
      {
        ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value298,
        cwdCount:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value299,
        executionEnvironment:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper74(
            event.executionEnvironment,
          ),
      };
  return (
    event.localEnvironmentConfigPath !== undefined &&
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value300.hasLocalEnvironmentConfig =
        event.localEnvironmentConfigPath != null),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value300
  );
}
export async function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9P(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param149,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param150,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param151,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param152,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param153 = appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param151?.kind ===
    "cron" &&
  "pluginTemplateId" in
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param151
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param151
    : null,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value436 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param153?.kind ===
    "cron"
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param153.pluginTemplateId
      : null;
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param149.logProductEvent(
    businessCheckoutSharedMember0786,
    {
      ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param150,
      ...(appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param151 ==
      null
        ? {}
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9L(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param151,
          )),
      ...(await appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper45(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value436,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param152,
      )),
    },
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9N(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.mode
  ) {
    case "hourly":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.intervalMinutes ==
        null
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper61(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.intervalHours,
          )
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper62(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.intervalMinutes,
          );
    case "daily":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper66(
        {
          time: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.time,
          weekdays: $,
        },
      );
    case "weekdays":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper66(
        {
          time: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.time,
          weekdays: Array.from($r),
        },
      );
    case "weekly":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper66(
        {
          time: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.time,
          weekdays: [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper90(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.weekdays,
            ),
          ],
        },
      );
    case "custom":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param92.customRrule.trim();
  }
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9F(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param123,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param123.mode
  ) {
    case "hourly":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param123.intervalMinutes ==
        null
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper63(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param123.intervalHours,
          ) != null
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper64(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param123.intervalMinutes,
          ) != null;
    case "daily":
    case "weekdays":
    case "weekly":
      return (
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9U(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param123.time,
        ) != null
      );
    case "custom":
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper91(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param123.customRrule.trim(),
      );
  }
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9R(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param50,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param50 ===
    "custom"
    ? {
        ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49,
        mode: "custom",
        customRrule:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49.mode ===
            "custom" &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49.customRrule.trim()
            ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49.customRrule
            : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9N(
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49,
              ),
      }
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param50 ===
        "hourly"
      ? {
          ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49,
          mode: "hourly",
          intervalHours:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49.mode ===
            "hourly"
              ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper63(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49.intervalHours,
                ) ?? 1)
              : 1,
          intervalMinutes:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49.intervalMinutes ==
            null
              ? null
              : (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper64(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49.intervalMinutes,
                ) ?? 30),
        }
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param50 ===
          "daily"
        ? {
            ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49,
            mode: "daily",
            weekdays: $,
          }
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param50 ===
            "weekdays"
          ? {
              ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49,
              mode: "weekdays",
              weekdays: Array.from($r),
            }
          : {
              ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49,
              mode: "weekly",
              weekdays: [
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper90(
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param49.weekdays,
                ),
              ],
            };
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9M(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param17,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper67(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param17,
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186 ==
      null ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186.hasMultipleTimeValues
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value187 =
    {
      interval: Math.max(
        1,
        Math.round(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186.interval,
        ),
      ),
      weekdays:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186.weekdays,
      month: 1,
      monthDays: [1],
      time: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186.time,
      minute:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186.minute ??
        0,
    };
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186.freq
  ) {
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY:
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value124,
      ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186
            .origOptions.byminute,
        ) != null &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186.weekdays,
          $,
        )
        ? {
            ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value187,
            frequency: "hourly",
          }
        : null;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.DAILY:
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value123,
      ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper69(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        )
        ? {
            ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value187,
            frequency: "daily",
          }
        : null;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY:
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        ui,
      ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper69(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186
          .origOptions.byweekday != null &&
        !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper87(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186
            .origOptions.byweekday,
        )
        ? {
            ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value187,
            frequency: "weekly",
          }
        : null;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MONTHLY: {
      let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value503 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper84(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186
            .origOptions.bymonthday,
        );
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value125,
      ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper69(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper86(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value503,
        )
        ? {
            ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value187,
            frequency: "monthly",
            monthDays:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value503,
          }
        : null;
    }
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.YEARLY: {
      let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value405 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper84(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186
              .origOptions.bymonth,
          ),
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value406 =
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper84(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186
              .origOptions.bymonthday,
          );
      return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value126,
      ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper69(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value186,
        ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value405.length ===
          1 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value405[0] !=
          null &&
        Number.isInteger(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value405[0],
        ) &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value405[0] >=
          1 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value405[0] <=
          12 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper86(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value406,
        )
        ? {
            ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value187,
            frequency: "yearly",
            month:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value405[0],
            monthDays:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value406,
          }
        : null;
    }
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.SECONDLY:
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MINUTELY:
      return null;
  }
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9T(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value255 =
    Math.max(
      1,
      Math.round(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.interval,
      ),
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.frequency ===
    "hourly"
  )
    return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
      {
        freq: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY,
        interval:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value255,
        byminute: Math.min(
          59,
          Math.max(
            0,
            Math.round(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.minute,
            ),
          ),
        ),
      },
    ).toString();
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value256 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9U(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.time,
    ) ??
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9U(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value115,
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value256 ==
    null
  )
    return "";
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257 =
    {
      freq: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.DAILY,
      interval:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value255,
      byhour:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value256.hour,
      byminute:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value256.minute,
    };
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.frequency
  ) {
    case "daily":
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257.freq =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.DAILY;
      break;
    case "weekly":
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257.freq =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257.byweekday =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper48(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.weekdays,
        ).map(
          (item) =>
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value127[
              item
            ],
        );
      break;
    case "monthly":
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257.freq =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MONTHLY;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257.bymonthday =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper85(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.monthDays,
        );
      break;
    case "yearly":
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257.freq =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.YEARLY;
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257.bymonth =
        Math.min(
          12,
          Math.max(
            1,
            Math.round(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.month,
            ),
          ),
        );
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257.bymonthday =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper85(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param32.monthDays,
        );
      break;
  }
  return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value257,
  ).toString();
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper60(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param378,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param378.length >
    0
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper48(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param378,
      )
    : $;
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9O(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param373,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param374,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper76(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper67(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9N(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param373,
        ),
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param374,
    ) ?? null
  );
}
export function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9S({
  rrule,
  intl,
  fallbackMessage,
}) {
  return rrule
    ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper76(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper67(
          rrule,
        ),
        intl,
      ) ?? fallbackMessage)
    : null;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper61(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param219,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value501 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper63(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param219,
    ) ?? 1;
  return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
    {
      freq: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY,
      interval:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value501,
      byminute: 0,
      byweekday: $.map(
        (item) =>
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value127[
            item
          ],
      ),
    },
  ).toString();
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper62(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param274,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value529 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper64(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param274,
    ) ?? 30;
  return new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
    {
      freq: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MINUTELY,
      interval:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value529,
    },
  ).toString();
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper63(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param268,
) {
  if (
    !Number.isFinite(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param268,
    )
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value521 =
    Math.round(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param268,
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value521 <
    1
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value521;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper64(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param269,
) {
  if (
    !Number.isFinite(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param269,
    )
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value522 =
    Math.round(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param269,
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value522 <
    1
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value522;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper65(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130.hasMultipleTimeValues
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130.freq ===
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MINUTELY &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130,
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value120,
        )
      ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper64(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130.interval,
        ) ?? 30)
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130.freq ===
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130,
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value121,
          ) &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130
              .origOptions.byminute,
          ) === 0 &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130.weekdays,
            $,
          )
        ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper63(
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param130.interval,
          ) ?? 1) * 60
        : null;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper66({
  time,
  weekdays,
}) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value463 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9U(
      time,
    ) ??
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9U(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value115,
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value463
    ? new appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96(
        {
          freq: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY,
          byhour:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value463.hour,
          byminute:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value463.minute,
          byweekday:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper48(
              weekdays,
            ).map(
              (item) =>
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value127[
                  item
                ],
            ),
        },
      ).toString()
    : "";
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper67(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param33,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param33
  )
    return null;
  try {
    let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value286 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper28(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param33,
          {
            forceset: true,
            tzid:
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper92() ??
              undefined,
          },
        ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value287 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value286.rrules()[0];
    if (
      !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value287
    )
      return null;
    let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value287.options,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value289 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper88(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288.byweekday,
        ) ??
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper89(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param33,
        ) ??
        $,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value290 =
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288.byminute,
        );
    return {
      freq: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288.freq,
      isStandaloneRrule:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value287
          .origOptions.dtstart == null &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value286.rrules()
          .length === 1 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value286.rdates()
          .length === 0 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value286.exrules()
          .length === 0 &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value286.exdates()
          .length === 0,
      hasMultipleTimeValues:
        (Array.isArray(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288.byhour,
        ) &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288
            .byhour.length > 1) ||
        (Array.isArray(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288.byminute,
        ) &&
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288
            .byminute.length > 1),
      interval: Math.max(
        1,
        Math.round(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288.interval ??
            1,
        ),
      ),
      minute:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value290,
      origOptions:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value287.origOptions,
      rruleText:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param33,
      time: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper82(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288.byhour,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288.byminute,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value288,
      ),
      weekdays:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value289,
    };
  } catch {
    return null;
  }
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param249,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param250,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param249.isStandaloneRrule &&
    Object.entries(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param249.origOptions,
    ).every(
      ([
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param394,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param395,
      ]) =>
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param395 ==
          null ||
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param250.has(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param394,
        ),
    )
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper69(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param282,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param282
        .origOptions.byhour,
    ) != null &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param282
        .origOptions.byminute,
    ) != null
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper70(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77,
) {
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.hasMultipleTimeValues
  )
    return "custom";
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.freq ===
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value121,
    ) &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.interval ===
      1 &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77
        .origOptions.byminute,
    ) === 0 &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.weekdays,
      $,
    )
  )
    return "hourly";
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper68(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value122,
    ) &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper69(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77,
    ) &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.interval ===
      1 &&
    (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.freq ===
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.DAILY ||
      (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.freq ===
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY &&
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77
          .origOptions.byweekday != null))
  ) {
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.weekdays,
        $,
      )
    )
      return "daily";
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77.weekdays,
        $r,
      )
    )
      return "weekdays";
    if (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param77
        .weekdays.length === 1
    )
      return "weekly";
  }
  return "custom";
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper71(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param213,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param213
  ) {
    case "cron":
      return businessCheckoutSharedMember0820.CODEX_AUTOMATION_KIND_CRON;
    case "heartbeat":
      return businessCheckoutSharedMember0820.CODEX_AUTOMATION_KIND_HEARTBEAT;
  }
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper72(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param167,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param167
  ) {
    case "ACTIVE":
      return businessCheckoutSharedMember0600.CODEX_AUTOMATION_STATUS_ACTIVE;
    case "PAUSED":
      return businessCheckoutSharedMember0600.CODEX_AUTOMATION_STATUS_PAUSED;
    case "DELETED":
      return businessCheckoutSharedMember0600.CODEX_AUTOMATION_STATUS_DELETED;
  }
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper73(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param61,
) {
  if (
    pluginDetailRuntimeMember0033(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param61,
    )
  )
    switch (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param61
    ) {
      case "none":
        return businessCheckoutSharedMember0531.CODEX_AUTOMATION_REASONING_EFFORT_NONE;
      case "minimal":
        return businessCheckoutSharedMember0531.CODEX_AUTOMATION_REASONING_EFFORT_MINIMAL;
      case "low":
        return businessCheckoutSharedMember0531.CODEX_AUTOMATION_REASONING_EFFORT_LOW;
      case "medium":
        return businessCheckoutSharedMember0531.CODEX_AUTOMATION_REASONING_EFFORT_MEDIUM;
      case "high":
        return businessCheckoutSharedMember0531.CODEX_AUTOMATION_REASONING_EFFORT_HIGH;
      case "xhigh":
        return businessCheckoutSharedMember0531.CODEX_AUTOMATION_REASONING_EFFORT_XHIGH;
      case "max":
        return businessCheckoutSharedMember0531.CODEX_AUTOMATION_REASONING_EFFORT_MAX;
      case "ultra":
        return;
    }
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper74(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param184,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param184
  ) {
    case "worktree":
      return businessCheckoutSharedMember0514.CODEX_AUTOMATION_EXECUTION_ENVIRONMENT_WORKTREE;
    case "local":
      return businessCheckoutSharedMember0514.CODEX_AUTOMATION_EXECUTION_ENVIRONMENT_LOCAL;
  }
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper75(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param69,
) {
  switch (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param69
  ) {
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.SECONDLY:
      return businessCheckoutSharedMember0736.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_SECONDLY;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MINUTELY:
      return businessCheckoutSharedMember0736.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_MINUTELY;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY:
      return businessCheckoutSharedMember0736.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_HOURLY;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.DAILY:
      return businessCheckoutSharedMember0736.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_DAILY;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY:
      return businessCheckoutSharedMember0736.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_WEEKLY;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MONTHLY:
      return businessCheckoutSharedMember0736.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_MONTHLY;
    case appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.YEARLY:
      return businessCheckoutSharedMember0736.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_YEARLY;
  }
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper76(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param71,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70 ||
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.hasMultipleTimeValues
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value336 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper60(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.weekdays,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value337 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value336.length ===
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112.length;
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.freq ===
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MINUTELY
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper78(
      {
        intervalMinutes:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.interval,
        intl: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param71,
        isEveryDay:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value337,
        weekdays:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value336,
      },
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.freq ===
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.HOURLY
  )
    return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper77(
      {
        intervalHours:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.interval,
        intl: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param71,
        isEveryDay:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value337,
        weekdays:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value336,
      },
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.freq !==
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.DAILY &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.freq !==
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WEEKLY
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value338 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper49(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param70.time,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param71,
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value338
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper81(
        {
          intl: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param71,
          isEveryDay:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value337,
          timeLabel:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value338,
          weekdays:
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value336,
        },
      )
    : null;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper77({
  intervalHours,
  intl,
  isEveryDay,
  weekdays,
}) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper79(
    {
      intervalLabel:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper80(
          intervalHours *
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value117,
          intl,
        ),
      intl,
      isEveryDay,
      weekdays,
    },
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper78({
  intervalMinutes,
  intl,
  isEveryDay,
  weekdays,
}) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper79(
    {
      intervalLabel:
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper80(
          intervalMinutes,
          intl,
        ),
      intl,
      isEveryDay,
      weekdays,
    },
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper79({
  intervalLabel,
  intl,
  isEveryDay,
  weekdays,
}) {
  if (isEveryDay) return intervalLabel;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value372 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper51(
      weekdays,
      intl,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
        weekdays,
        $r,
      ),
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
        weekdays,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value114,
      ),
      "long",
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value372 ==
    null
    ? intervalLabel
    : intl.formatMessage(
        {
          id: "settings.automations.scheduleSummary.intervalDays",
          defaultMessage: "{interval} on {days}",
          description:
            "Automation schedule summary for interval schedule with weekday selection",
        },
        {
          interval: intervalLabel,
          days: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value372,
        },
      );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper80(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 ===
    1
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7.formatMessage(
        {
          id: "settings.automations.scheduleSummary.intervalMinute",
          defaultMessage: "Every minute",
          description: "Automation schedule summary for one-minute interval",
        },
      )
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 ===
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value117
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7.formatMessage(
          {
            id: "settings.automations.scheduleSummary.intervalHourly",
            defaultMessage: "Hourly",
            description: "Automation schedule summary for hourly interval",
          },
        )
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 ===
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value118
        ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7.formatMessage(
            {
              id: "settings.automations.scheduleSummary.intervalDaily",
              defaultMessage: "Daily",
              description: "Automation schedule summary for daily interval",
            },
          )
        : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 ===
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value119
          ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7.formatMessage(
              {
                id: "settings.automations.scheduleSummary.intervalWeekly",
                defaultMessage: "Weekly",
                description: "Automation schedule summary for weekly interval",
              },
            )
          : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 %
                appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value119 ===
              0
            ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7.formatMessage(
                {
                  id: "settings.automations.scheduleSummary.intervalWeeks",
                  defaultMessage:
                    "Every {count, plural, one {# week} other {# weeks}}",
                  description:
                    "Automation schedule summary for an exact week interval",
                },
                {
                  count:
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 /
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value119,
                },
              )
            : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 %
                  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value118 ===
                0
              ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7.formatMessage(
                  {
                    id: "settings.automations.scheduleSummary.intervalDaysExact",
                    defaultMessage:
                      "Every {count, plural, one {# day} other {# days}}",
                    description:
                      "Automation schedule summary for an exact day interval",
                  },
                  {
                    count:
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 /
                      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value118,
                  },
                )
              : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 %
                    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value117 ===
                  0
                ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7.formatMessage(
                    {
                      id: "settings.automations.scheduleSummary.intervalHours",
                      defaultMessage:
                        "Every {count, plural, one {# hour} other {# hours}}",
                      description:
                        "Automation schedule summary for an exact hour interval",
                    },
                    {
                      count:
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6 /
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value117,
                    },
                  )
                : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param7.formatMessage(
                    {
                      id: "settings.automations.scheduleSummary.intervalMinutes",
                      defaultMessage:
                        "Every {count, plural, one {# minute} other {# minutes}}",
                      description:
                        "Automation schedule summary for an exact minute interval",
                    },
                    {
                      count:
                        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param6,
                    },
                  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper81({
  intl,
  isEveryDay,
  timeLabel,
  weekdays,
}) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value217 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
        weekdays,
        $r,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value218 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper52(
        weekdays,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value114,
      );
  if (isEveryDay)
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.daily",
        defaultMessage: "Daily at {time}",
        description: "Automation schedule summary for daily schedule every day",
      },
      {
        time: timeLabel,
      },
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value217
  )
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.weekdays",
        defaultMessage: "Weekdays at {time}",
        description:
          "Automation schedule summary for daily schedule on weekdays",
      },
      {
        time: timeLabel,
      },
    );
  if (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value218
  )
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.weekends",
        defaultMessage: "Weekends at {time}",
        description:
          "Automation schedule summary for daily schedule on weekends",
      },
      {
        time: timeLabel,
      },
    );
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value219 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper51(
      weekdays,
      intl,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value217,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value218,
      "long",
    );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value219
    ? intl.formatMessage(
        {
          id: "settings.automations.scheduleSummary.weekly",
          defaultMessage: "{days} at {time}",
          description: "Automation schedule summary for weekly schedule",
        },
        {
          days: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value219,
          time: timeLabel,
        },
      )
    : null;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper82(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param190,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param191,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param192,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value484 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param190,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value485 =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param191,
      );
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value484 !=
    null &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value485 !=
      null
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9C(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value484,
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value485,
      )
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param192.dtstart
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9C(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param192.dtstart.getHours(),
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param192.dtstart.getMinutes(),
        )
      : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value115;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper83(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param233,
) {
  return Array.isArray(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param233,
  )
    ? typeof appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param233[0] ==
      "number"
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param233[0]
      : null
    : typeof appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param233 ==
        "number"
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param233
      : null;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper84(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param248,
) {
  return Array.isArray(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param248,
  )
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param248.filter(
        (item) => typeof item == "number",
      )
    : typeof appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param248 ==
        "number"
      ? [
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param248,
        ]
      : [];
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper85(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param252,
) {
  return Array.from(
    new Set(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param252.map(
        (item) => Math.min(31, Math.max(1, Math.round(item))),
      ),
    ),
  ).sort(
    (
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param397,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param398,
    ) =>
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param397 -
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param398,
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper86(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param267,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param267.length >
      0 &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param267.every(
      (item) => Number.isInteger(item) && item >= 1 && item <= 31,
    )
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper87(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param259,
) {
  return (
    Array.isArray(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param259,
    )
      ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param259
      : [
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param259,
        ]
  ).some((item) => typeof item == "object" && !!item && item.n != null);
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper88(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param76,
) {
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param76
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value342 =
      new Map(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112.map(
          (item) => [
            appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value127[
              item
            ].weekday,
            item,
          ],
        ),
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value343 =
      (
        Array.isArray(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param76,
        )
          ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param76
          : [
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param76,
            ]
      )
        .map((item) => {
          if (typeof item == "string") {
            let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value531 =
              item.toUpperCase();
            return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112.includes(
              appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value531,
            )
              ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value531
              : null;
          }
          return typeof item == "number"
            ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value342.get(
                item,
              ) ?? null)
            : typeof item == "object" && item && typeof item.weekday == "number"
              ? (appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value342.get(
                  item.weekday,
                ) ?? null)
              : null;
        })
        .filter((item) => item != null);
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value343.length ===
    0
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper48(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value343,
      );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper89(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param124,
) {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value409 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param124
      .split(";")
      .find((item) => item.startsWith("BYDAY="));
  if (
    !appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value409
  )
    return null;
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value410 =
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value409
      .replace("BYDAY=", "")
      .split(",")
      .map((item) => {
        let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value530 =
          item.trim().toUpperCase();
        return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112.includes(
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value530,
        )
          ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value530
          : null;
      })
      .filter((item) => item != null);
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value410.length ===
    0
    ? null
    : appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper48(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value410,
      );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper90(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param387,
) {
  return (
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper60(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param387,
    )[0] ??
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value116
  );
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9U(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param201,
) {
  let [
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value491,
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value492,
    ] =
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param201.split(
        ":",
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value493 =
      Number(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value491,
      ),
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value494 =
      Number(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value492,
      );
  return !Number.isFinite(
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value493,
  ) ||
    !Number.isFinite(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value494,
    )
    ? null
    : {
        hour: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value493,
        minute:
          appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value494,
      };
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper91(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param380,
) {
  return appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param380
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper67(
        appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param380,
      ) != null
    : false;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9C(
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param288,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param289,
) {
  return `${String(appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param288).padStart(2, "0")}:${String(appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Param289).padStart(2, "0")}`;
}
function appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Helper92() {
  let appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value512 =
    Intl.DateTimeFormat().resolvedOptions().timeZone;
  return typeof appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value512 ==
    "string" &&
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value512.trim()
      .length > 0
    ? appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value512
    : null;
}
var $,
  $r,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value114,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value115,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value116,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value117,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value118,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value119,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value120,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value121,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value122,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value123,
  ui,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value124,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value125,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value126,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value127;
export const appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9D =
  createLazyEsmInitializer(() => {
    businessCheckoutSharedInitializer0837();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value103();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value111();
    pluginDetailRuntimeMember0013();
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value113();
    $ = Array.from(
      appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value112,
    );
    $r = ["MO", "TU", "WE", "TH", "FR"];
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value114 =
      ["SA", "SU"];
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value115 =
      "09:00";
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value116 =
      "MO";
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value117 = 60;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value118 = 1440;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value119 = 10080;
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value120 =
      new Set(["freq", "interval", "dtstart", "tzid"]);
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value121 =
      new Set([
        ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value120,
        "byweekday",
        "byminute",
      ]);
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value122 =
      new Set([
        ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value121,
        "byhour",
      ]);
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value123 =
      new Set(["freq", "interval", "byhour", "byminute"]);
    ui = new Set([
      ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value123,
      "byweekday",
    ]);
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value124 =
      new Set(["freq", "interval", "byminute", "byweekday"]);
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value125 =
      new Set([
        ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value123,
        "bymonthday",
      ]);
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value126 =
      new Set([
        ...appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value125,
        "bymonth",
      ]);
    appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value127 =
      {
        MO: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.MO,
        TU: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.TU,
        WE: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.WE,
        TH: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.TH,
        FR: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.FR,
        SA: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.SA,
        SU: appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Value96.SU,
      };
  });
export {
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9A,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9B,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9C,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9I,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9L,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9N,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9U,
  appInitialAvatarOverlayCompositionSurfaceAppMainPullRequestRoutePluginDetailPageHj7snlk9Y,
};
