# MyCO2Flight React App

MyCO2Flight project calculates the amount of air emissions from an aircraft depending on the place of Departure to the
place of Destination

This project is a React-based web application designed to address environmental concerns associated with air travel,
specifically focusing on the carbon dioxide (CO₂) emissions of flights. Named "MyCO₂Flight," the app allows users to
calculate, track, and analyze the carbon footprint of their air travel. It aims to raise awareness of the environmental
impact of flights and encourages more sustainable travel decisions.

The application features several key components:

Home Page: Introduces the application's purpose with an engaging call to action, highlighting the issue of global
warming and the role of air travel in carbon emissions. It invites users to calculate the CO₂ emissions of their
flights.

Add Flight: Users can input details of their flights, including date, departure and destination airports, and cabin
class. The app calculates the CO₂ emissions for the specified flight using these inputs. This section provides users
with an intuitive form to submit their flight details, fetches the CO₂ emission estimate, and offers the option to add
the flight to their personal list of trips.

Flight List: Displays a list of added flights, allowing users to view and manage their recorded trips. Each flight item
includes detailed information such as flight date, departure and destination, distance, and calculated CO₂ emissions.
Users can sort flights by date and remove flights from the list.

My Flight Card: Offers a summary view of the user's flights over selected periods (total, last month, last year) with
calculated CO₂ emissions. It visualizes the data using a chart, providing a clear overview of the user's travel impact
over time.

The app leverages local storage to persist user data, ensuring that flight information and emission calculations are
retained across sessions. It also includes utility functions for interacting with local storage and fetching CO₂
emission estimates, demonstrating an effective use of React hooks, states, and effects to manage application state and
side effects.

Styling is applied through CSS, with separate stylesheets for each component, ensuring a cohesive and user-friendly
interface. The application structure is modular, with each component responsible for a specific feature, facilitating
maintainability and scalability.

"MyCO₂Flight" serves as a practical tool for travelers conscious of their environmental footprint, offering insights
into the impact of their travel choices and promoting more environmentally friendly behaviors.
