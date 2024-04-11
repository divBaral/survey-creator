
// test("headerViewContainer init state", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer");

//   expect(headerViewContainer.value[0]).toStrictEqual({
//     "headerView": "basic",
//     "logoPosition": "left",
//     "inheritWidthFrom": "container",
//     "overlapEnabled": false,
//     "backgroundColorSwitch": "accentColor",
//     "backgroundImageFit": "cover",
//     "backgroundImageOpacity": 100,
//     "logoPositionX": "right",
//     "logoPositionY": "top",
//     "titlePositionX": "left",
//     "titlePositionY": "bottom",
//     "descriptionPositionX": "left",
//     "descriptionPositionY": "bottom",
//     "textAreaWidth": 512,
//     "height": 256,
//     "headerDescription": {
//       "family": "Open Sans",
//       "size": 16,
//       "weight": "600",
//     },
//     "headerTitle": {
//       "family": "Open Sans",
//       "size": 32,
//       "weight": "700",
//     },
//     "surveyDescription": {
//       "family": "Open Sans",
//       "size": 16,
//       "weight": "400",
//     },
//     "surveyTitle": {
//       "family": "Open Sans",
//       "size": 32,
//       "weight": "700",
//     },
//   });
// });

// test("set headerViewContainer basic", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   const surveyTitleQuestion = headerViewContainer.getElementByName("surveyTitle");
//   const surveyDescriptionQuestion = headerViewContainer.getElementByName("surveyDescription");
//   let currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-surveytitle-family"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-surveytitle-weight"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-surveytitle-size"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-surveydescription-family"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-surveydescription-weight"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-surveydescription-size"]).toBeUndefined();
//   expect(creator.survey.logoPosition).toEqual("left");

//   headerViewContainer.getElementByName("logoPosition").value = "right";
//   surveyTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
//   surveyTitleQuestion.contentPanel.getQuestionByName("size").value = 41;
//   surveyTitleQuestion.contentPanel.getQuestionByName("family").value = "Courier New";
//   surveyDescriptionQuestion.contentPanel.getQuestionByName("weight").value = "800";
//   surveyDescriptionQuestion.contentPanel.getQuestionByName("size").value = 21;
//   surveyDescriptionQuestion.contentPanel.getQuestionByName("family").value = "Trebuchet MS";

//   currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-surveytitle-family"]).toBe("Courier New");
//   expect(currentThemeCssVariables["--sjs-font-surveytitle-weight"]).toBe("400");
//   expect(currentThemeCssVariables["--sjs-font-surveytitle-size"]).toBe("41px");
//   expect(currentThemeCssVariables["--sjs-font-surveydescription-family"]).toBe("Trebuchet MS");
//   expect(currentThemeCssVariables["--sjs-font-surveydescription-weight"]).toBe("800");
//   expect(currentThemeCssVariables["--sjs-font-surveydescription-size"]).toBe("21px");
//   expect(creator.theme.header).toBeUndefined();
//   expect(creator.survey.logoPosition).toEqual("right");
// });

// test("set headerViewContainer advanced", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
//   const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

//   let currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBeUndefined();

//   headerViewContainer.getElementByName("logoPosition").value = "right";
//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   headerViewContainer.getElementByName("height").value = 300;
//   headerViewContainer.getElementByName("inheritWidthFrom").value = "container";
//   headerViewContainer.getElementByName("textAreaWidth").value = 600;
//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
//   headerViewContainer.getElementByName("backgroundColor").value = "#5094ed";
//   headerViewContainer.getElementByName("backgroundImage").value = "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg";
//   headerViewContainer.getElementByName("backgroundImageFit").value = "fill";
//   headerViewContainer.getElementByName("backgroundImageOpacity").value = 50;
//   headerViewContainer.getElementByName("overlapEnabled").value = true;
//   headerViewContainer.getElementByName("logoPositionX").value = "center";
//   headerViewContainer.getElementByName("logoPositionY").value = "middle";
//   headerViewContainer.getElementByName("titlePositionX").value = "center";
//   headerViewContainer.getElementByName("titlePositionY").value = "middle";
//   headerViewContainer.getElementByName("descriptionPositionX").value = "center";
//   headerViewContainer.getElementByName("descriptionPositionY").value = "middle";
//   headerTitleQuestion.contentPanel.getQuestionByName("color").value = "#FBFF24";
//   headerTitleQuestion.contentPanel.getQuestionByName("weight").value = "400";
//   headerTitleQuestion.contentPanel.getQuestionByName("size").value = 39;
//   headerTitleQuestion.contentPanel.getQuestionByName("family").value = "Georgia";
//   headerDescriptionQuestion.contentPanel.getQuestionByName("color").value = "rgba(50, 16, 218, 0.45)";
//   headerDescriptionQuestion.contentPanel.getQuestionByName("weight").value = "800";
//   headerDescriptionQuestion.contentPanel.getQuestionByName("size").value = 19;
//   headerDescriptionQuestion.contentPanel.getQuestionByName("family").value = "Verdana";

