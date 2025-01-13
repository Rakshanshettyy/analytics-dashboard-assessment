# Electric Vehicle Analytics Dashboard

[**Live Demo**](https://rakshan-ev-analytics.netlify.app/)

This is an interactive dashboard for analyzing the Electric Vehicle Population data, deployed on [Netlify](https://rakshan-ev-analytics.netlify.app/). The dashboard visualizes key metrics and trends related to electric vehicles, offering insights into various aspects like the distribution of makes, models, and city coverage, as well as vehicle range categories.

## Features

- **Dynamic Filtering**: Allows users to filter the dataset by model year and make of the vehicle.
- **Statistical Insights**: Displays key statistics such as total vehicles, unique makes, cities covered, and average vehicle range.
- **Distribution Visualizations**: Uses bar charts and pie charts to visualize the distribution of makes, range categories, top vehicle models, and top cities.
- **Data Aggregations**: Aggregates data to show the most common makes, models, and cities.
- **Interactive Charts**: Includes dynamic bar charts and pie charts created using the `recharts` library.

## Technologies Used

- **React.js**: Frontend library for building the dashboard.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide React Icons**: For using icons such as car, building, battery charging, and map pin.
- **Recharts**: For creating interactive charts.
- **CSV Data Parsing**: The Electric Vehicle Population data is loaded and parsed from a CSV file.
- **Netlify**: Deployment platform for hosting the application.

## Dataset

The Electric Vehicle Population dataset is used for this dashboard. You can find the dataset file `Electric_Vehicle_Population_Data.csv` in this repository. The dataset provides information such as:

- Vehicle Identification Number (VIN)
- Make and model of the vehicle
- Vehicle range and MSRP
- Utility information (if available)
- Data specific to cities, states, and counties

**Note:** The dataset in this repository has been reduced in size to keep the data size small and optimize the frontend bundle.

For more information about the dataset, visit the [Kaggle dataset](https://www.kaggle.com/datasets).

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ev-dashboard.git
   cd ev-dashboard
