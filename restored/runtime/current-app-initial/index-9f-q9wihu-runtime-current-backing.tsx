// Restored from ref/webview/assets/index-9fQ9wihu-4jZrqTVk.js
// Flat boundary vendored current-build implementation used by the semantic positional adapter.
// Index9fQ9wihu chunk restored from the Codex webview bundle.
import { createLazyEsmInitializer as rolldownRuntimeN } from "../rolldown/index";
import {
  registerBqqwIolcRuntimeVariant2Member0001 as RegisterBqqwIOLcA,
  registerBqqwIolcRuntimeVariant2Member0005 as RegisterBqqwIOLcN,
  registerBqqwIolcRuntimeVariant2Member0010 as RegisterBqqwIOLcU,
} from "../current-ref-aliases/register-bqqw-iolc-runtime-variant-2/index";
function index9fQ9wihuHelper1() {
  return {
    enter: {
      mathFlow: index9fQ9wihuHelper38,
      mathFlowFenceMeta: index9fQ9wihuHelper39,
      mathText: index9fQ9wihuHelper43,
    },
    exit: {
      mathFlow: index9fQ9wihuHelper42,
      mathFlowFence: index9fQ9wihuHelper41,
      mathFlowFenceMeta: index9fQ9wihuHelper40,
      mathFlowValue: index9fQ9wihuHelper45,
      mathText: index9fQ9wihuHelper44,
      mathTextData: index9fQ9wihuHelper45,
    },
  };
  function index9fQ9wihuHelper38(index9fQ9wihuParam33) {
    this.enter(
      {
        type: "math",
        meta: null,
        value: "",
        data: {
          hName: "pre",
          hChildren: [
            {
              type: "element",
              tagName: "code",
              properties: {
                className: ["language-math", "math-display"],
              },
              children: [],
            },
          ],
        },
      },
      index9fQ9wihuParam33,
    );
  }
  function index9fQ9wihuHelper39() {
    this.buffer();
  }
  function index9fQ9wihuHelper40() {
    let index9fQ9wihuValue66 = this.resume(),
      index9fQ9wihuValue67 = this.stack[this.stack.length - 1];
    RegisterBqqwIOLcN(index9fQ9wihuValue67.type === "math");
    index9fQ9wihuValue67.meta = index9fQ9wihuValue66;
  }
  function index9fQ9wihuHelper41() {
    this.data.mathFlowInside ||
      (this.buffer(), (this.data.mathFlowInside = true));
  }
  function index9fQ9wihuHelper42(index9fQ9wihuParam37) {
    let index9fQ9wihuValue51 = this.resume().replace(
        /^(\r?\n|\r)|(\r?\n|\r)$/g,
        "",
      ),
      index9fQ9wihuValue52 = this.stack[this.stack.length - 1];
    RegisterBqqwIOLcN(index9fQ9wihuValue52.type === "math");
    this.exit(index9fQ9wihuParam37);
    index9fQ9wihuValue52.value = index9fQ9wihuValue51;
    let index9fQ9wihuValue53 = index9fQ9wihuValue52.data.hChildren[0];
    RegisterBqqwIOLcN(index9fQ9wihuValue53.type === "element");
    RegisterBqqwIOLcN(index9fQ9wihuValue53.tagName === "code");
    index9fQ9wihuValue53.children.push({
      type: "text",
      value: index9fQ9wihuValue51,
    });
    this.data.mathFlowInside = undefined;
  }
  function index9fQ9wihuHelper43(index9fQ9wihuParam42) {
    this.enter(
      {
        type: "inlineMath",
        value: "",
        data: {
          hName: "code",
          hProperties: {
            className: ["language-math", "math-inline"],
          },
          hChildren: [],
        },
      },
      index9fQ9wihuParam42,
    );
    this.buffer();
  }
  function index9fQ9wihuHelper44(index9fQ9wihuParam57) {
    let index9fQ9wihuValue61 = this.resume(),
      index9fQ9wihuValue62 = this.stack[this.stack.length - 1];
    RegisterBqqwIOLcN(index9fQ9wihuValue62.type === "inlineMath");
    this.exit(index9fQ9wihuParam57);
    index9fQ9wihuValue62.value = index9fQ9wihuValue61;
    index9fQ9wihuValue62.data.hChildren.push({
      type: "text",
      value: index9fQ9wihuValue61,
    });
  }
  function index9fQ9wihuHelper45(index9fQ9wihuParam80) {
    this.config.enter.data.call(this, index9fQ9wihuParam80);
    this.config.exit.data.call(this, index9fQ9wihuParam80);
  }
}
function index9fQ9wihuHelper2(index9fQ9wihuParam7) {
  let index9fQ9wihuValue16 = {}.singleDollarTextMath;
  return (
    (index9fQ9wihuValue16 ??= true),
    (index9fQ9wihuHelper47.peek = index9fQ9wihuHelper48),
    {
      unsafe: [
        {
          character: "\r",
          inConstruct: "mathFlowMeta",
        },
        {
          character: "\n",
          inConstruct: "mathFlowMeta",
        },
        {
          character: "$",
          after: index9fQ9wihuValue16 ? undefined : "\\$",
          inConstruct: "phrasing",
        },
        {
          character: "$",
          inConstruct: "mathFlowMeta",
        },
        {
          atBreak: true,
          character: "$",
          after: "\\$",
        },
      ],
      handlers: {
        math: index9fQ9wihuHelper46,
        inlineMath: index9fQ9wihuHelper47,
      },
    }
  );
  function index9fQ9wihuHelper46(
    index9fQ9wihuParam23,
    index9fQ9wihuParam24,
    index9fQ9wihuParam25,
    index9fQ9wihuParam26,
  ) {
    let index9fQ9wihuValue44 = index9fQ9wihuParam23.value || "",
      index9fQ9wihuValue45 =
        index9fQ9wihuParam25.createTracker(index9fQ9wihuParam26),
      index9fQ9wihuValue46 = "$".repeat(
        Math.max(RegisterBqqwIOLcU(index9fQ9wihuValue44, "$") + 1, 2),
      ),
      index9fQ9wihuValue47 = index9fQ9wihuParam25.enter("mathFlow"),
      index9fQ9wihuValue48 = index9fQ9wihuValue45.move(index9fQ9wihuValue46);
    if (index9fQ9wihuParam23.meta) {
      let index9fQ9wihuValue63 = index9fQ9wihuParam25.enter("mathFlowMeta");
      index9fQ9wihuValue48 += index9fQ9wihuValue45.move(
        index9fQ9wihuParam25.safe(index9fQ9wihuParam23.meta, {
          after: "\n",
          before: index9fQ9wihuValue48,
          encode: ["$"],
          ...index9fQ9wihuValue45.current(),
        }),
      );
      index9fQ9wihuValue63();
    }
    return (
      (index9fQ9wihuValue48 += index9fQ9wihuValue45.move("\n")),
      index9fQ9wihuValue44 &&
        (index9fQ9wihuValue48 += index9fQ9wihuValue45.move(
          index9fQ9wihuValue44 + "\n",
        )),
      (index9fQ9wihuValue48 += index9fQ9wihuValue45.move(index9fQ9wihuValue46)),
      index9fQ9wihuValue47(),
      index9fQ9wihuValue48
    );
  }
  function index9fQ9wihuHelper47(
    index9fQ9wihuParam20,
    index9fQ9wihuParam21,
    index9fQ9wihuParam22,
  ) {
    let index9fQ9wihuValue40 = index9fQ9wihuParam20.value || "",
      index9fQ9wihuValue41 = 1;
    for (
      index9fQ9wihuValue16 || index9fQ9wihuValue41++;
      RegExp("(^|[^$])" + "\\$".repeat(index9fQ9wihuValue41) + "([^$]|$)").test(
        index9fQ9wihuValue40,
      );
    )
      index9fQ9wihuValue41++;
    let index9fQ9wihuValue42 = "$".repeat(index9fQ9wihuValue41);
    /[^ \r\n]/.test(index9fQ9wihuValue40) &&
      ((/^[ \r\n]/.test(index9fQ9wihuValue40) &&
        /[ \r\n]$/.test(index9fQ9wihuValue40)) ||
        /^\$|\$$/.test(index9fQ9wihuValue40)) &&
      (index9fQ9wihuValue40 = " " + index9fQ9wihuValue40 + " ");
    let index9fQ9wihuValue43 = -1;
    for (; ++index9fQ9wihuValue43 < index9fQ9wihuParam22.unsafe.length;) {
      let index9fQ9wihuValue54 =
        index9fQ9wihuParam22.unsafe[index9fQ9wihuValue43];
      if (!index9fQ9wihuValue54.atBreak) continue;
      let index9fQ9wihuValue55 =
          index9fQ9wihuParam22.compilePattern(index9fQ9wihuValue54),
        index9fQ9wihuValue56;
      for (
        ;
        (index9fQ9wihuValue56 =
          index9fQ9wihuValue55.exec(index9fQ9wihuValue40));
      ) {
        let index9fQ9wihuValue65 = index9fQ9wihuValue56.index;
        index9fQ9wihuValue40.codePointAt(index9fQ9wihuValue65) === 10 &&
          index9fQ9wihuValue40.codePointAt(index9fQ9wihuValue65 - 1) === 13 &&
          index9fQ9wihuValue65--;
        index9fQ9wihuValue40 =
          index9fQ9wihuValue40.slice(0, index9fQ9wihuValue65) +
          " " +
          index9fQ9wihuValue40.slice(index9fQ9wihuValue56.index + 1);
      }
    }
    return index9fQ9wihuValue42 + index9fQ9wihuValue40 + index9fQ9wihuValue42;
  }
  function index9fQ9wihuHelper48() {
    return "$";
  }
}
function index9fQ9wihuHelper3(index9fQ9wihuParam97) {
  return index9fQ9wihuParam97 !== null && index9fQ9wihuParam97 < -2;
}
function index9fQ9wihuHelper4(index9fQ9wihuParam94) {
  return (
    index9fQ9wihuParam94 === -2 ||
    index9fQ9wihuParam94 === -1 ||
    index9fQ9wihuParam94 === 32
  );
}
function index9fQ9wihuHelper5(
  index9fQ9wihuParam47,
  index9fQ9wihuParam48,
  index9fQ9wihuParam49,
  index9fQ9wihuParam50,
) {
  let index9fQ9wihuValue57 = index9fQ9wihuParam50
      ? index9fQ9wihuParam50 - 1
      : 1 / 0,
    index9fQ9wihuValue58 = 0;
  return index9fQ9wihuHelper73;
  function index9fQ9wihuHelper73(index9fQ9wihuParam91) {
    return index9fQ9wihuHelper4(index9fQ9wihuParam91)
      ? (index9fQ9wihuParam47.enter(index9fQ9wihuParam49),
        index9fQ9wihuHelper74(index9fQ9wihuParam91))
      : index9fQ9wihuParam48(index9fQ9wihuParam91);
  }
  function index9fQ9wihuHelper74(index9fQ9wihuParam86) {
    return index9fQ9wihuHelper4(index9fQ9wihuParam86) &&
      index9fQ9wihuValue58++ < index9fQ9wihuValue57
      ? (index9fQ9wihuParam47.consume(index9fQ9wihuParam86),
        index9fQ9wihuHelper74)
      : (index9fQ9wihuParam47.exit(index9fQ9wihuParam49),
        index9fQ9wihuParam48(index9fQ9wihuParam86));
  }
}
function index9fQ9wihuHelper6(
  index9fQ9wihuParam1,
  index9fQ9wihuParam2,
  index9fQ9wihuParam3,
) {
  let index9fQ9wihuValue8 = this,
    index9fQ9wihuValue9 = this.events[this.events.length - 1],
    index9fQ9wihuValue10 =
      index9fQ9wihuValue9 &&
      index9fQ9wihuValue9[1].type === index9fQ9wihuValue3.linePrefix
        ? index9fQ9wihuValue9[2].sliceSerialize(index9fQ9wihuValue9[1], true)
            .length
        : 0,
    index9fQ9wihuValue11 = [];
  return index9fQ9wihuHelper20;
  function index9fQ9wihuHelper20(index9fQ9wihuParam68) {
    return (
      index9fQ9wihuValue1.backslash,
      index9fQ9wihuParam1.enter("mathFlow"),
      index9fQ9wihuParam1.enter("mathFlowFence"),
      index9fQ9wihuParam1.enter("mathFlowFenceSequence"),
      index9fQ9wihuHelper21(index9fQ9wihuParam68)
    );
  }
  function index9fQ9wihuHelper21(index9fQ9wihuParam46) {
    return index9fQ9wihuParam46 === index9fQ9wihuValue1.backslash ||
      (index9fQ9wihuParam46 === index9fQ9wihuValue1.leftSquareBracket &&
        index9fQ9wihuValue11[0] === index9fQ9wihuValue1.backslash)
      ? (index9fQ9wihuParam1.consume(index9fQ9wihuParam46),
        index9fQ9wihuValue11.push(index9fQ9wihuParam46),
        index9fQ9wihuHelper21)
      : (index9fQ9wihuParam1.exit("mathFlowFenceSequence"),
        index9fQ9wihuValue11.length < 2
          ? index9fQ9wihuParam3(index9fQ9wihuParam46)
          : index9fQ9wihuHelper5(
              index9fQ9wihuParam1,
              index9fQ9wihuHelper22,
              index9fQ9wihuValue3.whitespace,
            )(index9fQ9wihuParam46));
  }
  function index9fQ9wihuHelper22(index9fQ9wihuParam64) {
    return index9fQ9wihuParam64 === index9fQ9wihuValue1.eof ||
      index9fQ9wihuHelper3(index9fQ9wihuParam64)
      ? index9fQ9wihuHelper24(index9fQ9wihuParam64)
      : (index9fQ9wihuParam1.enter("mathFlowFenceMeta"),
        index9fQ9wihuParam1.enter(index9fQ9wihuValue3.chunkString, {
          contentType: index9fQ9wihuValue2.contentTypeString,
        }),
        index9fQ9wihuHelper23(index9fQ9wihuParam64));
  }
  function index9fQ9wihuHelper23(index9fQ9wihuParam59) {
    return index9fQ9wihuParam59 === index9fQ9wihuValue1.eof ||
      index9fQ9wihuHelper3(index9fQ9wihuParam59)
      ? (index9fQ9wihuParam1.exit(index9fQ9wihuValue3.chunkString),
        index9fQ9wihuParam1.exit("mathFlowFenceMeta"),
        index9fQ9wihuHelper24(index9fQ9wihuParam59))
      : index9fQ9wihuParam59 === index9fQ9wihuValue1.rightSquareBracket
        ? index9fQ9wihuParam3(index9fQ9wihuParam59)
        : (index9fQ9wihuParam1.consume(index9fQ9wihuParam59),
          index9fQ9wihuHelper23);
  }
  function index9fQ9wihuHelper24(index9fQ9wihuParam87) {
    return (
      index9fQ9wihuParam1.exit("mathFlowFence"),
      index9fQ9wihuValue8.interrupt
        ? index9fQ9wihuParam2(index9fQ9wihuParam87)
        : index9fQ9wihuHelper25(index9fQ9wihuParam87)
    );
  }
  function index9fQ9wihuHelper25(index9fQ9wihuParam38) {
    return index9fQ9wihuParam38 === index9fQ9wihuValue1.eof
      ? index9fQ9wihuHelper27(index9fQ9wihuParam38)
      : index9fQ9wihuHelper3(index9fQ9wihuParam38)
        ? index9fQ9wihuParam1.attempt(
            index9fQ9wihuValue5,
            index9fQ9wihuParam1.attempt(
              {
                tokenize: index9fQ9wihuHelper28,
                partial: true,
              },
              index9fQ9wihuHelper27,
              index9fQ9wihuValue10
                ? index9fQ9wihuHelper5(
                    index9fQ9wihuParam1,
                    index9fQ9wihuHelper25,
                    index9fQ9wihuValue3.linePrefix,
                    index9fQ9wihuValue10 + 1,
                  )
                : index9fQ9wihuHelper25,
            ),
            index9fQ9wihuHelper27,
          )(index9fQ9wihuParam38)
        : (index9fQ9wihuParam1.enter("mathFlowValue"),
          index9fQ9wihuHelper26(index9fQ9wihuParam38));
  }
  function index9fQ9wihuHelper26(index9fQ9wihuParam76) {
    return index9fQ9wihuParam76 === index9fQ9wihuValue1.eof ||
      index9fQ9wihuHelper3(index9fQ9wihuParam76)
      ? (index9fQ9wihuParam1.exit("mathFlowValue"),
        index9fQ9wihuHelper25(index9fQ9wihuParam76))
      : (index9fQ9wihuParam1.consume(index9fQ9wihuParam76),
        index9fQ9wihuHelper26);
  }
  function index9fQ9wihuHelper27(index9fQ9wihuParam95) {
    return (
      index9fQ9wihuParam1.exit("mathFlow"),
      index9fQ9wihuParam2(index9fQ9wihuParam95)
    );
  }
  function index9fQ9wihuHelper28(
    index9fQ9wihuParam27,
    index9fQ9wihuParam28,
    index9fQ9wihuParam29,
  ) {
    let index9fQ9wihuValue49 = [];
    return index9fQ9wihuHelper5(
      index9fQ9wihuParam27,
      index9fQ9wihuHelper67,
      index9fQ9wihuValue3.linePrefix,
      index9fQ9wihuValue2.tabSize,
    );
    function index9fQ9wihuHelper67(index9fQ9wihuParam78) {
      return (
        index9fQ9wihuParam27.enter("mathFlowFence"),
        index9fQ9wihuParam27.enter("mathFlowFenceSequence"),
        index9fQ9wihuHelper68(index9fQ9wihuParam78)
      );
    }
    function index9fQ9wihuHelper68(index9fQ9wihuParam43) {
      return (index9fQ9wihuParam43 === index9fQ9wihuValue1.backslash &&
        index9fQ9wihuValue49.length === 0) ||
        (index9fQ9wihuParam43 === index9fQ9wihuValue1.rightSquareBracket &&
          index9fQ9wihuValue49[0] === index9fQ9wihuValue1.backslash)
        ? (index9fQ9wihuParam27.consume(index9fQ9wihuParam43),
          index9fQ9wihuValue49.push(index9fQ9wihuParam43),
          index9fQ9wihuHelper68)
        : index9fQ9wihuValue49 < index9fQ9wihuValue11
          ? index9fQ9wihuParam29(index9fQ9wihuParam43)
          : (index9fQ9wihuParam27.exit("mathFlowFenceSequence"),
            index9fQ9wihuHelper5(
              index9fQ9wihuParam27,
              index9fQ9wihuHelper69,
              index9fQ9wihuValue3.whitespace,
            )(index9fQ9wihuParam43));
    }
    function index9fQ9wihuHelper69(index9fQ9wihuParam81) {
      return index9fQ9wihuParam81 === index9fQ9wihuValue1.eof ||
        index9fQ9wihuHelper3(index9fQ9wihuParam81)
        ? (index9fQ9wihuParam27.exit("mathFlowFence"),
          index9fQ9wihuParam28(index9fQ9wihuParam81))
        : index9fQ9wihuParam29(index9fQ9wihuParam81);
    }
  }
}
function index9fQ9wihuHelper7(
  index9fQ9wihuParam51,
  index9fQ9wihuParam52,
  index9fQ9wihuParam53,
) {
  let index9fQ9wihuValue59 = this;
  return index9fQ9wihuHelper75;
  function index9fQ9wihuHelper75(index9fQ9wihuParam83) {
    return (
      index9fQ9wihuParam51.enter(index9fQ9wihuValue3.lineEnding),
      index9fQ9wihuParam51.consume(index9fQ9wihuParam83),
      index9fQ9wihuParam51.exit(index9fQ9wihuValue3.lineEnding),
      index9fQ9wihuHelper76
    );
  }
  function index9fQ9wihuHelper76(index9fQ9wihuParam89) {
    return index9fQ9wihuValue59.parser.lazy[index9fQ9wihuValue59.now().line]
      ? index9fQ9wihuParam53(index9fQ9wihuParam89)
      : index9fQ9wihuParam52(index9fQ9wihuParam89);
  }
}
function index9fQ9wihuHelper8() {
  return {
    tokenize: index9fQ9wihuHelper49,
    resolve: index9fQ9wihuHelper9,
    previous: index9fQ9wihuHelper10,
  };
  function index9fQ9wihuHelper49(
    index9fQ9wihuParam8,
    index9fQ9wihuParam9,
    index9fQ9wihuParam10,
  ) {
    let index9fQ9wihuValue17 = [],
      index9fQ9wihuValue18 = [],
      index9fQ9wihuValue19,
      index9fQ9wihuValue20 = this;
    return index9fQ9wihuHelper51;
    function index9fQ9wihuHelper51(index9fQ9wihuParam61) {
      return (
        index9fQ9wihuValue1.backslash,
        index9fQ9wihuHelper10.call(
          index9fQ9wihuValue20,
          index9fQ9wihuValue20.previous,
        ) && index9fQ9wihuValue20.previous,
        index9fQ9wihuParam8.enter("mathText"),
        index9fQ9wihuParam8.enter("mathTextSequence"),
        index9fQ9wihuHelper52(index9fQ9wihuParam61)
      );
    }
    function index9fQ9wihuHelper52(index9fQ9wihuParam44) {
      return (index9fQ9wihuParam44 === index9fQ9wihuValue1.backslash &&
        index9fQ9wihuValue17.length === 0) ||
        (index9fQ9wihuParam44 === index9fQ9wihuValue1.leftSquareBracket &&
          index9fQ9wihuValue17.length === 1)
        ? (index9fQ9wihuParam8.consume(index9fQ9wihuParam44),
          index9fQ9wihuValue17.push(index9fQ9wihuParam44),
          index9fQ9wihuHelper52)
        : index9fQ9wihuValue17.length < 2
          ? index9fQ9wihuParam10(index9fQ9wihuParam44)
          : (index9fQ9wihuParam8.exit("mathTextSequence"),
            index9fQ9wihuHelper53(index9fQ9wihuParam44));
    }
    function index9fQ9wihuHelper53(index9fQ9wihuParam34) {
      return index9fQ9wihuParam34 === index9fQ9wihuValue1.eof
        ? index9fQ9wihuParam10(index9fQ9wihuParam34)
        : index9fQ9wihuParam34 === index9fQ9wihuValue1.backslash
          ? ((index9fQ9wihuValue19 =
              index9fQ9wihuParam8.enter("mathTextSequence")),
            (index9fQ9wihuValue18 = []),
            index9fQ9wihuHelper55(index9fQ9wihuParam34))
          : index9fQ9wihuParam34 === index9fQ9wihuValue1.space
            ? (index9fQ9wihuParam8.enter("space"),
              index9fQ9wihuParam8.consume(index9fQ9wihuParam34),
              index9fQ9wihuParam8.exit("space"),
              index9fQ9wihuHelper53)
            : index9fQ9wihuHelper3(index9fQ9wihuParam34)
              ? (index9fQ9wihuParam8.enter(index9fQ9wihuValue3.lineEnding),
                index9fQ9wihuParam8.consume(index9fQ9wihuParam34),
                index9fQ9wihuParam8.exit(index9fQ9wihuValue3.lineEnding),
                index9fQ9wihuHelper53)
              : (index9fQ9wihuParam8.enter("mathTextData"),
                index9fQ9wihuHelper54(index9fQ9wihuParam34));
    }
    function index9fQ9wihuHelper54(index9fQ9wihuParam71) {
      return index9fQ9wihuParam71 === index9fQ9wihuValue1.eof ||
        index9fQ9wihuParam71 === index9fQ9wihuValue1.space ||
        index9fQ9wihuParam71 === index9fQ9wihuValue1.backslash ||
        index9fQ9wihuHelper3(index9fQ9wihuParam71)
        ? (index9fQ9wihuParam8.exit("mathTextData"),
          index9fQ9wihuHelper53(index9fQ9wihuParam71))
        : (index9fQ9wihuParam8.consume(index9fQ9wihuParam71),
          index9fQ9wihuHelper54);
    }
    function index9fQ9wihuHelper55(index9fQ9wihuParam40) {
      return (index9fQ9wihuParam40 === index9fQ9wihuValue1.backslash &&
        index9fQ9wihuValue18.length === 0) ||
        (index9fQ9wihuParam40 === index9fQ9wihuValue1.rightSquareBracket &&
          index9fQ9wihuValue18.length === 1)
        ? (index9fQ9wihuParam8.consume(index9fQ9wihuParam40),
          index9fQ9wihuValue18.push(index9fQ9wihuParam40),
          index9fQ9wihuHelper55)
        : index9fQ9wihuValue18.length === index9fQ9wihuValue17.length
          ? (index9fQ9wihuParam8.exit("mathTextSequence"),
            index9fQ9wihuParam8.exit("mathText"),
            index9fQ9wihuParam9(index9fQ9wihuParam40))
          : ((index9fQ9wihuValue19.type = "mathTextData"),
            index9fQ9wihuHelper54(index9fQ9wihuParam40));
    }
  }
}
function index9fQ9wihuHelper9(index9fQ9wihuParam17) {
  let index9fQ9wihuValue28 = index9fQ9wihuParam17.length - 4,
    index9fQ9wihuValue29 = 3,
    index9fQ9wihuValue30,
    index9fQ9wihuValue31;
  if (index9fQ9wihuParam17.length < 4) return index9fQ9wihuParam17;
  if (
    (index9fQ9wihuParam17[index9fQ9wihuValue29][1].type ===
      index9fQ9wihuValue3.lineEnding ||
      index9fQ9wihuParam17[index9fQ9wihuValue29][1].type === "space") &&
    (index9fQ9wihuParam17[index9fQ9wihuValue28][1].type ===
      index9fQ9wihuValue3.lineEnding ||
      index9fQ9wihuParam17[index9fQ9wihuValue28][1].type === "space")
  ) {
    for (
      index9fQ9wihuValue30 = index9fQ9wihuValue29;
      ++index9fQ9wihuValue30 < index9fQ9wihuValue28;
    )
      if (
        index9fQ9wihuParam17[index9fQ9wihuValue30][1].type === "mathTextData"
      ) {
        index9fQ9wihuParam17[index9fQ9wihuValue28][1].type = "mathTextPadding";
        index9fQ9wihuParam17[index9fQ9wihuValue29][1].type = "mathTextPadding";
        index9fQ9wihuValue29 += 2;
        index9fQ9wihuValue28 -= 2;
        break;
      }
  }
  for (
    index9fQ9wihuValue30 = index9fQ9wihuValue29 - 1, index9fQ9wihuValue28++;
    ++index9fQ9wihuValue30 <= index9fQ9wihuValue28;
  )
    index9fQ9wihuValue31 === undefined
      ? index9fQ9wihuValue30 !== index9fQ9wihuValue28 &&
        index9fQ9wihuParam17[index9fQ9wihuValue30][1].type !==
          index9fQ9wihuValue3.lineEnding &&
        (index9fQ9wihuValue31 = index9fQ9wihuValue30)
      : (index9fQ9wihuValue30 === index9fQ9wihuValue28 ||
          index9fQ9wihuParam17[index9fQ9wihuValue30][1].type ===
            index9fQ9wihuValue3.lineEnding) &&
        ((index9fQ9wihuParam17[index9fQ9wihuValue31][1].type = "mathTextData"),
        index9fQ9wihuValue30 !== index9fQ9wihuValue31 + 2 &&
          ((index9fQ9wihuParam17[index9fQ9wihuValue31][1].end =
            index9fQ9wihuParam17[index9fQ9wihuValue30 - 1][1].end),
          index9fQ9wihuParam17.splice(
            index9fQ9wihuValue31 + 2,
            index9fQ9wihuValue30 - index9fQ9wihuValue31 - 2,
          ),
          (index9fQ9wihuValue28 -=
            index9fQ9wihuValue30 - index9fQ9wihuValue31 - 2),
          (index9fQ9wihuValue30 = index9fQ9wihuValue31 + 2)),
        (index9fQ9wihuValue31 = undefined));
  return index9fQ9wihuParam17;
}
function index9fQ9wihuHelper10(index9fQ9wihuParam74) {
  return (
    index9fQ9wihuParam74 !== index9fQ9wihuValue1.backslash ||
    this.events[this.events.length - 1]?.[1].type ===
      index9fQ9wihuValue3.characterEscape
  );
}
function index9fQ9wihuHelper11(
  index9fQ9wihuParam4,
  index9fQ9wihuParam5,
  index9fQ9wihuParam6,
) {
  let index9fQ9wihuValue12 = this,
    index9fQ9wihuValue13 =
      index9fQ9wihuValue12.events[index9fQ9wihuValue12.events.length - 1],
    index9fQ9wihuValue14 =
      index9fQ9wihuValue13 &&
      index9fQ9wihuValue13[1].type === index9fQ9wihuValue3.linePrefix
        ? index9fQ9wihuValue13[2].sliceSerialize(index9fQ9wihuValue13[1], true)
            .length
        : 0,
    index9fQ9wihuValue15 = 0;
  return index9fQ9wihuHelper29;
  function index9fQ9wihuHelper29(index9fQ9wihuParam67) {
    return (
      index9fQ9wihuValue1.dollarSign,
      index9fQ9wihuParam4.enter("mathFlow"),
      index9fQ9wihuParam4.enter("mathFlowFence"),
      index9fQ9wihuParam4.enter("mathFlowFenceSequence"),
      index9fQ9wihuHelper30(index9fQ9wihuParam67)
    );
  }
  function index9fQ9wihuHelper30(index9fQ9wihuParam66) {
    return index9fQ9wihuParam66 === index9fQ9wihuValue1.dollarSign
      ? (index9fQ9wihuParam4.consume(index9fQ9wihuParam66),
        index9fQ9wihuValue15++,
        index9fQ9wihuHelper30)
      : (index9fQ9wihuParam4.exit("mathFlowFenceSequence"),
        index9fQ9wihuValue15 < 2
          ? index9fQ9wihuParam6(index9fQ9wihuParam66)
          : index9fQ9wihuHelper5(
              index9fQ9wihuParam4,
              index9fQ9wihuHelper31,
              index9fQ9wihuValue3.whitespace,
            )(index9fQ9wihuParam66));
  }
  function index9fQ9wihuHelper31(index9fQ9wihuParam65) {
    return index9fQ9wihuParam65 === index9fQ9wihuValue1.eof ||
      index9fQ9wihuHelper3(index9fQ9wihuParam65)
      ? index9fQ9wihuHelper33(index9fQ9wihuParam65)
      : (index9fQ9wihuParam4.enter("mathFlowFenceMeta"),
        index9fQ9wihuParam4.enter(index9fQ9wihuValue3.chunkString, {
          contentType: index9fQ9wihuValue2.contentTypeString,
        }),
        index9fQ9wihuHelper32(index9fQ9wihuParam65));
  }
  function index9fQ9wihuHelper32(index9fQ9wihuParam63) {
    return index9fQ9wihuParam63 === index9fQ9wihuValue1.eof ||
      index9fQ9wihuHelper3(index9fQ9wihuParam63)
      ? (index9fQ9wihuParam4.exit(index9fQ9wihuValue3.chunkString),
        index9fQ9wihuParam4.exit("mathFlowFenceMeta"),
        index9fQ9wihuHelper33(index9fQ9wihuParam63))
      : index9fQ9wihuParam63 === index9fQ9wihuValue1.dollarSign
        ? index9fQ9wihuParam6(index9fQ9wihuParam63)
        : (index9fQ9wihuParam4.consume(index9fQ9wihuParam63),
          index9fQ9wihuHelper32);
  }
  function index9fQ9wihuHelper33(index9fQ9wihuParam88) {
    return (
      index9fQ9wihuParam4.exit("mathFlowFence"),
      index9fQ9wihuValue12.interrupt
        ? index9fQ9wihuParam5(index9fQ9wihuParam88)
        : index9fQ9wihuHelper34(index9fQ9wihuParam88)
    );
  }
  function index9fQ9wihuHelper34(index9fQ9wihuParam39) {
    return index9fQ9wihuParam39 === index9fQ9wihuValue1.eof
      ? index9fQ9wihuHelper36(index9fQ9wihuParam39)
      : index9fQ9wihuHelper3(index9fQ9wihuParam39)
        ? index9fQ9wihuParam4.attempt(
            index9fQ9wihuValue7,
            index9fQ9wihuParam4.attempt(
              {
                tokenize: index9fQ9wihuHelper37,
                partial: true,
              },
              index9fQ9wihuHelper36,
              index9fQ9wihuValue14
                ? index9fQ9wihuHelper5(
                    index9fQ9wihuParam4,
                    index9fQ9wihuHelper34,
                    index9fQ9wihuValue3.linePrefix,
                    index9fQ9wihuValue14 + 1,
                  )
                : index9fQ9wihuHelper34,
            ),
            index9fQ9wihuHelper36,
          )(index9fQ9wihuParam39)
        : (index9fQ9wihuParam4.enter("mathFlowValue"),
          index9fQ9wihuHelper35(index9fQ9wihuParam39));
  }
  function index9fQ9wihuHelper35(index9fQ9wihuParam77) {
    return index9fQ9wihuParam77 === index9fQ9wihuValue1.eof ||
      index9fQ9wihuHelper3(index9fQ9wihuParam77)
      ? (index9fQ9wihuParam4.exit("mathFlowValue"),
        index9fQ9wihuHelper34(index9fQ9wihuParam77))
      : (index9fQ9wihuParam4.consume(index9fQ9wihuParam77),
        index9fQ9wihuHelper35);
  }
  function index9fQ9wihuHelper36(index9fQ9wihuParam96) {
    return (
      index9fQ9wihuParam4.exit("mathFlow"),
      index9fQ9wihuParam5(index9fQ9wihuParam96)
    );
  }
  function index9fQ9wihuHelper37(
    index9fQ9wihuParam30,
    index9fQ9wihuParam31,
    index9fQ9wihuParam32,
  ) {
    let index9fQ9wihuValue50 = 0;
    return index9fQ9wihuHelper5(
      index9fQ9wihuParam30,
      index9fQ9wihuHelper70,
      index9fQ9wihuValue3.linePrefix,
      index9fQ9wihuValue2.tabSize,
    );
    function index9fQ9wihuHelper70(index9fQ9wihuParam79) {
      return (
        index9fQ9wihuParam30.enter("mathFlowFence"),
        index9fQ9wihuParam30.enter("mathFlowFenceSequence"),
        index9fQ9wihuHelper71(index9fQ9wihuParam79)
      );
    }
    function index9fQ9wihuHelper71(index9fQ9wihuParam60) {
      return index9fQ9wihuParam60 === index9fQ9wihuValue1.dollarSign
        ? (index9fQ9wihuParam30.consume(index9fQ9wihuParam60),
          index9fQ9wihuValue50++,
          index9fQ9wihuHelper71)
        : index9fQ9wihuValue50 < index9fQ9wihuValue15
          ? index9fQ9wihuParam32(index9fQ9wihuParam60)
          : (index9fQ9wihuParam30.exit("mathFlowFenceSequence"),
            index9fQ9wihuHelper5(
              index9fQ9wihuParam30,
              index9fQ9wihuHelper72,
              index9fQ9wihuValue3.whitespace,
            )(index9fQ9wihuParam60));
    }
    function index9fQ9wihuHelper72(index9fQ9wihuParam82) {
      return index9fQ9wihuParam82 === index9fQ9wihuValue1.eof ||
        index9fQ9wihuHelper3(index9fQ9wihuParam82)
        ? (index9fQ9wihuParam30.exit("mathFlowFence"),
          index9fQ9wihuParam31(index9fQ9wihuParam82))
        : index9fQ9wihuParam32(index9fQ9wihuParam82);
    }
  }
}
function index9fQ9wihuHelper12(
  index9fQ9wihuParam54,
  index9fQ9wihuParam55,
  index9fQ9wihuParam56,
) {
  let index9fQ9wihuValue60 = this;
  return index9fQ9wihuHelper77;
  function index9fQ9wihuHelper77(index9fQ9wihuParam84) {
    return (
      index9fQ9wihuParam54.enter(index9fQ9wihuValue3.lineEnding),
      index9fQ9wihuParam54.consume(index9fQ9wihuParam84),
      index9fQ9wihuParam54.exit(index9fQ9wihuValue3.lineEnding),
      index9fQ9wihuHelper78
    );
  }
  function index9fQ9wihuHelper78(index9fQ9wihuParam90) {
    return index9fQ9wihuValue60.parser.lazy[index9fQ9wihuValue60.now().line]
      ? index9fQ9wihuParam56(index9fQ9wihuParam90)
      : index9fQ9wihuParam55(index9fQ9wihuParam90);
  }
}
function index9fQ9wihuHelper13() {
  return {
    tokenize: index9fQ9wihuHelper50,
    resolve: index9fQ9wihuHelper14,
    previous: index9fQ9wihuHelper15,
  };
  function index9fQ9wihuHelper50(
    index9fQ9wihuParam11,
    index9fQ9wihuParam12,
    index9fQ9wihuParam13,
  ) {
    let index9fQ9wihuValue21 = [],
      index9fQ9wihuValue22 = [],
      index9fQ9wihuValue23,
      index9fQ9wihuValue24 = this;
    return index9fQ9wihuHelper56;
    function index9fQ9wihuHelper56(index9fQ9wihuParam62) {
      return (
        index9fQ9wihuValue1.backslash,
        index9fQ9wihuHelper15.call(
          index9fQ9wihuValue24,
          index9fQ9wihuValue24.previous,
        ) && index9fQ9wihuValue24.previous,
        index9fQ9wihuParam11.enter("mathText"),
        index9fQ9wihuParam11.enter("mathTextSequence"),
        index9fQ9wihuHelper57(index9fQ9wihuParam62)
      );
    }
    function index9fQ9wihuHelper57(index9fQ9wihuParam45) {
      return (index9fQ9wihuParam45 === index9fQ9wihuValue1.backslash &&
        index9fQ9wihuValue21.length === 0) ||
        (index9fQ9wihuParam45 === index9fQ9wihuValue1.leftParenthesis &&
          index9fQ9wihuValue21.length === 1)
        ? (index9fQ9wihuParam11.consume(index9fQ9wihuParam45),
          index9fQ9wihuValue21.push(index9fQ9wihuParam45),
          index9fQ9wihuHelper57)
        : index9fQ9wihuValue21.length < 2
          ? index9fQ9wihuParam13(index9fQ9wihuParam45)
          : (index9fQ9wihuParam11.exit("mathTextSequence"),
            index9fQ9wihuHelper58(index9fQ9wihuParam45));
    }
    function index9fQ9wihuHelper58(index9fQ9wihuParam35) {
      return index9fQ9wihuParam35 === index9fQ9wihuValue1.eof
        ? index9fQ9wihuParam13(index9fQ9wihuParam35)
        : index9fQ9wihuParam35 === index9fQ9wihuValue1.backslash
          ? ((index9fQ9wihuValue23 =
              index9fQ9wihuParam11.enter("mathTextSequence")),
            (index9fQ9wihuValue22 = []),
            index9fQ9wihuHelper60(index9fQ9wihuParam35))
          : index9fQ9wihuParam35 === index9fQ9wihuValue1.space
            ? (index9fQ9wihuParam11.enter("space"),
              index9fQ9wihuParam11.consume(index9fQ9wihuParam35),
              index9fQ9wihuParam11.exit("space"),
              index9fQ9wihuHelper58)
            : index9fQ9wihuHelper3(index9fQ9wihuParam35)
              ? (index9fQ9wihuParam11.enter(index9fQ9wihuValue3.lineEnding),
                index9fQ9wihuParam11.consume(index9fQ9wihuParam35),
                index9fQ9wihuParam11.exit(index9fQ9wihuValue3.lineEnding),
                index9fQ9wihuHelper58)
              : (index9fQ9wihuParam11.enter("mathTextData"),
                index9fQ9wihuHelper59(index9fQ9wihuParam35));
    }
    function index9fQ9wihuHelper59(index9fQ9wihuParam72) {
      return index9fQ9wihuParam72 === index9fQ9wihuValue1.eof ||
        index9fQ9wihuParam72 === index9fQ9wihuValue1.space ||
        index9fQ9wihuParam72 === index9fQ9wihuValue1.backslash ||
        index9fQ9wihuHelper3(index9fQ9wihuParam72)
        ? (index9fQ9wihuParam11.exit("mathTextData"),
          index9fQ9wihuHelper58(index9fQ9wihuParam72))
        : (index9fQ9wihuParam11.consume(index9fQ9wihuParam72),
          index9fQ9wihuHelper59);
    }
    function index9fQ9wihuHelper60(index9fQ9wihuParam41) {
      return (index9fQ9wihuParam41 === index9fQ9wihuValue1.backslash &&
        index9fQ9wihuValue22.length === 0) ||
        (index9fQ9wihuParam41 === index9fQ9wihuValue1.rightParenthesis &&
          index9fQ9wihuValue22.length === 1)
        ? (index9fQ9wihuParam11.consume(index9fQ9wihuParam41),
          index9fQ9wihuValue22.push(index9fQ9wihuParam41),
          index9fQ9wihuHelper60)
        : index9fQ9wihuValue22.length === index9fQ9wihuValue21.length
          ? (index9fQ9wihuParam11.exit("mathTextSequence"),
            index9fQ9wihuParam11.exit("mathText"),
            index9fQ9wihuParam12(index9fQ9wihuParam41))
          : ((index9fQ9wihuValue23.type = "mathTextData"),
            index9fQ9wihuHelper59(index9fQ9wihuParam41));
    }
  }
}
function index9fQ9wihuHelper14(index9fQ9wihuParam18) {
  let index9fQ9wihuValue32 = index9fQ9wihuParam18.length - 4,
    index9fQ9wihuValue33 = 3,
    index9fQ9wihuValue34,
    index9fQ9wihuValue35;
  if (index9fQ9wihuParam18.length < 4) return index9fQ9wihuParam18;
  if (
    (index9fQ9wihuParam18[index9fQ9wihuValue33][1].type ===
      index9fQ9wihuValue3.lineEnding ||
      index9fQ9wihuParam18[index9fQ9wihuValue33][1].type === "space") &&
    (index9fQ9wihuParam18[index9fQ9wihuValue32][1].type ===
      index9fQ9wihuValue3.lineEnding ||
      index9fQ9wihuParam18[index9fQ9wihuValue32][1].type === "space")
  ) {
    for (
      index9fQ9wihuValue34 = index9fQ9wihuValue33;
      ++index9fQ9wihuValue34 < index9fQ9wihuValue32;
    )
      if (
        index9fQ9wihuParam18[index9fQ9wihuValue34][1].type === "mathTextData"
      ) {
        index9fQ9wihuParam18[index9fQ9wihuValue32][1].type = "mathTextPadding";
        index9fQ9wihuParam18[index9fQ9wihuValue33][1].type = "mathTextPadding";
        index9fQ9wihuValue33 += 2;
        index9fQ9wihuValue32 -= 2;
        break;
      }
  }
  for (
    index9fQ9wihuValue34 = index9fQ9wihuValue33 - 1, index9fQ9wihuValue32++;
    ++index9fQ9wihuValue34 <= index9fQ9wihuValue32;
  )
    index9fQ9wihuValue35 === undefined
      ? index9fQ9wihuValue34 !== index9fQ9wihuValue32 &&
        index9fQ9wihuParam18[index9fQ9wihuValue34][1].type !==
          index9fQ9wihuValue3.lineEnding &&
        (index9fQ9wihuValue35 = index9fQ9wihuValue34)
      : (index9fQ9wihuValue34 === index9fQ9wihuValue32 ||
          index9fQ9wihuParam18[index9fQ9wihuValue34][1].type ===
            index9fQ9wihuValue3.lineEnding) &&
        ((index9fQ9wihuParam18[index9fQ9wihuValue35][1].type = "mathTextData"),
        index9fQ9wihuValue34 !== index9fQ9wihuValue35 + 2 &&
          ((index9fQ9wihuParam18[index9fQ9wihuValue35][1].end =
            index9fQ9wihuParam18[index9fQ9wihuValue34 - 1][1].end),
          index9fQ9wihuParam18.splice(
            index9fQ9wihuValue35 + 2,
            index9fQ9wihuValue34 - index9fQ9wihuValue35 - 2,
          ),
          (index9fQ9wihuValue32 -=
            index9fQ9wihuValue34 - index9fQ9wihuValue35 - 2),
          (index9fQ9wihuValue34 = index9fQ9wihuValue35 + 2)),
        (index9fQ9wihuValue35 = undefined));
  return index9fQ9wihuParam18;
}
function index9fQ9wihuHelper15(index9fQ9wihuParam75) {
  return (
    index9fQ9wihuParam75 !== index9fQ9wihuValue1.backslash ||
    this.events[this.events.length - 1]?.[1].type ===
      index9fQ9wihuValue3.characterEscape
  );
}
function index9fQ9wihuHelper16() {
  return {
    tokenize: index9fQ9wihuHelper61,
    resolve: index9fQ9wihuHelper17,
    previous: index9fQ9wihuHelper18,
  };
  function index9fQ9wihuHelper61(
    index9fQ9wihuParam14,
    index9fQ9wihuParam15,
    index9fQ9wihuParam16,
  ) {
    let index9fQ9wihuValue25 = 0,
      index9fQ9wihuValue26,
      index9fQ9wihuValue27;
    return index9fQ9wihuHelper62;
    function index9fQ9wihuHelper62(index9fQ9wihuParam85) {
      return (
        index9fQ9wihuParam14.enter("mathText"),
        index9fQ9wihuParam14.enter("mathTextSequence"),
        index9fQ9wihuHelper63(index9fQ9wihuParam85)
      );
    }
    function index9fQ9wihuHelper63(index9fQ9wihuParam69) {
      return index9fQ9wihuParam69 === index9fQ9wihuValue1.dollarSign
        ? (index9fQ9wihuParam14.consume(index9fQ9wihuParam69),
          index9fQ9wihuValue25++,
          index9fQ9wihuHelper63)
        : index9fQ9wihuValue25 < 2
          ? index9fQ9wihuParam16(index9fQ9wihuParam69)
          : (index9fQ9wihuParam14.exit("mathTextSequence"),
            index9fQ9wihuHelper64(index9fQ9wihuParam69));
    }
    function index9fQ9wihuHelper64(index9fQ9wihuParam36) {
      return index9fQ9wihuParam36 === index9fQ9wihuValue1.eof
        ? index9fQ9wihuParam16(index9fQ9wihuParam36)
        : index9fQ9wihuParam36 === index9fQ9wihuValue1.dollarSign
          ? ((index9fQ9wihuValue27 =
              index9fQ9wihuParam14.enter("mathTextSequence")),
            (index9fQ9wihuValue26 = 0),
            index9fQ9wihuHelper66(index9fQ9wihuParam36))
          : index9fQ9wihuParam36 === index9fQ9wihuValue1.space
            ? (index9fQ9wihuParam14.enter("space"),
              index9fQ9wihuParam14.consume(index9fQ9wihuParam36),
              index9fQ9wihuParam14.exit("space"),
              index9fQ9wihuHelper64)
            : index9fQ9wihuHelper3(index9fQ9wihuParam36)
              ? (index9fQ9wihuParam14.enter(index9fQ9wihuValue3.lineEnding),
                index9fQ9wihuParam14.consume(index9fQ9wihuParam36),
                index9fQ9wihuParam14.exit(index9fQ9wihuValue3.lineEnding),
                index9fQ9wihuHelper64)
              : (index9fQ9wihuParam14.enter("mathTextData"),
                index9fQ9wihuHelper65(index9fQ9wihuParam36));
    }
    function index9fQ9wihuHelper65(index9fQ9wihuParam70) {
      return index9fQ9wihuParam70 === index9fQ9wihuValue1.eof ||
        index9fQ9wihuParam70 === index9fQ9wihuValue1.space ||
        index9fQ9wihuParam70 === index9fQ9wihuValue1.dollarSign ||
        index9fQ9wihuHelper3(index9fQ9wihuParam70)
        ? (index9fQ9wihuParam14.exit("mathTextData"),
          index9fQ9wihuHelper64(index9fQ9wihuParam70))
        : (index9fQ9wihuParam14.consume(index9fQ9wihuParam70),
          index9fQ9wihuHelper65);
    }
    function index9fQ9wihuHelper66(index9fQ9wihuParam58) {
      return index9fQ9wihuParam58 === index9fQ9wihuValue1.dollarSign
        ? (index9fQ9wihuParam14.consume(index9fQ9wihuParam58),
          index9fQ9wihuValue26++,
          index9fQ9wihuHelper66)
        : index9fQ9wihuValue26 === index9fQ9wihuValue25
          ? (index9fQ9wihuParam14.exit("mathTextSequence"),
            index9fQ9wihuParam14.exit("mathText"),
            index9fQ9wihuParam15(index9fQ9wihuParam58))
          : ((index9fQ9wihuValue27.type = "mathTextData"),
            index9fQ9wihuHelper65(index9fQ9wihuParam58));
    }
  }
}
function index9fQ9wihuHelper17(index9fQ9wihuParam19) {
  let index9fQ9wihuValue36 = index9fQ9wihuParam19.length - 4,
    index9fQ9wihuValue37 = 3,
    index9fQ9wihuValue38,
    index9fQ9wihuValue39;
  if (index9fQ9wihuParam19.length < 4) return index9fQ9wihuParam19;
  if (
    (index9fQ9wihuParam19[index9fQ9wihuValue37][1].type ===
      index9fQ9wihuValue3.lineEnding ||
      index9fQ9wihuParam19[index9fQ9wihuValue37][1].type === "space") &&
    (index9fQ9wihuParam19[index9fQ9wihuValue36][1].type ===
      index9fQ9wihuValue3.lineEnding ||
      index9fQ9wihuParam19[index9fQ9wihuValue36][1].type === "space")
  ) {
    for (
      index9fQ9wihuValue38 = index9fQ9wihuValue37;
      ++index9fQ9wihuValue38 < index9fQ9wihuValue36;
    )
      if (
        index9fQ9wihuParam19[index9fQ9wihuValue38][1].type === "mathTextData"
      ) {
        index9fQ9wihuParam19[index9fQ9wihuValue36][1].type = "mathTextPadding";
        index9fQ9wihuParam19[index9fQ9wihuValue37][1].type = "mathTextPadding";
        index9fQ9wihuValue37 += 2;
        index9fQ9wihuValue36 -= 2;
        break;
      }
  }
  for (
    index9fQ9wihuValue38 = index9fQ9wihuValue37 - 1, index9fQ9wihuValue36++;
    ++index9fQ9wihuValue38 <= index9fQ9wihuValue36;
  )
    index9fQ9wihuValue39 === undefined
      ? index9fQ9wihuValue38 !== index9fQ9wihuValue36 &&
        index9fQ9wihuParam19[index9fQ9wihuValue38][1].type !==
          index9fQ9wihuValue3.lineEnding &&
        (index9fQ9wihuValue39 = index9fQ9wihuValue38)
      : (index9fQ9wihuValue38 === index9fQ9wihuValue36 ||
          index9fQ9wihuParam19[index9fQ9wihuValue38][1].type ===
            index9fQ9wihuValue3.lineEnding) &&
        ((index9fQ9wihuParam19[index9fQ9wihuValue39][1].type = "mathTextData"),
        index9fQ9wihuValue38 !== index9fQ9wihuValue39 + 2 &&
          ((index9fQ9wihuParam19[index9fQ9wihuValue39][1].end =
            index9fQ9wihuParam19[index9fQ9wihuValue38 - 1][1].end),
          index9fQ9wihuParam19.splice(
            index9fQ9wihuValue39 + 2,
            index9fQ9wihuValue38 - index9fQ9wihuValue39 - 2,
          ),
          (index9fQ9wihuValue36 -=
            index9fQ9wihuValue38 - index9fQ9wihuValue39 - 2),
          (index9fQ9wihuValue38 = index9fQ9wihuValue39 + 2)),
        (index9fQ9wihuValue39 = undefined));
  return index9fQ9wihuParam19;
}
function index9fQ9wihuHelper18(index9fQ9wihuParam73) {
  return (
    index9fQ9wihuParam73 !== index9fQ9wihuValue1.dollarSign ||
    this.events[this.events.length - 1]?.[1].type ===
      index9fQ9wihuValue3.characterEscape
  );
}
function index9fQ9wihuHelper19() {
  return {
    flow: {
      [index9fQ9wihuValue1.dollarSign]: index9fQ9wihuValue6,
      [index9fQ9wihuValue1.backslash]: index9fQ9wihuValue4,
    },
    text: {
      [index9fQ9wihuValue1.dollarSign]: index9fQ9wihuHelper16(),
      [index9fQ9wihuValue1.backslash]: [
        index9fQ9wihuHelper13(),
        index9fQ9wihuHelper8(),
      ],
    },
  };
}
export function index9fQ9wihu() {
  let index9fQ9wihuValue64 = this.data();
  index9fQ9wihuHelper79("micromarkExtensions", index9fQ9wihuHelper19());
  index9fQ9wihuHelper79("fromMarkdownExtensions", index9fQ9wihuHelper1());
  index9fQ9wihuHelper79("toMarkdownExtensions", index9fQ9wihuHelper2());
  function index9fQ9wihuHelper79(index9fQ9wihuParam92, index9fQ9wihuParam93) {
    (index9fQ9wihuValue64[index9fQ9wihuParam92]
      ? index9fQ9wihuValue64[index9fQ9wihuParam92]
      : (index9fQ9wihuValue64[index9fQ9wihuParam92] = [])
    ).push(index9fQ9wihuParam93);
  }
}
var index9fQ9wihuValue1,
  index9fQ9wihuValue2,
  index9fQ9wihuValue3,
  index9fQ9wihuValue4,
  index9fQ9wihuValue5,
  index9fQ9wihuValue6,
  index9fQ9wihuValue7;
rolldownRuntimeN(() => {
  RegisterBqqwIOLcA();
  index9fQ9wihuValue1 = {
    eof: null,
    space: 32,
    dollarSign: 36,
    leftParenthesis: 40,
    rightParenthesis: 41,
    leftSquareBracket: 91,
    backslash: 92,
    rightSquareBracket: 93,
  };
  index9fQ9wihuValue2 = {
    contentTypeString: "string",
    tabSize: 4,
  };
  index9fQ9wihuValue3 = {
    whitespace: "whitespace",
    lineEnding: "lineEnding",
    linePrefix: "linePrefix",
    characterEscape: "characterEscape",
    chunkString: "chunkString",
  };
  index9fQ9wihuValue4 = {
    tokenize: index9fQ9wihuHelper6,
    concrete: true,
  };
  index9fQ9wihuValue5 = {
    tokenize: index9fQ9wihuHelper7,
    partial: true,
  };
  index9fQ9wihuValue6 = {
    tokenize: index9fQ9wihuHelper11,
    concrete: true,
  };
  index9fQ9wihuValue7 = {
    tokenize: index9fQ9wihuHelper12,
    partial: true,
  };
})();
