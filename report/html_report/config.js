report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\01581512609_test-card-default_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190805-205631\\01581512609_test-card-default_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "01581512609_test-card-default_0_data-qacard_0_tablet_h.png",
        "label": "test-card-default",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -2,
            "height": 4
          },
          "misMatchPercentage": "36.34",
          "analysisTime": 14
        },
        "diffImage": "..\\bitmaps_test\\20190805-205631\\failed_diff_01581512609_test-card-default_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\01581512609_test-card-hover_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190805-205631\\01581512609_test-card-hover_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "01581512609_test-card-hover_0_data-qacard_0_tablet_h.png",
        "label": "test-card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 2,
            "height": -4
          },
          "misMatchPercentage": "34.30",
          "analysisTime": 13
        },
        "diffImage": "..\\bitmaps_test\\20190805-205631\\failed_diff_01581512609_test-card-hover_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    }
  ]
});