//   expect(creator.theme.header).toStrictEqual({
//     "height": 300,
//     "inheritWidthFrom": "container",
//     "textAreaWidth": 600,
//     "overlapEnabled": true,
//     "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
//     "backgroundImageOpacity": 0.5,
//     "backgroundImageFit": "fill",
//     "logoPositionX": "center",
//     "logoPositionY": "middle",
//     "titlePositionX": "center",
//     "titlePositionY": "middle",
//     "descriptionPositionX": "center",
//     "descriptionPositionY": "middle"
//   });

//   currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-headertitle-family"]).toBe("Georgia");
//   expect(currentThemeCssVariables["--sjs-font-headertitle-weight"]).toBe("400");
//   expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("rgba(251, 255, 36, 1)");
//   expect(currentThemeCssVariables["--sjs-font-headertitle-size"]).toBe("39px");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-family"]).toBe("Verdana");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-weight"]).toBe("800");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(50, 16, 218, 0.45)");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-size"]).toBe("19px");
//   expect(currentThemeCssVariables["--sjs-header-backcolor"]).toBe("#5094ed");
// });

// test("headerViewContainer survey title & description", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
//   const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

//   let currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBeUndefined();
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBeUndefined();

//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   headerTitleQuestion.contentPanel.getQuestionByName("color").value = "rgba(255, 255, 255, 1)";
//   headerDescriptionQuestion.contentPanel.getQuestionByName("color").value = "rgba(255, 255, 255, 1)";

//   currentThemeCssVariables = creator.theme.cssVariables || {};
//   expect(currentThemeCssVariables["--sjs-font-headertitle-color"]).toBe("rgba(255, 255, 255, 1)");
//   expect(currentThemeCssVariables["--sjs-font-headerdescription-color"]).toBe("rgba(255, 255, 255, 1)");
// });

// test("restore headerViewContainer values", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.theme = {
//     "cssVariables": {
//       "--sjs-corner-radius": "20px",
//       "--sjs-base-unit": "9.6px",
//       "--sjs-font-size": "17.6px",
//       "--sjs-header-backcolor": "#5094ed",
//       "--sjs-font-surveytitle-family": "Courier New",
//       "--sjs-font-surveytitle-weight": "400",
//       "--sjs-font-surveytitle-size": "41px",
//       "--sjs-font-surveydescription-family": "Trebuchet MS",
//       "--sjs-font-surveydescription-weight": "800",
//       "--sjs-font-surveydescription-size": "21px",
//       "--sjs-font-headertitle-family": "Georgia",
//       "--sjs-font-headertitle-weight": "800",
//       "--sjs-font-headertitle-color": "rgba(219, 15, 15, 0.91)",
//       "--sjs-font-headertitle-size": "39px",
//       "--sjs-font-headerdescription-family": "Verdana",
//       "--sjs-font-headerdescription-weight": "800",
//       "--sjs-font-headerdescription-color": "rgba(50, 16, 218, 0.45)",
//       "--sjs-font-headerdescription-size": "19px"
//     },
//     "header": {
//       "height": 300,
//       "inheritWidthFrom": "container",
//       "textAreaWidth": 600,
//       "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
//       "backgroundImageOpacity": 0.5,
//       "backgroundImageFit": "fill",
//       "overlapEnabled": true,
//       "logoPositionX": "center",
//       "logoPositionY": "middle",
//       "titlePositionX": "center",
//       "titlePositionY": "middle",
//       "descriptionPositionX": "center",
//       "descriptionPositionY": "middle"
//     }
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer");

