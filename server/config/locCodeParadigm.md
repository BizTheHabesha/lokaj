# Location Code Paradigm
This file contains the location code paradigm for the server.
All location codes are 8 characters long and are in the format of:
```
[fips][location type][code name]
```
The FIPS code is the 5 digit FIPS code for the state and county following the [FIPS 6-4](https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code) standard. All of these codes can be found [here](https://transition.fcc.gov/oet/info/maps/census/fips/fips.txt).

The location type is a 1 character code that represents the type of location. The following is a list of the location types and their codes:
```
0 - Unknown / Unevaluated
1 - Hotel / Motel / Inn / Resort
2 - Hospital / Medical Facility
3 - School / University
4 - Office / Business
5 - Home / Apartment / Condo
6 - Government Building
7 - Restaurant / Bar / Club
8 - Retail Store / Mall
9 - Other
```

The final 2 characters are a unique code for the location. This code is unique to the location type and state. For example, if there are 2 hotels in the same county in the same state, they will have the same FIPS code, the same location type code, and different location codes. If there are 2 hotels in the same county in different states, they will have different FIPS codes, the same location type code, and different location codes. If there are 2 hotels in different counties in the same state, they will have the same FIPS code, the same location type code, and different location codes. If there are 2 hotels in different counties in different states, they will have different FIPS codes, the same location type code, and different location codes.

These unique codes are usually the first two letters of a location, or that locations initials. For example, the
Grand Hyatt in Denver, Colorado would have a code of 080311GH. The Hyatt Centric in Denver, Colorado would have a code of 080311HC. Appaloosa Bar & Grill in Denver, Colorado would have a code of 080317AP. The University of Colorado Boulder would have a code of 080133BC. As you can see, these codes are completly arbitrary and are up to the location, developer, or management to decide.

---

Some teams will be split between mulitple locations, so the front end is capable of using multiple location codes for a single team. For example, if a team is split between the Grand Hyatt and the Hyatt Centric, the team would have location codes 080311GH and 080311HC. The front end will then use both of these location codes to get the data for the team. For this reason, the location codes should be distinct enough to be able to be distinguished in an undeocrated list. 
<!-- TODO: #43 Add decoration options for multiple locations. -->