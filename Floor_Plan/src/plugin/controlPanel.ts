import { t, validateNonEmpty } from '@superset-ui/core';
import {
  ControlPanelConfig,
  sections,
  sharedControls,
} from '@superset-ui/chart-controls';

const config: ControlPanelConfig = {

   controlPanelSections: [
   sections.legacyRegularTime,
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'cols',
            config: {
              ...sharedControls.groupby,
              label: t('Latitide and Longitude'),
              description: t('Add your Latitude and Longitude Columns'),
            },
          },
        ],
        [
          {
            name: 'heatmap',
            config: {
              type: 'CheckboxControl',
              label: t('Heatmap'),
              renderTrigger: true,
              default: false,
              description: t('A checkbox to select heatmap '),
            },
          },
        ],
        [
          {
            name: 'contours',
            config: {
              type: 'CheckboxControl',
              label: t('UE contours'),
              renderTrigger: true,
              default: false,
              description: t('A checkbox to draw contours '),
            },
          },
        ],
        [
          {
            name: 'metrics',
            config: {
              ...sharedControls.metrics,
              // it's possible to add validators to controls if
              // certain selections/types need to be enforced
              validators: [validateNonEmpty],
            },
          },
        ],
        ['adhoc_filters'],
        [
          {
            name: 'row_limit',
            config: sharedControls.row_limit,
          },
        ],
      ],
    },
  ],
};

export default config;