//   expect(headerViewContainer.value[0]).toStrictEqual({
//     "headerView": "basic",
//     "logoPosition": "left",
//     "inheritWidthFrom": "container",
//     "backgroundColor": "#5094ed",
//     "backgroundColorSwitch": "custom",
//     "backgroundImage": "https://t4.ftcdn.net/jpg/02/83/13/61/360_F_283136113_b3VRHNiOPFMOluzYJPpfuoH8Czh9c743.jpg",
//     "backgroundImageFit": "fill",
//     "backgroundImageOpacity": 50,
//     "overlapEnabled": true,
//     "logoPositionX": "center",
//     "logoPositionY": "middle",
//     "titlePositionX": "center",
//     "titlePositionY": "middle",
//     "descriptionPositionX": "center",
//     "descriptionPositionY": "middle",
//     "textAreaWidth": 600,
//     "height": 300,
//     "headerDescription": {
//       "color": "rgba(50, 16, 218, 0.45)",
//       "family": "Verdana",
//       "size": 19,
//       "weight": "800",
//     },
//     "headerTitle": {
//       "color": "rgba(219, 15, 15, 0.91)",
//       "family": "Georgia",
//       "size": 39,
//       "weight": "800",
//     },
//     "surveyDescription": {
//       "family": "Trebuchet MS",
//       "size": 21,
//       "weight": "800",
//     },
//     "surveyTitle": {
//       "family": "Courier New",
//       "size": 41,
//       "weight": "400",
//     },
//   });
// });

// test("headerViewContainer get color values from theme", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.theme = {
//     "cssVariables": {
//       "--sjs-font-headertitle-color": "rgba(219, 15, 15, 0.91)",
//       "--sjs-font-headerdescription-color": "rgba(50, 16, 218, 0.45)",
//     },
//     "header": {
//       "backgroundImage": "",
//       "height": 256,
//       "inheritWidthFrom": "container",
//       "textAreaWidth": 512,
//       "overlapEnabled": false,
//       "backgroundImageOpacity": 1,
//       "backgroundImageFit": "cover",
//       "logoPositionX": "right",
//       "logoPositionY": "top",
//       "titlePositionX": "left",
//       "titlePositionY": "bottom",
//       "descriptionPositionX": "left",
//       "descriptionPositionY": "bottom"
//     }
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const headerViewContainer = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   const headerTitleQuestion = headerViewContainer.getElementByName("headerTitle");
//   const headerDescriptionQuestion = headerViewContainer.getElementByName("headerDescription");

//   expect(headerTitleQuestion.contentPanel.getQuestionByName("color").value).toEqual("rgba(219, 15, 15, 0.91)");
//   expect(headerDescriptionQuestion.contentPanel.getQuestionByName("color").value).toEqual("rgba(50, 16, 218, 0.45)");
// });

// test("headerViewContainer: restore backgroundColorSwitch", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   creator.activeTab = "theme";
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toEqual("accentColor");
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "none";
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

//   creator.activeTab = "designer";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

//   creator.activeTab = "theme";
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("none");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBeUndefined();

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();
//   headerViewContainer.getElementByName("backgroundColor").value = "#ff0000";

//   creator.activeTab = "designer";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

//   creator.activeTab = "theme";
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");
// });

// test("headerViewContainer: background color", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };

//   creator.activeTab = "theme";
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toBe("accentColor");
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "none";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("transparent");

//   headerViewContainer.getElementByName("backgroundColor").value = "#5094ed";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#5094ed");

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "accentColor";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBeUndefined();
// });

// test("header custom background color and theme changes", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");

//   creator.activeTab = "theme";
//   let themeBuilder = themePlugin.model as ThemeEditorModel;
//   let headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];
//   let themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   let primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");

//   expect(themeChooser.value).toEqual("default");
//   expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");

//   headerViewContainer.getElementByName("headerView").value = "advanced";
//   expect(headerViewContainer.getElementByName("backgroundColorSwitch").value).toEqual("accentColor");
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();

//   headerViewContainer.getElementByName("backgroundColorSwitch").value = "custom";
//   expect(headerViewContainer.getElementByName("backgroundColor").value).toBeUndefined();
//   headerViewContainer.getElementByName("backgroundColor").value = "#ff0000";

//   creator.activeTab = "designer";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

//   creator.activeTab = "theme";
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   expect(themeChooser.value).toEqual("default");
//   expect(primaryBackColor.value).toEqual("rgba(25, 179, 148, 1)");
//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");

//   themeBuilder.selectTheme("contrast");
//   expect(themeChooser.value).toEqual("contrast");
//   expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");

//   creator.activeTab = "designer";
//   expect(creator.theme.cssVariables["--sjs-header-backcolor"]).toBe("#ff0000");

//   creator.activeTab = "theme";
//   themeBuilder = themePlugin.model as ThemeEditorModel;
//   themeChooser = themeBuilder.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   primaryBackColor = themeBuilder.themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   headerViewContainer = themeBuilder.themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0];

//   expect(themeChooser.value).toEqual("contrast");
//   expect(primaryBackColor.value).toEqual("rgba(0, 0, 0, 1)");
//   expect(headerViewContainer.getQuestionByName("backgroundColorSwitch").value).toEqual("custom");
//   expect(headerViewContainer.getQuestionByName("backgroundColor").value).toBe("#ff0000");
// });